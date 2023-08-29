import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardNav from "@/components/nav/DashboardNav";
// import GmailApiQuickStart from "@/components/gmail/GmailApiQuickStart";

type Props = {};

const EmailPage = (props: Props) => {
  return (
    <DashboardLayout
      LeftMenuComponent={<DashboardNav />}
      MainComponent="Email Page"
    />
  );
};

export default EmailPage;
