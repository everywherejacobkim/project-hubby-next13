"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/images/svg/logo-hubby.svg";
import Dashboard from "../../../public/assets/icons/dashboard.png";
import Calendar from "../../../public/assets/icons/calendar.png";
import Email from "../../../public/assets/icons/mail.png";
import Settings from "../../../public/assets/icons/settings.png";
import Darkmode from "../../../public/assets/icons/darkmode.png";
import Logout from "../../../public/assets/icons/logout.png";
import { signOut } from "next-auth/react";

const DashboardNav: React.FC = () => {
  const signOutBtnHandler = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/login",
    });
    console.log("sign out");
  };

  return (
    <nav className="bg-white text-white h-full w-[235px] fixed top-0 left-0">
      <div className="flex flex-col h-full items-center text-black relative">
        <Link href="/">
          <div className="mt-12">
            <Image src={logo} alt="hubby" />
          </div>
        </Link>
        <div className="flex flex-col mt-20">
          <Link href="/dashboard">
            <button className="mb-6 flex items-center gap-3">
              <Image src={Dashboard} alt="dashboard-icon" />
              <p className="mt-1">Dashboard</p>
            </button>
          </Link>
          <Link href="/calendar">
            <button className="mb-6 flex items-center gap-3">
              <Image src={Calendar} alt="calendar-icon" />
              <p className="mt-1">Calendar</p>
            </button>
          </Link>
          <Link href="/email">
            <button className="mb-6 flex items-center gap-3">
              <Image src={Email} alt="email-icon" />
              <p className="mt-1">Email</p>
            </button>
          </Link>
          <Link href="/settings">
            <button className="mb-6 flex items-center gap-3">
              <Image src={Settings} alt="settings-icon" />
              <p className="mt-1">Settings</p>
            </button>
          </Link>
        </div>
        <div className="flex flex-col mb-8 absolute bottom-0">
          <button className="mb-6 flex items-center gap-3">
            <Image src={Darkmode} alt="darkmode-icon" />
            <p className="mt-1">Dark mode</p>
          </button>
          <button
            onClick={signOutBtnHandler}
            className="mb-6 flex items-center gap-3"
          >
            <Image src={Logout} alt="logout-icon" />
            <p className="mt-1">Logout</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
