import React from "react";

export function TestCard() {
  const inputStyle: React.CSSProperties = {
    background: "#333",
    border: "1px solid #555",
    color: "#ccc",
    padding: "10px 12px",
    borderRadius: "6px",
    width: "100%",
    fontSize: "13px",
    outline: "none",
    boxSizing: "border-box",
  };

  const buttonStyle: React.CSSProperties = {
    background: "#b85c2a",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "12px 28px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "14px",
  };

  const labelRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "6px",
  };

  const GearIcon = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#888"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  const ChevronUp = ({
    color = "#888",
    size = 14,
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

  const InfoIcon = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#888"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="8" strokeWidth="3" />
      <line x1="12" y1="12" x2="12" y2="16" />
    </svg>
  );

  return (
    <div
      id="testElem"
      style={{
        background: "#252525",
        color: "white",
        padding: "24px",
        width: "320px",
        fontFamily: "sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* 1. Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* 2. Subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginTop: "10px",
        }}
      >
        <ChevronUp color="#b87a5c" size={13} />
        <span style={{ color: "#b87a5c", fontSize: "13px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3. Spacer */}
      <div style={{ height: "40px" }} />

      {/* 4. Add New Design section header */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <ChevronUp color="white" size={14} />
        <span style={{ fontWeight: "bold", fontSize: "16px" }}>
          Add New Design
        </span>
      </div>

      {/* 5. Gap */}
      <div style={{ height: "16px" }} />

      {/* 6. Personal Access Token label */}
      <div style={labelRowStyle}>
        <span style={{ fontSize: "13px" }}>Personal Access Token</span>
        <InfoIcon />
      </div>

      {/* 7. Token input */}
      <input
        style={inputStyle}
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />

      {/* 8. Gap */}
      <div style={{ height: "12px" }} />

      {/* 9. Design URL label */}
      <div style={labelRowStyle}>
        <span style={{ fontSize: "13px" }}>Design URL</span>
        <InfoIcon />
      </div>

      {/* 10. URL input */}
      <input
        style={inputStyle}
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
      />

      {/* 11. Gap */}
      <div style={{ height: "16px" }} />

      {/* 12. Action buttons */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
        }}
      >
        <button style={buttonStyle}>Awesome</button>
        <button style={buttonStyle}>Prepare</button>
      </div>

      {/* 13. Spacer */}
      <div style={{ height: "32px" }} />

      {/* 14. Recent Breakdowns heading */}
      <div style={{ fontWeight: "bold", fontSize: "16px" }}>
        Recent Breakdowns
      </div>
    </div>
  );
}
