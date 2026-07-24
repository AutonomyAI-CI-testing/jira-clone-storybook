export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] min-h-[640px] bg-[#1a1a1a] text-[#c8c8c8] px-6 py-5 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[20px] font-medium text-[#d4d4d4] m-0">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="bg-transparent border-0 p-1 cursor-pointer text-[#a0a0a0]"
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
          className="flex items-center gap-2 w-full bg-transparent border-0 p-0 mb-10 cursor-pointer text-left text-[#b0b0b0] text-[14px]"
        >
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            aria-hidden="true"
            className="shrink-0"
          >
            <path
              d="M1 6.5L6 1.5L11 6.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-14">
          <button
            type="button"
            className="flex items-center gap-2 w-full bg-transparent border-0 p-0 mb-6 cursor-pointer text-left text-[#c8c8c8] text-[16px] font-medium"
          >
            <svg
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              aria-hidden="true"
              className="shrink-0"
            >
              <path
                d="M1 6.5L6 1.5L11 6.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-5">
            <label className="flex items-center gap-2 mb-2 text-[14px] text-[#b8b8b8]">
              Personal Access Token
              <span
                className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#888] text-[10px] text-[#888]"
                aria-hidden="true"
              >
                i
              </span>
            </label>
            <input
              type="text"
              readOnly
              defaultValue=""
              placeholder="figd_xxxxxxxxxxxxxxx"
              className="w-full box-border px-3 py-2.5 rounded-sm bg-[#2a2a2a] border border-[#6a6a6a] text-[14px] text-[#b0b0b0] placeholder:text-[#888] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-6">
            <label className="flex items-center gap-2 mb-2 text-[14px] text-[#b8b8b8]">
              Design URL
              <span
                className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-[#888] text-[10px] text-[#888]"
                aria-hidden="true"
              >
                i
              </span>
            </label>
            <input
              type="text"
              readOnly
              defaultValue=""
              placeholder="https://www.figma.com/file/:"
              className="w-full box-border px-3 py-2.5 rounded-sm bg-[#2a2a2a] border border-[#8a8a8a] text-[14px] text-[#b0b0b0] placeholder:text-[#9a9a9a] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 justify-center">
            <button
              type="button"
              className="min-w-[120px] px-6 py-2.5 rounded-md bg-[#b4532a] border-0 text-[#e8c4b0] text-[15px] font-medium cursor-pointer"
            >
              Awesome
            </button>
            <button
              type="button"
              className="min-w-[120px] px-6 py-2.5 rounded-md bg-[#b4532a] border-0 text-[#e8c4b0] text-[15px] font-medium cursor-pointer"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4">
          <h2 className="m-0 text-[16px] font-medium text-[#c8c8c8]">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
}
