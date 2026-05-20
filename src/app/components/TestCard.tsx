import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard component displaying a UI configuration card for the UI magician Agent.
 * Features collapsible sections, input fields for Personal Access Token and Design URL,
 * and action buttons for workflow operations.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[508px] rounded bg-[#1e1e1a] p-10 font-['Inter']">
      {/* Header with agent title and settings icon */}
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-[24px] font-normal leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <FiSettings className="h-6 w-6 text-[#b5b5b5]" strokeWidth={1.5} />
      </div>

      {/* Collapsible section - truncated text indicates collapsed state */}
      <div className="mb-10 flex items-center gap-2">
        <FiChevronUp className="h-4 w-4 text-[#8b9291]" />
        <span className="text-[16px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mb-[30px] flex items-center gap-2">
        <FiChevronUp className="h-4 w-4 text-[#b2b2b1]" />
        <span className="text-[20px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field with info icon for help */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-normal leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </label>
          <FiInfo className="h-[18px] w-[18px] text-[#a4a4a3]" />
        </div>
        <div className="rounded border border-[#a5adad] bg-[#272822] px-6 py-4">
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL input field with info icon for help */}
      <div className="mb-[25px]">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-normal leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </label>
          <FiInfo className="h-[18px] w-[18px] text-[#a3a3a2]" />
        </div>
        <div className="rounded border-2 border-[#929291] bg-[#272822] px-6 py-4">
          <span className="text-[10.5px] font-semibold leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Primary action buttons for workflow control */}
      <div className="mb-6 flex gap-4">
        <button className="h-[60px] w-[170px] rounded bg-[#843a17] text-[16px] font-bold leading-[13.92px] text-white">
          Awesome
        </button>
        <button className="h-[60px] w-[170px] rounded bg-[#843a17] text-[16px] font-bold leading-[13.92px] text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <h3 className="mb-6 text-[24px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with copyright notice */}
      <div className="mt-6 border-t border-gray-600 pt-4 text-center">
        <span className="text-sm text-[#a4a4a3]">© AutonomyAI</span>
      </div>
    </div>
  );
};
