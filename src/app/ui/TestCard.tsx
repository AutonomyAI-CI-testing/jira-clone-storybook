export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64 px-5 py-5"
      style={{ background: "#272822", fontFamily: "Inter, sans-serif", minHeight: "100%" }}
    >
      {/* Section 1 — Header row */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="2.2" stroke="#b5b5b5" strokeWidth="1.2" />
          <path
            d="M8 1.5v1M8 13.5v1M1.5 8h1M13.5 8h1M3.4 3.4l.7.7M11.9 11.9l.7.7M3.4 12.6l.7-.7M11.9 4.1l.7-.7"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M8 2.5A5.5 5.5 0 0 1 13.5 8 5.5 5.5 0 0 1 8 13.5 5.5 5.5 0 0 1 2.5 8 5.5 5.5 0 0 1 8 2.5Z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            fill="none"
          />
        </svg>
      </div>

      {/* Section 2 — Subtitle row */}
      <div className="flex items-center gap-2 mb-2">
        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Section 3 — Spacer */}
      <div style={{ height: "80px" }} />

      {/* Section 4 — Add New Design */}
      <div className="flex items-center gap-2 mb-5">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          className="font-semibold"
          style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Section 5 — Personal Access Token */}
      <div className="flex items-center gap-1 mb-2">
        <span
          className="font-semibold"
          style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          Personal Access Token
        </span>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
          <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a4a4a3" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="7.5" cy="4.8" r="0.7" fill="#a4a4a3" />
        </svg>
      </div>
      <div
        className="flex items-center px-3 py-2 mb-4 rounded"
        style={{ border: "1px solid #a5adad", background: "#272822" }}
      >
        <span
          className="font-semibold"
          style={{ color: "#737470", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Section 6 — Design URL */}
      <div className="flex items-center gap-1 mb-2">
        <span
          className="font-semibold"
          style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          Design URL
        </span>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
          <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a3a3a2" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="7.5" cy="4.8" r="0.7" fill="#a3a3a2" />
        </svg>
      </div>
      <div
        className="flex items-center px-3 py-2 mb-5 rounded"
        style={{ border: "2px solid #929291", background: "#272822" }}
      >
        <span
          className="font-semibold"
          style={{ color: "#71726e", fontSize: "10.5px", lineHeight: "12.71px" }}
        >
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Section 7 — Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 py-2 px-3 font-semibold"
          style={{
            background: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            lineHeight: "13.92px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 px-3 font-semibold"
          style={{
            background: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            lineHeight: "13.92px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Section 8 — Recent Breakdowns */}
      <div>
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
