import { useState } from "react";
import cx from "classix";

// Reusable chevron icon for collapsible section headers
const ChevronIcon = ({ isOpen }: { isOpen: boolean }): JSX.Element => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 16 16"
    fill="none"
    className={cx(
      "text-[#b2b2b1] transition-transform flex-shrink-0",
      isOpen ? "rotate-180" : ""
    )}
  >
    <path
      d="M13 6L8 11L3 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Info icon used in form labels
const InfoIcon = ({ className = "text-[#a4a4a3]" }: { className?: string }): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 16 16"
    fill="none"
    className={`${className} flex-shrink-0`}
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1" />
    <text
      x="8"
      y="10.5"
      textAnchor="middle"
      fontSize="11"
      fill="currentColor"
      fontWeight="600"
    >
      i
    </text>
  </svg>
);

// Action button styling for form submission
const ACTION_BUTTON_STYLE = {
  backgroundColor: "#b85c39",
  color: "#e8c9b8",
};

export const TestCard = (): JSX.Element => {
  const [isFirstSectionOpen, setIsFirstSectionOpen] = useState(true);
  const [isSecondSectionOpen, setIsSecondSectionOpen] = useState(true);

  return (
    <div className="w-full max-w-[254px] bg-[#2b2b2b] p-6">
      {/* Header */}
      <div className="mb-12 flex items-center justify-between">
        <h1 className="text-[20px] font-semibold leading-[24px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        {/* Settings/Gear Icon — not interactive in current design */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[#b5b5b5]"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m5.08 0l4.24-4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m5.08 0l4.24 4.24" />
        </svg>
      </div>

      {/* First Collapsible Section */}
      <div className="mb-10">
        <button
          onClick={() => setIsFirstSectionOpen(!isFirstSectionOpen)}
          className="mb-5 flex items-center gap-3 bg-none p-0 text-left"
          aria-expanded={isFirstSectionOpen}
        >
          <ChevronIcon isOpen={isFirstSectionOpen} />
          <span className="text-[12px] font-semibold leading-[14.5px] text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </button>
        {isFirstSectionOpen && (
          <div className="h-24 bg-[#0a0a0a] rounded" />
        )}
      </div>

      {/* Second Collapsible Section: Add New Design */}
      <div className="mb-12">
        <button
          onClick={() => setIsSecondSectionOpen(!isSecondSectionOpen)}
          className="mb-6 flex items-center gap-3 bg-none p-0 text-left"
          aria-expanded={isSecondSectionOpen}
        >
          <ChevronIcon isOpen={isSecondSectionOpen} />
          <h2 className="text-[15px] font-semibold leading-[18px] text-[#b2b2b1]">
            Add New Design
          </h2>
        </button>

        {isSecondSectionOpen && (
          <div className="space-y-6">
            {/* Personal Access Token Input */}
            <div>
              <label className="mb-3 flex items-center justify-between text-[13px] font-semibold leading-[15.7px] text-[#a4a4a3]">
                <span>Personal Access Token</span>
                <InfoIcon className="text-[#a4a4a3]" />
              </label>
              <input
                type="text"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
                className="w-full bg-transparent px-4 py-3 text-[11.5px] font-semibold leading-[13.92px] text-[#737470] border border-[#4a4a4a] rounded-none placeholder:text-[#5a5a5a]"
              />
            </div>

            {/* Design URL Input */}
            <div>
              <label className="mb-3 flex items-center justify-between text-[13px] font-semibold leading-[15.7px] text-[#a3a3a2]">
                <span>Design URL</span>
                <InfoIcon className="text-[#a3a3a2]" />
              </label>
              <input
                type="text"
                placeholder="https://www.figma.com/file/:"
                className="w-full bg-transparent px-4 py-3 text-[11.5px] font-semibold leading-[13.92px] text-[#71726e] border border-[#4a4a4a] rounded-none placeholder:text-[#5a5a5a]"
              />
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4">
              <button
                style={ACTION_BUTTON_STYLE}
                className="flex-1 rounded px-5 py-3 text-[13px] font-semibold leading-[15.7px] transition-colors hover:opacity-90"
              >
                Awesome
              </button>
              <button
                style={ACTION_BUTTON_STYLE}
                className="flex-1 rounded px-5 py-3 text-[13px] font-semibold leading-[15.7px] transition-colors hover:opacity-90"
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Section header */}
      <h3 className="text-[16px] font-semibold leading-[19.3px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with copyright */}
      <div className="mt-6 pt-3 border-t border-gray-300 text-center">
        <p className="text-[12px] text-[#b0b0b0]">© AutonomyAI</p>
      </div>
    </div>
  );
};
