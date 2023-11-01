"use client";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import CurrentWeather from "../location/CurrentWeather";
import CurrentDate from "../date/Date";
import add from "../../../public/assets/icons/add.png"
import Image from "next/image";


const DashboardHeader = () => {
  const pathname = usePathname();
  const isDashboardRoute = pathname === "/dashboard";

  const { data: session, status } = useSession();

  const getGreeting = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
      return "Good morning";
    } else if (currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  const greeting = getGreeting();

  let pageTitle = null;

  if (pathname === "/dashboard") {
    pageTitle = (
      <h1 className="text-black text-xl font-bold dark:text-white">
        {greeting}, {session ? session.user?.name : "..."}

      </h1>
    );
  } else if (pathname === "/calendar") {
    pageTitle = (
      <h1 className="text-black text-3xl font-medium ml-4">Calendar</h1>
    );
  } else if (pathname === "/email") {
    pageTitle = <h1 className="text-black text-3xl font-medium ml-4 dark:text-white">Inbox</h1>;
  } else if (pathname === "/settings") {
    pageTitle = (
      <h1 className="text-black text-3xl font-medium ml-4">Settings</h1>
    );
  }

  return (
    <header className="font-poppins">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="mt-8 mb-4">
          {pageTitle && (
            <>
              {pageTitle}
              {isDashboardRoute && (
                <p className="text-sm mt-1">
                  {!session
                    ? "Loading..."
                    : status !== "authenticated"
                    ? "User is not authenticated"
                    : "Let's make today productive!"}
                </p>
              )}
            </>
          )}
        </div>
        {pathname === "/email" ?
          <div>
           <button className="bg-primary-action rounded-lg px-4 py-2.5 text-white flex items-center justify-center">
            <Image 
              src={add}
              alt="icon"
              width={24}
              height={20}
              className="mx-1.5"
            />
           New message
           </button>
           
           </div>
           
           : (
             <div className="flex items-center space-x-4 shadow rounded-3xl py-2.5 px-7 bg-white dark:bg-neutral-box">
              <div>
                <CurrentDate />
              </div>
              <div>
                <CurrentWeather />
              </div>
            </div>
          )
        }

           
            </div>
        
        
        
    </header>
  );
};

export default DashboardHeader;
