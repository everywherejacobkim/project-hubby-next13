import React from "react";
import { DashboardLayoutProps } from "@/types/dashboard";

const PageLayout = async ({
  LeftMenuComponent,
  MainComponent,
}: DashboardLayoutProps) => {

  return (
    <div className="w-screen h-screen flex">
      <div className="max-w-[240px] flex-1 hidden md:flex">
        {LeftMenuComponent}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="dark:bg-neutral-dark bg-primary flex-1">
          {MainComponent}
        </div>
      </div>
    </div>
  );
};

export default PageLayout;
