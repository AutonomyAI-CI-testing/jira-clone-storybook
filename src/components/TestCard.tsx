import React from "react";
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

const styles: Record<string, React.CSSProperties> = {
  root: {
    width: "254px",
    background: "#1e1e1a",
    fontFamily: "Inter, sans-serif",
    padding: "20px 16px",
    boxSizing: "border-box",
    minHeight: "508px",
    display: "flex",
    flexDirection: "column",
    gap: "0px",
  },
  headerRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  headerText: {
    color: "#b5b5b5",
    fontSize: "13.5px",
    fontWeight: 600,
    lineHeight: "16.34px",
  },
  gearIcon: {
    color: "#b5b5b5",
    fontSize: "16px",
  },
  subtitleRow: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "32px",
  },
  subtitleIcon: {
    color: "#8b9291",
    fontSize: "12px",
    flexShrink: 0,
  },
  subtitleText: {
    color: "#8b9291",
    fontSize: "11.5px",
    fontWeight: 600,
    lineHeight: "13.92px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  sectionRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "16px",
  },
  sectionIcon: {
    color: "#b2b2b1",
    fontSize: "14px",
    flexShrink: 0,
  },
  sectionTitle: {
    color: "#b2b2b1",
    fontSize: "13.5px",
    fontWeight: 600,
    lineHeight: "16.34px",
  },
  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "6px",
  },
  labelText: {
    fontSize: "11.5px",
    fontWeight: 600,
    lineHeight: "13.92px",
  },
  infoIcon: {
    fontSize: "13px",
    flexShrink: 0,
  },
  inputToken: {
    width: "100%",
    background: "#272822",
    border: "1px solid #a5adad",
    borderRadius: "2px",
    padding: "10px 12px",
    color: "#737470",
    fontSize: "11.5px",
    fontWeight: 600,
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
    outline: "none",
    marginBottom: "14px",
  },
  inputUrl: {
    width: "100%",
    background: "#272822",
    border: "2px solid #929291",
    borderRadius: "2px",
    padding: "10px 12px",
    color: "#71726e",
    fontSize: "11.5px",
    fontWeight: 600,
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
    outline: "none",
    marginBottom: "16px",
  },
  buttonsRow: {
    display: "flex",
    gap: "10px",
    marginBottom: "32px",
  },
  button: {
    flex: 1,
    background: "#843a17",
    border: "none",
    borderRadius: "4px",
    padding: "10px 0",
    color: "#8c8078",
    fontSize: "11.5px",
    fontWeight: 600,
    fontFamily: "Inter, sans-serif",
    cursor: "pointer",
    textAlign: "center" as const,
  },
  footerText: {
    color: "#b0b0b0",
    fontSize: "13.5px",
    fontWeight: 600,
    lineHeight: "16.34px",
    marginTop: "auto",
  },
};

export default function TestCard() {
  return (
    <div id="testElem" style={styles.root}>
      {/* Placeholder color overrides */}
      <style>{`
        .tc-input-token::placeholder { color: #737470; }
        .tc-input-url::placeholder { color: #71726e; }
      `}</style>

      {/* Header */}
      <div style={styles.headerRow}>
        <span style={styles.headerText}>UI magician Agent</span>
        <AiOutlineSetting style={styles.gearIcon} />
      </div>

      {/* Subtitle */}
      <div style={styles.subtitleRow}>
        <HiChevronUp style={styles.subtitleIcon} />
        <span style={styles.subtitleText}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div style={styles.sectionRow}>
        <HiChevronUp style={styles.sectionIcon} />
        <span style={styles.sectionTitle}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div style={styles.labelRow}>
        <span style={{ ...styles.labelText, color: "#a4a4a3" }}>Personal Access Token</span>
        <AiOutlineInfoCircle style={{ ...styles.infoIcon, color: "#a4a4a3" }} />
      </div>
      <input
        className="tc-input-token"
        style={styles.inputToken}
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />

      {/* Design URL */}
      <div style={styles.labelRow}>
        <span style={{ ...styles.labelText, color: "#a3a3a2" }}>Design URL</span>
        <AiOutlineInfoCircle style={{ ...styles.infoIcon, color: "#a3a3a2" }} />
      </div>
      <input
        className="tc-input-url"
        style={styles.inputUrl}
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
      />

      {/* Buttons */}
      <div style={styles.buttonsRow}>
        <button style={styles.button}>Awesome</button>
        <button style={styles.button}>Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <span style={styles.footerText}>Recent Breakdowns</span>
    </div>
  );
}
