import { FiInfo, FiChevronDown } from "react-icons/fi";
import { TbAtom2 } from "react-icons/tb";

/**
 * TestCard component - A dark-themed configuration panel for the UI magician Agent.
 *
 * Displays a form for adding new Figma designs with fields for Personal Access Token
 * and Design URL, along with collapsible sections and action buttons.
 */
export const TestCard = () => {
  return (
    <div className="flex h-[508px] w-64 flex-col bg-[#1C1D17] p-8 text-[#b5b5b5]">
      {/* Header with agent title and icon */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-[15px] font-semibold">UI magician Agent</h1>
        <TbAtom2 className="h-5 w-5 text-[#b5b5b5]" />
      </div>

      {/* Collapsible subtitle - truncated text indicates expandable content */}
      <div className="mb-8 flex items-center gap-2">
        <FiChevronDown className="h-4 w-4 text-[#8b9291]" />
        <span className="text-[13px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header for design configuration */}
      <div className="mb-8 flex items-center gap-2">
        <FiChevronDown className="h-4 w-4 text-[#b2b2b1]" />
        <h2 className="text-[15px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input with info tooltip */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-[13px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <FiInfo className="h-5 w-5 text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-11 w-full rounded border-2 border-[#A5ADAD] bg-[#272822] px-4 text-[12px] font-semibold text-[#737470] placeholder:text-[#737470] placeholder:opacity-60 focus:outline-none"
        />
      </div>

      {/* Design URL input with info tooltip */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-[13px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <FiInfo className="h-5 w-5 text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="h-11 w-full rounded border-2 border-[#929291] bg-[#272822] px-4 text-[12px] font-semibold text-[#71726e] placeholder:text-[#71726e] placeholder:opacity-60 focus:outline-none"
        />
      </div>

      {/* Action buttons for form submission */}
      <div className="mb-8 flex gap-6">
        <button className="h-11 w-28 rounded bg-[#843A17] text-[13px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="h-11 w-28 rounded bg-[#843A17] text-[13px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section for displaying recent activity */}
      <div className="pb-6">
        <h3 className="text-[15px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-[12px]">© AutonomyAI</p>
      </div>
    </div>
  );
};
