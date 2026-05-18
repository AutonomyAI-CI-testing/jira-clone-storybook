// Settings gear icon for the header
const GearIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 14 16"
    fill="none"
    className="flex-shrink-0"
    aria-label="Settings"
  >
    <path
      d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
      stroke="#B5B5B5"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M11.5 6.5L12.5 5.5L11.5 4.5L10.5 5.5L11.5 6.5ZM11.5 7.5L12.5 8.5L11.5 9.5L10.5 8.5L11.5 7.5ZM7 1V3M7 11V13M1 7H3M11 7H13M3.5 3.5L4.5 4.5M9.5 9.5L10.5 10.5M3.5 10.5L4.5 9.5M9.5 4.5L10.5 3.5"
      stroke="#B5B5B5"
      strokeWidth="1"
    />
  </svg>
);

// Chevron icon indicating collapsed/expandable state
const ChevronUpIcon = ({
  color,
  strokeWidth = "1.5",
}: {
  color: string;
  strokeWidth?: string;
}) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 8 5"
    fill="none"
    className="flex-shrink-0"
    aria-hidden="true"
  >
    <path d="M1 4L4 1L7 4" stroke={color} strokeWidth={strokeWidth} />
  </svg>
);

// Larger chevron icon for section headers
const ChevronUpLargeIcon = () => (
  <svg
    width="18"
    height="12"
    viewBox="0 0 12 8"
    fill="none"
    className="flex-shrink-0"
    aria-hidden="true"
  >
    <path d="M2 6L6 2L10 6" stroke="#B2B2B1" strokeWidth="2" />
  </svg>
);

// Info icon for field labels
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 15 15"
    fill="none"
    className="flex-shrink-0"
    aria-label="More information"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke={color}
      strokeWidth="1"
      fill="none"
    />
    <path d="M7.5 6.5V11M7.5 4.5V5" stroke={color} strokeWidth="1.5" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="min-h-[508px] w-[420px] bg-[#1C1D17] p-8 font-['Inter']">
      {/* Header with agent name and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[22px] font-semibold text-[#B5B5B5]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      {/* Collapsed section indicator - truncated text suggests there's more to expand */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronUpIcon color="#8B9291" />
        <p className="text-[16px] font-semibold text-[#8B9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Main form section for adding a new design */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronUpLargeIcon />
        <h2 className="text-[20px] font-semibold text-[#B2B2B1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input - displays masked token value */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-1.5">
          <label className="text-[14px] font-semibold text-[#A4A4A3]">
            Personal Access Token
          </label>
          <InfoIcon color="#A4A4A3" />
        </div>
        <div className="rounded-sm border-2 border-[#929291] bg-[#272822] px-4 py-4">
          <p className="text-[14px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </p>
        </div>
      </div>

      {/* Design URL input - displays Figma URL prefix */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-1.5">
          <label className="text-[14px] font-semibold text-[#A3A3A2]">
            Design URL
          </label>
          <InfoIcon color="#A3A3A2" />
        </div>
        <div className="rounded-sm border border-[#A5ADAD] bg-[#272822] px-4 py-4">
          <p className="text-[14px] font-semibold text-[#71726E]">
            https://www.figma.com/file/:
          </p>
        </div>
      </div>

      {/* Action buttons for primary operations */}
      <div className="mb-16 flex gap-4">
        <button className="h-[48px] w-[120px] rounded bg-[#843A17] text-[16px] font-semibold text-[#8C8078]">
          Awesome
        </button>
        <button className="h-[48px] w-[120px] rounded bg-[#843A17] text-[16px] font-semibold text-[#8C8078]">
          Prepare
        </button>
      </div>

      {/* Section header for historical data */}
      <h2 className="text-[18px] font-semibold text-[#B0B0B0]">
        Recent Breakdowns
      </h2>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 mt-6 border-t pt-3 text-center">
        <p className="text-sm text-[#B0B0B0]">© AutonomyAI</p>
      </div>
    </div>
  );
};
