export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2b2b2b", color: "#e8ddd4", width: "320px" }}
      className="min-h-screen p-5 flex flex-col gap-4 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold" style={{ color: "#e8ddd4" }}>
          UI magician Agent
        </h1>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: "#a89880" }}
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 text-sm" style={{ color: "#c47a4a" }}>
        {/* Chevron up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          {/* Chevron up */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            style={{ color: "#e8ddd4" }}
          >
            <polyline points="18 15 12 9 6 15" />
          </svg>
          <h2 className="text-base font-semibold" style={{ color: "#e8ddd4" }}>
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium" style={{ color: "#d4c5b2" }}>
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: "#7a6e63" }}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full rounded px-3 py-2.5 text-sm outline-none"
            style={{
              backgroundColor: "#333333",
              border: "1px solid #4a3a30",
              color: "#7a6e63",
            }}
          />
        </div>

        {/* Design URL field */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium" style={{ color: "#d4c5b2" }}>
              Design URL
            </span>
            {/* Info icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ color: "#7a6e63" }}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full rounded px-3 py-2.5 text-sm outline-none"
            style={{
              backgroundColor: "#333333",
              border: "1px solid #4a3a30",
              color: "#7a6e63",
            }}
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            className="flex-1 py-3 rounded-xl text-sm font-semibold"
            style={{ backgroundColor: "#b5531f", color: "#f0e6d8" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-3 rounded-xl text-sm font-semibold"
            style={{ backgroundColor: "#9a4418", color: "#f0e6d8" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Recent Breakdowns */}
      <h2 className="text-base font-semibold" style={{ color: "#e8ddd4" }}>
        Recent Breakdowns
      </h2>
    </div>
  );
}
