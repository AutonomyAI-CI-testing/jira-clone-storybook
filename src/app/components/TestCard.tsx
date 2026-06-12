import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard is a self-contained smoke test component that replicates a dark-themed Figma plugin panel.
 * It uses Tailwind arbitrary values to match specific brand colors (#2a2a2a background, #c1622f buttons).
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem">
      <div className="bg-[#2a2a2a] max-w-[320px] rounded-lg p-5">
        {/* Header Row: Title and Settings */}
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-lg text-[#ffffff]">
            UI magician Agent
          </h1>
          <IoSettingsOutline className="text-[#9ca3af]" size={22} />
        </div>

        {/* Navigation/Breadcrumb subtitle row */}
        <div className="flex items-center gap-1 mt-2">
          <HiChevronUp className="text-[#9ca3af]" size={14} />
          <p className="text-sm text-[#8a8a8a]">
            From entire frame to a singl...
          </p>
        </div>

        {/* Section Header: Form instructions */}
        <div className="mt-6 flex items-center gap-1">
          <HiChevronUp className="text-[#ffffff]" size={16} />
          <h2 className="font-bold text-base text-[#ffffff]">
            Add New Design
          </h2>
        </div>

        {/* Form Area: Configuration inputs */}
        <div className="mt-4 flex flex-col gap-4">
          {/* Personal Access Token Field */}
          <div>
            <div className="flex items-center gap-1 mb-1">
              <label className="text-sm text-[#d4d4d4]">
                Personal Access Token
              </label>
              <AiOutlineInfoCircle className="text-[#d4d4d4]" size={14} />
            </div>
            <input
              type="text"
              readOnly
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full bg-[#1c1c1c] border border-[#3a3a3a] text-[#9ca3af] rounded px-3 py-2 text-sm box-border outline-none focus:border-[#c1622f] transition-colors"
            />
          </div>

          {/* Design URL Field */}
          <div>
            <div className="flex items-center gap-1 mb-1">
              <label className="text-sm text-[#d4d4d4]">
                Design URL
              </label>
              <AiOutlineInfoCircle className="text-[#d4d4d4]" size={14} />
            </div>
            <input
              type="text"
              readOnly
              placeholder="https://www.figma.com/file/:"
              className="w-full bg-[#1c1c1c] border border-[#3a3a3a] text-[#9ca3af] rounded px-3 py-2 text-sm box-border outline-none focus:border-[#c1622f] transition-colors"
            />
          </div>
        </div>

        {/* Action Button Row */}
        <div className="mt-4 flex gap-3">
          <button
            className="bg-[#c1622f] text-[#ffffff] rounded-lg px-5 py-2 text-sm font-medium border-none cursor-pointer hover:bg-[#a8542a] transition-colors"
          >
            Awesome
          </button>
          <button
            className="bg-[#c1622f] text-[#ffffff] rounded-lg px-5 py-2 text-sm font-medium border-none cursor-pointer hover:bg-[#a8542a] transition-colors"
          >
            Prepare
          </button>
        </div>

        {/* Footer/Recent Activity Section */}
        <h2 className="mt-6 font-bold text-base text-[#ffffff]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
