export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] min-h-[640px] bg-[#1a1a1a] text-[#d4d4d4] p-6 font-sans">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-medium text-[#d4d4d4]">
            UI magician Agent
          </h1>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-[#a3a3a3]"
            aria-hidden
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </div>

        <div className="flex items-center gap-2 text-[#a3a3a3] text-sm mb-8">
          <ChevronUp />
          <span className="truncate">From entire frame to a singl...</span>
        </div>

        <div className="mb-5">
          <div className="flex items-center gap-2 text-[#d4d4d4] text-base font-medium mb-5">
            <ChevronUp />
            <span>Add New Design</span>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm text-[#a3a3a3]">
                Personal Access Token
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxx"
              className="w-full bg-[#2a2a2a] border border-[#525252] rounded px-3 py-2.5 text-sm text-[#a3a3a3] outline-none"
            />
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-sm text-[#a3a3a3]">Design URL</label>
              <InfoIcon />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full bg-[#2a2a2a] border border-[#a3a3a3] rounded px-3 py-2.5 text-sm text-[#a3a3a3] outline-none"
            />
          </div>

          <div className="flex gap-3 justify-center">
            <button
              type="button"
              className="bg-[#a04a2a] text-[#d4d4d4] rounded-md px-8 py-2.5 text-sm font-medium"
            >
              Awesome
            </button>
            <button
              type="button"
              className="bg-[#a04a2a] text-[#d4d4d4] rounded-md px-8 py-2.5 text-sm font-medium"
            >
              Prepare
            </button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-base font-medium text-[#d4d4d4]">
            Recent Breakdowns
          </h2>
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
      className="text-[#a3a3a3] shrink-0"
      aria-hidden
    >
      <path d="M18 15l-6-6-6 6" />
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
      className="text-[#737373]"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  );
}
