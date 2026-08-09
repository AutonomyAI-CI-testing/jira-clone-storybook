const GearIcon = () => (
  <svg
    width="14"
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
);

const InfoIcon = ({ color = "#a4a4a3" }: { color?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const ChevronUp = ({ color = "#b2b2b1" }: { color?: string }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="1 5 5 1 9 5" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        width: "254px",
        minHeight: "508px",
        backgroundColor: "#1a1a18",
        fontFamily: "Inter, sans-serif",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span
          style={{
            color: "#b5b5b5",
            fontSize: "13.5px",
            lineHeight: "16.34px",
            fontWeight: 600,
          }}
        >
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-10">
        <ChevronUp color="#8b9291" />
        <span
          style={{
            color: "#8b9291",
            fontSize: "11.5px",
            lineHeight: "13.92px",
            fontWeight: 600,
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design row */}
      <div className="flex items-center gap-2 mb-5">
        <ChevronUp color="#b2b2b1" />
        <span
          style={{
            color: "#b2b2b1",
            fontSize: "13.5px",
            lineHeight: "16.34px",
            fontWeight: 600,
          }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center justify-between mb-2">
        <span
          style={{
            color: "#a4a4a3",
            fontSize: "11.5px",
            lineHeight: "13.92px",
            fontWeight: 600,
          }}
        >
          Personal Access Token
        </span>
        <InfoIcon color="#a4a4a3" />
      </div>

      {/* Token input */}
      <div
        className="flex items-center px-3 mb-4"
        style={{
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
          height: "36px",
        }}
      >
        <span
          style={{
            color: "#737470",
            fontSize: "11.5px",
            lineHeight: "13.92px",
            fontWeight: 600,
          }}
        >
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-2">
        <span
          style={{
            color: "#a3a3a2",
            fontSize: "11.5px",
            lineHeight: "13.92px",
            fontWeight: 600,
          }}
        >
          Design URL
        </span>
        <InfoIcon color="#a3a3a2" />
      </div>

      {/* URL input */}
      <div
        className="flex items-center px-3 mb-5"
        style={{
          backgroundColor: "#272822",
          border: "2px solid #929291",
          height: "37px",
        }}
      >
        <span
          style={{
            color: "#71726e",
            fontSize: "10.5px",
            lineHeight: "12.71px",
            fontWeight: 600,
          }}
        >
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 mb-10">
        <button
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            width: "85px",
            height: "37px",
            fontSize: "11.5px",
            lineHeight: "13.92px",
            fontWeight: 600,
            color: "#8c8078",
            border: "none",
            cursor: "pointer",
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
            fontSize: "11.5px",
            lineHeight: "13.92px",
            fontWeight: 600,
            color: "#8c8078",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span
        style={{
          color: "#b0b0b0",
          fontSize: "13.5px",
          lineHeight: "16.34px",
          fontWeight: 600,
        }}
      >
        Recent Breakdowns
      </span>
    </div>
  );
};

export default TestCard;
