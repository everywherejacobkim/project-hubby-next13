import PageLayout from "@/components/layout/PageLayout";
import DashboardNav from "@/components/nav/DashboardNav";
import Calendar from "@/components/calendar/Calendar"

const CalendarPage = () => {
  return (
    <PageLayout
      LeftMenuComponent={<DashboardNav />}
      MainComponent={<Calendar />}
    />
  );
};

export default CalendarPage;
