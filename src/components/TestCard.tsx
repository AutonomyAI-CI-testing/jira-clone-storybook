export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2a2a2a", color: "#e8e8e8" }}
      className="min-h-screen p-5 font-sans"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold" style={{ color: "#e8e8e8" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a0a0a0"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Settings"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Chevron subtitle row */}
      <div className="mt-2 flex items-center gap-2">
        <span style={{ color: "#b5703a" }}>&#x2038;</span>
        <span className="text-sm" style={{ color: "#b5703a" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Vertical spacer */}
      <div className="mt-10" />

      {/* Add New Design section heading */}
      <div className="mb-4 flex items-center gap-2">
        <span className="font-bold" style={{ color: "#e8e8e8" }}>
          &#x2038;
        </span>
        <span className="text-lg font-bold" style={{ color: "#e8e8e8" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-1 flex items-center gap-2">
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
          stroke="#a0a0a0"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Info"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-4 mt-1 w-full rounded px-3 py-2 text-sm outline-none"
        style={{
          backgroundColor: "#383838",
          border: "1px solid #555555",
          color: "#a0a0a0",
        }}
        readOnly
      />

      {/* Design URL */}
      <div className="mb-1 flex items-center gap-2">
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
          stroke="#a0a0a0"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Info"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mb-6 mt-1 w-full rounded px-3 py-2 text-sm outline-none"
        style={{
          backgroundColor: "#383838",
          border: "1px solid #555555",
          color: "#a0a0a0",
        }}
        readOnly
      />

      {/* Buttons row */}
      <div className="flex gap-4">
        <button
          type="button"
          className="rounded-lg px-8 py-3 text-sm font-bold"
          style={{ backgroundColor: "#c1541a", color: "#ffffff" }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg px-8 py-3 text-sm font-bold"
          style={{ backgroundColor: "#c1541a", color: "#ffffff" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-lg font-bold" style={{ color: "#e8e8e8" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
