import { getEmails } from "@/server/db/email"

export default async function EmailTable({ email }: { email: string }) {
  const emails = await getEmails(email)
  return <div>My Table</div>
}
