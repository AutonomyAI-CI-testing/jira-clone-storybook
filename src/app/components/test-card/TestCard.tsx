import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp, FiInfo } from "react-icons/fi";

/**
 * TestCard component renders a configuration card for the UI Magician Agent.
 * Displays collapsible sections, form inputs for Figma integration, and action buttons.
 */
export const TestCard = () => {
  return (
    <div className="font-sans w-[254px] rounded bg-[#1a1a17] p-5 text-left">
      {/* Header with settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <IoSettingsOutline className="h-5 w-5 text-[#b5b5b5]" />
      </div>

      {/* Collapsible description - chevron indicates expandable content */}
      <div className="mb-8 flex items-center gap-2">
        <FiChevronUp className="h-4 w-4 text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section - collapsible header */}
      <div className="mb-4 flex items-center gap-2">
        <FiChevronUp className="h-4 w-4 text-[#b2b2b1]" />
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input with info icon for help tooltip */}
      <div className="mb-2 flex items-center gap-2">
        <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </label>
        <FiInfo className="h-4 w-4 text-[#a4a4a3]" />
      </div>

      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-4 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />

      {/* Design URL input with info icon for help tooltip */}
      <div className="mb-2 flex items-center gap-2">
        <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </label>
        <FiInfo className="h-4 w-4 text-[#a3a3a2]" />
      </div>

      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mb-4 w-full rounded border-2 border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />

      {/* Action buttons for form submission */}
      <div className="mb-10 flex gap-4">
        <button className="rounded bg-[#843a17] px-6 py-2 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-6 py-2 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section heading */}
      <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-gray-400 text-[11.5px]">© AutonomyAI</span>
      </div>
    </div>
  );
};
