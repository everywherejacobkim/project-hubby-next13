import AuthLayout from "@/components/layout/AuthLayout";
import Image from "next/image";
import Login from "@/components/auth/Login";
import AuthImage from "@/components/responsiveImages/AuthImage";

export default function Home() {
  return (
    <AuthLayout LeftComponent={<Login />} RightComponent={<AuthImage />} />
  );
}
