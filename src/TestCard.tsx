
import React from 'react';

const ChevronIcon: React.FC<{ className?: string }> = ({ className }) => (
  <span className={`mr-3 scale-125 ${className || ''}`}>
    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 7L6 2L11 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const InfoIcon: React.FC = () => (
  <span className="ml-2 text-md" aria-hidden="true">
    ⓘ
  </span>
);

interface InputFieldProps {
  label: string;
  id: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, id, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={id} className="flex items-center text-sm mb-2 text-[#AAAAAA]">
      {label}
      <InfoIcon />
    </label>
    <input
      type="text"
      id={id}
      readOnly
      placeholder={placeholder}
      className="w-full p-2 rounded-md bg-[#2D2D2D] border border-[#444444] text-[#888888] text-sm
      focus:outline-none focus:border-[#666666]"
    />
  </div>
);

const TestCard: React.FC = () => {
  return (
    <div className="bg-[#1E1E1E] text-white p-6 rounded-lg shadow-lg w-[320px] font-sans">
      {/* Top Title Row */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-[#EEEEEE]">UI magician Agent</h2>
        {/* Settings/Gear icon */}
        <span className="text-[#EEEEEE] text-2xl" aria-label="Settings">
          ⚙
        </span>
      </div>

      {/* Collapsed Helper Row */}
      <div className="flex items-center text-md mb-8 text-[#AAAAAA]">
        <ChevronIcon />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-6 pt-6">
        <ChevronIcon className="text-[#EEEEEE]" />
        <h3 className="text-md font-medium text-[#EEEEEE]">Add New Design</h3>
      </div>

      {/* Input Fields */}
      <InputField
        label="Personal Access Token"
        id="accessToken"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
      <div className="mb-2" /> {/* Spacing adjustment between inputs */}
      <InputField
        label="Design URL"
        id="designURL"
        placeholder="https://www.figma.com/file/"
      />

      {/* Action Buttons */}
      <div className="flex justify-between space-x-4 mb-6 mt-6">
        <button
          type="button"
          className="flex-1 py-2 px-4 rounded-md bg-[#7F3D2A] text-white font-medium text-sm
        hover:bg-[#9B4F37] focus:outline-none focus:ring-2 focus:ring-[#7F3D2A] focus:ring-opacity-50"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 py-2 px-4 rounded-md bg-[#7F3D2A] text-white font-medium text-sm
        hover:bg-[#9B4F37] focus:outline-none focus:ring-2 focus:ring-[#7F3D2A] focus:ring-opacity-50"
        >
          Prepare
        </button>
      </div>

      {/* Footer Heading */}
      <div className="pt-4 border-t border-[#333333]">
        <h3 className="text-md font-medium text-[#EEEEEE]">Recent Breakdowns</h3>
      </div>
    </div>
  );
};


export default TestCard;
