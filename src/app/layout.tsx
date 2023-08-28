import "./globals.css";
// import { usePathname } from "next/navigation";
// import NextAuthSessionProvider from "./providers/sessionProvider";
import getCurrentUser from "./actions/getCurrentUser";
import DashboardHeader from "@/components/header/DashboardHeader";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className="">
        <DashboardHeader currentUser={currentUser} />
        {children}
      </body>
    </html>
  );
}
