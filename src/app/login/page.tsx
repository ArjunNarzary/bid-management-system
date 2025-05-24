import { signInWithGoogle } from "@/server/actions/authAction"

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <form action={signInWithGoogle}>
        <button type="submit" name="action" value="google">
          Sign In with Google
        </button>
      </form>
    </div>
  )
}
