export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", minHeight: "600px" }}
      className="flex flex-col gap-0 p-5"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold" style={{ color: "#e8e8e8" }}>
          UI magician Agent
        </span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9a9a9a"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Chevron + subtitle */}
      <div className="mt-3 flex items-center gap-2">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9a6040"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-sm" style={{ color: "#9a6040" }}>
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-10" />

      {/* Add New Design header */}
      <div className="flex items-center gap-3">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-xl font-bold" style={{ color: "#e8e8e8" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-5 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm" style={{ color: "#c8c8c8" }}>
            Personal Access Token
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            backgroundColor: "#1e1e1e",
            borderColor: "#4a4a4a",
            color: "#6b6b6b",
          }}
          className="w-full rounded border px-4 py-3 text-sm outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm" style={{ color: "#c8c8c8" }}>
            Design URL
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#888"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          style={{
            backgroundColor: "#1e1e1e",
            borderColor: "#5a5a5a",
            color: "#6b6b6b",
          }}
          className="w-full rounded border px-4 py-3 text-sm outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          style={{ backgroundColor: "#b85c2a" }}
          className="flex-1 rounded-lg py-3 text-sm font-bold"
        >
          <span style={{ color: "#f0d0b8" }}>Awesome</span>
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#a04e24" }}
          className="flex-1 rounded-lg py-3 text-sm font-bold"
        >
          <span style={{ color: "#f0d0b8" }}>Prepare</span>
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-xl font-bold" style={{ color: "#e8e8e8" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
