/**
 * Atom icon with nucleus and three orbital rings
 */
const AtomIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#A3A3A2]"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      transform="rotate(60 8 8)"
    />
    <ellipse
      cx="8"
      cy="8"
      rx="6"
      ry="3"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      transform="rotate(120 8 8)"
    />
  </svg>
);

/**
 * Chevron icon for collapsible sections
 */
const ChevronIcon = ({ className }: { className: string }) => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M2 7L5 3L8 7"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

/**
 * Info icon for help tooltips
 */
const InfoIcon = ({ className }: { className: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="More information"
  >
    <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M6 4V6.5M6 8.5H6.005"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * TestCard component displays a configuration panel for the UI magician Agent.
 * Includes form inputs for Personal Access Token and Design URL, along with action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="font-sans w-[254px] bg-[#1C1D17] px-5 py-6 text-[11.5px] font-semibold">
      {/* Header with agent name and atom icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-[13.5px] text-[#B0B0B0]">UI magician Agent</h1>
        <AtomIcon />
      </div>

      {/* Collapsible subtitle - truncated text indicates expandable content */}
      <div className="mb-8 flex items-center gap-1.5">
        <ChevronIcon className="text-[#8B9291]" />
        <span className="text-[#8B9291]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section - collapsible form section */}
      <div className="mb-8 flex items-center gap-1.5">
        <ChevronIcon className="text-[#B5B5B5]" />
        <h2 className="text-[13.5px] text-[#B5B5B5]">Add New Design</h2>
      </div>

      {/* Personal Access Token label with info icon */}
      <div className="mb-2.5 flex items-center gap-1">
        <label className="text-[#A3A3A2]">Personal Access Token</label>
        <InfoIcon className="text-[#A3A3A2]" />
      </div>

      {/* Token input field with placeholder pattern */}
      <div className="mb-7 h-[37px] rounded border border-[#A5ADAD] bg-[#272822] px-3 py-2.5">
        <span className="text-[#717270]">figd_xxxxxxxxxxxxxxxxx</span>
      </div>

      {/* Design URL label with info icon */}
      <div className="mb-2.5 flex items-center gap-1">
        <label className="text-[#A4A4A3]">Design URL</label>
        <InfoIcon className="text-[#A4A4A3]" />
      </div>

      {/* URL input field with Figma URL pattern placeholder */}
      <div className="mb-8 h-[36px] rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5">
        <span className="text-[10.5px] text-[#737470]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Action Buttons */}
      <div className="mb-10 flex gap-4">
        <button className="h-[42px] w-[90px] rounded bg-[#843A17] text-[#8C8078]">
          Awesome
        </button>
        <button className="h-[42px] w-[90px] rounded bg-[#843A17] text-[#8C8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
        <h2 className="text-[13.5px] text-[#B5B5B5]">Recent Breakdowns</h2>
      </div>

      {/* Copyright footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        © AutonomyAI
      </div>
    </div>
  );
};
