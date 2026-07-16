export function TestCard() {
  const styles = {
    root: {
      backgroundColor: "#2b2b2b",
      color: "#e0e0e0",
      fontFamily: "sans-serif",
      padding: "20px 16px",
      minHeight: "100vh",
      boxSizing: "border-box" as const,
      maxWidth: "480px",
    },
    headerRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
    },
    headerTitle: {
      fontSize: "20px",
      fontWeight: "700",
      color: "#e0e0e0",
      margin: 0,
    },
    gearIcon: {
      fontSize: "22px",
      color: "#a0a0a0",
      cursor: "pointer",
    },
    subtitleRow: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      marginBottom: "40px",
    },
    chevron: {
      fontSize: "13px",
      color: "#a0a0a0",
    },
    subtitleText: {
      fontSize: "14px",
      color: "#c07848",
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
      color: "#e0e0e0",
      margin: 0,
    },
    fieldGroup: {
      marginBottom: "16px",
    },
    labelRow: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      marginBottom: "6px",
    },
    label: {
      fontSize: "13px",
      fontWeight: "600",
      color: "#c8c8c8",
    },
    infoIcon: {
      fontSize: "14px",
      color: "#888",
      cursor: "help",
    },
    input: {
      display: "block",
      width: "100%",
      backgroundColor: "#1e1e1e",
      border: "1px solid #555",
      borderRadius: "4px",
      padding: "10px 12px",
      color: "#a0a0a0",
      fontSize: "14px",
      boxSizing: "border-box" as const,
      outline: "none",
    },
    buttonRow: {
      display: "flex",
      gap: "12px",
      marginTop: "20px",
      marginBottom: "40px",
      justifyContent: "center",
    },
    button: {
      flex: 1,
      backgroundColor: "#a0522d",
      color: "#e8d0b8",
      border: "none",
      borderRadius: "8px",
      padding: "14px 20px",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
    },
    footerTitle: {
      fontSize: "18px",
      fontWeight: "700",
      color: "#e0e0e0",
      margin: 0,
    },
  };

  return (
    <div id="testElem" style={styles.root}>
      {/* Header Row */}
      <div style={styles.headerRow}>
        <h1 style={styles.headerTitle}>UI magician Agent</h1>
        <span style={styles.gearIcon}>⚙</span>
      </div>

      {/* Subtitle Row */}
      <div style={styles.subtitleRow}>
        <span style={styles.chevron}>∧</span>
        <span style={styles.subtitleText}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div style={styles.sectionRow}>
        <span style={styles.chevron}>∧</span>
        <h2 style={styles.sectionTitle}>Add New Design</h2>
      </div>

      {/* Personal Access Token Field */}
      <div style={styles.fieldGroup}>
        <div style={styles.labelRow}>
          <span style={styles.label}>Personal Access Token</span>
          <span style={styles.infoIcon} title="Your Figma personal access token">
            ⓘ
          </span>
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
          <span style={styles.infoIcon} title="The URL of your Figma design file">
            ⓘ
          </span>
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
        <button style={styles.button} type="button">
          Awesome
        </button>
        <button style={styles.button} type="button">
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <h2 style={styles.footerTitle}>Recent Breakdowns</h2>
    </div>
  );
}
