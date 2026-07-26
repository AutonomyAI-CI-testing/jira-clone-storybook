export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] bg-[#1a1a1a] text-[#c8c8c8] px-6 py-5 font-sans min-h-[640px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-[18px] font-medium text-[#d0d0d0]">
            UI Magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#9a9a9a] hover:text-[#c8c8c8]"
          >
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
        <div className="flex items-center gap-2 mb-10 text-[#9a9a9a] text-[14px]">
          <svg
            width="14"
            height="14"
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
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6 text-[#b0b0b0] text-[15px]">
            <svg
              width="14"
              height="14"
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
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-2 text-[14px] text-[#b0b0b0]">
              <span>Personal Access Token</span>
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
              className="w-full bg-[#1f1f1f] border border-[#4a4a4a] rounded-sm px-3 py-2.5 text-[14px] text-[#8a8a8a] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2 text-[14px] text-[#b0b0b0]">
              <span>Design URL</span>
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
              className="w-full bg-[#1f1f1f] border border-[#7a7a7a] rounded-sm px-3 py-2.5 text-[14px] text-[#9a9a9a] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              className="min-w-[110px] px-6 py-2.5 rounded-md bg-[#a04a28] text-[#d4b8a8] text-[15px] font-medium"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[110px] px-6 py-2.5 rounded-md bg-[#a04a28] text-[#d4b8a8] text-[15px] font-medium"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-16 text-[16px] text-[#c8c8c8]">Recent Breakdowns</div>
      </div>
    </div>
  );
}

export default TestCard;
