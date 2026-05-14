/**
 * InfoIcon component - Renders an info circle icon with an 'i' character.
 * Used to provide contextual help hints next to form labels.
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.2" />
    <text
      x="8"
      y="11.5"
      fontSize="11"
      fontWeight="600"
      textAnchor="middle"
      fill={color}
    >
      i
    </text>
  </svg>
);

/**
 * UpwardChevron component - Renders an upward-pointing triangle.
 * Used as a visual indicator for expandable/collapsible sections.
 */
const UpwardChevron = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={`M${width / 2} 0L${width} ${height}H0L${width / 2} 0Z`}
      fill={color}
    />
  </svg>
);

/**
 * TargetIcon component - Renders a compass/target icon.
 * Used in the header to represent navigation or focus.
 */
const TargetIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="8"
      cy="8"
      r="6"
      stroke="#b5b5b5"
      strokeWidth="1.5"
      fill="none"
    />
    <circle cx="8" cy="8" r="2" fill="#b5b5b5" />
    <line x1="8" y1="2" x2="8" y2="4" stroke="#b5b5b5" strokeWidth="1.5" />
    <line x1="8" y1="12" x2="8" y2="14" stroke="#b5b5b5" strokeWidth="1.5" />
    <line x1="2" y1="8" x2="4" y2="8" stroke="#b5b5b5" strokeWidth="1.5" />
    <line x1="12" y1="8" x2="14" y2="8" stroke="#b5b5b5" strokeWidth="1.5" />
  </svg>
);

/**
 * TestCard component - A dark-themed form card for configuring a design integration.
 *
 * Displays a form to collect Figma Personal Access Token and Design URL,
 * with action buttons and a section for recent breakdowns.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded bg-[#2a2a2a] p-5">
      {/* Header with title and target icon */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[14px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <TargetIcon />
      </div>

      {/* Collapsed description section - Shows truncated text with chevron indicator */}
      <div className="mb-16 flex items-center gap-2">
        <UpwardChevron width={9} height={6} color="#8b9291" />
        <span className="text-[12px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section - Primary action heading */}
      <div className="mb-7 flex items-center gap-2">
        <UpwardChevron width={13} height={9} color="#b2b2b1" />
        <span className="text-[14px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-2.5 flex items-center gap-2">
        <span className="text-[12px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon color="#a4a4a3" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-7 w-full rounded border-[1.5px] border-[#A5ADAD] bg-[#272822] px-3 py-2.5 text-[12px] font-semibold leading-[13.92px] text-[#737470] placeholder-[#737470]"
      />

      {/* Design URL input field */}
      <div className="mb-2.5 flex items-center gap-2">
        <span className="text-[12px] font-semibold leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon color="#a3a3a2" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mb-8 w-full rounded border-[2.5px] border-[#929291] bg-[#272822] px-3 py-2.5 text-[11px] font-semibold leading-[12.71px] text-[#71726e] placeholder-[#71726e]"
      />

      {/* Action buttons */}
      <div className="mb-12 flex gap-3">
        <button className="flex-1 rounded bg-[#843A17] px-5 py-3.5 text-[12.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843A17] px-5 py-3.5 text-[12.5px] font-semibold leading-[13.92px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section heading */}
      <h2 className="text-[14px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>

      {/* Footer with copyright */}
      <div className="border-gray-300 mt-3 border-t pt-3 text-center">
        <p className="text-[12px] text-[#b5b5b5]">© AutonomyAI</p>
      </div>
    </div>
  );
};
