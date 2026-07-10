export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        color: "#ffffff",
        maxWidth: "375px",
        width: "100%",
        fontFamily: "sans-serif",
      }}
      className="p-5 rounded-lg"
    >
      {/* ── Header row ── */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xl font-bold text-white">UI magician Agent</span>
        {/* Gear / Settings SVG */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* ── Accordion row ── */}
      <div className="flex items-center gap-2 mb-8">
        {/* Chevron-up SVG */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b85c2c"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ color: "#b85c2c" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Add New Design row ── */}
      <div className="flex items-center gap-2 mb-5">
        {/* Chevron-up SVG */}
        <svg
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
        <span className="text-lg font-bold text-white">Add New Design</span>
      </div>

      {/* ── Personal Access Token ── */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-semibold text-white">Personal Access Token</span>
        {/* Info-circle SVG */}
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
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={{ backgroundColor: "#333333", borderColor: "#555555", color: "#aaaaaa" }}
        className="w-full rounded border px-3 py-3 text-sm outline-none mb-4"
      />

      {/* ── Design URL ── */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-sm font-semibold text-white">Design URL</span>
        {/* Info-circle SVG */}
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
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        style={{ backgroundColor: "#333333", borderColor: "#555555", color: "#aaaaaa" }}
        className="w-full rounded border px-3 py-3 text-sm outline-none mb-5"
      />

      {/* ── Buttons ── */}
      <div className="flex gap-4 justify-center mb-8">
        <button
          style={{ backgroundColor: "#b85c2c" }}
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#b85c2c" }}
          className="flex-1 rounded-lg py-3 text-sm font-semibold text-white"
        >
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns ── */}
      <div className="mt-4">
        <span className="text-xl font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
};
