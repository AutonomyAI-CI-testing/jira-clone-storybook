export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", minHeight: "100vh" }}
      className="p-5 font-sans text-white"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaaaaa"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Chevron subtitle row */}
      <div className="mt-2 flex items-center gap-2">
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

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section */}
      <div className="mb-5 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span className="text-base font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm" style={{ color: "#cccccc" }}>
          Personal Access Token
        </span>
        {/* Info icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#999999"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Personal Access Token input */}
      <input
        type="text"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-4 w-full rounded px-3 py-2 text-sm outline-none"
        style={{
          backgroundColor: "#383838",
          border: "1px solid #555555",
          color: "#888888",
        }}
      />

      {/* Design URL label */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm" style={{ color: "#cccccc" }}>
          Design URL
        </span>
        {/* Info icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#999999"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      {/* Design URL input */}
      <input
        type="text"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mb-6 w-full rounded px-3 py-2 text-sm outline-none"
        style={{
          backgroundColor: "#383838",
          border: "1px solid #888888",
          color: "#888888",
        }}
      />

      {/* Buttons row */}
      <div className="flex gap-4">
        <button
          type="button"
          className="rounded-xl px-8 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#c1541a" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-xl px-8 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#c1541a" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-base font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
