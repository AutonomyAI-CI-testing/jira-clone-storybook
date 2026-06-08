import React from "react";

// Reusable SVG icon components for consistent rendering
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#b5b5b5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-settings"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .3 1.4L21 18l-2 2-1.4-.3a1.65 1.65 0 0 0-1.4-.3H9.7a1.65 1.65 0 0 0-1.4.3L6 20l-2-2 1.4-.3a1.65 1.65 0 0 0 .3-1.4V9.7a1.65 1.65 0 0 0-.3-1.4L4 6l2-2 1.4.3a1.65 1.65 0 0 0 1.4.3h4.6a1.65 1.65 0 0 0 1.4-.3L18 4l2 2-1.4.3a1.65 1.65 0 0 0-.3 1.4v4.6z"></path>
  </svg>
);

const ChevronIcon = ({ color = "#8b9291" }: { color?: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-up mr-1"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const InfoIcon = ({ color = "#a4a4a3" }: { color?: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-info ml-1"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

const TestCard: React.FC = () => {
  return (
    <div
      id="testElem"
      className="font-sans flex h-[508px] w-[254px] flex-col bg-[#272825] p-4 text-[13.5px] text-[#b5b5b5]"
    >
      {/* Header with title and settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[13.5px] font-semibold">UI magician Agent</span>
        <SettingsIcon />
      </div>

      {/* Subtitle with description text */}
      <div className="mb-4 flex items-center text-[11.5px] text-[#8b9291]">
        <ChevronIcon color="#8b9291" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Section header for design input form */}
      <div className="mb-3 mt-4 flex items-center text-[13.5px] font-semibold text-[#b2b2b1]">
        <ChevronIcon color="#b2b2b1" />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-3">
        <label
          htmlFor="pat"
          className="mb-1 flex items-center text-[11.5px] text-[#a4a4a3]"
        >
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          type="text"
          id="pat"
          className="w-full rounded border border-[#929291] bg-[#272822] p-2 text-[11.5px] text-[#b5b5b5] placeholder-[#737470] focus:outline-none focus:ring-1 focus:ring-[#843a17]"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      {/* Design URL input field */}
      <div className="mb-5">
        <label
          htmlFor="design-url"
          className="mb-1 flex items-center text-[11.5px] text-[#a4a4a3]"
        >
          Design URL
          <InfoIcon />
        </label>
        <input
          type="text"
          id="design-url"
          className="w-full rounded border border-[#a5adad] bg-[#272822] p-2 text-[11.5px] text-[#b5b5b5] placeholder-[#737470] focus:outline-none focus:ring-1 focus:ring-[#843a17]"
          placeholder="https://www.figma.com/file/:id/"
        />
      </div>

      {/* Action buttons for form submission */}
      <div className="mb-8 flex justify-between space-x-2">
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#a04a20] focus:outline-none focus:ring-2 focus:ring-[#843a17] focus:ring-opacity-50"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded bg-[#843a17] py-2 text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#a04a20] focus:outline-none focus:ring-2 focus:ring-[#843a17] focus:ring-opacity-50"
        >
          Prepare
        </button>
      </div>

      {/* Footer displaying recent items */}
      <div className="mt-auto text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

export default TestCard;
