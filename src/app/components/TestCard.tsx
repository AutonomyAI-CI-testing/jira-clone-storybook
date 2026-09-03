function GearIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronUp({ color = "#b2b2b1", size = 12 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size * 0.67} viewBox="0 0 12 8" fill="none">
      <path d="M1 7L6 2L11 7" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon({ color = "#a4a4a3" }: { color?: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke={color} strokeWidth="1.2">
      <circle cx="7.5" cy="7.5" r="6.5" />
      <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="7.5" cy="4.5" r="0.7" fill={color} stroke="none" />
    </svg>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1c1c1a", fontFamily: "Inter, sans-serif", width: "254px" }}
      className="min-h-screen"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <ChevronUp color="#8b9291" size={10} />
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-16" />

      {/* Add New Design */}
      <div className="px-5">
        <div className="flex items-center gap-2 mb-5">
          <ChevronUp color="#b2b2b1" size={12} />
          <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex items-center gap-2 mb-2">
          <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
            Personal Access Token
          </span>
          <InfoIcon color="#a4a4a3" />
        </div>
        <div
          className="flex items-center mb-4 px-3 py-2"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            borderRadius: "4px",
          }}
        >
          <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL */}
        <div className="flex items-center gap-2 mb-2">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
            Design URL
          </span>
          <InfoIcon color="#a3a3a2" />
        </div>
        <div
          className="flex items-center mb-6 px-3 py-2"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            borderRadius: "4px",
          }}
        >
          <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}>
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mb-10">
          <button
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              borderRadius: "4px",
              width: "85px",
              height: "37px",
              border: "none",
              cursor: "pointer",
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
              borderRadius: "4px",
              width: "85px",
              height: "37px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 mt-8">
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
