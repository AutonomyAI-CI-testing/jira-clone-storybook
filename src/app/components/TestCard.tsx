const GearIcon = () => (
  <svg
    width="14"
    height="14"
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

const ChevronUpIcon = ({ stroke }: { stroke: string }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = ({ stroke }: { stroke: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke={stroke}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 flex flex-col"
      style={{ backgroundColor: "#242420", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex justify-between items-center px-5 pt-5 pb-2">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-8">
        <ChevronUpIcon stroke="#8b9291" />
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="py-8" />

      {/* Add New Design row */}
      <div className="flex items-center gap-2 px-5 mb-4">
        <ChevronUpIcon stroke="#b2b2b1" />
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 px-5 mb-1">
        <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
          Personal Access Token
        </span>
        <InfoIcon stroke="#a4a4a3" />
      </div>

      {/* Token input */}
      <div className="mx-5 mb-3">
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full outline-none"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            borderRadius: "2px",
            padding: "0 10px",
            height: "37px",
            color: "#737470",
            fontSize: "11.5px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
          }}
        />
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2 px-5 mb-1">
        <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
          Design URL
        </span>
        <InfoIcon stroke="#a3a3a2" />
      </div>

      {/* URL input */}
      <div className="mx-5 mb-4">
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full outline-none"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            borderRadius: "2px",
            padding: "0 10px",
            height: "37px",
            color: "#71726e",
            fontSize: "10.5px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
          }}
        />
      </div>

      {/* Button row */}
      <div className="flex gap-3 px-5 mb-6">
        <button
          className="flex-1"
          style={{
            height: "37px",
            backgroundColor: "#843a17",
            borderRadius: "4px",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1"
          style={{
            height: "37px",
            backgroundColor: "#843a17",
            borderRadius: "4px",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
