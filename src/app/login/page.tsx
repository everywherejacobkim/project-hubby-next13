"use client";
import { useSession } from "next-auth/react";
import AuthLayout from "@/components/layout/AuthLayout";
import Login from "@/components/auth/Login";
import AuthImage from "@/components/responsiveImages/AuthImage";

const LoginPage = () => {
  const { status, data: session } = useSession();
  return (
    <AuthLayout
      LeftComponent={<Login status={status} />}
      RightComponent={<AuthImage />}
      status={status}
    />
  );
};

export default LoginPage;
