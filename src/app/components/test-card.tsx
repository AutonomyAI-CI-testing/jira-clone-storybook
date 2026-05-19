/**
 * TestCard component displays a UI configuration card for the AI magician agent.
 * This card shows form inputs for Figma token and design URL, along with action buttons.
 */

// Settings icon (gear)
const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Settings"
  >
    <path
      d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.16 12.8a1.37 1.37 0 00.28 1.51l.05.05a1.66 1.66 0 
      010 2.36 1.66 1.66 0 01-2.36 0l-.05-.05a1.37 1.37 0 
      00-1.51-.28 1.37 1.37 0 00-.84 1.26v.15a1.66 1.66 0 
      01-3.32 0v-.09a1.37 1.37 0 00-.9-1.26 1.37 1.37 0 
      00-1.51.28l-.05.05a1.66 1.66 0 01-2.36 0 1.66 1.66 0 
      010-2.36l.05-.05a1.37 1.37 0 00.28-1.51 1.37 1.37 0 
      00-1.26-.84h-.15a1.66 1.66 0 010-3.32h.09a1.37 1.37 0 
      001.26-.9 1.37 1.37 0 00-.28-1.51l-.05-.05a1.66 1.66 0 
      010-2.36 1.66 1.66 0 012.36 0l.05.05a1.37 1.37 0 
      001.51.28h.06a1.37 1.37 0 00.84-1.26v-.15a1.66 1.66 0 
      013.32 0v.09a1.37 1.37 0 00.84 1.26 1.37 1.37 0 001.51-.28l.05-.05a1.66 
      1.66 0 012.36 0 1.66 1.66 0 010 2.36l-.05.05a1.37 1.37 0 
      00-.28 1.51v.06a1.37 1.37 0 001.26.84h.15a1.66 1.66 0 010 3.32h-.09a1.37 
      1.37 0 00-1.26.84z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Collapsible chevron icon
const ChevronIcon = ({ color }: { color: string }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1.5 6L6 1.5L10.5 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Info icon (circle with 'i')
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Information"
  >
    <circle cx="9" cy="9" r="7.5" stroke={color} strokeWidth="1.5" />
    <path
      d="M9 6v3.5M9 12.5h.01"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="font-sans w-[508px] rounded bg-[#1a1a17] p-5 text-white">
      {/* Header with agent title and settings button */}
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[13.5px] font-normal text-[#8b8b8b]">
          UI magician Agent
        </span>
        <SettingsIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed section showing truncated description */}
      <div className="mb-12 ml-1 flex items-center gap-2.5">
        <ChevronIcon color="#7a7a7a" />
        <span className="text-[11.5px] font-semibold text-[#7a7a7a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mb-6 flex items-center gap-2.5">
        <ChevronIcon color="#8b8b8b" />
        <span className="text-[13.5px] font-semibold text-[#8b8b8b]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input with info icon */}
      <div className="mb-5 flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon color="#a4a4a3" />
      </div>

      {/* Token input field - displays masked/placeholder token */}
      <div className="mb-10 border border-[#a5adad] bg-[#272822] px-3 py-2.5">
        <span className="text-[13px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL input with info icon */}
      <div className="mb-5 flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon color="#a3a3a2" />
      </div>

      {/* URL input field - expects Figma file URL */}
      <div className="mb-8 border-2 border-[#929291] bg-[#272822] px-3 py-2.5">
        <span className="text-[13px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Action buttons for design processing */}
      <div className="mb-12 flex gap-5">
        <button className="h-[45px] w-[110px] rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="h-[45px] w-[110px] rounded bg-[#843a17] px-4 py-2.5 text-[11.5px] font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mb-4">
        <span className="text-[13.5px] font-semibold text-[#8b8b8b]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="text-gray-400 text-[12px]">© AutonomyAI</span>
      </div>
    </div>
  );
};
