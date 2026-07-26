export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[320px] bg-[#1a1a1a] text-[#e0e0e0] p-5 font-sans rounded-md"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-[16px] font-medium text-[#e8e8e8]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#a0a0a0] hover:text-[#e0e0e0]"
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
      <div className="flex items-center gap-2 mb-8 text-[#9a9a9a] text-[13px]">
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
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-5 text-[#c8c8c8] text-[14px] font-medium">
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
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <span>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-1.5 mb-2">
            <label className="text-[13px] text-[#c8c8c8]">
              Personal Access Token
            </label>
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#6a6a6a] text-[10px] text-[#8a8a8a]">
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxx"
            className="w-full bg-[#2a2a2a] border border-[#4a4a4a] rounded-sm px-3 py-2.5 text-[13px] text-[#b0b0b0] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-2">
            <label className="text-[13px] text-[#c8c8c8]">Design URL</label>
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#6a6a6a] text-[10px] text-[#8a8a8a]">
              i
            </span>
          </div>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full bg-[#2a2a2a] border border-[#7a7a7a] rounded-sm px-3 py-2.5 text-[13px] text-[#b0b0b0] outline-none"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            className="bg-[#c45c26] text-[#e8c4b0] text-[14px] font-medium px-6 py-2.5 rounded-md min-w-[110px]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="bg-[#c45c26] text-[#e8c4b0] text-[14px] font-medium px-6 py-2.5 rounded-md min-w-[110px]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="text-[14px] text-[#c8c8c8] font-medium">
        Recent Breakdowns
      </div>
    </div>
  );
}

export default TestCard;
