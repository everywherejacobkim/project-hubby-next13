import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardNav from "@/components/nav/DashboardNav";
import GmailApiQuickStart from "@/components/gmail/GmailApiQuickStart";
import React from "react";

type Props = {};

const EmailPage = (props: Props) => {
  return (
    <DashboardLayout
      LeftMenuComponent={<DashboardNav />}
      MainComponent={<GmailApiQuickStart />}
    />
  );
};

export default EmailPage;
