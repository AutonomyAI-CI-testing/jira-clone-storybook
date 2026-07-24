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
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
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

export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-lg bg-[#1a1a1a] px-6 py-5 text-[#c8c8c8]">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium text-[#d4d4d4]">UI magician Agent</h1>
          <button
            type="button"
            className="text-[#9a9a9a] hover:text-[#c8c8c8]"
            aria-label="Settings"
          >
            <GearIcon />
          </button>
        </div>

        {/* Collapsed section */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#9a9a9a]"
        >
          <ChevronUpIcon />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Expanded: Add New Design */}
        <div className="mb-8">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#c8c8c8]"
          >
            <ChevronUpIcon />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#b0b0b0]">Personal Access Token</label>
              <span className="text-[#7a7a7a]">
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              placeholder="figd_xxxxxxxxxxxxxxxx"
              defaultValue="figd_xxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#6b6b6b] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#b0b0b0] outline-none placeholder:text-[#6b6b6b]"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#b0b0b0]">Design URL</label>
              <span className="text-[#7a7a7a]">
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              placeholder="https://www.figma.com/file/:"
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#b0b0b0] outline-none placeholder:text-[#6b6b6b]"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 pl-4">
            <button
              type="button"
              className="flex-1 rounded-md bg-[#b5542c] px-4 py-2.5 text-sm font-medium text-[#d4b8a8]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="flex-1 rounded-md bg-[#b5542c] px-4 py-2.5 text-sm font-medium text-[#d4b8a8]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <h2 className="text-base font-medium text-[#c8c8c8]">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
