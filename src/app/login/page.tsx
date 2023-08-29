"use client";
import AuthLayout from "@/components/layout/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";
import AuthImage from "@/components/responsiveImages/AuthImage";

const LoginPage = () => {
  return (
    <AuthLayout
      LeftComponent={<LoginForm />}
      RightComponent={<AuthImage />}
    />
  );
};

export default LoginPage;
