import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { env } from "@/lib/env";

export const authOptions: NextAuthOptions = {
  providers: [
    // Credentials({
    //   name: "Credentials",
    //   credentials: {
    //     email: {
    //       label: "Email",
    //       type: "text",
    //       placeholder: "admin@example.com",
    //     },
    //     password: { label: "Password", type: "password" },
    //   },
    //   authorize(credentials, req) {
    //     if (
    //       credentials?.email === "admin@example.com" &&
    //       credentials.password === "admin"
    //     ) {
    //       return {
    //         id: "1",
    //         email: "admin@example.com",
    //       };
    //     }
    //     return null;
    //   },
    // }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
