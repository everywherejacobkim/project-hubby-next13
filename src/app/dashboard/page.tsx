import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHeader from "@/components/header/DashboardHeader";
import DashboardNav from "@/components/nav/DashboardNav";

const DashboardPage = () => {
  return (
    <DashboardLayout
      HeaderComponent={<DashboardHeader />}
      LeftMenuComponent={<DashboardNav />}
      MainComponent={"Here is for main components"}
    />
  );
};

export default DashboardPage;
