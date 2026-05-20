import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";

/**
 * TestCard component displays a form interface for configuring design integration.
 * Includes fields for Personal Access Token and Design URL, along with action buttons
 * and a footer with copyright information.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded-lg bg-[#1C1D17] p-6 font-sans font-semibold">
      {/* Header with title and settings icon */}
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-[13.5px] text-[#B5B5B5]">UI magician Agent</h1>
        <FiSettings className="text-[#B5B5B5]" size={20} />
      </div>

      {/* Collapsible subtitle preview */}
      <div className="mb-8 flex items-center gap-1">
        <FiChevronUp className="text-[#8B9291]" size={14} />
        <p className="text-[11.5px] text-[#8B9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Section header for adding new design configuration */}
      <div className="mb-6 flex items-center gap-1">
        <FiChevronUp className="text-[#B2B2B1]" size={14} />
        <h2 className="text-[13.5px] text-[#B2B2B1]">Add New Design</h2>
      </div>

      {/* Personal Access Token input field with info icon for help context */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-1">
          <label className="text-[11.5px] text-[#A3A3A2]">
            Personal Access Token
          </label>
          <FiInfo className="text-[#A3A3A2]" size={16} />
        </div>
        <div className="flex h-[44px] w-[211px] items-center rounded border border-[#A5ADAD] bg-[#272822] px-3">
          <span className="text-[10.5px] text-[#737470]">
            fiqd_xxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL input field with thicker border to indicate focus/active state */}
      <div className="mb-5">
        <div className="mb-1 flex items-center gap-1">
          <label className="text-[11.5px] text-[#A4A4A3]">Design URL</label>
          <FiInfo className="text-[#A4A4A3]" size={16} />
        </div>
        <div className="flex h-[44px] w-[211px] items-center rounded border-2 border-[#929291] bg-[#272822] px-3">
          <span className="text-[11.5px] text-[#71726E]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action buttons for form submission */}
      <div className="mb-5 flex gap-2">
        <button className="h-[37px] w-[85px] rounded bg-[#843A17] text-[11.5px] text-[#8C8078]">
          Awesome
        </button>
        <button className="h-[37px] w-[85px] rounded bg-[#843A17] text-[11.5px] text-[#8C8078]">
          Prepare
        </button>
      </div>

      {/* Section for displaying recent breakdown history */}
      <h2 className="text-[13.5px] text-[#B0B0B0]">Recent Breakdowns</h2>

      {/* Footer with copyright notice */}
      <div className="mt-3 border-t border-gray-300 pt-3 text-center">
        <p className="text-[11.5px] text-[#A3A3A2]">© AutonomyAI</p>
      </div>
    </div>
  );
};
