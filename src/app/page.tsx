"use client";
import AuthLayout from "@/components/layout/AuthLayout";
import Login from "@/components/auth/LoginForm";
import AuthImage from "@/components/responsiveImages/AuthImage";

export default function Home() {
  return (
    <AuthLayout LeftComponent={<Login />} RightComponent={<AuthImage />} />
  );
}
