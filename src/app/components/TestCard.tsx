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
    strokeWidth="1.8"
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
    strokeWidth="1.3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <line x1="7.5" y1="6.8" x2="7.5" y2="10.5" />
    <circle cx="7.5" cy="4.8" r="0.6" fill={color} stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-64 flex flex-col"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* ── Section 1: Header ── */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          className="font-semibold"
          style={{ fontSize: "13.5px", color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="flex items-center gap-2 px-5 pb-6">
        <ChevronUpSmall />
        <span
          className="font-semibold"
          style={{ fontSize: "11.5px", color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Spacer ── */}
      <div className="h-12" />

      {/* ── Section 2: Add New Design ── */}
      <div className="px-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-5">
          <ChevronUpLarge />
          <span
            className="font-semibold"
            style={{ fontSize: "13.5px", color: "#b2b2b1" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="font-semibold"
            style={{ fontSize: "11.5px", color: "#a4a4a3" }}
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
            style={{ fontSize: "11.5px", color: "#737470" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="font-semibold"
            style={{ fontSize: "11.5px", color: "#a3a3a2" }}
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
            style={{ fontSize: "10.5px", color: "#71726e" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 mb-10">
          <button
            className="flex items-center justify-center font-semibold"
            style={{
              width: "85px",
              height: "37px",
              backgroundColor: "#843a17",
              borderRadius: "4px",
              fontSize: "11.5px",
              color: "#8c8078",
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            className="flex items-center justify-center font-semibold"
            style={{
              width: "85px",
              height: "37px",
              backgroundColor: "#843a17",
              borderRadius: "4px",
              fontSize: "11.5px",
              color: "#8c8078",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* ── Section 3: Recent Breakdowns ── */}
      <div className="px-5 pb-8">
        <span
          className="font-semibold"
          style={{ fontSize: "13.5px", color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
