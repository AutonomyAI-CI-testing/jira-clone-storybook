import React from "react";

const styles: Record<string, React.CSSProperties> = {
  root: {
    backgroundColor: "#272822",
    width: "254px",
    padding: "20px",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
  },
  headerRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "8px",
  },
  headerTitle: {
    fontSize: "13.5px",
    fontWeight: 600,
    color: "#b5b5b5",
    lineHeight: "16.34px",
  },
  gearIcon: {
    fontSize: "16px",
    color: "#b5b5b5",
    cursor: "pointer",
  },
  subtitleRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "6px",
    marginBottom: "24px",
  },
  chevronSmall: {
    fontSize: "9px",
    color: "#8b9291",
    lineHeight: 1,
  },
  subtitleText: {
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#8b9291",
    lineHeight: "13.92px",
  },
  sectionHeaderRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
    marginBottom: "16px",
  },
  chevronMedium: {
    fontSize: "10px",
    color: "#b2b2b1",
    lineHeight: 1,
  },
  sectionHeaderText: {
    fontSize: "13.5px",
    fontWeight: 600,
    color: "#b2b2b1",
    lineHeight: "16.34px",
  },
  formSection: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    marginBottom: "16px",
  },
  labelRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "4px",
  },
  labelText: {
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#a4a4a3",
    lineHeight: "13.92px",
  },
  labelTextAlt: {
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#a3a3a2",
    lineHeight: "13.92px",
  },
  infoIcon: {
    fontSize: "11px",
    color: "#a4a4a3",
  },
  inputPat: {
    width: "100%",
    backgroundColor: "#272822",
    border: "1px solid #a5adad",
    padding: "8px",
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#737470",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
    outline: "none",
  },
  inputUrl: {
    width: "100%",
    backgroundColor: "#272822",
    border: "2px solid #929291",
    padding: "8px",
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#71726e",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
    outline: "none",
  },
  buttonRow: {
    display: "flex",
    flexDirection: "row",
    gap: "12px",
    justifyContent: "center",
    marginBottom: "24px",
  },
  button: {
    backgroundColor: "#843a17",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#8c8078",
    border: "none",
    cursor: "pointer",
    fontFamily: "Inter, sans-serif",
    lineHeight: "13.92px",
  },
  footer: {
    fontSize: "13.5px",
    fontWeight: 600,
    color: "#b0b0b0",
    lineHeight: "16.34px",
  },
};

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" style={styles.root}>
      {/* Header Row */}
      <div style={styles.headerRow}>
        <span style={styles.headerTitle}>UI magician Agent</span>
        <span style={styles.gearIcon}>⚙</span>
      </div>

      {/* Subtitle Row */}
      <div style={styles.subtitleRow}>
        <span style={styles.chevronSmall}>▲</span>
        <span style={styles.subtitleText}>From entire frame to a singl…</span>
      </div>

      {/* Section Header */}
      <div style={styles.sectionHeaderRow}>
        <span style={styles.chevronMedium}>▲</span>
        <span style={styles.sectionHeaderText}>Add New Design</span>
      </div>

      {/* Form Section */}
      <div style={styles.formSection}>
        {/* Personal Access Token */}
        <div style={styles.labelRow}>
          <span style={styles.labelText}>Personal Access Token</span>
          <span style={styles.infoIcon}>ℹ</span>
        </div>
        <input
          style={styles.inputPat}
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />

        {/* Design URL */}
        <div style={{ ...styles.labelRow, marginTop: "4px" }}>
          <span style={styles.labelTextAlt}>Design URL</span>
          <span style={{ ...styles.infoIcon, color: "#a3a3a2" }}>ℹ</span>
        </div>
        <input
          style={styles.inputUrl}
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Button Row */}
      <div style={styles.buttonRow}>
        <button style={styles.button}>Awesome</button>
        <button style={styles.button}>Prepare</button>
      </div>

      {/* Footer */}
      <div style={styles.footer}>Recent Breakdowns</div>
    </div>
  );
};
