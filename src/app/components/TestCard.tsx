export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="min-h-[560px] w-full max-w-[360px] bg-[#1a1a1a] px-6 py-5 text-[#d4d4d4]"
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-medium text-[#e5e5e5]">UI magician Agent</h1>
        <button type="button" aria-label="Settings" className="text-[#a3a3a3]">
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
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>
      </div>

      {/* Collapsed section */}
      <button
        type="button"
        className="mb-8 flex w-full items-center gap-2 text-left text-sm text-[#a3a3a3]"
      >
        <ChevronUp />
        <span className="truncate">From entire frame to a singl...</span>
      </button>

      {/* Add New Design */}
      <div className="mb-6">
        <button
          type="button"
          className="mb-5 flex w-full items-center gap-2 text-left text-base font-medium text-[#d4d4d4]"
        >
          <ChevronUp />
          <span>Add New Design</span>
        </button>

        {/* Personal Access Token */}
        <label className="mb-4 block">
          <span className="mb-2 flex items-center gap-2 text-sm text-[#d4d4d4]">
            Personal Access Token
            <InfoIcon />
          </span>
          <input
            type="text"
            readOnly
            defaultValue="figd_xxxxxxxxxxxxxxxx"
            className="w-full rounded-sm border border-[#6b6b6b] bg-[#222222] px-3 py-2.5 text-sm text-[#a3a3a3] outline-none"
          />
        </label>

        {/* Design URL */}
        <label className="mb-5 block">
          <span className="mb-2 flex items-center gap-2 text-sm text-[#d4d4d4]">
            Design URL
            <InfoIcon />
          </span>
          <input
            type="text"
            readOnly
            defaultValue="https://www.figma.com/file/:"
            className="w-full rounded-sm border-2 border-[#9ca3af] bg-[#222222] px-3 py-2.5 text-sm text-[#d4d4d4] outline-none"
          />
        </label>

        {/* Actions */}
        <div className="flex justify-center gap-3">
          <button
            type="button"
            className="rounded-md bg-[#9a4a2a] px-6 py-2.5 text-sm font-medium text-[#e8b4a0]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="rounded-md bg-[#9a4a2a] px-6 py-2.5 text-sm font-medium text-[#e8b4a0]"
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16">
        <h2 className="text-base font-medium text-[#d4d4d4]">Recent Breakdowns</h2>
      </div>
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
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-[#a3a3a3]"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export default TestCard;
