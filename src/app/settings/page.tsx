import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardNav from "@/components/nav/DashboardNav";
import ProfileForm from "@/components/setting/ProfileForm";


type Props = {};

const SettingsPage = (props: Props) => {
  return (
    <DashboardLayout
    LeftMenuComponent={<DashboardNav />}
    MainComponent={<ProfileForm />}
  />
  );
};

export default SettingsPage;
