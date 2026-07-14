export function TestCard() {
  const GearIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  const ChevronUpIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );

  const InfoIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#2a2a2a] text-white p-5 flex flex-col"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <span className="text-[#a0a0a0]">
          <GearIcon />
        </span>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 text-[#c4733a] text-sm mb-8">
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Section: Add New Design */}
      <div className="flex items-center gap-2 mb-5">
        <span className="text-white">
          <ChevronUpIcon />
        </span>
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-[#d0d0d0]">
          Personal Access Token
        </span>
        <span className="text-[#a0a0a0]">
          <InfoIcon />
        </span>
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#333333] border border-[#555555] rounded-md px-3 py-2.5 text-sm text-[#a0a0a0] placeholder-[#7a7a7a] mb-4 outline-none focus:border-[#777777]"
        readOnly
      />

      {/* Design URL */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-medium text-[#d0d0d0]">Design URL</span>
        <span className="text-[#a0a0a0]">
          <InfoIcon />
        </span>
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#333333] border border-[#666666] rounded-md px-3 py-2.5 text-sm text-[#a0a0a0] placeholder-[#7a7a7a] mb-6 outline-none focus:border-[#777777]"
        readOnly
      />

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#b85c30] hover:bg-[#a5502a] text-white font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c30] hover:bg-[#a5502a] text-white font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="text-xl font-bold text-white">Recent Breakdowns</div>
    </div>
  );
}
