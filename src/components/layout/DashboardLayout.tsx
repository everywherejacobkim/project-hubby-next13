import React from "react";
import { DashboardLayoutProps } from "@/types/dashboard";

const DashboardLayout = ({
  HeaderComponent,
  LeftMenuComponent,
  MainComponent,
}: DashboardLayoutProps) => (
  <div className="w-screen h-screen flex">
    <div className="max-w-[240px] flex-1 hidden md:flex">
      {LeftMenuComponent}
    </div>
    <div className="flex-1 flex flex-col">
      <div className="border-b border-neutral-border">{HeaderComponent}</div>
      <div className="bg-white flex-1">{MainComponent}</div>
    </div>
  </div>
);

export default DashboardLayout;
