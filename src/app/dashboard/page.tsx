import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardNav from "@/components/nav/DashboardNav";
import DashboardGrid from "@/app/dashboard/DashboardGrid";
import { loginIsRequiredServer } from "@/lib/protectAuth";

const DashboardPage = async () => {
  await loginIsRequiredServer();
  return (
    <DashboardLayout
      LeftMenuComponent={<DashboardNav />}
      MainComponent={<DashboardGrid />}
    />
  );
};

export default DashboardPage;
