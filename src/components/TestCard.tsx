export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col rounded-sm p-5 font-sans"
      style={{ backgroundColor: "#272822", width: "254px", minHeight: "508px" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px" }}
        >
          UI magician Agent
        </span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="mt-2 flex items-center gap-2">
        <ChevronUpIcon color="#8b9291" size={8} />
        <span
          className="font-semibold"
          style={{ color: "#8b9291", fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "48px" }} />

      {/* Section heading */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon color="#b2b2b1" size={10} />
        <span
          className="font-semibold"
          style={{ color: "#b2b2b1", fontSize: "13.5px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Form field 1 */}
      <div className="mt-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span
            className="font-semibold"
            style={{ color: "#a4a4a3", fontSize: "11.5px" }}
          >
            Personal Access Token
          </span>
          <InfoIcon color="#a4a4a3" />
        </div>
        <div
          className="flex items-center rounded-sm px-3 py-2"
          style={{
            backgroundColor: "#1e1e1e",
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
      </div>

      {/* Form field 2 */}
      <div className="mt-4 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span
            className="font-semibold"
            style={{ color: "#a3a3a2", fontSize: "11.5px" }}
          >
            Design URL
          </span>
          <InfoIcon color="#a3a3a2" />
        </div>
        <div
          className="flex items-center rounded-sm px-3 py-2"
          style={{
            backgroundColor: "#1e1e1e",
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
      </div>

      {/* Button row */}
      <div className="mt-5 flex gap-3">
        <button
          className="flex flex-1 items-center justify-center font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            height: "37px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Awesome
        </button>
        <button
          className="flex flex-1 items-center justify-center font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            height: "37px",
            borderRadius: "4px",
            border: "none",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div style={{ height: "40px" }} />

      {/* Footer */}
      <span
        className="font-semibold"
        style={{ color: "#b0b0b0", fontSize: "13.5px" }}
      >
        Recent Breakdowns
      </span>
    </div>
  );
};

/* ── Internal icon helpers ── */

const ChevronUpIcon = ({
  color,
  size = 10,
}: {
  color: string;
  size?: number;
}) => (
  <svg
    width={size + 4}
    height={size}
    viewBox="0 0 14 8"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ flexShrink: 0 }}
  >
    <polyline points="1 7 7 1 13 7" />
  </svg>
);

const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    style={{ flexShrink: 0 }}
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <text
      x="7.5"
      y="11"
      textAnchor="middle"
      fontSize="8"
      fontWeight="700"
      fill={color}
      fontFamily="sans-serif"
    >
      i
    </text>
  </svg>
);
