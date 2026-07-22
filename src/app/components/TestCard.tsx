export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[340px] bg-[#1a1a1a] px-5 py-5 text-[14px] leading-5 text-[#d4d4d4]">
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-[16px] font-medium text-[#e5e5e5]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="flex h-6 w-6 items-center justify-center text-[#a3a3a3]"
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
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="mb-6 flex w-full items-center gap-2 text-left text-[#c4c4c4]"
        >
          <ChevronUp />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        <div className="mb-10">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-[15px] text-[#d4d4d4]"
          >
            <ChevronUp />
            <span>Add New Design</span>
          </button>

          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2 text-[#c4c4c4]">
              <span>Personal Access Token</span>
              <InfoIcon />
            </div>
            <div className="rounded border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2.5 font-mono text-[13px] text-[#b0b0b0]">
              figd_xxxxxxxxxxxxxxxx
            </div>
          </div>

          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2 text-[#c4c4c4]">
              <span>Design URL</span>
              <InfoIcon />
            </div>
            <div className="rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 font-mono text-[13px] text-[#b0b0b0]">
              https://www.figma.com/file/:
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#b45309] px-5 py-2.5 text-[14px] text-[#d6d3d1]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[110px] rounded-md bg-[#b45309] px-5 py-2.5 text-[14px] text-[#d6d3d1]"
            >
              Prepare
            </button>
          </div>
        </div>

        <div className="text-[15px] text-[#d4d4d4]">Recent Breakdowns</div>
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
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-[#8a8a8a]"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
