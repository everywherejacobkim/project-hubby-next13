import { FiBell, FiUser } from "react-icons/fi";
import CurrentWeather from "../location/CurrentWeather";
import CurrentDate from "../date/Date";

const DashboardHeader = ({ currentUser }: { currentUser: any }) => {
  return (
    <header className="py-4 font-poppins">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="my-4">
          <h1 className="text-black text-xl font-bold">
            Good morning, {currentUser ? currentUser.name : "..."}
          </h1>
          <p className="text-sm mt-1">Let&apos;s make today productive!</p>
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
