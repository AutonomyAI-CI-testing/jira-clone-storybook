/**
 * Settings icon (gear/cog) used in the header
 */
const SettingsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
    aria-label="Settings"
  >
    <path
      d="M7 10C8.10457 10 9 9.10457 9 8C9 6.89543 8.10457 6 7 6C5.89543 6 5 6.89543 5 8C5 9.10457 5.89543 10 7 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M13.5 8C13.5 8.83 13.37 9.63 13.13 10.38L11.5 9.5L10.5 11L12.13 11.88C11.45 13.03 10.41 13.94 9.16 14.46L8.5 12.5H6.5L5.84 14.46C4.59 13.94 3.55 13.03 2.87 11.88L4.5 11L3.5 9.5L1.87 10.38C1.63 9.63 1.5 8.83 1.5 8C1.5 7.17 1.63 6.37 1.87 5.62L3.5 6.5L4.5 5L2.87 4.12C3.55 2.97 4.59 2.06 5.84 1.54L6.5 3.5H8.5L9.16 1.54C10.41 2.06 11.45 2.97 12.13 4.12L10.5 5L11.5 6.5L13.13 5.62C13.37 6.37 13.5 7.17 13.5 8Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

/**
 * Chevron icon used for collapsible sections
 */
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Info icon with circle and "i" mark
 */
const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Info"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 6.5V10.5M7.5 4.5V4.6"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * TestCard component displays a form for configuring a UI magician agent.
 * This is a static/read-only representation — inputs are not interactive.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="min-h-[508px] w-64 bg-[#1c1c17] p-5 font-primary">
      {/* Header with title and settings icon */}
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle row */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronIcon className="text-[#8b9291]" />
        <p className="text-sm font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Collapsible section header */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronIcon className="text-[#b2b2b1]" />
        <h2 className="text-sm font-semibold text-[#b2b2b1]">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-2 flex items-center gap-1.5">
        <label className="text-sm font-semibold text-[#a4a4a3]">
          Personal Access Token
        </label>
        <InfoIcon className="text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-4 w-full rounded border border-[#a5adad] bg-[#272822] px-4 py-4 text-sm font-semibold text-[#737470] placeholder:text-[#737470]"
        aria-label="Personal Access Token"
      />

      {/* Design URL field */}
      <div className="mb-2 flex items-center gap-1.5">
        <label className="text-sm font-semibold text-[#a3a3a2]">
          Design URL
        </label>
        <InfoIcon className="text-[#a3a3a2]" />
      </div>
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mb-8 w-full rounded border-2 border-[#929291] bg-[#272822] px-4 py-4 text-sm font-semibold text-[#71726e] placeholder:text-[#71726e]"
        aria-label="Design URL"
      />

      {/* Action buttons */}
      <div className="mb-8 flex items-center gap-6">
        <button className="rounded bg-[#843a17] px-6 py-3 text-sm font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-6 py-3 text-sm font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section title for recent activity */}
      <h2 className="text-sm font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>

      {/* Footer with copyright */}
      <div className="border-gray-300 mt-3 border-t pt-3 text-center">
        <p className="text-sm text-[#b0b0b0]">© AutonomyAI</p>
      </div>
    </div>
  );
};
