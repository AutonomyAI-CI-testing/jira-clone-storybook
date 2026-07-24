export const TestCard = () => {
  return (
    <div id="testElem">
      <div className="w-[340px] rounded-lg bg-[#1a1a1a] px-5 py-5 text-[#c8c8c8] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-[16px] font-medium tracking-wide text-[#d0d0d0]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#9a9a9a] hover:text-[#c8c8c8]"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
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
          className="mb-8 flex w-full items-center gap-2 text-left text-[13px] text-[#9a9a9a]"
        >
          <ChevronUp />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design (expanded) */}
        <div className="mb-6">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-[15px] font-medium text-[#c8c8c8]"
          >
            <ChevronDown />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[13px] text-[#b0b0b0]">
                Personal Access Token
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#3a3a3a] bg-[#141414] px-3 py-2.5 text-[13px] text-[#9a9a9a] outline-none"
            />
          </div>

          {/* Design URL (focused) */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[13px] text-[#b0b0b0]">Design URL</label>
              <InfoIcon />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#8a8a8a] bg-[#141414] px-3 py-2.5 text-[13px] text-[#9a9a9a] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-3 pt-1">
            <button
              type="button"
              className="rounded-md bg-[#a84f28] px-6 py-2.5 text-[14px] font-medium text-[#c4a090]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="rounded-md bg-[#a84f28] px-6 py-2.5 text-[14px] font-medium text-[#c4a090]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-2">
          <h2 className="text-[15px] font-medium text-[#c8c8c8]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};

const ChevronUp = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const ChevronDown = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8a8a8a"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export default TestCard;
