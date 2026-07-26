export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-full max-w-[360px] bg-[#1a1a1a] px-6 py-8 text-[#c8c8c8] font-sans"
    >
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-lg font-medium text-[#d4d4d4]">UI magician Agent</h1>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9a9a9a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      </div>

      {/* Collapsed section row */}
      <div className="mb-10 flex items-center gap-2 text-sm text-[#a3a3a3]">
        <ChevronUp />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mb-5 flex items-center gap-2 text-base text-[#c8c8c8]">
        <ChevronUp />
        <span className="font-medium">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <label className="mb-2 flex items-center gap-2 text-sm text-[#b0b0b0]">
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          readOnly
          value="figd_xxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#4a4a4a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#9a9a9a] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <label className="mb-2 flex items-center gap-2 text-sm text-[#b0b0b0]">
          Design URL
          <InfoIcon />
        </label>
        <input
          readOnly
          value="https://www.figma.com/file/:"
          className="w-full rounded border border-[#8a8a8a] bg-[#2a2a2a] px-3 py-2.5 text-sm text-[#b0b0b0] outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-12 flex justify-center gap-3">
        <button
          type="button"
          className="rounded-md bg-[#a54a2a] px-8 py-2.5 text-sm font-medium text-[#e8c4b0]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-md bg-[#a54a2a] px-8 py-2.5 text-sm font-medium text-[#e8c4b0]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-base font-medium text-[#d4d4d4]">Recent Breakdowns</h2>
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
      stroke="#7a7a7a"
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
}

export default TestCard;
