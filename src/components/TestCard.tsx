import { RiSettings3Line } from "react-icons/ri";
import { BiChevronUp } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  const root: React.CSSProperties = {
    backgroundColor: "#1a1a18",
    fontFamily: "Inter, sans-serif",
    width: "254px",
    minHeight: "508px",
    display: "flex",
    flexDirection: "column",
    padding: "0",
    boxSizing: "border-box",
  };

  const headerRow: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 20px 8px 20px",
  };

  const titleText: React.CSSProperties = {
    color: "#b5b5b5",
    fontSize: "13.5px",
    fontWeight: 600,
    lineHeight: "16.34px",
  };

  const subtitleRow: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "4px 20px 24px 20px",
    color: "#8b9291",
    fontSize: "11.5px",
    fontWeight: 600,
    lineHeight: "13.92px",
  };

  const sectionHeader: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    padding: "0 20px 16px 20px",
  };

  const sectionTitle: React.CSSProperties = {
    color: "#b2b2b1",
    fontSize: "13.5px",
    fontWeight: 600,
    lineHeight: "16.34px",
  };

  const formSection: React.CSSProperties = {
    padding: "0 20px",
  };

  const fieldLabel: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginBottom: "6px",
  };

  const labelText: React.CSSProperties = {
    fontSize: "11.5px",
    fontWeight: 600,
    lineHeight: "13.92px",
  };

  const inputBox: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    backgroundColor: "#272822",
    boxSizing: "border-box",
    borderRadius: "2px",
    marginBottom: "12px",
  };

  const inputPlaceholder: React.CSSProperties = {
    fontSize: "10.5px",
    fontWeight: 600,
    lineHeight: "12.71px",
  };

  const buttonRow: React.CSSProperties = {
    display: "flex",
    gap: "12px",
    marginTop: "4px",
    marginBottom: "8px",
  };

  const button: React.CSSProperties = {
    flex: 1,
    padding: "10px 0",
    backgroundColor: "#843a17",
    color: "#8c8078",
    fontSize: "11.5px",
    fontWeight: 600,
    lineHeight: "13.92px",
    textAlign: "center",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  };

  const recentSection: React.CSSProperties = {
    padding: "24px 20px 20px 20px",
    color: "#b0b0b0",
    fontSize: "13.5px",
    fontWeight: 600,
    lineHeight: "16.34px",
  };

  return (
    <div id="testElem" style={root}>
      {/* Header row */}
      <div style={headerRow}>
        <span style={titleText}>UI magician Agent</span>
        <RiSettings3Line size={16} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div style={subtitleRow}>
        <BiChevronUp size={14} color="#8b9291" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section header */}
      <div style={sectionHeader}>
        <BiChevronUp size={16} color="#b2b2b1" />
        <span style={sectionTitle}>Add New Design</span>
      </div>

      {/* Form fields */}
      <div style={formSection}>
        {/* Personal Access Token */}
        <div style={fieldLabel}>
          <span style={{ ...labelText, color: "#a4a4a3" }}>Personal Access Token</span>
          <AiOutlineInfoCircle size={14} color="#a4a4a3" />
        </div>
        <div style={{ ...inputBox, border: "1px solid #a5adad" }}>
          <span style={{ ...inputPlaceholder, color: "#737470" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL */}
        <div style={fieldLabel}>
          <span style={{ ...labelText, color: "#a3a3a2" }}>Design URL</span>
          <AiOutlineInfoCircle size={14} color="#a3a3a2" />
        </div>
        <div style={{ ...inputBox, border: "2px solid #929291" }}>
          <span style={{ ...inputPlaceholder, color: "#71726e" }}>
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div style={buttonRow}>
          <button style={button}>Awesome</button>
          <button style={button}>Prepare</button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div style={recentSection}>Recent Breakdowns</div>
    </div>
  );
}

export default TestCard;
