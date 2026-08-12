const styles = {
  card: {
    backgroundColor: "#272822",
    fontFamily: "Inter, sans-serif",
    width: "254px",
    display: "flex",
    flexDirection: "column" as const,
    paddingTop: "16px",
    paddingBottom: "16px",
    gap: "12px",
  },
  headerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  headerTitle: {
    fontSize: "13.5px",
    fontWeight: 600,
    color: "#b5b5b5",
  },
  subtitleRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  subtitleText: {
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#8b9291",
  },
  divider: {
    border: "none",
    borderTop: "1px solid #3a3a36",
    margin: "0",
  },
  sectionRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  sectionTitle: {
    fontSize: "13.5px",
    fontWeight: 600,
    color: "#b2b2b1",
  },
  fieldWrapper: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  labelText: {
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#a4a4a3",
  },
  labelTextUrl: {
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#a3a3a2",
  },
  patInputBox: {
    backgroundColor: "#272822",
    border: "1px solid #a5adad",
    borderRadius: "4px",
    padding: "8px 12px",
  },
  urlInputBox: {
    backgroundColor: "#272822",
    border: "2px solid #929291",
    borderRadius: "4px",
    padding: "8px 12px",
  },
  patPlaceholder: {
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#737470",
  },
  urlPlaceholder: {
    fontSize: "10.5px",
    fontWeight: 600,
    color: "#71726e",
  },
  buttonsRow: {
    display: "flex",
    gap: "12px",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  button: {
    flex: 1,
    backgroundColor: "#843a17",
    borderRadius: "4px",
    fontSize: "11.5px",
    fontWeight: 600,
    color: "#8c8078",
    padding: "10px 0",
    border: "none",
    cursor: "pointer",
  },
  recentSection: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  recentTitle: {
    fontSize: "13.5px",
    fontWeight: 600,
    color: "#b0b0b0",
  },
};

export const TestCard = () => {
  return (
    <div id="testElem" style={styles.card}>
      {/* Header row */}
      <div style={styles.headerRow}>
        <span style={styles.headerTitle}>UI magician Agent</span>
        {/* Gear / settings icon */}
        <svg
          width="14"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div style={styles.subtitleRow}>
        <svg
          width="8"
          height="5"
          viewBox="0 0 10 6"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 5 5 1 9 5" />
        </svg>
        <span style={styles.subtitleText}>From entire frame to a singl...</span>
      </div>

      {/* Divider */}
      <hr style={styles.divider} />

      {/* Add New Design row */}
      <div style={styles.sectionRow}>
        <svg
          width="10"
          height="7"
          viewBox="0 0 12 8"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="1 7 6 1 11 7" />
        </svg>
        <span style={styles.sectionTitle}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div style={styles.fieldWrapper}>
        <div style={styles.labelRow}>
          <span style={styles.labelText}>Personal Access Token</span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <div style={styles.patInputBox}>
          <span style={styles.patPlaceholder}>figd_xxxxxxxxxxxxxxxxxx</span>
        </div>
      </div>

      {/* Design URL */}
      <div style={styles.fieldWrapper}>
        <div style={styles.labelRow}>
          <span style={styles.labelTextUrl}>Design URL</span>
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a3a3a2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <div style={styles.urlInputBox}>
          <span style={styles.urlPlaceholder}>https://www.figma.com/file/:</span>
        </div>
      </div>

      {/* Action buttons */}
      <div style={styles.buttonsRow}>
        <button style={styles.button}>Awesome</button>
        <button style={styles.button}>Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <div style={styles.recentSection}>
        <span style={styles.recentTitle}>Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
