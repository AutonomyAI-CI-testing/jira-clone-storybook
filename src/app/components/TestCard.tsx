const GearIcon = () => (
  <svg width="14" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 7L6 2L11 7" />
  </svg>
);

const InfoCircleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#000000",
        fontFamily: "Inter, sans-serif",
        width: "254px",
        padding: "0",
      }}
    >
      <div
        style={{
          backgroundColor: "#272822",
          display: "flex",
          flexDirection: "column",
          gap: "0",
          padding: "16px",
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between mb-2">
          <span
            style={{
              color: "#b5b5b5",
              fontSize: "13.5px",
              fontWeight: 600,
              lineHeight: "16.34px",
            }}
          >
            UI magician Agent
          </span>
          <GearIcon />
        </div>

        {/* Subtitle row */}
        <div className="flex items-center gap-1 mb-10" style={{ color: "#8b9291" }}>
          <ChevronUpIcon />
          <span
            style={{
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
            }}
          >
            From entire frame to a singl...
          </span>
        </div>

        {/* Section header: Add New Design */}
        <div className="flex items-center gap-1 mb-3" style={{ color: "#b2b2b1" }}>
          <ChevronUpIcon />
          <span
            style={{
              fontSize: "13.5px",
              fontWeight: 600,
              lineHeight: "16.34px",
            }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-1 mb-1" style={{ color: "#a4a4a3" }}>
          <span style={{ fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
            Personal Access Token
          </span>
          <InfoCircleIcon />
        </div>

        {/* Token input */}
        <div
          className="flex items-center px-3 mb-3"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            height: "37px",
          }}
        >
          <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-1 mb-1" style={{ color: "#a3a3a2" }}>
          <span style={{ fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
            Design URL
          </span>
          <InfoCircleIcon />
        </div>

        {/* URL input */}
        <div
          className="flex items-center px-3 mb-4"
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

        {/* Button row */}
        <div className="flex gap-3 justify-center mb-6">
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

        {/* Recent Breakdowns */}
        <div>
          <span
            style={{
              color: "#b0b0b0",
              fontSize: "13.5px",
              fontWeight: 600,
              lineHeight: "16.34px",
            }}
          >
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
