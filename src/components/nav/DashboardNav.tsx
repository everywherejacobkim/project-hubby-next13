import Image from "next/image";
import logo from "../../../public/assets/images/svg/logo-hubby.svg";
import Dashboard from "../../../public/assets/icons/dashboard.png";
import Calendar from "../../../public/assets/icons/calendar.png";
import Email from "../../../public/assets/icons/mail.png";
import Settings from "../../../public/assets/icons/settings.png";
import Darkmode from "../../../public/assets/icons/darkmode.png";
import Logout from "../../../public/assets/icons/logout.png";

const DashboardNav: React.FC = () => {
  return (
    <nav className="bg-gray-100 text-white h-full w-[235px] fixed top-0 left-0">
      <div className="flex flex-col h-full items-center text-black relative">
        <div className="mt-12">
          <Image src={logo} alt="hubby" />
        </div>
        <div className="flex flex-col mt-20">
          <button className="mb-6 flex items-center gap-2">
            <Image src={Dashboard} alt="dashboard-icon" />
            <p className="mt-1">Dashboard</p>
          </button>
          <button className="mb-6 flex items-center gap-2">
            <Image src={Calendar} alt="calendar-icon" />
            <p className="mt-1">Calendar</p>
          </button>
          <button className="mb-6 flex items-center gap-2">
            <Image src={Email} alt="email-icon" />
            <p className="mt-1">Email</p>
          </button>
          <button className="mb-6 flex items-center gap-2">
            <Image src={Settings} alt="settings-icon" />
            <p className="mt-1">Settings</p>
          </button>
        </div>
        <div className="flex flex-col mb-8 absolute bottom-0">
          <button className="mb-6 flex items-center gap-2">
            <Image src={Darkmode} alt="darkmode-icon" />
            <p className="mt-1">Dark mode</p>
          </button>
          <button className="mb-6 flex items-center gap-2">
            <Image src={Logout} alt="logout-icon" />
            <p className="mt-1">Logout</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
