export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      style={{ background: "#2a2a2a", minHeight: "640px", width: "100%", maxWidth: "400px" }}
      className="flex flex-col px-5 py-5"
    >
      {/* ── Header row ── */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xl font-bold" style={{ color: "#e8e8e8" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaa"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* ── Collapsible hint row ── */}
      <div className="mb-8 flex items-center gap-2">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c07a4a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-sm" style={{ color: "#c07a4a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* ── "Add New Design" section heading ── */}
      <div className="mb-5 flex items-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-xl font-bold" style={{ color: "#e8e8e8" }}>
          Add New Design
        </span>
      </div>

      {/* ── Form area ── */}
      <div className="flex flex-col gap-4">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium" style={{ color: "#c8c8c8" }}>
              Personal Access Token
            </label>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="rounded px-3 py-2 text-sm outline-none"
            style={{
              background: "#3a3a3a",
              border: "1px solid #555",
              color: "#888",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium" style={{ color: "#c8c8c8" }}>
              Design URL
            </label>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#888"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="rounded px-3 py-2 text-sm outline-none"
            style={{
              background: "#3a3a3a",
              border: "1px solid #777",
              color: "#888",
            }}
          />
        </div>

        {/* ── Action buttons ── */}
        <div className="mt-2 flex gap-4">
          <button
            type="button"
            className="flex-1 rounded-lg py-3 text-base font-semibold text-white"
            style={{ background: "#c05c2a" }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex-1 rounded-lg py-3 text-base font-semibold text-white"
            style={{ background: "#c05c2a" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* ── Spacer ── */}
      <div className="mt-10" />

      {/* ── Recent Breakdowns heading ── */}
      <div>
        <span className="text-xl font-bold" style={{ color: "#e8e8e8" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
