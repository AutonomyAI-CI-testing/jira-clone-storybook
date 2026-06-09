
import React from "react";
import { HiOutlineCog, HiOutlineChevronUp, HiOutlineInformationCircle } from "react-icons/hi";

const TestCard = () => {
  return (
    <div id="testElem" className="p-4 bg-[#2a2a2a] text-white space-y-4 rounded-lg shadow-lg">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">UI magician Agent</h2>
        <HiOutlineCog className="text-xl" />
      </div>

      {/* Helper Row */}
      <div className="flex items-center text-[#a3a3a2] text-sm">
        <HiOutlineChevronUp className="mr-1" />
        <p className="ml-2">From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div>
        <div className="flex items-center text-base font-semibold mb-2">
          <HiOutlineChevronUp className="mr-1 w-4 h-4" />
          <h3>Add New Design</h3>
        </div>
        {/* Personal Access Token Input */}
        <div className="mb-4">
          <label htmlFor="pat" className="block text-[#a3a3a2] text-sm font-medium mb-1">
            Personal Access Token
            <HiOutlineInformationCircle className="ml-1 inline-block" />
          </label>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full p-2 rounded bg-[#272822] border border-[#a3a3a2] text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Design URL Input */}
        <div className="mb-4">
          <label htmlFor="designUrl" className="block text-[#a3a3a2] text-sm font-medium mb-1">
            Design URL
            <HiOutlineInformationCircle className="ml-1 inline-block" />
          </label>
          <input
            type="text"
            id="designUrl"
            placeholder="https://www.figma.com/file/:"
            className="w-full p-2 rounded bg-[#272822] border border-[#a3a3a2] text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button className="flex-1 py-2 px-6 bg-[#b5521b] rounded-lg text-white font-medium">
            Awesome
          </button>
          <button className="flex-1 py-2 px-6 bg-[#b5521b] rounded-lg text-white font-medium">
            Prepare
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        <h3 className="text-base font-semibold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
