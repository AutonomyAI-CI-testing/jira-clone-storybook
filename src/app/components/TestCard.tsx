// Inline SVG helpers — local to this file, no external deps

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

const ChevronUpSmall = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    stroke="#8b9291"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="1,4.5 4,1 7,4.5" />
  </svg>
);

const ChevronUpLarge = () => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    stroke="#b2b2b1"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="1,7 6,1 11,7" />
  </svg>
);

const InfoCircle = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" />
    <circle cx="7.5" cy="4.8" r="0.6" fill={color} stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-64 min-h-screen"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* ── Section 1: Header ── */}
      <div className="px-5 pt-5">
        {/* Title row */}
        <div className="flex items-center justify-between mb-3">
          <span
            className="font-semibold"
            style={{ color: "#b5b5b5", fontSize: "13.5px" }}
          >
            UI magician Agent
          </span>
          <GearIcon />
        </div>

        {/* Subtitle row */}
        <div className="flex items-center gap-2">
          <ChevronUpSmall />
          <span
            className="font-semibold"
            style={{ color: "#8b9291", fontSize: "11.5px" }}
          >
            From entire frame to a singl...
          </span>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-14" />

      {/* ── Section 2: Add New Design ── */}
      <div className="px-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          <ChevronUpLarge />
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-1.5 mb-2">
          <span
            className="font-semibold"
            style={{ color: "#a4a4a3", fontSize: "11.5px" }}
          >
            Personal Access Token
          </span>
          <InfoCircle color="#a4a4a3" />
        </div>

        {/* Token input */}
        <div
          className="flex items-center px-3 mb-4 w-full"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            height: "37px",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#737470", fontSize: "11.5px" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-1.5 mb-2">
          <span
            className="font-semibold"
            style={{ color: "#a3a3a2", fontSize: "11.5px" }}
          >
            Design URL
          </span>
          <InfoCircle color="#a3a3a2" />
        </div>

        {/* Design URL input */}
        <div
          className="flex items-center px-3 mb-6 w-full"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            height: "37px",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#71726e", fontSize: "10.5px" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-12">
          <button
            className="flex flex-1 items-center justify-center font-semibold"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              height: "37px",
              color: "#8c8078",
              fontSize: "11.5px",
              border: "none",
              cursor: "default",
            }}
          >
            Awesome
          </button>
          <button
            className="flex flex-1 items-center justify-center font-semibold"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              height: "37px",
              color: "#8c8078",
              fontSize: "11.5px",
              border: "none",
              cursor: "default",
            }}
          >
            Prepare
          </button>
        </div>

        {/* ── Section 3: Recent Breakdowns ── */}
        <div>
          <span
            className="font-semibold"
            style={{ color: "#b0b0b0", fontSize: "13.5px" }}
          >
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
