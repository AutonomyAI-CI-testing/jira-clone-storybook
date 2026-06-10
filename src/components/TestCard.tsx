
import React from "react";
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

const TestCard: React.FC = () => {
  // Common style for the primary action buttons to maintain consistency
  const buttonStyle = "flex-1 py-2 px-4 bg-[#843a17] text-[#8c8078] text-[11.5px] font-semibold rounded-md transition-colors hover:opacity-90";

  return (
    <div id="testElem" className="bg-[#2a2a2a] w-64 p-4 rounded-md font-sans text-white">
      {/* Header with Title and Settings */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-[#b5b5b5] text-[13.5px] font-semibold">UI magician Agent</h1>
        <FiSettings className="text-[#b5b5b5] w-[13.5px] h-[13.5px] cursor-pointer" />
      </div>

      {/* Breadcrumb or context indicator */}
      <div className="flex items-center text-[#8b9291] mb-4">
        <FiChevronUp className="w-4 h-4 mr-1" />
        <span className="text-[11.5px] truncate">From entire frame to a singl...</span>
      </div>

      <hr className="mb-4 border-t border-gray-700" />

      {/* Form Section Header */}
      <div className="flex items-center text-[#b2b2b1] mb-4">
        <FiChevronUp className="w-4 h-4 mr-1" />
        <span className="text-[13.5px] font-semibold">Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <label className="flex items-center text-[#a4a4a3] text-[11.5px] mb-2 cursor-help">
          Personal Access Token <FiInfo className="w-3 h-3 ml-1" />
        </label>
        <input
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded bg-[#272822] border border-[#a5adad] text-[11.5px] text-[#737470] focus:outline-none focus:border-white transition-colors"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <label className="flex items-center text-[#a3a3a2] text-[11.5px] mb-2 cursor-help">
          Design URL <FiInfo className="w-3 h-3 ml-1" />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file:/"
          className="w-full p-2 rounded bg-[#272822] border-2 border-[#929291] text-[11.5px] text-[#71726e] focus:outline-none focus:border-white transition-colors"
        />
      </div>

      {/* Primary Actions */}
      <div className="flex justify-between space-x-2 mb-6">
        <button className={buttonStyle}>
          Awesome
        </button>
        <button className={buttonStyle}>
          Prepare
        </button>
      </div>

      {/* Footer list indicator */}
      <div>
        <h2 className="text-[#b0b0b0] text-[13.5px] font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;
