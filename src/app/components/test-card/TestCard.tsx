export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#ffffff" }}
      className="flex flex-col gap-4 p-5 w-[320px] min-h-screen font-sans"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">UI magician Agent</span>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.32 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center gap-2">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c27a50"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-sm" style={{ color: "#c27a50" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* 3. Section heading */}
      <div className="flex items-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-lg font-bold">Add New Design</span>
      </div>

      {/* 4. Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Personal Access Token</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaaaaa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
          style={{
            backgroundColor: "#1e1e1e",
            borderColor: "#555555",
            color: "#888888",
          }}
          className="w-full rounded-md border px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* 5. Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Design URL</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaaaaa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
          style={{
            backgroundColor: "#1e1e1e",
            borderColor: "#555555",
            color: "#888888",
          }}
          className="w-full rounded-md border px-3 py-2 text-sm outline-none"
        />
      </div>

      {/* 6. Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          style={{ backgroundColor: "#b85c38" }}
          className="flex-1 rounded-xl px-5 py-3 text-sm font-semibold text-white"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#b85c38" }}
          className="flex-1 rounded-xl px-5 py-3 text-sm font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* 7. Recent Breakdowns */}
      <span className="text-xl font-bold">Recent Breakdowns</span>
    </div>
  );
};
