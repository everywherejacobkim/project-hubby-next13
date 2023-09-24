"use client";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import logo from "../../../public/assets/images/svg/logo-hubby.svg";
import Dashboard from "../../../public/assets/icons/dashboard.png";
import Calendar from "../../../public/assets/icons/calendar.png";
import Email from "../../../public/assets/icons/mail.png";
import Settings from "../../../public/assets/icons/settings.png";
import Darkmode from "../../../public/assets/icons/darkmode.png";
import Logout from "../../../public/assets/icons/logout.png";
import userPlaceholder from "../../../public/assets/images/svg/user-placeholder.svg";

const DashboardNav: React.FC = () => {
  const { data: session } = useSession();
  const signOutBtnHandler = async () => {
    await signOut({
      redirect: true,
      callbackUrl: "/login",
    });
    console.log("sign out");
  };

  return (
    <nav className="bg-white h-full w-[235px] fixed top-0 left-0">
      <div className="flex flex-col h-full items-center text-black relative">
        <Link href="/">
          <div className="mt-9 mb-10">
            <Image src={logo} alt="hubby" />
          </div>
        </Link>
        <div className="flex flex-col items-center">
          {session?.user?.image ?
          <Image src={session?.user?.image} alt="profile_image" width={60} height={60} className="rounded-full -mb-4"/>
          : <Image src={userPlaceholder} className="-mb-4" alt="profile_placeholder" />
          }
          <p className="text-lg font-bold mt-6">{session?.user?.name}</p>
        </div>
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
