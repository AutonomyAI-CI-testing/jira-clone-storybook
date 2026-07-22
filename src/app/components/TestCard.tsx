const GearIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      stroke="currentColor"
      strokeWidth="1.6"
    />
    <path
      d="M19.4 13.5a7.6 7.6 0 0 0 .05-1.5l2.05-1.6-2-3.46-2.45.6a7.7 7.7 0 0 0-1.3-.75L15.3 3h-6.6l-.45 2.79c-.46.2-.9.45-1.3.75l-2.45-.6-2 3.46L4.55 12a7.6 7.6 0 0 0 0 1.5l-2.05 1.6 2 3.46 2.45-.6c.4.3.84.55 1.3.75L8.7 21h6.6l.45-2.79c.46-.2.9-.45 1.3-.75l2.45.6 2-3.46-2.1-1.6Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path d="M1 6.5 6 1.5l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InfoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.4" />
    <path d="M8 7v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <circle cx="8" cy="5" r="0.9" fill="currentColor" />
  </svg>
);

export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-full max-w-md rounded-lg bg-[#1a1a1a] px-6 py-5 text-[#e8e8e8] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-lg font-medium tracking-tight text-[#e0e0e0]">UI magician Agent</h1>
          <button type="button" className="text-[#b0b0b0] hover:text-white" aria-label="Settings">
            <GearIcon />
          </button>
        </div>

        {/* Collapsed section row */}
        <button
          type="button"
          className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#c0c0c0]"
        >
          <span className="text-[#9a9a9a]">
            <ChevronUpIcon />
          </span>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-10">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#d0d0d0]"
          >
            <span className="text-[#9a9a9a]">
              <ChevronUpIcon />
            </span>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <label className="mb-4 block">
            <span className="mb-2 flex items-center gap-2 text-sm text-[#c8c8c8]">
              Personal Access Token
              <span className="text-[#8a8a8a]">
                <InfoIcon />
              </span>
            </span>
            <input
              type="text"
              defaultValue="figd_xxxxxxxxxxxxxxxx"
              readOnly
              className="w-full rounded border border-[#6a6a6a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#b8b8b8] outline-none"
            />
          </label>

          {/* Design URL */}
          <label className="mb-5 block">
            <span className="mb-2 flex items-center gap-2 text-sm text-[#c8c8c8]">
              Design URL
              <span className="text-[#8a8a8a]">
                <InfoIcon />
              </span>
            </span>
            <input
              type="text"
              defaultValue="https://www.figma.com/file/:"
              readOnly
              className="w-full rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#b8b8b8] outline-none"
            />
          </label>

          {/* Actions */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#a54a2a] px-5 py-2.5 text-sm font-medium text-[#e8d4c8]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#a54a2a] px-5 py-2.5 text-sm font-medium text-[#e8d4c8]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <h2 className="text-base font-medium text-[#d0d0d0]">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
