import React from "react";

const GearIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3" fill="#b5b5b5" />
    <path
      d="M12 2a1 1 0 0 1 1 1v1.07A7.002 7.002 0 0 1 18.93 9H20a1 1 0 1 1 0 2h-1.07A7.002 7.002 0 0 1 13 16.93V18a1 1 0 1 1-2 0v-1.07A7.002 7.002 0 0 1 5.07 11H4a1 1 0 1 1 0-2h1.07A7.002 7.002 0 0 1 11 5.07V4a1 1 0 0 1 1-1Z"
      fill="#b5b5b5"
    />
  </svg>
);

const ChevronUp = ({
  color = "#8b9291",
  size = 10,
}: {
  color?: string;
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 7L5 3L8 7"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7" cy="7" r="6" stroke="#737470" strokeWidth="1.2" />
    <text
      x="7"
      y="11"
      textAnchor="middle"
      fontSize="8"
      fill="#737470"
      fontWeight="600"
    >
      i
    </text>
  </svg>
);

export const TestCard = (): JSX.Element => {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "#2a2a2a",
    width: "254px",
    fontFamily: "Inter, sans-serif",
    padding: "20px 16px",
    boxSizing: "border-box",
  };

  const inputStyle: React.CSSProperties = {
    backgroundColor: "#1e1e1e",
    border: "1px solid #3a3a3a",
    color: "#737470",
    borderRadius: "4px",
    padding: "8px 10px",
    width: "100%",
    fontSize: "11.5px",
    fontWeight: 600,
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    color: "#a4a4a3",
    fontSize: "11.5px",
    fontWeight: 600,
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#b5541c",
    color: "#ffffff",
    borderRadius: "8px",
    padding: "8px 16px",
    fontSize: "11.5px",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    flex: 1,
  };

  return (
    <div id="testElem" style={cardStyle}>
      {/* 1. Header row */}
      <div
        className="flex items-center justify-between"
        style={{ marginBottom: "10px" }}
      >
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* 2. Collapsed row */}
      <div className="flex items-center gap-1">
        <ChevronUp color="#8b9291" size={10} />
        <span
          style={{
            color: "#8b9291",
            fontSize: "11.5px",
            fontWeight: 600,
            fontStyle: "italic",
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div style={{ height: "24px" }} />

      {/* 4. Section header: Add New Design */}
      <div
        className="flex items-center gap-2"
        style={{ marginBottom: "14px" }}
      >
        <ChevronUp color="#b2b2b1" size={10} />
        <span
          style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}
        >
          Add New Design
        </span>
      </div>

      {/* 5. Personal Access Token */}
      <div style={{ marginBottom: "10px" }}>
        <div
          className="flex items-center gap-1"
          style={{ marginBottom: "6px" }}
        >
          <span style={labelStyle}>Personal Access Token</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={inputStyle}
          readOnly
        />
      </div>

      {/* 6. Design URL */}
      <div style={{ marginBottom: "14px" }}>
        <div
          className="flex items-center gap-1"
          style={{ marginBottom: "6px" }}
        >
          <span style={labelStyle}>Design URL</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={inputStyle}
          readOnly
        />
      </div>

      {/* 7. Buttons */}
      <div className="flex gap-2" style={{ marginBottom: "28px" }}>
        <button style={buttonStyle}>Awesome</button>
        <button style={buttonStyle}>Prepare</button>
      </div>

      {/* 8. Recent Breakdowns */}
      <div>
        <span
          style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
