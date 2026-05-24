import { useState } from "react";

// SVG icon components for consistent styling
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-70"
  >
    <circle cx="8" cy="8" r="6.5" stroke="#b5b5b5" strokeWidth="0.8" fill="none" />
    <circle cx="8" cy="8" r="2.5" stroke="#b5b5b5" strokeWidth="0.8" fill="none" />
    <rect x="7.2" y="0.5" width="1.6" height="1.5" fill="#b5b5b5" />
    <rect x="7.2" y="14" width="1.6" height="1.5" fill="#b5b5b5" />
    <rect x="0.5" y="7.2" width="1.5" height="1.6" fill="#b5b5b5" />
    <rect x="14" y="7.2" width="1.5" height="1.6" fill="#b5b5b5" />
    <rect x="10.5" y="2.5" width="1.2" height="1.2" fill="#b5b5b5" />
    <rect x="4.3" y="2.5" width="1.2" height="1.2" fill="#b5b5b5" />
    <rect x="4.3" y="12.3" width="1.2" height="1.2" fill="#b5b5b5" />
    <rect x="10.5" y="12.3" width="1.2" height="1.2" fill="#b5b5b5" />
    <circle cx="8" cy="8" r="1" fill="#b5b5b5" />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-70"
  >
    <circle cx="6" cy="6" r="5.5" stroke={color} strokeWidth="0.8" />
    <text
      x="6"
      y="7.5"
      textAnchor="middle"
      fontSize="7"
      fill={color}
      fontWeight="bold"
    >
      i
    </text>
  </svg>
);

interface CollapsibleSectionButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  title: string;
  fontSize: string;
  textColor: string;
  arrowSize: string;
}

const CollapsibleSectionButton = ({
  isOpen,
  onToggle,
  title,
  fontSize,
  textColor,
  arrowSize,
}: CollapsibleSectionButtonProps) => (
  <button
    onClick={onToggle}
    className={`flex items-center gap-2 font-[600] hover:opacity-80 ${fontSize} ${textColor}`}
  >
    <span className={arrowSize}>{isOpen ? "▲" : "▼"}</span>
    <span>{title}</span>
  </button>
);

/**
 * TestCard component displays a control panel for the UI magician Agent.
 * Features include:
 * - Header with agent name and settings icon
 * - Two collapsible sections for organizing agent functionality
 * - Conditional form inputs for design URL and personal access token
 * - Action buttons and recent activity tracking
 *
 * State management:
 * - isFirstSectionOpen: Controls visibility of the first info section
 * - isAddDesignOpen: Controls visibility of the design input form
 */
export const TestCard = () => {
  const [isFirstSectionOpen, setIsFirstSectionOpen] = useState(true);
  const [isAddDesignOpen, setIsAddDesignOpen] = useState(true);

  return (
    <div className="w-[254px] bg-black p-5">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-[13.5px] font-[600] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* First collapsible section */}
      <div className="mb-16">
        <CollapsibleSectionButton
          isOpen={isFirstSectionOpen}
          onToggle={() => setIsFirstSectionOpen(!isFirstSectionOpen)}
          title="From entire frame to a singl..."
          fontSize="text-[11.5px]"
          textColor="text-[#8b9291]"
          arrowSize="text-[12px]"
        />
      </div>

      {/* Add New Design section */}
      <div className="mb-10">
        <CollapsibleSectionButton
          isOpen={isAddDesignOpen}
          onToggle={() => setIsAddDesignOpen(!isAddDesignOpen)}
          title="Add New Design"
          fontSize="text-[13.5px]"
          textColor="text-[#b2b2b1]"
          arrowSize="text-[14px]"
        />
      </div>

      {isAddDesignOpen && (
        <>
          {/* Personal Access Token input */}
          <div className="mb-8">
            <label className="mb-3 flex items-center gap-2 text-[11.5px] font-[600] text-[#a4a4a3]">
              <span>Personal Access Token</span>
              <InfoIcon color="#a4a4a3" />
            </label>
            <input
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full border border-[#929291] bg-[#272822] px-3 py-3 text-[11.5px] font-[600] text-[#737470] placeholder-[#737470]"
            />
          </div>

          {/* Design URL input */}
          <div className="mb-10">
            <label className="mb-3 flex items-center gap-2 text-[11.5px] font-[600] text-[#a3a3a2]">
              <span>Design URL</span>
              <InfoIcon color="#a3a3a2" />
            </label>
            <input
              type="url"
              placeholder="https://www.figma.com/file/:"
              className="w-full border border-[#a5adad] bg-[#272822] px-3 py-3 text-[10.5px] font-[600] text-[#71726e] placeholder-[#71726e]"
            />
          </div>

          {/* Action buttons */}
          <div className="mt-10 flex gap-3">
            <button className="flex-1 rounded bg-[#843a17] py-2 px-4 text-[11.5px] font-[600] text-[#8c8078] hover:opacity-90">
              Awesome
            </button>
            <button className="flex-1 rounded bg-[#843a17] py-2 px-4 text-[11.5px] font-[600] text-[#8c8078] hover:opacity-90">
              Prepare
            </button>
          </div>
        </>
      )}

      {/* Recent Breakdowns section */}
      <div className="mt-16 text-[13.5px] font-[600] text-[#b0b0b0]">
        Recent Breakdowns
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center text-[11.5px] font-[600] text-[#b5b5b5]">
        © AutonomyAI
      </div>
    </div>
  );
};
