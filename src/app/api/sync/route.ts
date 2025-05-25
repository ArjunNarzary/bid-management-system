import { auth } from "@/lib/auth"
import { fetchEmailsFromGmail } from "@/lib/google/gmail"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    await fetchEmailsFromGmail()
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error syncing emails:", error)
    return NextResponse.json(
      { error: "Failed to sync emails" },
      { status: 500 }
    )
  }
}
