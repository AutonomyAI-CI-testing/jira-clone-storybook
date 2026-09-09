const GearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#b5b5b5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="8" cy="8" r="2.5" />
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" />
  </svg>
);

const ChevronUpIcon = ({ color = "#8b9291" }: { color?: string }) => (
  <svg width="10" height="7" viewBox="0 0 10 7" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 6L5 2L9 6" />
  </svg>
);

const InfoIcon = ({ color = "#a4a4a3" }: { color?: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7.5" cy="7.5" r="6.5" />
    <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" />
    <circle cx="7.5" cy="4.5" r="0.5" fill={color} stroke="none" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ background: "#2b2b27", fontFamily: "Inter, sans-serif" }}
      className="p-5 w-64"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span style={{ color: "#b5b5b5", fontSize: 13.5, fontWeight: 600 }}>
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        <ChevronUpIcon color="#8b9291" />
        <span style={{ color: "#8b9291", fontSize: 11.5, fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <ChevronUpIcon color="#b2b2b1" />
        <span style={{ color: "#b2b2b1", fontSize: 13.5, fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a4a4a3", fontSize: 11.5, fontWeight: 600 }}>
            Personal Access Token
          </span>
          <InfoIcon color="#a4a4a3" />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            background: "#272822",
            border: "2px solid #929291",
            color: "#737470",
            fontSize: 11.5,
            fontWeight: 600,
            width: "100%",
            padding: "6px 8px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a3a3a2", fontSize: 11.5, fontWeight: 600 }}>
            Design URL
          </span>
          <InfoIcon color="#a3a3a2" />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          style={{
            background: "#272822",
            border: "1px solid #a5adad",
            color: "#71726e",
            fontSize: 10.5,
            fontWeight: 600,
            width: "100%",
            padding: "6px 8px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          style={{
            background: "#843a17",
            borderRadius: 4,
            color: "#8c8078",
            fontSize: 11.5,
            fontWeight: 600,
            flex: 1,
            padding: "8px 0",
            border: "none",
            cursor: "default",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            background: "#843a17",
            borderRadius: 4,
            color: "#8c8078",
            fontSize: 11.5,
            fontWeight: 600,
            flex: 1,
            padding: "8px 0",
            border: "none",
            cursor: "default",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span style={{ color: "#b0b0b0", fontSize: 13.5, fontWeight: 600 }}>
        Recent Breakdowns
      </span>
    </div>
  );
};

export default TestCard;
