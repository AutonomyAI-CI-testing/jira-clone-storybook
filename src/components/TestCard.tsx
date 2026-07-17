import React from "react";

const GearIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#aaaaaa"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = ({ color = "#aaaaaa" }: { color?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="8" strokeWidth="3" strokeLinecap="round" />
    <line x1="12" y1="12" x2="12" y2="16" />
  </svg>
);

const ChevronUpIcon = ({
  color = "#aaaaaa",
  size = 12,
}: {
  color?: string;
  size?: number;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

export function TestCard() {
  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#272822",
    color: "#aaaaaa",
    fontSize: "13px",
    padding: "10px 12px",
    boxSizing: "border-box",
    outline: "none",
    fontFamily: "inherit",
    border: "none",
  };

  const labelRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#aaaaaa",
    fontSize: "13px",
    fontWeight: 600,
    marginBottom: "6px",
  };

  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272727",
        color: "#ffffff",
        padding: "20px 16px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        minWidth: "280px",
        maxWidth: "320px",
      }}
    >
      {/* 1. Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "17px", color: "#ffffff" }}>
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* 2. Chevron + orange collapse text */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "32px",
        }}
      >
        <ChevronUpIcon color="#c9622f" size={12} />
        <span style={{ color: "#c9622f", fontSize: "13px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Add New Design heading */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <ChevronUpIcon color="#ffffff" size={13} />
        <span style={{ fontWeight: 700, fontSize: "17px", color: "#ffffff" }}>
          Add New Design
        </span>
      </div>

      {/* 4. Personal Access Token */}
      <div style={{ marginBottom: "14px" }}>
        <div style={labelRowStyle}>
          <span>Personal Access Token</span>
          <InfoIcon />
        </div>
        <div
          style={{
            border: "1.5px solid #929291",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            style={inputStyle}
          />
        </div>
      </div>

      {/* 5. Design URL */}
      <div style={{ marginBottom: "20px" }}>
        <div style={labelRowStyle}>
          <span>Design URL</span>
          <InfoIcon />
        </div>
        <div
          style={{
            border: "1.5px solid #A5ADAD",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            style={inputStyle}
          />
        </div>
      </div>

      {/* 6. Button row */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          marginBottom: "32px",
        }}
      >
        {["Awesome", "Prepare"].map((label) => (
          <button
            key={label}
            style={{
              flex: 1,
              backgroundColor: "#843A17",
              color: "#d4a07a",
              border: "none",
              borderRadius: "8px",
              padding: "10px 16px",
              fontWeight: 600,
              fontSize: "14px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 7. Recent Breakdowns footer */}
      <div style={{ fontWeight: 700, fontSize: "17px", color: "#ffffff" }}>
        Recent Breakdowns
      </div>
    </div>
  );
}
