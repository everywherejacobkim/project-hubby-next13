import React from "react";
import { DashboardLayoutProps } from "@/types/dashboard";
import DashboardHeader from "@/components/header/DashboardHeader";
import getCurrentUser from "@/app/actions/getCurrentUser";

const DashboardLayout = async ({
  LeftMenuComponent,
  MainComponent,
}: DashboardLayoutProps) => {
  const currentUser = await getCurrentUser();
  return (
    <div className="w-screen h-screen flex">
      <div className="max-w-[240px] flex-1 hidden md:flex">
        {LeftMenuComponent}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="bg-white flex-1">
          <DashboardHeader currentUser={currentUser} />
          {MainComponent}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
