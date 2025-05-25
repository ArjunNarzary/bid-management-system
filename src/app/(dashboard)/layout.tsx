import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { auth } from "@/lib/auth"
import { logout } from "@/server/actions/authAction"
import { LogOut } from "lucide-react"
import { Session } from "next-auth"
import { redirect } from "next/navigation"

export default async function dashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if (!session?.accessToken) {
    redirect("/login")
  }
  return (
    <main>
      <header className="flex justify-between items-center p-4">
        <h1 className="text-3xl font-semibold">Bid Management System</h1>
        <RenderDropDown session={session} />
      </header>
      {children}
    </main>
  )
}

function RenderDropDown({ session }: { session: Session }) {
  function getFirstCharacter() {
    const fullName = session.user.name
    const splittedName = fullName?.split(" ").slice(0, 2)
    return splittedName?.map((name) => name.charAt(0).toUpperCase()).join("")
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={session?.user?.image || ""} />
          <AvatarFallback>{getFirstCharacter()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-6">
        <DropdownMenuLabel asChild>
          <div>
            <h3 className="font-semibold">{session.user.name}</h3>
            <p className="text-xs">{session.user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <form action={logout}>
            <button className="flex items-center gap-2">
              <LogOut />
              <span>Log out</span>
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
