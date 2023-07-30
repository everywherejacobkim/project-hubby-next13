import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHeader from "@/components/header/DashboardHeader";

const DashboardPage = () => {
  return (
    <DashboardLayout
      HeaderComponent={<DashboardHeader />}
      LeftMenuComponent={"<SideNavigation {...{ navigation }} />"}
      MainComponent={""}
    />
  );
};

export default DashboardPage;
