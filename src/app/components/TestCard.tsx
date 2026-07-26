const GearIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const ChevronUpIcon = () => (
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
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-full max-w-[420px] bg-[#1c1c1a] px-6 py-5 text-[#c8c8c4] font-sans"
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <h1 className="text-xl font-semibold tracking-tight text-[#e8e8e4]">
          UI magician Agent
        </h1>
        <button
          type="button"
          className="mt-0.5 text-[#9a9a94] hover:text-[#c8c8c4]"
          aria-label="Settings"
        >
          <GearIcon />
        </button>
      </div>

      {/* Collapsed context row */}
      <button
        type="button"
        className="mb-10 flex w-full items-center gap-2 text-left text-sm text-[#9a9a94]"
      >
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design section */}
      <div className="mb-10">
        <button
          type="button"
          className="mb-5 flex items-center gap-2 text-left text-base font-medium text-[#c8c8c4]"
        >
          <ChevronUpIcon />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#a8a8a2]">
              Personal Access Token
            </label>
            <span className="text-[#7a7a74]" aria-hidden="true">
              <InfoIcon />
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded border border-[#3a3a36] bg-[#2a2a26] px-3 py-2.5 text-sm text-[#b0b0aa] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#a8a8a2]">Design URL</label>
            <span className="text-[#7a7a74]" aria-hidden="true">
              <InfoIcon />
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded border border-[#8a8a84] bg-[#2a2a26] px-3 py-2.5 text-sm text-[#b0b0aa] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#b4532a] px-8 py-2.5 text-sm font-medium text-[#e8c4b0]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#b4532a] px-8 py-2.5 text-sm font-medium text-[#e8c4b0]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-2">
        <h2 className="text-base font-medium text-[#c8c8c4]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

export default TestCard;
