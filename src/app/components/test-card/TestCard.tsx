export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        width: "254px",
        fontFamily: "Inter, sans-serif",
        fontWeight: 600,
        display: "flex",
        flexDirection: "column",
        minHeight: "508px",
      }}
    >
      {/* Top bar */}
      <div style={{ backgroundColor: "#1a1a18", height: "9px", flexShrink: 0 }} />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-4 pb-2">
        <span style={{ fontSize: "13.5px", color: "#b5b5b5" }}>UI magician Agent</span>
        <svg
          width="16"
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

      {/* Subtitle row */}
      <div className="flex items-center gap-1 px-5 pb-3">
        <svg
          width="8"
          height="5"
          viewBox="0 0 9 6"
          fill="none"
          stroke="#8b9291"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 5L4.5 1.5L8 5" />
        </svg>
        <span style={{ fontSize: "11.5px", color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Horizontal divider */}
      <hr style={{ borderColor: "#3a3a38", margin: "0 0 12px 0" }} />

      {/* Add New Design row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 6.5L6 1.5L11 6.5" />
        </svg>
        <span style={{ fontSize: "13.5px", color: "#b2b2b1" }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="px-5 pb-2">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ fontSize: "11.5px", color: "#a4a4a3" }}>
            Personal Access Token
          </span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="1.2"
          >
            <circle cx="7.5" cy="7.5" r="6.5" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.5" fill="#a4a4a3" />
          </svg>
        </div>
        <div
          style={{
            height: "37px",
            border: "1px solid #a5adad",
            backgroundColor: "#272822",
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
          }}
        >
          <span style={{ fontSize: "11.5px", color: "#737470" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="px-5 pb-4">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ fontSize: "11.5px", color: "#a3a3a2" }}>Design URL</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            stroke="#a3a3a2"
            strokeWidth="1.2"
          >
            <circle cx="7.5" cy="7.5" r="6.5" />
            <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.5" fill="#a3a3a2" />
          </svg>
        </div>
        <div
          style={{
            height: "37px",
            border: "2px solid #929291",
            backgroundColor: "#272822",
            display: "flex",
            alignItems: "center",
            padding: "0 10px",
          }}
        >
          <span style={{ fontSize: "10.5px", color: "#71726e" }}>
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 px-5 pb-4 justify-center">
        <button
          style={{
            width: "85px",
            height: "37px",
            backgroundColor: "#843a17",
            borderRadius: "4px",
            fontSize: "11.5px",
            color: "#8c8078",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            border: "none",
            cursor: "pointer",
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
            fontFamily: "Inter, sans-serif",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="flex-grow" />

      {/* Recent Breakdowns */}
      <div className="px-5 pb-4">
        <span style={{ fontSize: "13.5px", color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
