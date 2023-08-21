"use client";
import { useSession } from "next-auth/react";
import AuthLayout from "@/components/layout/AuthLayout";
import Login from "@/components/auth/Login";
import AuthImage from "@/components/responsiveImages/AuthImage";

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <AuthLayout LeftComponent={<Login />} RightComponent={<AuthImage />} />
  );
}
