import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHeader from "@/components/header/DashboardHeader";
import DashboardNav from "@/components/nav/DashboardNav";
import DashboardGrid from "@/components/grid/DashboardGrid";

const DashboardPage = () => {
  return (
    <DashboardLayout
      HeaderComponent={<DashboardHeader />}
      LeftMenuComponent={<DashboardNav />}
      MainComponent={<DashboardGrid />}
    />
  );
};

export default DashboardPage;
