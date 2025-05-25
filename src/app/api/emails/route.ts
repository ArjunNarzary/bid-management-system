import { NextResponse } from "next/server"
import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import type { Prisma } from "@/generated/prisma/client"

export async function GET(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get("page") || "1")
    const limit = parseInt(searchParams.get("limit") || "10")
    const search = searchParams.get("search") || ""

    const skip = (page - 1) * limit

    // Build the where clause for search
    const where: Prisma.EmailWhereInput = search
      ? {
          OR: [
            { subject: { contains: search, mode: "insensitive" } },
            { from: { contains: search, mode: "insensitive" } },
            { to: { has: search } },
            { textContent: { contains: search, mode: "insensitive" } },
          ],
        }
      : {}

    // Get total count for pagination
    const total = await prisma.email.count({ where })

    // Get paginated emails
    const emails = await prisma.email.findMany({
      where,
      skip,
      take: limit,
      orderBy: { receivedAt: "desc" },
    })

    return NextResponse.json({
      emails,
      total,
      page,
      limit,
    })
  } catch (error) {
    console.error("Error fetching emails:", error)
    return new NextResponse("Internal Server Error", { status: 500 })
  }
}
