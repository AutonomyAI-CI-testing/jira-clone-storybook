const GearIcon = (): JSX.Element => (
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
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = ({ color = "#b2b2b1" }: { color?: string }): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 7L6 2L11 7"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoCircle = ({
  color = "#a4a4a3",
}: {
  color?: string;
}): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <circle cx="7.5" cy="4.5" r="0.75" fill={color} />
    <path
      d="M7.5 6.5V10.5"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-3 p-5"
      style={{
        backgroundColor: "#2a2a25",
        width: "254px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <ChevronUp color="#8b9291" />
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <ChevronUp color="#b2b2b1" />
        <span
          style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="mt-1 flex items-center gap-2">
        <span
          style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}
        >
          Personal Access Token
        </span>
        <InfoCircle color="#a4a4a3" />
      </div>

      {/* Token input */}
      <div
        className="flex items-center"
        style={{
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
          height: "37px",
          paddingLeft: "12px",
          paddingRight: "12px",
        }}
      >
        <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2">
        <span
          style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}
        >
          Design URL
        </span>
        <InfoCircle color="#a3a3a2" />
      </div>

      {/* URL input */}
      <div
        className="flex items-center"
        style={{
          backgroundColor: "#272822",
          border: "2px solid #929291",
          height: "37px",
          paddingLeft: "12px",
          paddingRight: "12px",
        }}
      >
        <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}>
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons row */}
      <div className="mt-1 flex gap-3">
        <button
          type="button"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            borderRadius: "4px",
            fontSize: "11.5px",
            fontWeight: 600,
            width: "85px",
            height: "37px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            borderRadius: "4px",
            fontSize: "11.5px",
            fontWeight: 600,
            width: "85px",
            height: "37px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Recent Breakdowns label */}
      <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
        Recent Breakdowns
      </span>
    </div>
  );
};
