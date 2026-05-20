/**
 * Settings gear icon component
 */
const SettingsIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z"
      stroke="#b5b5b5"
      strokeWidth="1"
    />
    <path
      d="M13.5 7.5C13.5 7.5 12.5 5.5 11.5 4.5L10.5 6L8.5 5L9 3L7.5 1.5L6 3L4 5L5 6.5L3.5 8.5L1.5 7.5C1.5 7.5 2.5 9.5 3.5 10.5L5 9L7 10L6.5 12L7.5 13.5L9 12L11 10L10 8.5L11.5 6.5L13.5 7.5Z"
      stroke="#b5b5b5"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

/**
 * Chevron icon component - used for collapsible sections
 */
const ChevronIcon = ({
  width,
  height,
  viewBox,
  path,
  stroke,
  strokeWidth = "1",
}: {
  width: string;
  height: string;
  viewBox: string;
  path: string;
  stroke: string;
  strokeWidth?: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={path}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Info icon component - used for tooltips and help text
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <path
      d="M7.5 7V10.5M7.5 5V5.5"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * TestCard component - displays a UI configuration card for the UI magician Agent
 * Includes collapsible sections, form inputs for Figma integration, and action buttons
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="font-sans w-[254px] rounded bg-[#1a1a17] p-6">
      {/* Header with title and settings icon */}
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SettingsIcon />
      </div>

      {/* Collapsible hint section */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronIcon
          width="8"
          height="5"
          viewBox="0 0 8 5"
          path="M7 4L4 1L1 4"
          stroke="#8b9291"
        />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronIcon
          width="12"
          height="8"
          viewBox="0 0 12 8"
          path="M10 6L6 2L2 6"
          stroke="#b2b2b1"
          strokeWidth="1.5"
        />
        <h3 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-5">
        <div className="mb-3 flex items-center gap-1.5">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoIcon color="#a4a4a3" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#a5adad] bg-[#272822] px-4 py-2.5 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] focus:outline-none focus-visible:outline-none"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-1.5">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <InfoIcon color="#a3a3a2" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border-2 border-[#929291] bg-[#272822] px-4 py-2.5 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] focus:outline-none focus-visible:outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-16 flex gap-5">
        <button className="flex-1 rounded bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-6 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer section */}
      <div className="border-gray-300 border-t pt-3 text-center">
        © AutonomyAI
      </div>
    </div>
  );
};
