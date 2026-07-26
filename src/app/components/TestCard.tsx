export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-lg bg-[#1a1a1a] px-6 py-5 text-[14px] text-[#c8c8c8] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-[18px] font-medium tracking-tight text-[#d0d0d0]">
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
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
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

        {/* Add New Design */}
        <button
          type="button"
          className="mb-5 flex w-full items-center gap-2 text-left text-[15px] font-medium text-[#c8c8c8]"
        >
          <ChevronUp />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2 text-[13px] text-[#a0a0a0]">
            <span>Personal Access Token</span>
            <InfoIcon />
          </div>
          <div className="rounded border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2.5 text-[13px] text-[#8a8a8a]">
            figd_xxxxxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL (focused border) */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2 text-[13px] text-[#a0a0a0]">
            <span>Design URL</span>
            <InfoIcon />
          </div>
          <div className="rounded border border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-[13px] text-[#8a8a8a]">
            https://www.figma.com/file/:
          </div>
        </div>

        {/* Actions */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#A85A2A] px-6 py-2.5 text-[14px] font-medium text-[#e8c4a8]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#A85A2A] px-6 py-2.5 text-[14px] font-medium text-[#e8c4a8]"
          >
            Prepare
          </button>
        </div>

        {/* Footer */}
        <div className="text-[15px] font-medium text-[#c8c8c8]">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
}

function ChevronUp() {
  return (
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
      className="shrink-0"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0 text-[#8a8a8a]"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export default TestCard;
