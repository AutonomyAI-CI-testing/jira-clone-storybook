export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ background: "#272822", width: 254, fontFamily: "Inter, sans-serif" }}
      className="flex flex-col min-h-[508px] text-sm"
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span style={{ color: "#b5b5b5", fontSize: 13.5, fontWeight: 600, lineHeight: "16px" }}>
          UI magician Agent
        </span>
        {/* Gear / settings icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-3">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
          <path d="M1 5L5 1L9 5" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: 11.5, fontWeight: 600, lineHeight: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: 13.5, fontWeight: 600, lineHeight: "16px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span style={{ color: "#a4a4a3", fontSize: 11.5, fontWeight: 600, lineHeight: "14px" }}>
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#a4a4a3" strokeWidth="1" />
              <path d="M7 6.5V10" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7" cy="4.5" r="0.6" fill="#a4a4a3" />
            </svg>
          </div>
          <div
            className="w-full rounded px-3 py-2.5"
            style={{
              background: "#1e1e1a",
              border: "2px solid #929291",
            }}
          >
            <span style={{ color: "#737470", fontSize: 11.5, fontWeight: 600, lineHeight: "14px" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <span style={{ color: "#a3a3a2", fontSize: 11.5, fontWeight: 600, lineHeight: "14px" }}>
              Design URL
            </span>
            {/* Info icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#a3a3a2" strokeWidth="1" />
              <path d="M7 6.5V10" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7" cy="4.5" r="0.6" fill="#a3a3a2" />
            </svg>
          </div>
          <div
            className="w-full rounded px-3 py-2.5"
            style={{
              background: "#1e1e1a",
              border: "1px solid #a5adad",
            }}
          >
            <span style={{ color: "#71726e", fontSize: 10.5, fontWeight: 600, lineHeight: "13px" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mb-8">
          <button
            className="flex-1 py-2.5 flex items-center justify-center"
            style={{
              background: "#843a17",
              borderRadius: 4,
              color: "#8c8078",
              fontSize: 11.5,
              fontWeight: 600,
              lineHeight: "14px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2.5 flex items-center justify-center"
            style={{
              background: "#843a17",
              borderRadius: 4,
              color: "#8c8078",
              fontSize: 11.5,
              fontWeight: 600,
              lineHeight: "14px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span style={{ color: "#b0b0b0", fontSize: 13.5, fontWeight: 600, lineHeight: "16px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
