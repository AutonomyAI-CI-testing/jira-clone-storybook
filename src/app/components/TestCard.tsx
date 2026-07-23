export function TestCard(): JSX.Element {
  return (
    <div id="testElem">
      <div className="flex w-[360px] flex-col gap-8 bg-[#1a1c1a] px-6 py-5 text-[#c8c8c8]">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-medium text-[#e8e8e8]">UI magician Agent</h1>
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
          className="flex items-center gap-2 text-left text-sm text-[#b0b0b0]"
        >
          <ChevronUp />
          <span className="truncate">From entire frame to a singl...</span>
        </button>

        {/* Add New Design */}
        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="flex items-center gap-2 text-left text-base font-medium text-[#d0d0d0]"
          >
            <ChevronUp />
            <span>Add New Design</span>
          </button>

          <div className="flex flex-col gap-4 pl-1">
            {/* Personal Access Token */}
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm text-[#b8b8b8]">
                Personal Access Token
                <InfoIcon />
              </span>
              <input
                type="text"
                readOnly
                defaultValue="figd_xxxxxxxxxxxxxxxx"
                className="w-full rounded border border-[#5a5a5a] bg-[#2a2c2a] px-3 py-2.5 text-sm text-[#9a9a9a] outline-none"
              />
            </label>

            {/* Design URL */}
            <label className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm text-[#b8b8b8]">
                Design URL
                <InfoIcon />
              </span>
              <input
                type="text"
                readOnly
                defaultValue="https://www.figma.com/file/:"
                className="w-full rounded border border-[#7a7a7a] bg-[#2a2c2a] px-3 py-2.5 text-sm text-[#c0c0c0] outline-none"
              />
            </label>

            {/* Actions */}
            <div className="mt-1 flex justify-center gap-3">
              <button
                type="button"
                className="rounded-md bg-[#a8522a] px-6 py-2.5 text-sm font-medium text-[#d8b8a8]"
              >
                Awesome
              </button>
              <button
                type="button"
                className="rounded-md bg-[#a8522a] px-6 py-2.5 text-sm font-medium text-[#d8b8a8]"
              >
                Prepare
              </button>
            </div>
          </div>
        </div>

        {/* Recent Breakdowns */}
        <div className="pt-4">
          <h2 className="text-base font-medium text-[#d0d0d0]">Recent Breakdowns</h2>
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
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <polyline points="18 15 12 9 6 15" />
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
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="text-[#8a8a8a]"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
