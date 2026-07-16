export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1a1a1a", color: "#ffffff", minHeight: "100vh" }}
      className="p-5 flex flex-col"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold" style={{ color: "#ffffff" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-2 mt-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c07040"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-sm" style={{ color: "#c07040" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="mt-8" />

      {/* 4. "Add New Design" section header */}
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-2xl font-bold" style={{ color: "#ffffff" }}>
          Add New Design
        </span>
      </div>

      {/* 5. Personal Access Token label */}
      <div className="flex items-center gap-2 mt-5">
        <span className="text-sm font-medium" style={{ color: "#d1d5db" }}>
          Personal Access Token
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* 6. Personal Access Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded p-3 text-sm outline-none"
        style={{
          backgroundColor: "#2a2a2a",
          border: "1px solid #444444",
          color: "#ffffff",
        }}
      />

      {/* 7. Design URL label */}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-sm font-medium" style={{ color: "#d1d5db" }}>
          Design URL
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#9ca3af"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* 8. Design URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-2 w-full rounded p-3 text-sm outline-none"
        style={{
          backgroundColor: "#2a2a2a",
          border: "1px solid #444444",
          color: "#ffffff",
        }}
      />

      {/* 9. Action buttons */}
      <div className="mt-6 flex gap-4">
        <button
          type="button"
          className="rounded-lg px-6 py-3 text-sm font-semibold"
          style={{ backgroundColor: "#b45309", color: "#ffffff" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg px-6 py-3 text-sm font-semibold"
          style={{ backgroundColor: "#b45309", color: "#ffffff" }}
        >
          Prepare
        </button>
      </div>

      {/* 10. Recent Breakdowns heading */}
      <div className="mt-10">
        <span className="text-2xl font-bold" style={{ color: "#ffffff" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
