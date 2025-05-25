import { prisma } from "@/lib/prisma"

export async function getEmails(email: string) {
  return prisma.email.findMany({
    where: {
      to: {
        has: email,
      },
    },
    orderBy: { receivedAt: "desc" },
    include: { attachments: true },
  })
}
