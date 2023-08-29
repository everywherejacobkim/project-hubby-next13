import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardNav from "@/components/nav/DashboardNav";

const CalendarPage = () => {
  return (
    <DashboardLayout
      LeftMenuComponent={<DashboardNav />}
      MainComponent={"Google Calendar"}
    />
  );
};

export default CalendarPage;
