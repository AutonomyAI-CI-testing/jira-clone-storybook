const GearIcon = () => (
  <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ stroke = "#b2b2b1", size = 12 }: { stroke?: string; size?: number }) => (
  <svg width={size} height={size * 0.67} viewBox="0 0 12 8" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 7 6 1 11 7" />
  </svg>
);

const InfoIcon = ({ stroke = "#a4a4a3" }: { stroke?: string }) => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ width: 254, backgroundColor: "#1e1e1b", fontFamily: "Inter, sans-serif" }}
      className="overflow-hidden rounded"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <span style={{ color: "#b5b5b5", fontSize: 13.5, fontWeight: 600 }}>
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-4 pb-3">
        <ChevronUpIcon stroke="#8b9291" size={8} />
        <span style={{ color: "#8b9291", fontSize: 11.5, fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #2e2e2b" }} />

      {/* Add New Design Section */}
      <div className="px-4 pt-4 pb-2">
        {/* Section Title */}
        <div className="flex items-center gap-2 mb-4">
          <ChevronUpIcon stroke="#b2b2b1" size={12} />
          <span style={{ color: "#b2b2b1", fontSize: 13.5, fontWeight: 600 }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span style={{ color: "#a4a4a3", fontSize: 11.5, fontWeight: 600 }}>
              Personal Access Token
            </span>
            <InfoIcon stroke="#a4a4a3" />
          </div>
          <div
            className="px-3 py-2 rounded"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span style={{ color: "#737470", fontSize: 11.5, fontWeight: 600 }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span style={{ color: "#a3a3a2", fontSize: 11.5, fontWeight: 600 }}>
              Design URL
            </span>
            <InfoIcon stroke="#a3a3a2" />
          </div>
          <div
            className="px-3 py-2 rounded"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span style={{ color: "#71726e", fontSize: 10.5, fontWeight: 600 }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 justify-center mb-4">
          <button
            className="rounded px-6 py-2"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: 11.5,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            className="rounded px-6 py-2"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: 11.5,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #2e2e2b" }} />

      {/* Footer */}
      <div className="px-4 py-3">
        <span style={{ color: "#b0b0b0", fontSize: 13.5, fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
