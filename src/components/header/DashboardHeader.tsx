import { FiBell, FiUser } from "react-icons/fi";

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-white py-4 font-poppins">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="my-4">
          <h1 className="text-black text-xl font-bold">Good morning, Jacob!</h1>
          <p className="text-sm mt-1">Let&apos;s make today productive!</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Notification Bell Icon */}
          <button className="text-black">
            <FiBell size={24} />
          </button>

          {/* User Profile Button */}
          <button className="bg-gray-200 rounded-full p-2">
            <FiUser size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
