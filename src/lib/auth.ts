import NextAuth, { DefaultSession } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

declare module "next-auth" {
  interface Session extends DefaultSession {
    accessToken?: string
    refreshToken?: string
    expiresAt?: number
    user: {
      id?: string
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
}

const scopes =
  "https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/drive.file"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: scopes,
          access_type: "offline",
          prompt: "consent",
          response_type: "code",
          include_granted_scopes: "true",
        },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, account, profile }) => {
      if (account) {
        token.accessToken = account.access_token as string
        token.refreshToken = account.refresh_token as string
        token.expiresAt = account.expires_at as number
        if (profile?.sub) {
          token.id = profile.sub
        }
      }
      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.accessToken = token.accessToken as string
        session.refreshToken = token.refreshToken as string
        session.expiresAt = token.expiresAt as number
        if (token.id) {
          session.user.id = token.id as string
        }
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
})
