"use server"

import { signIn, signOut } from "@/lib/auth"

export async function signInWithGoogle(formData: FormData) {
  const action = formData.get("action")
  await signIn(action as string, { redirectTo: "/" })
}

export async function logout() {
  await signOut({ redirectTo: "/login" })
}
