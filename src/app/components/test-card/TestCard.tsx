/**
 * InfoIcon - Reusable icon component for tooltip/help indicators
 * Renders a circle with "i" text in the specified color
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <text
      x="7.5"
      y="11"
      textAnchor="middle"
      fontSize="10"
      fill={color}
      fontWeight="bold"
    >
      i
    </text>
  </svg>
);

/**
 * ChevronIcon - Reusable upward-pointing chevron/triangle indicator
 * Used to show collapsible sections or expandable content
 */
const ChevronIcon = ({
  width,
  height,
  viewBox,
  path,
  fill,
}: {
  width: string;
  height: string;
  viewBox: string;
  path: string;
  fill: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={path} fill={fill} />
  </svg>
);

/**
 * SettingsIcon - Gear icon for settings/configuration actions
 */
const SettingsIcon = () => (
  <svg
    width="20"
    height="23"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5 8a1.5 1.5 0 00-1.5-1.5v-2a1.5 1.5 0 00-1.5-1.5h-2A1.5 1.5 0 007 1.5h-1A1.5 1.5 0 004.5 3h-2A1.5 1.5 0 001 4.5v2A1.5 1.5 0 00.5 8a1.5 1.5 0 001.5 1.5v2A1.5 1.5 0 003.5 13h2A1.5 1.5 0 007 14.5h1a1.5 1.5 0 001.5-1.5h2a1.5 1.5 0 001.5-1.5v-2A1.5 1.5 0 0013.5 8z"
      fill="#b5b5b5"
    />
  </svg>
);

/**
 * TestCard - Configuration card component for UI magician agent setup
 * Displays a form for configuring Figma access tokens and design URLs
 * with collapsible sections and action buttons
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="flex w-[320px] flex-col rounded bg-[#1a1a17] p-8 font-['Inter']">
      {/* Header: Title + Settings Icon */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[20px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <SettingsIcon />
      </div>

      {/* Collapsible hint - truncated text indicates more content available */}
      <div className="mb-16 flex items-center gap-2">
        <ChevronIcon
          width="10"
          height="7"
          viewBox="0 0 8 5"
          path="M0 5L4 0L8 5H0Z"
          fill="#8b9291"
        />
        <span className="text-[15px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mb-6 mt-2 flex items-center gap-2">
        <ChevronIcon
          width="14"
          height="10"
          viewBox="0 0 12 8"
          path="M0 8L6 0L12 8H0Z"
          fill="#b2b2b1"
        />
        <span className="text-[17px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-5">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="text-[16px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon color="#a4a4a3" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border-2 border-[#a5adad] bg-[#272822] px-4 py-3 text-[15px] font-semibold text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL input field */}
      <div className="mb-7">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="text-[16px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon color="#a3a3a2" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border-[3px] border-[#929291] bg-[#272822] px-4 py-3 text-[15px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Action buttons */}
      <div className="my-8 flex gap-5">
        <button className="flex-1 rounded bg-[#843a17] px-8 py-4 text-[16px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-8 py-4 text-[16px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <span className="text-[18px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-[14px] text-[#b0b0b0]">© AutonomyAI</span>
      </div>
    </div>
  );
};
