import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  export interface Session {
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

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    refreshToken?: string
    expiresAt?: number
    id?: string
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
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.expiresAt = account.expires_at
        if (profile?.sub) {
          token.id = profile.sub
        }
      }
      return token
    },
    session: async ({ session, token }) => {
      if (token) {
        session.accessToken = token.accessToken
        session.refreshToken = token.refreshToken
        session.expiresAt = token.expiresAt
        if (token.id) {
          session.user.id = token.id
        }
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
})
