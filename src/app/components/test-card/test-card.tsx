// SVG icon components for the test card UI
const SettingsIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="1" />
    <path d="M12 1v6m0 6v6" />
    <path d="M4.22 4.22l4.24 4.24m3.08 3.08l4.24 4.24" />
    <path d="M1 12h6m6 0h6" />
    <path d="M4.22 19.78l4.24-4.24m3.08-3.08l4.24-4.24" />
  </svg>
);

const ChevronUp = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

/**
 * TestCard component displays an agent configuration interface with collapsible sections,
 * input fields for API credentials, and action buttons.
 *
 * The component uses a dark theme with custom grayscale colors to match the AI agent aesthetic.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="text-gray-400 w-64 bg-black px-5 py-6 pb-10">
      {/* Header with title and settings button */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#a8a8a8]">
          UI magician Agent
        </h1>
        <button className="flex h-6 w-6 items-center justify-center rounded-full border border-[#5a5a5a] text-[#7a7a7a] hover:bg-[#1a1a1a] hover:text-[#9a9a9a]">
          <SettingsIcon />
        </button>
      </div>

      {/* First collapsible section showing project name */}
      <div className="mb-12 flex items-center gap-2">
        <button className="flex h-4 w-4 items-center justify-center text-[#6a6a6a] hover:text-[#8a8a8a]">
          <ChevronUp />
        </button>
        <span className="text-[11.5px] font-semibold text-[#7a7a7a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design collapsible section */}
      <div className="mb-12 flex items-center gap-2">
        <button className="flex h-4 w-4 items-center justify-center text-[#6a6a6a] hover:text-[#8a8a8a]">
          <ChevronUp />
        </button>
        <span className="text-[13.5px] font-semibold text-[#9a9a9a]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token input field with info tooltip */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#8a8a8a]">
            Personal Access Token
          </label>
          <button className="flex h-4 w-4 items-center justify-center rounded-full border border-[#6a6a6a] text-[#7a7a7a] hover:text-[#8a8a8a]">
            <InfoIcon />
          </button>
        </div>
        <input
          type="password"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#5a5a5a] bg-[#1a1a1a] px-3 py-2 text-[11.5px] font-semibold text-[#7a7a7a] placeholder-[#6a6a6a] focus:border-[#7a7a7a] focus:outline-none"
        />
      </div>

      {/* Design URL input field with info tooltip */}
      <div className="mb-10">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#8a8a8a]">
            Design URL
          </label>
          <button className="flex h-4 w-4 items-center justify-center rounded-full border border-[#6a6a6a] text-[#7a7a7a] hover:text-[#8a8a8a]">
            <InfoIcon />
          </button>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-[#5a5a5a] bg-[#1a1a1a] px-3 py-2 text-[10.5px] font-semibold text-[#7a7a7a] placeholder-[#6a6a6a] focus:border-[#7a7a7a] focus:outline-none"
        />
      </div>

      {/* Primary action buttons for confirmation */}
      <div className="mb-12 flex gap-4">
        <button className="flex-1 rounded bg-[#8b5a3c] px-4 py-3 text-center text-[11.5px] font-semibold text-[#8c8078] transition-colors hover:bg-[#9d6b48]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#8b5a3c] px-4 py-3 text-center text-[11.5px] font-semibold text-[#8c8078] transition-colors hover:bg-[#9d6b48]">
          Prepare
        </button>
      </div>

      {/* Section header for displaying breakdown history */}
      <div className="mt-4">
        <h2 className="text-[13.5px] font-semibold text-[#9a9a9a]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright information */}
      <div className="border-gray-300 mt-3 border-t pt-3 text-center">
        <p className="text-gray-400 text-xs">© AutonomyAI</p>
      </div>
    </div>
  );
};
