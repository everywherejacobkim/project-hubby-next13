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
    <nav className="bg-white dark:bg-neutral-dark h-full w-[235px] fixed top-0 left-0">
      <div className="flex flex-col h-full items-center text-black relative dark:text-white ">
        <Link href="/">
          <div className="mt-9">
            <Image src={logo} alt="hubby" />
          </div>
        </Link>
        <div className="flex flex-col mt-10">
          <Link href="/dashboard">
            <button className="w-full mb-3 flex items-center gap-3 rounded-full py-3 px-8 hover:bg-primary-action focus:bg-primary-action focus:text-white hover:text-white">
              <Image
                src={Dashboard}
                alt="dashboard-icon"
                className="text-red-500"
              />
              <p className="mt-1">Dashboard</p>
            </button>
          </Link>
          <Link href="/calendar">
            <button className="w-full mb-3 flex items-center gap-3 rounded-full py-3 px-8 hover:bg-primary-action focus:bg-primary-action focus:text-white hover:text-white">
              <Image src={Calendar} alt="calendar-icon" className="" />
              <p className="mt-1">Calendar</p>
            </button>
          </Link>
          <Link href="/email">
            <button className="w-full mb-3 flex items-center gap-3 rounded-full py-3 px-8 hover:bg-primary-action focus:bg-primary-action focus:text-white hover:text-white">
              <Image src={Email} alt="email-icon" className="" />
              <p className="mt-1">Email</p>
            </button>
          </Link>
          <Link href="/settings">
            <button className="w-full mb-3 flex items-center gap-3 rounded-full py-3 px-8 hover:bg-primary-action focus:bg-primary-action focus:text-white hover:text-white">
              <Image src={Settings} alt="settings-icon" className="" />
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
