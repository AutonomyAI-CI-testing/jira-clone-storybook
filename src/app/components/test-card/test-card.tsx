import { useState } from "react";
import cx from "classix";

// Helper component for info icon to reduce duplication
const InfoIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-[#a4a4a3]"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <circle cx="10" cy="10" r="9" fill="none" stroke="currentColor" />
    <text
      x="10"
      y="13"
      textAnchor="middle"
      className="fill-current text-[10px] font-bold"
    >
      i
    </text>
  </svg>
);

// Helper component for collapsible section header
interface CollapsibleHeaderProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  label: string;
  className?: string;
}

const CollapsibleHeader = ({
  isOpen,
  onChange,
  label,
  className = "text-[11.5px]",
}: CollapsibleHeaderProps): JSX.Element => (
  <button
    onClick={() => onChange(!isOpen)}
    className="flex cursor-pointer items-center gap-2 transition-opacity hover:opacity-80"
  >
    <span
      className={cx(
        "inline-block transition-transform",
        isOpen ? "rotate-0" : "rotate-180"
      )}
    >
      ▲
    </span>
    <span className={cx("font-semibold", className)}>{label}</span>
  </button>
);

export const TestCard = (): JSX.Element => {
  const [isFirstSectionOpen, setIsFirstSectionOpen] = useState(true);
  const [isAddNewDesignOpen, setIsAddNewDesignOpen] = useState(true);

  return (
    <div className="w-full max-w-[508px] rounded-md bg-[#1a1a1a] p-5">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        {/* Settings icon */}
        <svg
          className="h-5 w-5 text-[#b5b5b5]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 8v.01M12 12v.01M12 16v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      {/* First collapsible section */}
      <div className="mb-8">
        <CollapsibleHeader
          isOpen={isFirstSectionOpen}
          onChange={setIsFirstSectionOpen}
          label="From entire frame to a single..."
          className="text-[11.5px] text-[#a4a4a3]"
        />
      </div>

      {/* Add New Design section */}
      <div className="mb-8">
        <CollapsibleHeader
          isOpen={isAddNewDesignOpen}
          onChange={setIsAddNewDesignOpen}
          label="Add New Design"
          className="text-[13.5px] text-[#b5b5b5]"
        />
      </div>

      {/* Personal Access Token */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#3a3a3a] bg-[#2a2a2a] px-3 py-3 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] focus:border-[#3a3a3a] focus:outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#3a3a3a] bg-[#2a2a2a] px-3 py-3 text-[10.5px] font-semibold text-[#737470] placeholder-[#737470] focus:border-[#3a3a3a] focus:outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-8 flex gap-4">
        <button className="flex-1 rounded bg-[#b8663d] px-4 py-3 text-[11.5px] font-semibold text-[#8c8078] transition-colors hover:bg-[#a55830] active:bg-[#8c4623]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#b8663d] px-4 py-3 text-[11.5px] font-semibold text-[#8c8078] transition-colors hover:bg-[#a55830] active:bg-[#8c4623]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h2 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-gray-600 text-sm">© AutonomyAI</p>
      </div>
    </div>
  );
};
