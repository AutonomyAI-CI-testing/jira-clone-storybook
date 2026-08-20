export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1c1c1a", width: "254px", fontFamily: "Inter, sans-serif" }}
      className="flex flex-col min-h-[508px]"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-8">
        {/* Chevron up */}
        <svg width="8" height="5" viewBox="0 0 10 6" fill="none" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 5L5 1L9 5" />
        </svg>
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-5">
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#b2b2b1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1 7L6 1L11 7" />
          </svg>
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
              Personal Access Token
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="w-full px-3 flex items-center"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              height: "36px",
            }}
          >
            <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-1">
            <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
              Design URL
            </span>
            {/* Info icon */}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>
          <div
            className="w-full px-3 flex items-center"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              height: "37px",
            }}
          >
            <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mb-8">
          <button
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              width: "85px",
              height: "37px",
              borderRadius: "4px",
              border: "none",
              cursor: "default",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              width: "85px",
              height: "37px",
              borderRadius: "4px",
              border: "none",
              cursor: "default",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
