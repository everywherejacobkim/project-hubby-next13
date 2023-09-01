import NextAuth from "next-auth";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";
import { env } from "@/lib/env";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "admin@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials");
        }
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );
        if (!passwordMatch) {
          throw new Error("Invalid credentials");
        }
        return user;
      },
    }),
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID as string,
      clientSecret: env.GOOGLE_CLIENT_SECRET as string,

      async profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },

      async authorize({ profile }: { profile: any }) {
        const user = await prisma.user?.findUnique({
          where: { email: profile.email },
        });

        if (!user) {
          await prisma.user.create({
            data: {
              email: profile.email,
              name: profile.name,
              image: profile.picture,
            },
          });
        }
        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
