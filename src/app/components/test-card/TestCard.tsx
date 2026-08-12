// Gear icon SVG (14x16) from Figma assets
const GearIcon = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="8" r="2.5" stroke="#b5b5b5" strokeWidth="1.5" />
    <path
      d="M7 1.5 L7.9 3.2 L9.8 2.7 L10.5 4.5 L12.3 5 L12 7 L13.5 8 L12 9 L12.3 11 L10.5 11.5 L9.8 13.3 L7.9 12.8 L7 14.5 L6.1 12.8 L4.2 13.3 L3.5 11.5 L1.7 11 L2 9 L0.5 8 L2 7 L1.7 5 L3.5 4.5 L4.2 2.7 L6.1 3.2 Z"
      stroke="#b5b5b5"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
);

// Small chevron icon (8x5) for subtitle row
const ChevronSmall = () => (
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 4L4 1L7 4" stroke="#8b9291" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Larger chevron (12x8) for "Add New Design" row
const ChevronLarge = () => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.5 6L6 1.5L10.5 6" stroke="#b2b2b1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Info circle icon (15x15)
const InfoIcon = ({ color = "#a4a4a3" }: { color?: string }) => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1.2" />
    <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="7.5" cy="4.5" r="0.75" fill={color} />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col overflow-auto"
      style={{
        backgroundColor: "#1e1e1b",
        width: "254px",
        minHeight: "508px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <ChevronSmall />
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "40px" }} />

      {/* Add New Design section */}
      <div className="px-4">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <ChevronLarge />
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token field */}
        <div className="mb-3">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="font-semibold"
              style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            <InfoIcon color="#a4a4a3" />
          </div>
          <div
            className="w-full flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              height: "37px",
            }}
          >
            <span
              className="font-semibold truncate"
              style={{ color: "#737470", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL field */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="font-semibold"
              style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            <InfoIcon color="#a3a3a2" />
          </div>
          <div
            className="w-full flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              height: "37px",
            }}
          >
            <span
              className="font-semibold truncate"
              style={{ color: "#71726e", fontSize: "10.5px", lineHeight: "12.71px" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 justify-center mb-6">
          <button
            type="button"
            className="flex items-center justify-center font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              width: "85px",
              height: "37px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex items-center justify-center font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
              width: "85px",
              height: "37px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 py-4">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
