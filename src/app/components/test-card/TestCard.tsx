/**
 * Icon Components
 */
const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

/**
 * TestCard component
 *
 * Displays a settings/configuration panel for a UI automation agent.
 * Features a dark theme interface with form inputs and action buttons.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="font-sans min-h-[508px] w-[254px] bg-[#1a1a1a] p-5"
    >
      {/* Header with title and settings icon */}
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <span className="text-[#b5b5b5]">
          <GearIcon />
        </span>
      </div>

      {/* Subtitle with collapsed section indicator */}
      <div className="mb-12 flex items-center gap-1 text-[#8b9291]">
        <ChevronUpIcon />
        <span className="text-xs font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header: Add New Design */}
      <div className="mb-4 flex items-center gap-2 text-[#b2b2b1]">
        <ChevronUpIcon />
        <span className="text-sm font-semibold">Add New Design</span>
      </div>

      {/* Form field: Personal Access Token */}
      <div className="mb-3">
        <div className="mb-1 flex items-center gap-1 text-[#a4a4a3]">
          <span className="text-xs font-semibold">Personal Access Token</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#4a4a4a] bg-[#2a2a2a] px-3 py-2 text-xs text-[#737470] outline-none"
          readOnly
        />
      </div>

      {/* Form field: Design URL */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-1 text-[#a4a4a3]">
          <span className="text-xs font-semibold">Design URL</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#4a4a4a] bg-[#2a2a2a] px-3 py-2 text-xs text-[#737470] outline-none"
          readOnly
        />
      </div>

      {/* Action buttons */}
      <div className="mb-8 flex gap-3">
        <button className="flex-1 cursor-pointer rounded-xl bg-[#b5451b] py-3 text-xs font-semibold text-[#d4b8a8]">
          Awesome
        </button>
        <button className="flex-1 cursor-pointer rounded-xl bg-[#b5451b] py-3 text-xs font-semibold text-[#d4b8a8]">
          Prepare
        </button>
      </div>

      {/* Footer: Recent items section header */}
      <div>
        <span className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
