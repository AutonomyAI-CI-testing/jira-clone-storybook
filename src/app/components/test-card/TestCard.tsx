import React from "react";

/**
 * Collapsible section header with an arrow icon.
 * The arrow direction (up/down) indicates collapse state.
 */
const CollapsibleHeader: React.FC<{
  text: string;
  isExpanded: boolean;
  textColor: string;
  arrowColor: string;
}> = ({ text, isExpanded, textColor, arrowColor }) => (
  <div className="flex items-center gap-2">
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[${arrowColor}] transition-transform`}
      style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path
        d={isExpanded ? "M0.5 1L4 4.5L7.5 1" : "M0.5 4.5L4 1L7.5 4.5"}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className={`text-[11.5px] font-semibold text-[${textColor}]`}>
      {text}
    </span>
  </div>
);

/**
 * Info icon button used next to form field labels.
 * Provides visual affordance for help text (not yet implemented).
 */
const InfoIconButton: React.FC<{ color: string }> = ({ color }) => (
  <button
    className="flex h-4 w-4 items-center justify-center"
    aria-label="More information"
  >
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`stroke-[${color}]`}
      strokeWidth="1"
    >
      <circle cx="7.5" cy="7.5" r="6.5" />
      <text
        x="7.5"
        y="8.5"
        textAnchor="middle"
        className={`text-[10px] font-bold fill-[${color}]`}
      >
        i
      </text>
    </svg>
  </button>
);

/**
 * Settings icon button in the header.
 * Placeholder for future settings functionality.
 */
const SettingsButton: React.FC = () => (
  <button
    className="flex h-5 w-5 items-center justify-center"
    aria-label="Settings"
  >
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-none stroke-[#b5b5b5]"
      strokeWidth="1.5"
    >
      <circle cx="7" cy="8" r="2.5" />
      <path d="M7 1v2.5M7 12.5V15M1 8H3.5M10.5 8H13M2.5 2.5l1.77 1.77M9.73 9.73l1.77 1.77M2.5 13.5l1.77-1.77M9.73 6.27l1.77-1.77" />
    </svg>
  </button>
);

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="min-h-screen w-full bg-black p-5">
      <div className="mx-auto max-w-[254px] space-y-8">
        {/* Header with title and settings icon */}
        <div className="flex items-center justify-between">
          <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
            UI magician Agent
          </h1>
          <SettingsButton />
        </div>

        {/* Collapsible section 1: From entire frame */}
        <div className="space-y-4">
          <CollapsibleHeader
            text="From entire frame to a singl..."
            isExpanded={false}
            textColor="#8b9291"
            arrowColor="#8b9291"
          />
        </div>

        {/* Collapsible section 2: Add New Design */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <svg
              width="8"
              height="5"
              viewBox="0 0 8 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#b2b2b1]"
            >
              <path
                d="M0.5 1L4 4.5L7.5 1"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
              Add New Design
            </span>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Personal Access Token Field */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
                Personal Access Token
              </label>
              <InfoIconButton color="#a4a4a3" />
            </div>
            <input
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full border border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] focus:outline-none"
              readOnly
            />
          </div>

          {/* Design URL Field */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
                Design URL
              </label>
              <InfoIconButton color="#a3a3a2" />
            </div>
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full border border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] focus:outline-none"
              readOnly
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 rounded bg-[#843a17] px-6 py-2 text-[11.5px] font-semibold text-[#8c8078] transition-colors hover:bg-[#9a4620] active:bg-[#6f3014]">
            Awesome
          </button>
          <button className="flex-1 rounded bg-[#843a17] px-6 py-2 text-[11.5px] font-semibold text-[#8c8078] transition-colors hover:bg-[#9a4620] active:bg-[#6f3014]">
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="pt-4">
          <h2 className="text-[13.5px] font-semibold text-[#b0b0b0]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
