import ListingMail from "@/components/gmail/ListingMail";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardNav from "@/components/nav/DashboardNav";
<<<<<<< HEAD
import ListingInbox from "@/components/gmail/ListingInbox";
type Props = {};

const EmailPage = (props: Props) => {
  return (
    <DashboardLayout
      LeftMenuComponent={<DashboardNav />}
      MainComponent={<ListingInbox />}
=======
const EmailPage = () => {
  return (
    <DashboardLayout
      LeftMenuComponent={<DashboardNav />}
      MainComponent={"hello"}
>>>>>>> main
    />
  );
};

export default EmailPage;
