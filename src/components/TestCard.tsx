import { AiOutlineSetting, AiOutlineUp, AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard(): JSX.Element {
  const styles = {
    root: {
      backgroundColor: "#282420",
      color: "#f5f0eb",
      fontFamily: "sans-serif",
      padding: "24px 20px",
      minHeight: "100vh",
      boxSizing: "border-box" as const,
      maxWidth: "320px",
    },
    headerRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "12px",
    },
    headerTitle: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#f5f0eb",
      margin: 0,
    },
    gearIcon: {
      color: "#f5f0eb",
      fontSize: "22px",
      opacity: 0.85,
    },
    subheadingRow: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      marginBottom: "4px",
    },
    subheadingText: {
      fontSize: "13px",
      color: "#c8956a",
      margin: 0,
    },
    chevronMuted: {
      color: "#c8956a",
      fontSize: "14px",
    },
    spacer: {
      height: "32px",
    },
    sectionRow: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "20px",
    },
    sectionTitle: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#f5f0eb",
      margin: 0,
    },
    chevronWhite: {
      color: "#f5f0eb",
      fontSize: "18px",
    },
    fieldGroup: {
      marginBottom: "16px",
    },
    labelRow: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      marginBottom: "8px",
    },
    label: {
      fontSize: "13px",
      fontWeight: "600",
      color: "#f5f0eb",
    },
    infoIcon: {
      color: "#a8988a",
      fontSize: "15px",
    },
    input: {
      width: "100%",
      backgroundColor: "#2e2a27",
      border: "1px solid #3a3532",
      borderRadius: "4px",
      padding: "10px 12px",
      color: "#a8988a",
      fontSize: "13px",
      outline: "none",
      boxSizing: "border-box" as const,
    },
    buttonRow: {
      display: "flex",
      gap: "12px",
      marginTop: "24px",
      marginBottom: "40px",
    },
    button: {
      flex: 1,
      backgroundColor: "#b35a2a",
      color: "#ffffff",
      border: "none",
      borderRadius: "8px",
      padding: "12px 16px",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
    },
    recentHeading: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#f5f0eb",
      margin: 0,
    },
  };

  return (
    <div id="testElem" style={styles.root}>
      {/* Header Row */}
      <div style={styles.headerRow}>
        <h1 style={styles.headerTitle}>UI magician Agent</h1>
        <AiOutlineSetting style={styles.gearIcon} />
      </div>

      {/* Subheading Row */}
      <div style={styles.subheadingRow}>
        <AiOutlineUp style={styles.chevronMuted} />
        <p style={styles.subheadingText}>From entire frame to a singl...</p>
      </div>

      {/* Spacer */}
      <div style={styles.spacer} />

      {/* Add New Design Section */}
      <div style={styles.sectionRow}>
        <AiOutlineUp style={styles.chevronWhite} />
        <h2 style={styles.sectionTitle}>Add New Design</h2>
      </div>

      {/* Personal Access Token Field */}
      <div style={styles.fieldGroup}>
        <div style={styles.labelRow}>
          <span style={styles.label}>Personal Access Token</span>
          <AiOutlineInfoCircle style={styles.infoIcon} />
        </div>
        <input
          style={styles.input}
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL Field */}
      <div style={styles.fieldGroup}>
        <div style={styles.labelRow}>
          <span style={styles.label}>Design URL</span>
          <AiOutlineInfoCircle style={styles.infoIcon} />
        </div>
        <input
          style={styles.input}
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Action Buttons */}
      <div style={styles.buttonRow}>
        <button style={styles.button}>Awesome</button>
        <button style={styles.button}>Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <h2 style={styles.recentHeading}>Recent Breakdowns</h2>
    </div>
  );
}
