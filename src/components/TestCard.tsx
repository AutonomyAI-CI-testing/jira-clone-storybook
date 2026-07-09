import React from "react";

export const TestCard = (): JSX.Element => {
  const rootStyle: React.CSSProperties = {
    backgroundColor: "#2a2a2a",
    minHeight: "100vh",
    padding: "20px",
    color: "#ffffff",
    fontFamily: "sans-serif",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#383838",
    border: "1px solid #555555",
    borderRadius: "4px",
    padding: "8px 12px",
    color: "#999999",
    outline: "none",
    boxSizing: "border-box",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#c1541a",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    padding: "10px 24px",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "14px",
  };

  const chevronColor = "#b5703a";

  return (
    <div id="testElem" style={rootStyle}>
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, fontSize: "18px" }}>UI magician Agent</span>
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
      </div>

      {/* Chevron subtitle */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "8px" }}>
        <span style={{ color: chevronColor, fontSize: "12px" }}>&#8963;</span>
        <span style={{ color: chevronColor, fontSize: "14px" }}>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div style={{ height: "40px" }} />

      {/* Add New Design section */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <span style={{ color: chevronColor, fontSize: "14px" }}>&#8963;</span>
        <span style={{ fontWeight: 700, fontSize: "16px" }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
          <span style={{ fontSize: "13px", color: "#cccccc" }}>Personal Access Token</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaaaaa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="8" strokeWidth="3" strokeLinecap="round" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={inputStyle}
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
          <span style={{ fontSize: "13px", color: "#cccccc" }}>Design URL</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#aaaaaa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="8" strokeWidth="3" strokeLinecap="round" />
            <line x1="12" y1="12" x2="12" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={inputStyle}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
        <button style={buttonStyle}>Awesome</button>
        <button style={buttonStyle}>Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <div style={{ marginTop: "40px" }}>
        <span style={{ fontWeight: 700, fontSize: "16px" }}>Recent Breakdowns</span>
      </div>
    </div>
  );
};
