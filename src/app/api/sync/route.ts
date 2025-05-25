import { fetchEmailsFromGmail } from "@/lib/google/gmail"
import { NextResponse } from "next/server"

export async function GET() {
  try {
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
