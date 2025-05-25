import { google } from "googleapis"
import { auth, signOut } from "../auth"
import { prisma } from "../prisma"
import { EmailAttachment, EmailContent, EmailMetadata } from "@/types/email"
import Stream from "node:stream"

export async function fetchEmails(): Promise<void> {
  const session = await auth()

  if (!session?.accessToken || !session?.user?.email) {
    signOut()
    return
  }

  const oauth2Client = new google.auth.OAuth2()
  oauth2Client.setCredentials({
    access_token: session.accessToken,
    refresh_token: session.refreshToken,
  })

  const gmail = google.gmail({ version: "v1", auth: oauth2Client })

  try {
    // Get the latest email from the database
    const lastEmail = await prisma.email.findFirst({
      where: {
        to: {
          has: session.user.email,
        },
      },
      orderBy: { receivedAt: "desc" },
    })

    const unixTimestamps = lastEmail?.receivedAt
      ? new Date(lastEmail.receivedAt).getTime()
      : undefined

    const response = await gmail.users.messages.list({
      userId: "me",
      maxResults: 20,
      q: unixTimestamps ? `after:${unixTimestamps}` : undefined,
    })

    const messages = response.data.messages || []

    // Insert into database

    for (const message of messages) {
      const email = await gmail.users.messages.get({
        userId: "me",
        id: message.id!,
        format: "full",
      })
      const metadata = extractMetadata(email.data)
      const content = extractContent(email.data)
      const attachments = await processAttachments(
        email.data,
        session.accessToken,
        session.refreshToken
      )
      await prisma.email.create({
        data: {
          threadId: email.data.threadId!,
          subject: metadata.subject,
          from: metadata.from,
          to: metadata.to,
          cc: metadata.cc,
          bcc: metadata.bcc,
          receivedAt: metadata.receivedAt,
          headers: metadata.headers,
          textContent: content.textContent,
          htmlContent: content.htmlContent,
          attachments: {
            create: attachments,
          },
        },
      })
    }
  } catch (err) {
    console.log("Error while importing emails", err)
  }
}

function extractMetadata(message: any): EmailMetadata {
  const headers = message.payload.headers
  const metadata: EmailMetadata = {
    id: message.id,
    threadId: message.threadId,
    subject: "",
    from: "",
    to: [],
    cc: [],
    bcc: [],
    receivedAt: new Date(parseInt(message.internalDate)),
    headers: {},
  }

  for (const header of headers) {
    metadata.headers[header.name] = header.value

    switch (header.name.toLowerCase()) {
      case "subject":
        metadata.subject = header.value
        break
      case "from":
        metadata.from = header.value
        break
      case "delivered-to":
        metadata.to = header.value
          .split(",")
          .map((email: string) => email.trim())
        break
      case "cc":
        metadata.cc = header.value
          .split(",")
          .map((email: string) => email.trim())
        break
      case "bcc":
        metadata.bcc = header.value
          .split(",")
          .map((email: string) => email.trim())
        break
    }
  }

  return metadata
}

function extractContent(message: any): EmailContent {
  const content: EmailContent = {}

  function processPart(part: any) {
    if (part.mimeType === "text/plain") {
      content.textContent = Buffer.from(part.body.data, "base64").toString()
    } else if (part.mimeType === "text/html") {
      content.htmlContent = Buffer.from(part.body.data, "base64").toString()
    }

    if (part.parts) {
      part.parts.forEach(processPart)
    }
  }

  processPart(message.payload)
  return content
}

async function processAttachments(
  message: any,
  token: string,
  refreshToken?: string
): Promise<EmailAttachment[]> {
  const attachments: EmailAttachment[] = []
  const oauth2Client = new google.auth.OAuth2()
  oauth2Client.setCredentials({
    access_token: token,
    refresh_token: refreshToken,
  })

  const drive = google.drive({ version: "v3", auth: oauth2Client })
  const gmail = google.gmail({ version: "v1", auth: oauth2Client })

  async function processPart(part: any) {
    if (part.filename && part.filename.length > 0) {
      const attachment: EmailAttachment = {
        id: part.body.attachmentId!,
        filename: part.filename,
        mimeType: part.mimeType,
        size: parseInt(part.body.size),
        driveFileId: "",
        driveFileUrl: "",
      }

      // Fetch attachment data
      const attachmentData = await gmail.users.messages.attachments.get({
        userId: "me",
        messageId: message.id,
        id: part.body.attachmentId,
      })

      if (attachmentData.data.data) {
        // Upload to Google Drive
        const fileMetadata = {
          name: part.filename,
          parents: [process.env.GOOGLE_DRIVE_FOLDER_ID!],
        }

        const media = {
          mimeType: part.mimeType,
          body: new Stream.PassThrough().end(
            Buffer.from(attachmentData.data.data, "base64")
          ),
        }

        try {
          const response = await drive.files.create({
            requestBody: fileMetadata,
            media: media,
            fields: "id, webViewLink",
          })

          if (response.data.id && response.data.webViewLink) {
            attachment.driveFileId = response.data.id
            attachment.driveFileUrl = response.data.webViewLink
            attachments.push(attachment)
          }
        } catch (error) {
          console.error("Error uploading to Drive:", error)
        }
      }
    }

    if (part.parts) {
      await Promise.all(part.parts.map(processPart))
    }
  }

  await processPart(message.payload)
  return attachments
}
