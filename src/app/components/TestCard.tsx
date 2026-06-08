import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

/**
 * TestCard component renders a configuration card for the UI magician agent.
 * Displays agent info, input fields for Figma credentials, and action buttons.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="rounded-lg bg-[#2a2a2a] p-4 font-[Inter] text-white"
    >
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline className="text-lg text-[#b5b5b5]" />
      </div>

      {/* Subtitle */}
      <div className="mb-6 flex items-center gap-1 text-[11.5px] font-semibold text-[#8b9291]">
        <FiChevronUp />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Section header: Add New Design */}
      <div className="mb-4 flex items-center gap-1 text-[13.5px] font-semibold text-[#b2b2b1]">
        <FiChevronUp />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token label + input */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-1 text-[11.5px] font-semibold text-[#a4a4a3]">
          <span>Personal Access Token</span>
          <AiOutlineInfoCircle />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#444] bg-[#2a2a2a] p-2 text-[11.5px] text-[#737470]"
        />
      </div>

      {/* Design URL label + input */}
      <div className="mb-6">
        <div className="mb-1 flex items-center gap-1 text-[11.5px] font-semibold text-[#a3a3a2]">
          <span>Design URL</span>
          <AiOutlineInfoCircle />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#444] bg-[#2a2a2a] p-2 text-[11.5px] text-[#71726e]"
        />
      </div>

      {/* Buttons */}
      <div className="mb-6 flex gap-3">
        <button className="flex-1 rounded bg-[#b5522b] py-2 text-[11.5px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#b5522b] py-2 text-[11.5px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
