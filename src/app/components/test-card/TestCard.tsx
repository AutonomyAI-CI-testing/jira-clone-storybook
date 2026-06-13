import React from "react";
import {
  HiCog,
  HiChevronUp,
  HiInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="bg-[#1e1e1e] p-6 rounded-lg max-w-sm mx-auto shadow-lg">
        {/* 1. Header row */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-white font-bold text-lg">UI magician Agent</h1>
          <HiCog className="text-white text-xl" />
        </div>

        {/* 2. Subtitle row */}
        <div className="flex items-center gap-2 mb-6">
          <HiChevronUp className="text-[#c97b3a] text-lg" />
          <span className="text-[#c97b3a] text-sm">
            From entire frame to a singl...
          </span>
        </div>

        {/* 3. Add New Design section */}
        <div className="flex items-center gap-2 mb-4">
          <HiChevronUp className="text-white text-lg" />
          <h2 className="font-bold text-white text-md">Add New Design</h2>
        </div>

        {/* 4. Personal Access Token input */}
        <div className="mb-4">
          <label htmlFor="pat" className="block text-white text-sm font-medium mb-2">
            Personal Access Token
            <HiInformationCircle className="inline-block ml-1 text-white text-lg" />
          </label>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="bg-[#2a2a2a] border border-[#444444] rounded-md text-[#888] placeholder-[#555] px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#c97b3a]"
          />
        </div>

        {/* 5. Design URL input */}
        <div className="mb-6">
          <label htmlFor="designUrl" className="block text-white text-sm font-medium mb-2">
            Design URL
            <HiInformationCircle className="inline-block ml-1 text-white text-lg" />
          </label>
          <input
            type="text"
            id="designUrl"
            placeholder="https://www.figma.com/file/:"
            className="bg-[#2a2a2a] border border-[#444444] rounded-md text-[#888] placeholder-[#555] px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-[#c97b3a]"
          />
        </div>

        {/* 6. Action buttons */}
        <div className="flex gap-4 mb-8">
          <button className="bg-[#b5541a] text-white rounded-lg px-6 py-3 flex-1 hover:bg-[#9e4715] transition-colors duration-200">
            Awesome
          </button>
          <button className="bg-[#b5541a] text-white rounded-lg px-6 py-3 flex-1 hover:bg-[#9e4715] transition-colors duration-200">
            Prepare
          </button>
        </div>

        {/* 7. Footer */}
        <div>
          <h2 className="font-bold text-white text-md">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
};