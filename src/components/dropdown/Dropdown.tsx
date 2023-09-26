import React, { useState } from 'react';

interface DropdownProps {
    options: string[];
    sessionNumber: string;
    setSessionNumber: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, sessionNumber, setSessionNumber }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSessionNumber(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center p-2 border border-gray-300 rounded-md cursor-pointer focus:outline-none"
        >
          <span className="mr-2">
            {sessionNumber ? sessionNumber : 'option'}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transform transition-transform duration-150 ease-in-out"
            viewBox="0 0 20 20"
            fill="currentColor"
            rotate={isOpen ? '0' : '-180'}
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 0 1 1.414 0L10 11.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute w-[60%] right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm text-center text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 w-full text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
