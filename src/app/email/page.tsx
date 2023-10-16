import ListingMail from "@/components/gmail/ListingMail";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardNav from "@/components/nav/DashboardNav";
import ListingInbox from "@/components/gmail/ListingInbox";
type Props = {};

const EmailPage = (props: Props) => {
  return (
    <DashboardLayout
      LeftMenuComponent={<DashboardNav />}
      MainComponent={<ListingInbox />}
    />
  );
};

export default EmailPage;
