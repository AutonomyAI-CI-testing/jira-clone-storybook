export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1e1e1e", minHeight: "100vh" }}
      className="flex flex-col p-5 font-sans"
    >
      {/* ── Header row ─────────────────────────────────────── */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-white text-xl font-bold">UI magician Agent</span>
        {/* Gear icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* ── Sub-row: chevron-up + muted orange text ─────────── */}
      <div className="flex items-center gap-2 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c1440e"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#c1440e" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Section heading: Add New Design ─────────────────── */}
      <div className="flex items-center gap-2 mb-5">
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
        <span className="text-white text-lg font-bold">Add New Design</span>
      </div>

      {/* ── Form field: Personal Access Token ───────────────── */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-white text-sm font-medium">
            Personal Access Token
          </label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            backgroundColor: "#2a2a2a",
            borderColor: "#52525b",
            color: "#9ca3af",
          }}
          className="w-full border rounded-md px-3 py-3 text-sm outline-none"
        />
      </div>

      {/* ── Form field: Design URL ───────────────────────────── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-white text-sm font-medium">Design URL</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          style={{
            backgroundColor: "#2a2a2a",
            borderColor: "#52525b",
            color: "#9ca3af",
          }}
          className="w-full border rounded-md px-3 py-3 text-sm outline-none"
        />
      </div>

      {/* ── Buttons row ─────────────────────────────────────── */}
      <div className="flex gap-4 justify-center mb-10">
        <button
          type="button"
          style={{ backgroundColor: "#c1440e" }}
          className="flex-1 text-white font-semibold py-3 px-6 rounded-xl"
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#c1440e" }}
          className="flex-1 text-white font-semibold py-3 px-6 rounded-xl"
        >
          Prepare
        </button>
      </div>

      {/* ── Footer ──────────────────────────────────────────── */}
      <div>
        <span className="text-white text-xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
