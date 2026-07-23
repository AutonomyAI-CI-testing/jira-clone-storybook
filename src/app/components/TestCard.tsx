export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[360px] flex-col gap-6 bg-[#1a1a1a] px-6 py-5 text-[#c8c8c8]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-medium text-[#d0d0d0]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="flex h-7 w-7 items-center justify-center rounded text-[#9a9a9a]"
        >
          <GearIcon />
        </button>
      </div>

      {/* Collapsed section */}
      <button
        type="button"
        className="flex items-center gap-2 text-left text-sm text-[#9a9a9a]"
      >
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="flex flex-col gap-4">
        <button
          type="button"
          className="flex items-center gap-2 text-left text-base font-medium text-[#b0b0b0]"
        >
          <ChevronUpIcon />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-[#b0b0b0]">
              Personal Access Token
            </label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxx"
            className="w-full rounded-sm border border-[#6a6a6a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#9a9a9a] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-[#b0b0b0]">Design URL</label>
            <InfoIcon />
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded-sm border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#b0b0b0] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3 pt-1">
          <button
            type="button"
            className="rounded-md bg-[#c45c26] px-6 py-2.5 text-sm font-medium text-[#e8d5c8]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#c45c26] px-6 py-2.5 text-sm font-medium text-[#e8d5c8]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-4">
        <h2 className="text-base font-medium text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

const GearIcon = (): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
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

const InfoIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#8a8a8a]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);
