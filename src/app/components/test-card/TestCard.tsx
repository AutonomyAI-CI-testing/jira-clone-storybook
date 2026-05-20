/**
 * Icon components for the TestCard UI
 */
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
  >
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
    <path
      d="M13 8C13 8.34 12.97 8.67 12.92 9L14.46 10.17C14.6 10.27 14.64 10.46 14.56 10.61L13.13 13.18C13.05 13.33 12.86 13.39 12.7 13.33L10.91 12.63C10.54 12.92 10.14 13.16 9.7 13.34L9.42 15.23C9.4 15.4 9.25 15.5 9.08 15.5H6.22C6.05 15.5 5.9 15.4 5.88 15.23L5.6 13.34C5.16 13.16 4.76 12.92 4.39 12.63L2.6 13.33C2.44 13.39 2.25 13.33 2.17 13.18L0.74 10.61C0.66 10.46 0.7 10.27 0.84 10.17L2.38 9C2.33 8.67 2.3 8.34 2.3 8C2.3 7.66 2.33 7.33 2.38 7L0.84 5.83C0.7 5.73 0.66 5.54 0.74 5.39L2.17 2.82C2.25 2.67 2.44 2.61 2.6 2.67L4.39 3.37C4.76 3.08 5.16 2.84 5.6 2.66L5.88 0.77C5.9 0.6 6.05 0.5 6.22 0.5H9.08C9.25 0.5 9.4 0.6 9.42 0.77L9.7 2.66C10.14 2.84 10.54 3.08 10.91 3.37L12.7 2.67C12.86 2.61 13.05 2.67 13.13 2.82L14.56 5.39C14.64 5.54 14.6 5.73 14.46 5.83L12.92 7C12.97 7.33 13 7.66 13 8Z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
);

const ChevronUpIcon = ({ size = "small" }: { size?: "small" | "medium" }) => {
  const dimensions = size === "small" ? { width: 10, height: 6 } : { width: 12, height: 8 };
  const pathData = size === "small" ? "M1 5L5 1L9 5" : "M1 7L6 2L11 7";
  
  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={size === "small" ? "text-[#8b9291]" : "text-[#b2b2b1]"}
    >
      <path
        d={pathData}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#a4a4a3]"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M7.5 10.5V7.5M7.5 4.5H7.51"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * TestCard component - displays a configuration card for the UI magician agent
 * with collapsible sections, form inputs, and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[320px] rounded bg-[#1e1f1a] px-6 py-8 text-white">
      {/* Header with agent name and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SettingsIcon />
      </div>

      {/* Collapsible section showing truncated description */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronUpIcon size="small" />
        <span className="text-[12.5px] font-semibold leading-[15.12px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible section header for design configuration */}
      <div className="mb-7 flex items-center gap-2">
        <ChevronUpIcon size="medium" />
        <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-6">
        <div className="mb-2.5 flex items-center gap-1.5">
          <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <div className="w-[84%] rounded border border-[#a5adad] bg-[#272822] px-4 py-3.5">
          <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL input field */}
      <div className="mb-9">
        <div className="mb-2.5 flex items-center gap-1.5">
          <label className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </label>
          <InfoIcon />
        </div>
        <div className="w-[84%] rounded border border-[#929291] bg-[#272822] px-4 py-3.5">
          <span className="text-[10.5px] font-semibold leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-10 flex items-center gap-6">
        <button className="rounded bg-[#843a17] px-8 py-3 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-8 py-3 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent activity section header */}
      <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with copyright */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <span className="text-[12px]">© AutonomyAI</span>
      </div>
    </div>
  );
};
