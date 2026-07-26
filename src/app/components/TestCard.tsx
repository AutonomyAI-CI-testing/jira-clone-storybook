export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[320px] bg-[#1a1c18] text-[#c8c8c8] px-5 py-5 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          </button>
        </div>

        {/* Collapsed row */}
        <button
          type="button"
          className="flex items-center gap-2 text-[14px] text-[#9a9a9a] mb-8"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 7.5L6 4.5L9 7.5" />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-10">
          <button
            type="button"
            className="flex items-center gap-2 text-[15px] text-[#c8c8c8] mb-5"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7.5L6 4.5L9 7.5" />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-[14px] text-[#b0b0b0]">
                Personal Access Token
              </label>
              <span className="inline-flex items-center justify-center w-[16px] h-[16px] rounded-full border border-[#6b6b6b] text-[10px] text-[#8a8a8a] leading-none">
                i
              </span>
            </div>
            <input
              type="text"
              defaultValue="figd_xxxxxxxxxxxxxxx"
              readOnly
              className="w-full bg-[#2a2a28] border border-[#5a5a5a] rounded-sm px-3 py-2.5 text-[13px] text-[#8a8a8a] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-[14px] text-[#b0b0b0]">Design URL</label>
              <span className="inline-flex items-center justify-center w-[16px] h-[16px] rounded-full border border-[#6b6b6b] text-[10px] text-[#8a8a8a] leading-none">
                i
              </span>
            </div>
            <input
              type="text"
              defaultValue="https://www.figma.com/file/:"
              readOnly
              className="w-full bg-[#2a2a28] border border-[#7a7a7a] rounded-sm px-3 py-2.5 text-[13px] text-[#9a9a9a] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pl-1">
            <button
              type="button"
              className="flex-1 bg-[#843A17] text-[#c4a882] rounded-md py-2.5 text-[14px] font-medium"
            >
              Awesome
            </button>
            <button
              type="button"
              className="flex-1 bg-[#843A17] text-[#c4a882] rounded-md py-2.5 text-[14px] font-medium"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div>
          <h2 className="text-[15px] text-[#c8c8c8]">Recent Breakdowns</h2>
        </div>
      </div>
    </div>
  );
}
