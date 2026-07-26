export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[320px] bg-[#1c1c1c] px-5 py-5 text-[#e8e8e8] font-sans">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-[18px] font-medium tracking-tight text-[#f0f0f0]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#c4c4c4] hover:text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
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
          className="mb-8 flex w-full items-center gap-2 text-left text-[14px] text-[#bdbdbd]"
        >
          <ChevronUp />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="mb-6">
          <button
            type="button"
            className="mb-5 flex w-full items-center gap-2 text-left text-[15px] font-medium text-[#d0d0d0]"
          >
            <ChevronUp />
            <span>Add New Design</span>
          </button>

          {/* Personal Access Token */}
          <div className="mb-4">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[14px] text-[#cfcfcf]">
                Personal Access Token
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxxxxx"
              className="w-full rounded-sm border border-[#5a5a5a] bg-[#2a2a2a] px-3 py-2.5 text-[13px] text-[#9a9a9a] outline-none"
            />
          </div>

          {/* Design URL */}
          <div className="mb-5">
            <div className="mb-2 flex items-center gap-2">
              <label className="text-[14px] text-[#cfcfcf]">Design URL</label>
              <InfoIcon />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded-sm border-2 border-[#9a9a9a] bg-[#2a2a2a] px-3 py-2.5 text-[13px] text-[#b0b0b0] outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-3 px-1">
            <button
              type="button"
              className="flex-1 rounded-md bg-[#a34b2a] px-4 py-2.5 text-[14px] font-medium text-[#c9a090]"
            >
              Awesome
            </button>
            <button
              type="button"
              className="flex-1 rounded-md bg-[#a34b2a] px-4 py-2.5 text-[14px] font-medium text-[#c9a090]"
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <h2 className="mt-10 text-[16px] font-medium text-[#e0e0e0]">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
}

function ChevronUp() {
  return (
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
        stroke="#bdbdbd"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[#8a8a8a]"
    >
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M8 7v4"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" />
    </svg>
  );
}
