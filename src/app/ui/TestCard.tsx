export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col"
      style={{
        width: "254px",
        minHeight: "508px",
        backgroundColor: "#272822",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Section 1 — Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg
          width="14"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Section 2 — Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-2">
        {/* Up chevron (small) */}
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none">
          <path
            d="M7 4L4 1L1 4"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer ~40px */}
      <div style={{ height: "40px" }} />

      {/* Section 3 — Add New Design header */}
      <div className="flex items-center gap-2 px-5 pb-4">
        {/* Up chevron (larger) */}
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path
            d="M11 7L6 1L1 7"
            stroke="#b2b2b1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="font-semibold"
          style={{ color: "#b2b2b1", fontSize: "13.5px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Section 4 — Personal Access Token */}
      <div className="px-5 pb-1">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="font-semibold"
            style={{ color: "#a4a4a3", fontSize: "11.5px" }}
          >
            Personal Access Token
          </span>
          {/* Info circle */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.6" fill="#a4a4a3" />
          </svg>
        </div>
        {/* Token input */}
        <div
          className="flex items-center px-3"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            height: "36px",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#737470", fontSize: "11.5px" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Section 5 — Design URL */}
      <div className="px-5 pt-3 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="font-semibold"
            style={{ color: "#a3a3a2", fontSize: "11.5px" }}
          >
            Design URL
          </span>
          {/* Info circle */}
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.6" fill="#a3a3a2" />
          </svg>
        </div>
        {/* URL input */}
        <div
          className="flex items-center px-3"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            height: "37px",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#71726e", fontSize: "10.5px" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Section 6 — Buttons */}
      <div className="flex gap-3 px-5 pb-2">
        <button
          className="flex-1 flex items-center justify-center font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            height: "37px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 flex items-center justify-center font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            height: "37px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer ~32px */}
      <div style={{ height: "32px" }} />

      {/* Section 7 — Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
