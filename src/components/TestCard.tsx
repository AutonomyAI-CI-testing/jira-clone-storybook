export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#e8e8e8" }}
      className="min-h-screen p-5 font-sans"
    >
      {/* 1. Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">UI magician Agent</span>
        {/* Gear icon (inline SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a0a0a0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* 2. Chevron subtitle row */}
      <div className="mt-3 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5703a"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-sm" style={{ color: "#b5703a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div className="mt-10" />

      {/* 4. "Add New Design" section heading */}
      <div className="mb-5 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e8e8e8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-base font-bold">Add New Design</span>
      </div>

      {/* 5. Personal Access Token field */}
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm" style={{ color: "#c0c0c0" }}>
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a0a0a0"
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
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "#383838",
            border: "1px solid #555",
            color: "#888",
          }}
        />
      </div>

      {/* 6. Design URL field */}
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm" style={{ color: "#c0c0c0" }}>
            Design URL
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a0a0a0"
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
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "#383838",
            border: "1px solid #777",
            color: "#888",
          }}
        />
      </div>

      {/* 7. Two orange/brown buttons */}
      <div className="flex gap-4">
        <button
          className="flex-1 rounded-lg py-3 font-semibold text-white"
          style={{ backgroundColor: "#c1541a" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 font-semibold text-white"
          style={{ backgroundColor: "#c1541a" }}
        >
          Prepare
        </button>
      </div>

      {/* 8. Recent Breakdowns */}
      <div className="mt-12">
        <span className="text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
