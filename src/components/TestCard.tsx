export function TestCard() {
  const rootStyle: React.CSSProperties = {
    backgroundColor: "#2a2a2a",
    color: "#e5e5e5",
    padding: "24px 20px",
    maxWidth: "480px",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  };

  const headerRowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  };

  const titleStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "20px",
    color: "#e5e5e5",
  };

  const subtitleRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "32px",
    color: "#c07048",
    fontSize: "14px",
  };

  const sectionHeadingRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  };

  const sectionHeadingStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#e5e5e5",
  };

  const labelRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "8px",
    fontSize: "14px",
    color: "#e5e5e5",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#333333",
    border: "1px solid #555555",
    borderRadius: "6px",
    padding: "12px 14px",
    color: "#9ca3af",
    fontSize: "14px",
    marginBottom: "16px",
    boxSizing: "border-box",
    outline: "none",
  };

  const buttonRowStyle: React.CSSProperties = {
    display: "flex",
    gap: "16px",
    marginBottom: "32px",
    marginTop: "8px",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#b45309",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    padding: "14px 28px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    flex: 1,
  };

  const recentHeadingStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "18px",
    color: "#e5e5e5",
  };

  const GearIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );

  const ChevronUpIcon = ({ color = "#9ca3af" }: { color?: string }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );

  const InfoIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );

  return (
    <div id="testElem" style={rootStyle}>
      {/* Header */}
      <div style={headerRowStyle}>
        <span style={titleStyle}>UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Subtitle */}
      <div style={subtitleRowStyle}>
        <ChevronUpIcon color="#c07048" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div style={sectionHeadingRowStyle}>
        <ChevronUpIcon color="#e5e5e5" />
        <span style={sectionHeadingStyle}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
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

      {/* Design URL */}
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

      {/* Buttons */}
      <div style={buttonRowStyle}>
        <button style={buttonStyle}>Awesome</button>
        <button style={buttonStyle}>Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <div style={recentHeadingStyle}>Recent Breakdowns</div>
    </div>
  );
}
