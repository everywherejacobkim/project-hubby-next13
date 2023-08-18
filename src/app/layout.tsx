"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import DashboardNav from "@/components/nav/DashboardNav";

export const metadata = {
  title: "Hubby",
  description:
    "Hubby is a web application designed to help desktop users in organizing their schedules, managing to-do lists, staying updated with daily news, checking emails, and utilizing an AI chatbot.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      {pathname !== "/" && pathname !== "/dashboard" && <DashboardNav />}
      <body className="">{children}</body>
    </html>
  );
}
