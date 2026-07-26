export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-full max-w-md rounded-lg bg-[#1a1a1a] px-6 py-5 text-[#d4d4d4] font-sans"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-xl font-medium text-[#e5e5e5]">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#a3a3a3] hover:text-[#e5e5e5]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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

      {/* Collapsed section row */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-[#a3a3a3]"
      >
        <ChevronUp />
        <span className="truncate text-sm">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-10">
        <button
          type="button"
          className="mb-5 flex w-full items-center gap-2 text-left text-[#c4c4c4]"
        >
          <ChevronUp />
          <span className="text-base font-medium">Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#b0b0b0]">Personal Access Token</label>
            <InfoIcon />
          </div>
          <div className="rounded border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#9a9a9a]">
            figd_xxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-2">
            <label className="text-sm text-[#b0b0b0]">Design URL</label>
            <InfoIcon />
          </div>
          <div className="rounded border-2 border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#b0b0b0]">
            https://www.figma.com/file/:
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#a85a32] px-6 py-2.5 text-sm font-medium text-[#c4a882]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#a85a32] px-6 py-2.5 text-sm font-medium text-[#c4a882]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <h2 className="text-lg font-medium text-[#d4d4d4]">Recent Breakdowns</h2>
    </div>
  );
}

function ChevronUp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
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
}

function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#8a8a8a]"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export default TestCard;
