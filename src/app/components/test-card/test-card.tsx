/**
 * SVG icon components extracted as constants to improve readability
 * and maintainability. All icons use currentColor to inherit text color.
 */
const AtomIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
  >
    {/* Center circle */}
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    {/* Outer ring */}
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
    {/* Electron dots */}
    <circle cx="12" cy="4" r="1.5" fill="currentColor" />
    <circle cx="12" cy="20" r="1.5" fill="currentColor" />
    <circle cx="19" cy="9" r="1.5" fill="currentColor" />
    <circle cx="5" cy="15" r="1.5" fill="currentColor" />
    <circle cx="19" cy="15" r="1.5" fill="currentColor" />
    <circle cx="5" cy="9" r="1.5" fill="currentColor" />
  </svg>
);

const ChevronUpIcon = ({ className = "text-[#8b9291]" }: { className?: string }) => (
  <svg
    width="18"
    height="12"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1 7L6 2L11 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className = "text-[#a4a4a3]" }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7 4V7M7 10H7.01"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * TestCard displays a form for configuring a Figma design integration.
 * This component includes fields for Personal Access Token and Design URL,
 * along with action buttons and a section header for recent breakdowns.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[420px] rounded bg-[#1a1a17] p-8 font-primary">
      {/* Header with agent title and atom icon */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-[20px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <AtomIcon />
      </div>

      {/* Collapsible section indicator - text intentionally truncated */}
      <div className="mb-16 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="text-[16px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Collapsible section header for design configuration */}
      <div className="mb-8 flex items-center gap-3">
        <ChevronUpIcon className="text-[#b2b2b1]" />
        <h2 className="text-[19px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input - displays masked token value */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <label
            htmlFor="token"
            className="text-[15px] font-semibold text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <div className="rounded border-[1.5px] border-[#a5adad] bg-[#272822] px-4 py-4">
          <span className="text-[14px] font-semibold text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL input - displays placeholder Figma URL */}
      <div className="mb-12">
        <div className="mb-3 flex items-center gap-2">
          <label
            htmlFor="url"
            className="text-[15px] font-semibold text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <div className="rounded border-[1.5px] border-[#929291] bg-[#272822] px-4 py-4">
          <span className="text-[13px] font-semibold text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Primary action buttons - intentionally styled with muted orange-brown theme */}
      <div className="mb-24 flex gap-5">
        <button className="rounded bg-[#843a17] px-16 py-3.5 text-[15px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-16 py-3.5 text-[15px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section for displaying recent design breakdowns */}
      <h2 className="text-[19px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>

      {/* Footer with copyright notice */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <span className="text-sm text-gray-400">© AutonomyAI</span>
      </div>
    </div>
  );
};
