export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#272822",
        width: "254px",
        minHeight: "508px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Thin top bar */}
      <div style={{ height: "9px", backgroundColor: "#1a1a18", width: "100%" }} />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span
          style={{
            fontSize: "13.5px",
            color: "#b5b5b5",
            fontWeight: 600,
            lineHeight: "16.34px",
          }}
        >
          UI magician Agent
        </span>
        {/* Gear icon */}
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
        <svg width="10" height="7" viewBox="0 0 10 7" fill="none">
          <path
            d="M1 6L5 1.5L9 6"
            stroke="#8b9291"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          style={{
            fontSize: "11.5px",
            color: "#8b9291",
            fontWeight: 600,
            lineHeight: "13.92px",
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Divider */}
      <div
        className="mx-5 mb-5"
        style={{ borderTop: "1px solid #3a3a38" }}
      />

      {/* Add New Design row */}
      <div className="flex items-center gap-2 px-5 mb-4">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path
            d="M1 6.5L6 1.5L11 6.5"
            stroke="#b2b2b1"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          style={{
            fontSize: "13.5px",
            color: "#b2b2b1",
            fontWeight: 600,
            lineHeight: "16.34px",
          }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 px-5 mb-1">
        <span
          style={{
            fontSize: "11.5px",
            color: "#a4a4a3",
            fontWeight: 600,
            lineHeight: "13.92px",
          }}
        >
          Personal Access Token
        </span>
        {/* Info icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a4a4a3"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2" />
        </svg>
      </div>

      {/* Personal Access Token input box */}
      <div
        className="flex items-center mx-5 mb-4 px-3"
        style={{
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
          height: "37px",
        }}
      >
        <span
          style={{
            fontSize: "11.5px",
            color: "#737470",
            fontWeight: 600,
            lineHeight: "13.92px",
          }}
        >
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2 px-5 mb-1">
        <span
          style={{
            fontSize: "11.5px",
            color: "#a3a3a2",
            fontWeight: 600,
            lineHeight: "13.92px",
          }}
        >
          Design URL
        </span>
        {/* Info icon */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#a3a3a2"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2" />
        </svg>
      </div>

      {/* Design URL input box */}
      <div
        className="flex items-center mx-5 mb-5 px-3"
        style={{
          backgroundColor: "#272822",
          border: "2px solid #929291",
          height: "37px",
        }}
      >
        <span
          style={{
            fontSize: "10.5px",
            color: "#71726e",
            fontWeight: 600,
            lineHeight: "12.71px",
          }}
        >
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 px-5 mb-2">
        <button
          style={{
            width: "85px",
            height: "37px",
            backgroundColor: "#843a17",
            borderRadius: "4px",
            fontSize: "11.5px",
            color: "#8c8078",
            fontWeight: 600,
            lineHeight: "13.92px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            width: "85px",
            height: "37px",
            backgroundColor: "#843a17",
            borderRadius: "4px",
            fontSize: "11.5px",
            color: "#8c8078",
            fontWeight: 600,
            lineHeight: "13.92px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "32px" }} />

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span
          style={{
            fontSize: "13.5px",
            color: "#b0b0b0",
            fontWeight: 600,
            lineHeight: "16.34px",
          }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
