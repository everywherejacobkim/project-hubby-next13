import React from "react";
import { AuthLayoutProps } from "@/types/auth";
import Image from "next/image";
import logo from "../../../public/assets/images/svg/logo-hubby.svg";

const DashboardLayout = ({
  LeftComponent,
  RightComponent,
}: AuthLayoutProps) => (
  <div className="w-screen h-screen flex">
    <div className="max-w-[456px] flex-1">
      <div className="mx-20 mt-20">
        <Image src={logo} alt="logo" />
        <h1 className="font-semibold text-xl my-8">Nice to see you again</h1>
      </div>
      <div>{LeftComponent}</div>
      <div className="flex justify-center gap-4 my-8">
        <p className="text-xs">Don&apos;t have an account?</p>
        <button className="text-blue-500 text-xs">Sign up now</button>
      </div>
    </div>
    <div className="max-w-full flex-1 hidden md:flex">{RightComponent}</div>
  </div>
);

export default DashboardLayout;
