/**
 * Settings/gear icon SVG component used in card header
 */
const SettingsIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-[#b5b5b5]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m6.08 0l4.24-4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m6.08 0l4.24 4.24" />
  </svg>
);

/**
 * Chevron down icon SVG component used for collapsible sections
 */
const ChevronDownIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M7 10l5 5 5-5z" />
  </svg>
);

/**
 * Info icon SVG component used in form field labels
 */
const InfoIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4M12 8h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[254px] bg-black p-5"
      style={{ minHeight: "508px" }}
    >
      {/* Header: Agent name with settings icon */}
      <div className="mb-16 flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible section: Shows a collapsed state for frame conversion options */}
      <div className="mb-16 flex items-center gap-2">
        <ChevronDownIcon className="h-3 w-3 text-[#8b9291]" />
        <p className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section: Main content area for design form inputs */}
      <div className="mb-10 flex items-center gap-2">
        <ChevronDownIcon className="h-3 w-3 text-[#b2b2b1]" />
        <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input field */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoIcon className="h-3.5 w-3.5 text-[#a4a4a3]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border border-[#929291] bg-[#272822] px-3 py-2.5 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470]"
        />
      </div>

      {/* Design URL input field */}
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-2">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <InfoIcon className="h-3.5 w-3.5 text-[#a3a3a2]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border border-[#a5adad] bg-[#272822] px-3 py-2.5 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e]"
        />
      </div>

      {/* Action buttons: Primary CTA for form submission */}
      <div className="mb-12 flex gap-4">
        <button className="flex-1 rounded-sm bg-[#843a17] px-4 py-2.5 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#934124] active:bg-[#763113]">
          Awesome
        </button>
        <button className="flex-1 rounded-sm bg-[#843a17] px-4 py-2.5 text-center text-[11.5px] font-semibold text-[#8c8078] hover:bg-[#934124] active:bg-[#763113]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section: Displays list of recent agent breakdowns */}
      <div>
        <h3 className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
