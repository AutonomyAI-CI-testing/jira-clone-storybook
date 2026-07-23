export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[360px] rounded-lg bg-[#1c1c1c] px-6 py-5 text-[#e8e8e8] font-sans"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold tracking-tight text-[#f0f0f0]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#b0b0b0] hover:text-white"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </div>

      {/* Collapsed section */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-[#c8c8c8]"
      >
        <ChevronUp />
        <span className="truncate text-sm">From entire frame to a singl...</span>
      </button>

      {/* Add New Design (expanded) */}
      <div className="mb-2 flex items-center gap-2 text-[#d0d0d0]">
        <ChevronUp />
        <span className="text-base font-medium">Add New Design</span>
      </div>

      <div className="mt-6 space-y-5">
        {/* Personal Access Token */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#d4d4d4]">Personal Access Token</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#c0c0c0] outline-none"
          />
        </div>

        {/* Design URL */}
        <div>
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#d4d4d4]">Design URL</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#c0c0c0] outline-none"
          />
        </div>

        {/* Action buttons */}
        <div className="flex justify-center gap-3 pt-1">
          <button
            type="button"
            className="rounded-md bg-[#b4532a] px-6 py-2.5 text-sm font-medium text-[#e8c4b0] hover:bg-[#c45c26]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#b4532a] px-6 py-2.5 text-sm font-medium text-[#e8c4b0] hover:bg-[#c45c26]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-10 text-lg font-medium text-[#e0e0e0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const ChevronUp = () => (
  <svg
    width="14"
    height="14"
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
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#9a9a9a"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);
