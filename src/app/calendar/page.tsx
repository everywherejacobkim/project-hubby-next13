import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardNav from "@/components/nav/DashboardNav";
import Calendar from "@/components/calendar/Calendar"

const CalendarPage = () => {
  return (
    <DashboardLayout
      LeftMenuComponent={<DashboardNav />}
      MainComponent={<Calendar />}
    />
  );
};

export default CalendarPage;
