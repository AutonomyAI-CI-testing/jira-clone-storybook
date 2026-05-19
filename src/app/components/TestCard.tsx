/**
 * TestCard component - UI configuration card for the UI magician Agent
 *
 * Displays a form-like interface for configuring design import settings,
 * including Figma token and URL inputs, with collapsible sections and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded bg-[#1a1a17] p-6 font-primary text-[#b5b5b5]">
      {/* Header with settings icon */}
      <div className="mb-5 flex items-center justify-between">
        <h1 className="text-[13.5px] font-bold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle - truncated text indicates expandable content */}
      <div className="mb-[150px] flex items-center gap-2">
        <ChevronUpSmallIcon />
        <p className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section - expandable section header */}
      <div className="mb-[70px] flex items-center gap-2">
        <ChevronUpIcon />
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input field with info tooltip */}
      <div className="mb-2 flex items-center gap-2">
        <label
          htmlFor="token"
          className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <div
        id="token"
        className="mb-5 rounded border border-[#a5adad] bg-[#272822] px-4 py-3"
      >
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL input field with info tooltip */}
      <div className="mb-2 flex items-center gap-2">
        <label
          htmlFor="url"
          className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <InfoIcon />
      </div>
      <div
        id="url"
        className="mb-8 rounded border-2 border-[#929291] bg-[#272822] px-4 py-3"
      >
        <span className="text-[10.5px] font-semibold leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Primary action buttons */}
      <div className="mb-[100px] flex gap-5">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-3 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-3 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <h2 className="mb-6 text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-[11.5px] text-[#b5b5b5]">© AutonomyAI</p>
      </div>
    </div>
  );
};

/**
 * Icon Components
 * Inline SVG icons used within the TestCard component
 */

const ChevronUpIcon = (): JSX.Element => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 7L6 2L1 7"
        stroke="#b5b5b5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ChevronUpSmallIcon = (): JSX.Element => {
  return (
    <svg
      width="8"
      height="5"
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 4L4 1L1 4"
        stroke="#8b9291"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const InfoIcon = (): JSX.Element => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1.2" />
      <line
        x1="7.5"
        y1="6.5"
        x2="7.5"
        y2="11"
        stroke="#a4a4a3"
        strokeWidth="1.2"
      />
      <circle cx="7.5" cy="4.5" r="0.8" fill="#a4a4a3" />
    </svg>
  );
};

const SettingsIcon = (): JSX.Element => {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 10C8.38071 10 9.5 8.88071 9.5 7.5C9.5 6.11929 8.38071 5 7 5C5.61929 5 4.5 6.11929 4.5 7.5C4.5 8.88071 5.61929 10 7 10Z"
        stroke="#b5b5b5"
        strokeWidth="1.2"
      />
      <path
        d="M11.5 7.5C11.5 7.8 11.55 8.1 11.6 8.4L13.2 9.6L12.2 11.4L10.3 10.7C9.9 11.1 9.4 11.4 8.9 11.6L8.5 13.5H6.5L6.1 11.6C5.6 11.4 5.1 11.1 4.7 10.7L2.8 11.4L1.8 9.6L3.4 8.4C3.35 8.1 3.5 7.8 3.5 7.5C3.5 7.2 3.35 6.9 3.4 6.6L1.8 5.4L2.8 3.6L4.7 4.3C5.1 3.9 5.6 3.6 6.1 3.4L6.5 1.5H8.5L8.9 3.4C9.4 3.6 9.9 3.9 10.3 4.3L12.2 3.6L13.2 5.4L11.6 6.6C11.55 6.9 11.5 7.2 11.5 7.5Z"
        stroke="#b5b5b5"
        strokeWidth="1.2"
      />
    </svg>
  );
};
