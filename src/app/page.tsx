import AuthLayout from "@/components/layout/AuthLayout";
import Image from "next/image";
import bgAuth from "../../public/assets/images/png/bg-auth.png";
import Login from "@/components/auth/Login";

export default function Home() {
  return (
    <AuthLayout
      LeftComponent={<Login />}
      RightComponent={<Image src={bgAuth} alt="bg-auth" />}
    />
  );
}
