const GearIcon = () => (
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

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-sm bg-[#1a1c16] px-6 py-6 text-[#c8c8c0]"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-lg font-medium tracking-tight text-[#c8c8c0]">
          UI magician Agent
        </h1>
        <button
          type="button"
          className="text-[#8a8a80] hover:text-[#c8c8c0]"
          aria-label="Settings"
        >
          <GearIcon />
        </button>
      </div>

      {/* Collapsed project row */}
      <button
        type="button"
        className="mb-10 flex w-full items-center gap-2 text-left text-sm text-[#8a8a80]"
      >
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-8">
        <button
          type="button"
          className="mb-6 flex w-full items-center gap-2 text-left text-base font-medium text-[#c8c8c0]"
        >
          <ChevronUpIcon />
          <span>Add New Design</span>
        </button>

        <div className="space-y-5">
          {/* Personal Access Token */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#c8c8c0]">
                Personal Access Token
              </label>
              <span className="text-[#8a8a80]" aria-hidden="true">
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#3a3c36] bg-[#2a2c26] px-3 py-2.5 text-sm text-[#c8c8c0] outline-none"
            />
          </div>

          {/* Design URL */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#c8c8c0]">Design URL</label>
              <span className="text-[#8a8a80]" aria-hidden="true">
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#8a8a8a] bg-[#2a2c26] px-3 py-2.5 text-sm text-[#c8c8c0] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3 pt-1">
            <button
              type="button"
              className="min-w-[110px] rounded-lg bg-[#b75c2e] px-6 py-2.5 text-sm font-medium text-[#d4a88a]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[110px] rounded-lg bg-[#b75c2e] px-6 py-2.5 text-sm font-medium text-[#d4a88a]"
            >
              Prepare
            </button>
          </div>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-4">
        <h2 className="text-base font-medium text-[#c8c8c0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

export default TestCard;
