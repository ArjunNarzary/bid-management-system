// import { auth } from "@/lib/auth"
// import { fetchEmails } from "@/lib/google/gmail"
import { logout } from "@/server/actions/authAction"

export default async function Home() {
  // const session = await auth()
  // await fetchEmails()
  // console.log(session)
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <form action={logout}>
        <button>Logout</button>
      </form>
      Home Page
    </div>
  )
}
