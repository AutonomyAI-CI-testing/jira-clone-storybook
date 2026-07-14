function GearIcon(): JSX.Element {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#888888"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronUpIcon(): JSX.Element {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function InfoCircleIcon(): JSX.Element {
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
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="flex w-[280px] flex-col gap-4 rounded-lg p-5"
      style={{ backgroundColor: "#282828" }}
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <GearIcon />
      </div>

      {/* 2. Collapsed row */}
      <div className="flex items-center gap-2" style={{ color: "#c87941" }}>
        <ChevronUpIcon />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* 3. "Add New Design" section heading */}
      <div className="flex items-center gap-2 pt-2 text-white">
        <ChevronUpIcon />
        <span className="text-base font-bold">Add New Design</span>
      </div>

      {/* 4. Personal Access Token field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-white">
          <label className="text-sm font-medium">Personal Access Token</label>
          <InfoCircleIcon />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border px-3 py-2 text-sm text-white outline-none"
          style={{ backgroundColor: "#383838", borderColor: "#555555" }}
        />
      </div>

      {/* 5. Design URL field */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 text-white">
          <label className="text-sm font-medium">Design URL</label>
          <InfoCircleIcon />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border px-3 py-2 text-sm text-white outline-none"
          style={{ backgroundColor: "#383838", borderColor: "#555555" }}
        />
      </div>

      {/* 6. Action buttons */}
      <div className="flex gap-3">
        <button
          type="button"
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#b45309" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#b45309" }}
        >
          Prepare
        </button>
      </div>

      {/* 7. Recent Breakdowns section heading */}
      <div className="pt-4">
        <span className="text-base font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
