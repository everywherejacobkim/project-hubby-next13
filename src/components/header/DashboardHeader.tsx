import { FiBell, FiUser } from "react-icons/fi";

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-white text-2xl font-bold">
            Good morning, Jacob!
          </h1>
          <p>Let&apos;s make today productive!</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Notification Bell Icon */}
          <button className="text-white">
            <FiBell size={24} />
          </button>

          {/* User Profile Button */}
          <button className="bg-white rounded-full p-2">
            <FiUser size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
