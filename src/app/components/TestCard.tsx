export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="min-h-[560px] w-full max-w-[420px] bg-[#1a1a1a] px-6 py-5 text-[#e5e5e5]"
    >
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-medium text-[#e5e5e5]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#a3a3a3] hover:text-[#e5e5e5]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 5 15.4a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>

      <button
        type="button"
        className="mb-10 flex w-full items-center gap-2 text-left text-[#a3a3a3]"
      >
        <ChevronUp />
        <span className="truncate text-sm">
          From entire frame to a singl...
        </span>
      </button>

      <div className="mb-4 flex items-center gap-2 text-[#d4d4d4]">
        <ChevronUp />
        <h2 className="text-lg font-medium">Add New Design</h2>
      </div>

      <div className="mb-4">
        <label className="mb-2 flex items-center gap-2 text-sm text-[#d4d4d4]">
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          type="text"
          readOnly
          defaultValue="figd_xxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#525252] bg-[#262626] px-3 py-2.5 text-sm text-[#d4d4d4] outline-none"
        />
      </div>

      <div className="mb-6">
        <label className="mb-2 flex items-center gap-2 text-sm text-[#d4d4d4]">
          Design URL
          <InfoIcon />
        </label>
        <input
          type="text"
          readOnly
          defaultValue="https://www.figma.com/file/:"
          className="w-full rounded border-2 border-[#a3a3a3] bg-[#262626] px-3 py-2.5 text-sm text-[#d4d4d4] outline-none"
        />
      </div>

      <div className="mb-12 flex gap-3 px-4">
        <button
          type="button"
          className="flex-1 rounded-md bg-[#A85A2A] px-4 py-2.5 text-sm font-medium text-[#e5e5e5]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-md bg-[#A85A2A] px-4 py-2.5 text-sm font-medium text-[#e5e5e5]"
        >
          Prepare
        </button>
      </div>

      <div className="text-base text-[#d4d4d4]">Recent Breakdowns</div>
    </div>
  );
}

function ChevronUp(): JSX.Element {
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
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function InfoIcon(): JSX.Element {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#737373]"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}
