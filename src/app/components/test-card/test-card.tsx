import cx from "classix";
import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { IoChevronUp } from "react-icons/io5";

// Tailwind styles for input fields — shared between Personal Access Token and Design URL inputs
const INPUT_STYLES = cx(
  "w-full rounded-none border bg-[#2a2a2a] text-[#737470]",
  "border-[#4a4a4a] px-2.5 py-1.5 text-[10.5px] font-semibold",
  "placeholder-[#737470] placeholder-opacity-100",
  "focus:outline-none focus:ring-1 focus:ring-[#5a5a5a]"
);

// Tailwind styles for action buttons — shared between Awesome and Prepare buttons
const BUTTON_STYLES = cx(
  "flex-1 rounded-sm border-none bg-[#9d5a38]",
  "py-1.5 px-2 text-[11.5px] font-semibold text-[#d4b5a8]",
  "hover:bg-[#ab6844] transition-colors"
);

/**
 * TestCard component — displays a dark-themed panel for managing AI agent designs.
 * Features collapsible sections, input fields for API credentials, and action buttons.
 * Inputs are read-only by design, indicating a configuration/display-only interface.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded-lg bg-[#2b2b2b] p-5 text-[var(--Neutral700)]">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <AiOutlineSetting size={20} className="text-[#8b9291]" />
      </div>

      {/* Collapsible Section - From entire frame */}
      <div className="mb-8 flex items-center gap-2 border-b border-[#3a3a3a] pb-4">
        <IoChevronUp size={16} className="text-[#737470]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8">
        <div className="mb-6 flex items-center gap-2">
          <IoChevronUp size={16} className="text-[#737470]" />
          <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
            Add New Design
          </span>
        </div>

        {/* Input Fields */}
        <div className="space-y-6">
          {/* Personal Access Token Input */}
          <div>
            <div className="mb-3 flex items-center gap-1.5">
              <label className="text-[11.5px] font-semibold text-[#8b9291]">
                Personal Access Token
              </label>
              <AiOutlineInfoCircle size={18} className="text-[#8b9291]" />
            </div>
            <input
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className={INPUT_STYLES}
              readOnly
            />
          </div>

          {/* Design URL Input */}
          <div>
            <div className="mb-3 flex items-center gap-1.5">
              <label className="text-[11.5px] font-semibold text-[#8b9291]">
                Design URL
              </label>
              <AiOutlineInfoCircle size={18} className="text-[#8b9291]" />
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/..."
              className={INPUT_STYLES}
              readOnly
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-2">
          <button className={BUTTON_STYLES}>Awesome</button>
          <button className={BUTTON_STYLES}>Prepare</button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-t border-[#3a3a3a] pt-8">
        <h3 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="mt-3 border-t border-gray-300 pt-3 text-center">
        <p className="text-xs text-[#8b9291]">© AutonomyAI</p>
      </div>
    </div>
  );
};
