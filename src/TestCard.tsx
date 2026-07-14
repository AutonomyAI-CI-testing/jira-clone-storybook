import React from "react";

const GearIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#aaa"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ color = "#aaa" }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
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

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#aaa"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const colors = {
  bg: "#2a2a2a",
  white: "#e8e8e8",
  orange: "#c1623f",
  inputBg: "#333333",
  inputBorder: "#555555",
  muted: "#888888",
};

const styles: Record<string, React.CSSProperties> = {
  root: {
    backgroundColor: colors.bg,
    color: colors.white,
    fontFamily: "sans-serif",
    padding: "20px 20px 32px 20px",
    minHeight: "100vh",
    maxWidth: "320px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "10px",
  },
  headerTitle: {
    fontWeight: "700",
    fontSize: "18px",
    color: colors.white,
    margin: 0,
  },
  subtitle: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: colors.orange,
    fontSize: "13px",
    marginBottom: "32px",
  },
  sectionHeader: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: "17px",
    color: colors.white,
    margin: 0,
  },
  labelRow: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    marginBottom: "8px",
    fontSize: "13px",
    color: colors.white,
    fontWeight: "600",
  },
  input: {
    display: "block",
    width: "100%",
    boxSizing: "border-box" as const,
    backgroundColor: colors.inputBg,
    border: `1px solid ${colors.inputBorder}`,
    borderRadius: "4px",
    padding: "10px 12px",
    color: colors.muted,
    fontSize: "13px",
    marginBottom: "14px",
    outline: "none",
  },
  buttonRow: {
    display: "flex",
    gap: "12px",
    marginTop: "4px",
    marginBottom: "40px",
  },
  button: {
    flex: 1,
    backgroundColor: colors.orange,
    color: "#fff",
    fontWeight: "600",
    fontSize: "14px",
    border: "none",
    borderRadius: "8px",
    padding: "12px 0",
    cursor: "pointer",
  },
  recentTitle: {
    fontWeight: "700",
    fontSize: "17px",
    color: colors.white,
    margin: 0,
  },
};

export const TestCard = () => {
  return (
    <div id="testElem" style={styles.root}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>UI magician Agent</h1>
        <GearIcon />
      </div>

      {/* Subtitle */}
      <div style={styles.subtitle}>
        <ChevronUpIcon color={colors.orange} />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div style={styles.sectionHeader}>
        <ChevronUpIcon color={colors.white} />
        <h2 style={styles.sectionTitle}>Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div style={styles.labelRow}>
        <span>Personal Access Token</span>
        <InfoIcon />
      </div>
      <input
        style={styles.input}
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />

      {/* Design URL */}
      <div style={styles.labelRow}>
        <span>Design URL</span>
        <InfoIcon />
      </div>
      <input
        style={styles.input}
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
      />

      {/* Buttons */}
      <div style={styles.buttonRow}>
        <button style={styles.button}>Awesome</button>
        <button style={styles.button}>Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <h2 style={styles.recentTitle}>Recent Breakdowns</h2>
    </div>
  );
};
