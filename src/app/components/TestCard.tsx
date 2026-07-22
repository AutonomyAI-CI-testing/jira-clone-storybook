const GearIcon = () => (
  <svg
    width="20"
    height="20"
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
    width="16"
    height="16"
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
      <div className="w-[360px] rounded-md bg-[#1a1c18] px-6 py-6 text-[#c8cfc0] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium text-[#d8ded0]">
            UI magician Agent
          </h1>
          <button
            type="button"
            className="text-[#9aa392] hover:text-[#d8ded0]"
            aria-label="Settings"
          >
            <GearIcon />
          </button>
        </div>

        {/* Collapsed context row */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#9aa392]"
        >
          <ChevronUpIcon />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design section */}
        <div className="mb-10">
          <button
            type="button"
            className="mb-5 flex items-center gap-2 text-base font-medium text-[#c8cfc0]"
          >
            <ChevronUpIcon />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#b8c0a8]">
                Personal Access Token
              </label>
              <span className="text-[#8a9278]" aria-label="More info">
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#6b7360] bg-[#22251f] px-3 py-2.5 text-sm text-[#a8b098] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-sm text-[#b8c0a8]">Design URL</label>
              <span className="text-[#8a9278]" aria-label="More info">
                <InfoIcon />
              </span>
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#8a9280] bg-[#22251f] px-3 py-2.5 text-sm text-[#a8b098] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3 pt-1">
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#a85a2a] px-5 py-2.5 text-sm font-medium text-[#d4a882]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#a85a2a] px-5 py-2.5 text-sm font-medium text-[#d4a882]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-2">
          <h2 className="text-base font-medium text-[#c8cfc0]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
