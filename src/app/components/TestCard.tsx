export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] min-h-[640px] bg-[#1a1c1a] text-[#e8e8e8] px-6 py-5 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-[20px] font-semibold tracking-tight text-[#e8e8e8]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="text-[#c4c4c4] hover:text-white"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </button>
        </div>

        {/* Collapsed section */}
        <button
          type="button"
          className="mt-5 flex w-full items-center gap-2 text-left text-[15px] text-[#c8c8c8]"
        >
          <ChevronUp />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design (expanded) */}
        <div className="mt-10">
          <button
            type="button"
            className="flex w-full items-center gap-2 text-left text-[18px] font-medium text-[#d0d0d0]"
          >
            <ChevronUp />
            <span>Add New Design</span>
          </button>

          <div className="mt-6 space-y-5">
            {/* Personal Access Token */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[15px] text-[#d8d8d8]">
                  Personal Access Token
                </label>
                <InfoIcon />
              </div>
              <input
                type="text"
                readOnly
                defaultValue="figd_xxxxxxxxxxxxxxxx"
                className="w-full rounded border border-[#6b6b6b] bg-[#2a2c2a] px-3 py-2.5 text-[14px] text-[#b8b8b8] outline-none"
              />
            </div>

            {/* Design URL */}
            <div>
              <div className="mb-2 flex items-center gap-2">
                <label className="text-[15px] text-[#d8d8d8]">Design URL</label>
                <InfoIcon />
              </div>
              <input
                type="text"
                readOnly
                defaultValue="https://www.figma.com/file/:"
                className="w-full rounded border border-[#8a8a8a] bg-[#2a2c2a] px-3 py-2.5 text-[14px] text-[#b0b0b0] outline-none"
              />
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-3 pt-2">
              <button
                type="button"
                className="min-w-[120px] rounded-md bg-[#a05028] px-6 py-2.5 text-[15px] font-medium text-[#e8c8b8]"
              >
                Awesome
              </button>
              <button
                type="button"
                className="min-w-[120px] rounded-md bg-[#a05028] px-6 py-2.5 text-[15px] font-medium text-[#e8c8b8]"
              >
                Prepare
              </button>
            </div>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="mt-16">
          <h2 className="text-[18px] font-medium text-[#e0e0e0]">
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
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-[#b0b0b0]"
    >
      <path
        d="M1 6.5L6 1.5L11 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
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
      className="text-[#9a9a9a]"
    >
      <circle cx="8" cy="8" r="6.25" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M8 7v4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="8" cy="5" r="0.75" fill="currentColor" />
    </svg>
  );
}

export default TestCard;
