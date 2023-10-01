import "./globals.css";
import NextAuthSessionProvider from "@/lib/providers/sessionProvider";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
        <Toaster />
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
