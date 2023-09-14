"use client";
import { usePathname } from "next/navigation";
import CurrentWeather from "../location/CurrentWeather";
import CurrentDate from "../date/Date";

const DashboardHeader = ({ currentUser }: { currentUser: any }) => {
  const pathname = usePathname();
  const isDashboardRoute = pathname === "/dashboard";

  let pageTitle = null;
  if (pathname === "/dashboard") {
    pageTitle = (
      <h1 className="text-black text-xl font-bold">
        Good morning, {currentUser ? currentUser.name : "..."}
      </h1>
    );
  } else if (pathname === "/calendar") {
    pageTitle = (
      <h1 className="text-black text-3xl font-medium ml-4">Calendar</h1>
    );
  } else if (pathname === "/email") {
    pageTitle = <h1 className="text-black text-3xl font-medium ml-4">Email</h1>;
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
                  Let&apos;s make today productive!
                </p>
              )}
            </>
          )}
        </div>
        <div className="flex items-center space-x-4 shadow rounded-3xl py-2.5 px-7 bg-white">
          <div>
            <CurrentDate />
          </div>
          <div>
            <CurrentWeather />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
