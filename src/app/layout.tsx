"use client";
import "./globals.css";
import { usePathname } from "next/navigation";
import DashboardNav from "@/components/nav/DashboardNav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
         <body className="">{children}
        {pathname !== "/" && pathname !== "/dashboard" && <DashboardNav />}
        </body>
      
    </html>
  );
}
