/**
 * Icon components for the TestCard UI
 */
const AtomIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-hidden="true"
  >
    {/* Six dots arranged in a hexagonal pattern */}
    <circle cx="9" cy="2" r="1.5" fill="#B5B5B5" />
    <circle cx="13.5" cy="4.5" r="1.5" fill="#B5B5B5" />
    <circle cx="13.5" cy="13.5" r="1.5" fill="#B5B5B5" />
    <circle cx="9" cy="16" r="1.5" fill="#B5B5B5" />
    <circle cx="4.5" cy="13.5" r="1.5" fill="#B5B5B5" />
    <circle cx="4.5" cy="4.5" r="1.5" fill="#B5B5B5" />
  </svg>
);

const ChevronUpSmall = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-hidden="true"
  >
    <path
      d="M7 4L4 1L1 4"
      stroke="#8B9291"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpLarge = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-hidden="true"
  >
    <path
      d="M11 7L6 2L1 7"
      stroke="#B2B2B1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1.5" />
    <path
      d="M7.5 10.5V7.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="5" r="0.75" fill={color} />
  </svg>
);

/**
 * TestCard component displaying a dark-themed card UI for design management.
 * Features include agent information, form inputs for Figma integration,
 * and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[320px] overflow-hidden rounded-sm bg-[#1C1D17]">
      {/* Subtle gradient bar for visual accent at the top */}
      <div className="h-[9px] bg-gradient-to-r from-[#2A2B26] to-[#1C1D17]" />

      {/* Header with agent name and icon */}
      <div className="flex items-center justify-between px-8 py-8">
        <h1 className="text-[15px] font-semibold leading-[18px] text-[#B5B5B5]">
          UI magician Agent
        </h1>
        <AtomIcon />
      </div>

      {/* Subtitle row with collapsible indicator */}
      <div className="flex items-center gap-2 px-8 pb-[100px]">
        <ChevronUpSmall />
        <span className="text-[13px] font-semibold leading-[16px] text-[#8B9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header for design addition */}
      <div className="mb-10 flex items-center gap-2 px-8">
        <ChevronUpLarge />
        <h2 className="text-[15px] font-semibold leading-[18px] text-[#B2B2B1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-8 px-8">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-[13px] font-semibold leading-[16px] text-[#A4A4A3]">
            Personal Access Token
          </label>
          <InfoIcon color="#A4A4A3" />
        </div>
        <div className="flex h-[65px] items-center rounded-sm border-2 border-[#A5ADAD] bg-[#272822] px-4">
          <span className="text-[13px] font-semibold leading-[16px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL input field */}
      <div className="mb-12 px-8">
        <div className="mb-3 flex items-center gap-2">
          <label className="text-[13px] font-semibold leading-[16px] text-[#A3A3A2]">
            Design URL
          </label>
          <InfoIcon color="#A3A3A2" />
        </div>
        <div className="flex h-[65px] items-center rounded-sm border-2 border-[#929291] bg-[#272822] px-4">
          <span className="text-[13px] font-semibold leading-[16px] text-[#71726E]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Primary action buttons */}
      <div className="mb-20 flex gap-6 px-8">
        <button
          className="flex h-[55px] w-[115px] items-center justify-center rounded-md bg-[#843A17] text-[13px] font-semibold leading-[16px] text-[#8C8078]"
          aria-label="Awesome"
        >
          Awesome
        </button>
        <button
          className="flex h-[55px] w-[115px] items-center justify-center rounded-md bg-[#843A17] text-[13px] font-semibold leading-[16px] text-[#8C8078]"
          aria-label="Prepare"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div className="px-8 pb-10">
        <h2 className="text-[15px] font-semibold leading-[18px] text-[#B0B0B0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-[13px] text-[#B0B0B0]">© AutonomyAI</span>
      </div>
    </div>
  );
};
