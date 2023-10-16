import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardNav from "@/components/nav/DashboardNav";
import MailList from "@/components/email/MailList";

const EmailPage = () => {
  return (
    <DashboardLayout
      LeftMenuComponent={<DashboardNav />}
      MainComponent={<MailList />}
    />
  );
};

export default EmailPage;
