import NextAuth, { type NextAuthOptions } from "next-auth"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
// import Email from "next-auth/providers/email"

export const authOptions: NextAuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }


{ /* Email({
      server: process.env.EMAIL_SERVER!,
      from: process.env.EMAIL_FROM!,
    })*/}
