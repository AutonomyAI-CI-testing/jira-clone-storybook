export function TestCard() {
  return (
    <div id="testElem">
      <div className="w-[360px] rounded-md bg-[#1a1c18] px-6 py-5 text-[#c8c8c4]">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-xl font-medium tracking-tight text-[#d0d0cc]">
            UI magician Agent
          </h1>
          <button
            type="button"
            aria-label="Settings"
            className="flex h-8 w-8 items-center justify-center rounded text-[#a8a8a4]"
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

        {/* Collapsed row */}
        <button
          type="button"
          className="mb-10 flex w-full items-center gap-2 text-left text-[#b0b0ac]"
        >
          <ChevronUpIcon />
          <span className="truncate text-base">
            From entire frame to a singl...
          </span>
        </button>

        {/* Add New Design section */}
        <div className="mb-2 flex items-center gap-2 text-[#c8c8c4]">
          <ChevronUpIcon />
          <h2 className="text-lg font-medium">Add New Design</h2>
        </div>

        <div className="mt-6 space-y-5">
          {/* Personal Access Token */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <label className="text-base text-[#c8c8c4]">
                Personal Access Token
              </label>
              <InfoIcon />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="figd_xxxxxxxxxxxxxxx"
              className="w-full rounded border border-[#6a6a66] bg-[#2a2c28] px-3 py-2.5 text-sm text-[#c8c8c4] outline-none"
            />
          </div>

          {/* Design URL */}
          <div>
            <div className="mb-2 flex items-center gap-2">
              <label className="text-base text-[#c8c8c4]">Design URL</label>
              <InfoIcon />
            </div>
            <input
              type="text"
              readOnly
              defaultValue="https://www.figma.com/file/:"
              className="w-full rounded border border-[#9a9a96] bg-[#2a2c28] px-3 py-2.5 text-sm text-[#c8c8c4] outline-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#b5521a] px-6 py-2.5 text-base font-medium text-[#c4a090]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#b5521a] px-6 py-2.5 text-base font-medium text-[#c4a090]"
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns */}
        <h3 className="mt-14 text-lg font-medium text-[#c8c8c4]">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
}

function ChevronUpIcon() {
  return (
    <svg
      width="16"
      height="16"
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
      className="shrink-0 text-[#8a8a86]"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
