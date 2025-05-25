export interface EmailMetadata {
  id: string
  threadId: string
  subject: string
  from: string
  to: string[]
  cc: string[]
  bcc: string[]
  receivedAt: Date
  headers: Record<string, string>
}

export interface EmailResponse {
  id: string
  threadId: string
  subject: string
  from: string
  to: string[]
  cc: string[]
  bcc: string[]
  receivedAt: string
  headers: Record<string, string>
  textContent?: string
  htmlContent?: string
  attachments: Attachment[]
  createdAt: Date
  updatedAt: Date
}

export interface Attachment {
  id: string
  emailId: string
  filename: string
  mimeType: string
  size: number
  driveFileId: string
  driveFileUrl: string
  createdAt: Date
  updatedAt: Date
}

export interface EmailContent {
  textContent?: string
  htmlContent?: string
}

export interface EmailAttachment {
  id: string
  filename: string
  mimeType: string
  size: number
  driveFileId: string
  driveFileUrl: string
}

export interface Email {
  id: string
  metadata: EmailMetadata
  content: EmailContent
  attachments: EmailAttachment[]
  createdAt: Date
  updatedAt: Date
}

export interface OAuthToken {
  accessToken: string
  refreshToken: string
  expiryDate: Date
  scope: string
}

export type TransformedEmail = Omit<EmailResponse, "receivedAt"> & {
  receivedAt: Date
}
