import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  const root: React.CSSProperties = {
    backgroundColor: "#252525",
    color: "#ffffff",
    fontFamily: "sans-serif",
    padding: "24px 20px",
    width: "300px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  };

  const headerRow: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
  };

  const headerTitle: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#ffffff",
  };

  const gearIcon: React.CSSProperties = {
    color: "#aaaaaa",
    fontSize: "22px",
  };

  const caretRow: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "40px",
  };

  const caretChar: React.CSSProperties = {
    color: "#c8733a",
    fontSize: "14px",
  };

  const subtitleText: React.CSSProperties = {
    color: "#c8733a",
    fontSize: "14px",
  };

  const sectionHeader: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  };

  const sectionTitle: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#ffffff",
  };

  const fieldLabel: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#cccccc",
    fontSize: "14px",
    marginBottom: "8px",
  };

  const infoIcon: React.CSSProperties = {
    color: "#888888",
    fontSize: "16px",
  };

  const inputField: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#1a1a1a",
    border: "1px solid #444444",
    borderRadius: "6px",
    padding: "10px 12px",
    color: "#888888",
    fontSize: "14px",
    marginBottom: "16px",
    boxSizing: "border-box",
    outline: "none",
  };

  const buttonRow: React.CSSProperties = {
    display: "flex",
    gap: "12px",
    marginBottom: "32px",
    marginTop: "8px",
  };

  const button: React.CSSProperties = {
    flex: 1,
    backgroundColor: "#a0522d",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    padding: "12px 0",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
  };

  const recentHeading: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#ffffff",
    marginTop: "8px",
  };

  return (
    <div id="testElem" style={root}>
      {/* Header */}
      <div style={headerRow}>
        <span style={headerTitle}>UI magician Agent</span>
        <AiOutlineSetting style={gearIcon} />
      </div>

      {/* Subtitle row */}
      <div style={caretRow}>
        <span style={caretChar}>&#8963;</span>
        <span style={subtitleText}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div style={sectionHeader}>
        <span style={{ ...caretChar, color: "#ffffff", fontSize: "16px" }}>&#8963;</span>
        <span style={sectionTitle}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div>
        <div style={fieldLabel}>
          <span>Personal Access Token</span>
          <AiOutlineInfoCircle style={infoIcon} />
        </div>
        <input
          style={inputField}
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div>
        <div style={fieldLabel}>
          <span>Design URL</span>
          <AiOutlineInfoCircle style={infoIcon} />
        </div>
        <input
          style={inputField}
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div style={buttonRow}>
        <button style={button}>Awesome</button>
        <button style={button}>Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <span style={recentHeading}>Recent Breakdowns</span>
    </div>
  );
}

export default TestCard;
