"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import DashboardNav from "@/components/nav/DashboardNav";
import NextAuthSessionProvider from "./providers/sessionProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      {pathname !== "/" &&
        pathname !== "/login" &&
        pathname !== "/dashboard" && <DashboardNav />}
      <body className="">
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
