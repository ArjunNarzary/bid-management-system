import { auth } from "@/lib/auth"
import EmailTable from "./_components/EmailTable"
import { logout } from "@/server/actions/authAction"

export default async function Home() {
  const session = await auth()
  if (!session?.user || !session?.user?.email) {
    logout()
    return
  }
  return (
    <div className="h-screen w-full">
      <div>
        <h1>Emails</h1>
      </div>
      <EmailTable email={session?.user.email} />
    </div>
  )
}
