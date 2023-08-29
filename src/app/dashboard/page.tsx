import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardNav from "@/components/nav/DashboardNav";
import DashboardGrid from "@/app/dashboard/DashboardGrid";

const DashboardPage = () => {
  return (
    <DashboardLayout
      LeftMenuComponent={<DashboardNav />}
      MainComponent={<DashboardGrid />}
    />
  );
};

export default DashboardPage;
