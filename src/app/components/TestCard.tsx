export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        fontFamily: "Inter, sans-serif",
        width: "254px",
        minHeight: "508px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 8a5 5 0 0 1-.05.7l1.52 1.18a.36.36 0 0 1 .09.46l-1.44 2.49a.36.36 0 0 1-.44.16l-1.79-.72a5.18 5.18 0 0 1-1.21.7l-.27 1.9a.35.35 0 0 1-.35.3H6.94a.35.35 0 0 1-.35-.3l-.27-1.9a5.18 5.18 0 0 1-1.21-.7l-1.79.72a.36.36 0 0 1-.44-.16L1.44 10.34a.36.36 0 0 1 .09-.46L3.05 8.7A5.19 5.19 0 0 1 3 8c0-.24.02-.47.05-.7L1.53 6.12a.36.36 0 0 1-.09-.46l1.44-2.49a.36.36 0 0 1 .44-.16l1.79.72c.38-.27.79-.5 1.21-.7l.27-1.9A.35.35 0 0 1 6.94 1h2.12c.18 0 .33.13.35.3l.27 1.9c.42.2.83.43 1.21.7l1.79-.72c.17-.07.36 0 .44.16l1.44 2.49a.36.36 0 0 1-.09.46L13.05 7.3C13.02 7.53 13 7.76 13 8Z"
            stroke="#b5b5b5"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
          <path d="M1 5L4 2L7 5" stroke="#8b9291" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span
          style={{
            color: "#8b9291",
            fontSize: "11.5px",
            fontWeight: 600,
            lineHeight: "13.92px",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 mb-4">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 1.5L6 6.5L11 1.5" stroke="#b2b2b1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
            Personal Access Token
          </span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a4a4a3" strokeWidth="1" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a4a4a3" strokeWidth="1.1" strokeLinecap="round" />
            <circle cx="7.5" cy="4.8" r="0.7" fill="#a4a4a3" />
          </svg>
        </div>
        <div
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            borderRadius: "2px",
            padding: "10px 12px",
            minHeight: "36px",
          }}
        >
          <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
            Design URL
          </span>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <circle cx="7.5" cy="7.5" r="6.5" stroke="#a3a3a2" strokeWidth="1" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke="#a3a3a2" strokeWidth="1.1" strokeLinecap="round" />
            <circle cx="7.5" cy="4.8" r="0.7" fill="#a3a3a2" />
          </svg>
        </div>
        <div
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            borderRadius: "2px",
            padding: "10px 12px",
            minHeight: "37px",
          }}
        >
          <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600, lineHeight: "12.71px" }}>
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          style={{
            flex: 1,
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            lineHeight: "13.92px",
            borderRadius: "4px",
            padding: "12px 0",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            lineHeight: "13.92px",
            borderRadius: "4px",
            padding: "12px 0",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
