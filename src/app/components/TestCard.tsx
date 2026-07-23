export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[360px] bg-[#1a1f1a] text-[#c8c8c8] p-6 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[20px] font-medium text-[#d0d0d0]">
          UI magician Agent
        </h1>
        <button type="button" aria-label="Settings" className="text-[#9a9a9a]">
          <svg
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

      {/* Collapsed section */}
      <button
        type="button"
        className="flex items-center gap-2 text-[#9a9a9a] text-[14px] mb-10 w-full text-left"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="-rotate-90"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
        <span>From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-[#b8b8b8] text-[16px] font-medium mb-5">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <span>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-[14px] text-[#a8a8a8]">
              Personal Access Token
            </label>
            <span
              className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#6a6a6a] text-[10px] text-[#8a8a8a]"
              aria-hidden
            >
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full bg-[#2a2f2a] border border-[#5a5a5a] text-[#9a9a9a] text-[14px] px-3 py-2.5 rounded-sm outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-[14px] text-[#a8a8a8]">Design URL</label>
            <span
              className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#6a6a6a] text-[10px] text-[#8a8a8a]"
              aria-hidden
            >
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full bg-[#2a2f2a] border border-[#8a8a8a] text-[#c8c8c8] text-[14px] px-3 py-2.5 rounded-sm outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            className="bg-[#a04a28] hover:bg-[#b0542f] text-[#d8c0b0] text-[15px] font-medium px-8 py-2.5 rounded-md min-w-[120px]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="bg-[#a04a28] hover:bg-[#b0542f] text-[#d8c0b0] text-[15px] font-medium px-8 py-2.5 rounded-md min-w-[120px]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-2">
        <h2 className="text-[16px] font-medium text-[#b8b8b8]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
}

export default TestCard;
