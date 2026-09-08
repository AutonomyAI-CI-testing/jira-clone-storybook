const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm5.3-2c.05-.33.07-.66.07-1s-.02-.68-.07-1l2.14-1.67a.5.5 0 0 0 .12-.65L12.6 1.5a.5.5 0 0 0-.61-.22l-2.53 1.02c-.52-.4-1.09-.73-1.72-.98L7.37.08A.49.49 0 0 0 6.87 0H5.13c-.24 0-.44.17-.48.39L4.27 3.32c-.63.25-1.2.58-1.72.98L.02 3.28A.49.49 0 0 0-.37 3.5 .49.49 0 0 0-.5 3.7 .49.49 0 0 0-.49 3.9L1.65 7.5c-.05.33-.08.67-.08 1s.03.67.08 1L-.49 11.17a.5.5 0 0 0-.12.65l1.96 3.39c.13.22.4.3.61.22l2.53-1.02c.52.4 1.09.73 1.72.98l.38 2.93c.04.22.24.39.48.39h3.92c.24 0 .44-.17.48-.39l.38-2.93c.63-.25 1.2-.58 1.72-.98l2.53 1.02c.22.08.48 0 .61-.22l1.96-3.39a.5.5 0 0 0-.12-.65L12.3 8.5z"
      fill="#b5b5b5"
    />
  </svg>
);

const ChevronUp = ({ color = "#b2b2b1", size = 12 }: { color?: string; size?: number }) => (
  <svg
    width={size}
    height={size * 0.67}
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 7L6 2 1 7"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ color = "#a4a4a3" }: { color?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" />
    <text
      x="7.5"
      y="11"
      textAnchor="middle"
      fontSize="9"
      fontWeight="600"
      fill={color}
      fontFamily="Inter, sans-serif"
    >
      i
    </text>
  </svg>
);

export function TestCard() {
  const cardStyle: React.CSSProperties = {
    backgroundColor: "#272822",
    fontFamily: "Inter, sans-serif",
    width: "254px",
    padding: "20px",
    boxSizing: "border-box",
  };

  const headerRowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "13.5px",
    fontWeight: 600,
    color: "#b5b5b5",
    lineHeight: "16.34px",
  };

  const collapsedRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "28px",
  };

  const mutedSmallStyle: React.CSSProperties = {
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#8b9291",
    lineHeight: "13.92px",
  };

  const sectionHeaderStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "16px",
  };

  const sectionTitleStyle: React.CSSProperties = {
    fontSize: "13.5px",
    fontWeight: 600,
    color: "#b2b2b1",
    lineHeight: "16.34px",
  };

  const labelRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "6px",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#a4a4a3",
    lineHeight: "13.92px",
  };

  const inputPATStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#272822",
    border: "1px solid #a5adad",
    padding: "10px 12px",
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#737470",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
    outline: "none",
    marginBottom: "14px",
  };

  const inputURLStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#272822",
    border: "2px solid #929291",
    padding: "10px 12px",
    fontSize: "10.5px",
    fontWeight: 600,
    color: "#71726e",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
    outline: "none",
    marginBottom: "16px",
  };

  const buttonRowStyle: React.CSSProperties = {
    display: "flex",
    gap: "12px",
    marginBottom: "28px",
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#843a17",
    borderRadius: "4px",
    border: "none",
    width: "85px",
    height: "37px",
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#8c8078",
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
  };

  const footerLabelStyle: React.CSSProperties = {
    fontSize: "13.5px",
    fontWeight: 600,
    color: "#b0b0b0",
    lineHeight: "16.34px",
  };

  return (
    <div id="testElem" style={cardStyle}>
      {/* Header row */}
      <div style={headerRowStyle}>
        <span style={titleStyle}>UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Collapsed description row */}
      <div style={collapsedRowStyle}>
        <ChevronUp color="#8b9291" size={8} />
        <span style={mutedSmallStyle}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section header */}
      <div style={sectionHeaderStyle}>
        <ChevronUp color="#b2b2b1" size={12} />
        <span style={sectionTitleStyle}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div style={labelRowStyle}>
        <span style={labelStyle}>Personal Access Token</span>
        <InfoIcon color="#a4a4a3" />
      </div>
      <input
        style={inputPATStyle}
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />

      {/* Design URL */}
      <div style={{ ...labelRowStyle }}>
        <span style={{ ...labelStyle, color: "#a3a3a2" }}>Design URL</span>
        <InfoIcon color="#a3a3a2" />
      </div>
      <input
        style={inputURLStyle}
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
      <span style={footerLabelStyle}>Recent Breakdowns</span>
    </div>
  );
}
