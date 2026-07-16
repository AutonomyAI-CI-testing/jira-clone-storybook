export function TestCard() {
  const GearIcon = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#aaaaaa"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  const InfoIcon = () => (
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
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  const ChevronUp = ({ color = "#aaaaaa" }: { color?: string }) => (
    <svg
      width="16"
      height="16"
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

  const rootStyle: React.CSSProperties = {
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
    fontFamily: "sans-serif",
    padding: "24px 20px",
    minHeight: "100vh",
    maxWidth: "360px",
    margin: "0 auto",
    boxSizing: "border-box",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#2a2a2a",
    border: "1px solid #4a4a4a",
    borderRadius: "6px",
    color: "#cccccc",
    padding: "10px 14px",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "8px",
    color: "#dddddd",
    fontSize: "14px",
    fontWeight: 500,
  };

  const buttonStyle: React.CSSProperties = {
    flex: 1,
    backgroundColor: "#a0522d",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    padding: "12px 0",
    fontSize: "15px",
    fontWeight: 600,
    cursor: "pointer",
  };

  return (
    <div id="testElem" style={rootStyle}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
        <span style={{ fontSize: "20px", fontWeight: 700 }}>UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Subtitle */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "48px" }}>
        <ChevronUp color="#b07050" />
        <span style={{ color: "#b07050", fontSize: "14px" }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
        <ChevronUp color="#ffffff" />
        <span style={{ fontSize: "18px", fontWeight: 700 }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: "16px" }}>
        <div style={labelRowStyle}>
          <span>Personal Access Token</span>
          <InfoIcon />
        </div>
        <input
          style={inputStyle}
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: "24px" }}>
        <div style={labelRowStyle}>
          <span>Design URL</span>
          <InfoIcon />
        </div>
        <input
          style={inputStyle}
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "48px" }}>
        <button style={buttonStyle}>Awesome</button>
        <button style={buttonStyle}>Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <div style={{ fontSize: "18px", fontWeight: 700 }}>Recent Breakdowns</div>
    </div>
  );
}

export default TestCard;
