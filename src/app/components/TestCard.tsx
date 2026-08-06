export default function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1a1a18", width: 254, minHeight: 508, fontFamily: "Inter, sans-serif" }}
      className="flex flex-col text-white overflow-auto"
    >
      {/* ── Header ── */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span style={{ color: "#b5b5b5", fontSize: 13.5, fontWeight: 600 }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* ── Subtitle ── */}
      <div className="flex items-center gap-2 px-5 pb-6">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M9 5L5 1L1 5" stroke="#8b9291" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: 11.5, fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Add New Design section ── */}
      <div className="flex-1 px-4 pb-2">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: 13.5, fontWeight: 600 }}>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span style={{ color: "#a4a4a3", fontSize: 11.5, fontWeight: 600 }}>Personal Access Token</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6.25" stroke="#a4a4a3" strokeWidth="0.9" />
              <text x="7" y="10.5" textAnchor="middle" fill="#a4a4a3" fontSize="7" fontWeight="700">i</text>
            </svg>
          </div>
          <div
            style={{ backgroundColor: "#272822", border: "1px solid #a5adad" }}
            className="px-3 py-2.5"
          >
            <span style={{ color: "#737470", fontSize: 11.5, fontWeight: 600 }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span style={{ color: "#a3a3a2", fontSize: 11.5, fontWeight: 600 }}>Design URL</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6.25" stroke="#a3a3a2" strokeWidth="0.9" />
              <text x="7" y="10.5" textAnchor="middle" fill="#a3a3a2" fontSize="7" fontWeight="700">i</text>
            </svg>
          </div>
          <div
            style={{ backgroundColor: "#272822", border: "2px solid #929291" }}
            className="px-3 py-2.5"
          >
            <span style={{ color: "#71726e", fontSize: 10.5, fontWeight: 600 }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            style={{ backgroundColor: "#843a17", borderRadius: 4, flex: 1 }}
            className="py-2.5 flex items-center justify-center"
          >
            <span style={{ color: "#8c8078", fontSize: 11.5, fontWeight: 600 }}>Awesome</span>
          </button>
          <button
            style={{ backgroundColor: "#843a17", borderRadius: 4, flex: 1 }}
            className="py-2.5 flex items-center justify-center"
          >
            <span style={{ color: "#8c8078", fontSize: 11.5, fontWeight: 600 }}>Prepare</span>
          </button>
        </div>
      </div>

      {/* ── Spacer ── */}
      <div className="flex-1" />

      {/* ── Recent Breakdowns ── */}
      <div className="px-5 pt-4 pb-5">
        <span style={{ color: "#b0b0b0", fontSize: 13.5, fontWeight: 600 }}>Recent Breakdowns</span>
      </div>
    </div>
  );
}
