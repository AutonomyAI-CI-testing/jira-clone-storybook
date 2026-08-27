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

const ChevronUp = ({
  width,
  height,
  color,
}: {
  width: number;
  height: number;
  color: string;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    stroke={color}
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points={`1,${height - 0.5} ${width / 2},1 ${width - 1},${height - 0.5}`} />
  </svg>
);

const InfoCircle = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke={color}
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <line x1="7.5" y1="6.5" x2="7.5" y2="10.5" />
    <circle cx="7.5" cy="4.5" r="0.6" fill={color} stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[256px] flex flex-col"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif", minHeight: "508px" }}
    >
      {/* Section 1: Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span className="font-semibold" style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Sub-row: small chevron + subtitle */}
      <div className="flex items-center gap-2 px-5 pb-5">
        <ChevronUp width={8} height={5} color="#8b9291" />
        <span className="font-semibold" style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Section 2: Add New Design */}
      <div className="px-5 flex flex-col gap-3">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-1">
          <ChevronUp width={12} height={8} color="#b2b2b1" />
          <span className="font-semibold" style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
              Personal Access Token
            </span>
            <InfoCircle color="#a4a4a3" />
          </div>
          <div
            className="flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              height: "37px",
            }}
          >
            <span className="font-semibold" style={{ color: "#737470", fontSize: "11.5px" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="font-semibold" style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
              Design URL
            </span>
            <InfoCircle color="#a3a3a2" />
          </div>
          <div
            className="flex items-center px-3"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              height: "37px",
            }}
          >
            <span className="font-semibold" style={{ color: "#71726e", fontSize: "10.5px" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-3 mt-1">
          <button
            type="button"
            className="flex items-center justify-center font-semibold"
            style={{
              width: "85px",
              height: "37px",
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              border: "none",
            }}
          >
            Awesome
          </button>
          <button
            type="button"
            className="flex items-center justify-center font-semibold"
            style={{
              width: "85px",
              height: "37px",
              backgroundColor: "#843a17",
              borderRadius: "4px",
              color: "#8c8078",
              fontSize: "11.5px",
              border: "none",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Section 3: Recent Breakdowns */}
      <div className="px-5">
        <span className="font-semibold" style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
