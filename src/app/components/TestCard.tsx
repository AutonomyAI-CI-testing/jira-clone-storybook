export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1c1c1a", fontFamily: "Inter, sans-serif", width: "254px", minHeight: "508px" }}
      className="overflow-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span style={{ color: "#b5b5b5", fontWeight: 600, fontSize: "13.5px", lineHeight: "16.34px" }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 px-5 pb-6">
        <svg width="8" height="5" viewBox="0 0 10 6" fill="none">
          <path d="M1 5L5 1L9 5" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#8b9291", fontWeight: 600, fontSize: "11.5px", lineHeight: "13.92px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 px-5 mb-4">
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
          <path d="M1 7L6 2L11 7" stroke="#b2b2b1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#b2b2b1", fontWeight: 600, fontSize: "13.5px", lineHeight: "16.34px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="px-5 mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a4a4a3", fontWeight: 600, fontSize: "11.5px", lineHeight: "13.92px" }}>
            Personal Access Token
          </span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2" />
          </svg>
        </div>
        <div
          className="flex items-center px-3"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            height: "36px",
            width: "211px",
          }}
        >
          <span style={{ color: "#737470", fontWeight: 600, fontSize: "11.5px" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="px-5 mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a3a3a2", fontWeight: 600, fontSize: "11.5px", lineHeight: "13.92px" }}>
            Design URL
          </span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2" />
          </svg>
        </div>
        <div
          className="flex items-center px-3"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            height: "37px",
            width: "211px",
          }}
        >
          <span style={{ color: "#71726e", fontWeight: 600, fontSize: "10.5px" }}>
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="px-5 flex gap-3 mb-8">
        <button
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            width: "85px",
            height: "37px",
            color: "#8c8078",
            fontWeight: 600,
            fontSize: "11.5px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            width: "85px",
            height: "37px",
            color: "#8c8078",
            fontWeight: 600,
            fontSize: "11.5px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Divider */}
      <div className="mx-5 mb-4" style={{ height: "1px", backgroundColor: "#2a2a27" }} />

      {/* Recent Breakdowns */}
      <div className="px-5 pb-5">
        <span style={{ color: "#b0b0b0", fontWeight: 600, fontSize: "13.5px", lineHeight: "16.34px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
