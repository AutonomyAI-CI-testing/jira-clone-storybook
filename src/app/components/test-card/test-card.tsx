import { useState } from "react";
import { FiSettings, FiChevronUp, FiChevronDown, FiInfo } from "react-icons/fi";
import cx from "classix";

// Shared button styles for action buttons
const ACTION_BUTTON_STYLES = cx(
  "flex-1 rounded-none py-2 px-4",
  "text-[11.5px] font-semibold text-[#8c8078]",
  "bg-[#a0523d] hover:bg-[#b05f47] active:bg-[#8f4430]",
  "transition-colors"
);

// Input field styles for read-only inputs
const INPUT_STYLES = cx(
  "w-full rounded-none border-[1px] border-[#555555] bg-[#0f0f0f] px-3 py-2",
  "text-[11.5px] font-semibold text-[#737470] placeholder:text-[#505050]",
  "focus:border-[#666666] focus:outline-none"
);

interface CollapsibleButtonProps {
  isCollapsed: boolean;
  label: string;
  onToggle: () => void;
  textColor: string;
  hoverColor: string;
}

// Reusable collapsible button with consistent styling and icon behavior
const CollapsibleButton = ({
  isCollapsed,
  label,
  onToggle,
  textColor,
  hoverColor,
}: CollapsibleButtonProps): JSX.Element => (
  <button
    onClick={onToggle}
    className={cx(
      "flex items-center gap-2",
      "text-[13.5px] font-semibold",
      textColor,
      hoverColor
    )}
  >
    {isCollapsed ? (
      <FiChevronDown size={14} />
    ) : (
      <FiChevronUp size={14} />
    )}
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  const [isCollapsedFirst, setIsCollapsedFirst] = useState(false);
  const [isCollapsedSecond, setIsCollapsedSecond] = useState(false);

  return (
    <div className="w-full max-w-[320px] rounded-lg bg-[#1a1a1a] p-6">
      {/* Header Section */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        {/* Settings button - currently non-interactive, placeholder for future functionality */}
        <button className="text-[#b5b5b5] hover:text-[#d0d0d0] transition-colors">
          <FiSettings size={20} />
        </button>
      </div>

      {/* First Collapsible Section */}
      <div className="mb-6">
        <CollapsibleButton
          isCollapsed={isCollapsedFirst}
          label="From entire frame to a singl..."
          onToggle={() => setIsCollapsedFirst(!isCollapsedFirst)}
          textColor="text-[#8b9291]"
          hoverColor="hover:text-[#a8b0af]"
        />
      </div>

      {/* Second Collapsible Section */}
      <div className="mb-6">
        <CollapsibleButton
          isCollapsed={isCollapsedSecond}
          label="Add New Design"
          onToggle={() => setIsCollapsedSecond(!isCollapsedSecond)}
          textColor="text-[#b2b2b1]"
          hoverColor="hover:text-[#cccccb]"
        />
      </div>

      {/* Personal Access Token Section */}
      <div className="mb-6">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          {/* Info icon for token documentation/help */}
          <FiInfo size={14} className="text-[#737470]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={INPUT_STYLES}
          readOnly
          aria-label="Personal Access Token"
        />
      </div>

      {/* Design URL Section */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          {/* Info icon for URL documentation/help */}
          <FiInfo size={14} className="text-[#737470]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className={cx(
            INPUT_STYLES,
            "text-[10.5px]" // Smaller text for URL field
          )}
          readOnly
          aria-label="Design URL"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex gap-4">
        <button className={ACTION_BUTTON_STYLES}>
          Awesome
        </button>
        <button className={ACTION_BUTTON_STYLES}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer Section */}
      <div className="border-t border-[#d1d5db] pt-3 text-center">
        <p className="text-[11.5px] font-semibold text-[#737470]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
