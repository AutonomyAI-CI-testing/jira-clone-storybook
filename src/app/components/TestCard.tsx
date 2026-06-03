// Color palette for dark theme UI
const COLOR = {
  bg: "#000000",
  text: {
    primary: "#d1d5db",
    secondary: "#9ca3af",
    muted: "#6b7280",
  },
  input: {
    bg: "#111827",
    border: "#374151",
    icon: "#4b5563",
  },
  button: {
    bg: "#78350f",
    text: "#d1d5db",
  },
};

// Common style objects for reusable components
const STYLES = {
  flexRow: { display: "flex" as const, alignItems: "center" as const },
  input: {
    width: "100%",
    backgroundColor: COLOR.input.bg,
    border: `1px solid ${COLOR.input.border}`,
    borderRadius: "4px",
    padding: "8px 12px",
    fontSize: "12px",
    color: COLOR.text.primary,
    outline: "none" as const,
    boxSizing: "border-box" as const,
  },
  button: {
    padding: "8px 16px",
    fontSize: "12px",
    fontWeight: 600,
    color: COLOR.button.text,
    backgroundColor: COLOR.button.bg,
    border: "none",
    borderRadius: "4px",
    cursor: "pointer" as const,
  },
};

export default function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: COLOR.bg,
        color: COLOR.text.secondary,
        padding: "24px 20px",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <div style={{ ...STYLES.flexRow, gap: "8px", marginBottom: "24px" }}>
        <h1 style={{ fontSize: "14px", fontWeight: 600, color: COLOR.text.primary, margin: 0 }}>
          UI magician Agent
        </h1>
        <span style={{ color: COLOR.text.muted }}>⚙️</span>
      </div>

      {/* Collapsible Section */}
      <div
        style={{
          marginBottom: "16px",
          ...STYLES.flexRow,
          gap: "8px",
          fontSize: "12px",
          color: COLOR.text.secondary,
        }}
      >
        <span style={{ color: COLOR.text.muted }}>▼</span>
        <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div
        style={{
          marginBottom: "24px",
          ...STYLES.flexRow,
          gap: "8px",
          fontSize: "12px",
          color: COLOR.text.secondary,
        }}
      >
        <span style={{ color: COLOR.text.muted }}>▶</span>
        <span>Add New Design</span>
      </div>

      {/* Form Fields */}
      <div style={{ marginBottom: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Personal Access Token Field */}
        <div>
          <div style={{ ...STYLES.flexRow, gap: "8px", marginBottom: "8px" }}>
            <label style={{ fontSize: "12px", fontWeight: 600, color: COLOR.text.secondary }}>
              Personal Access Token
            </label>
            <span style={{ color: COLOR.input.icon }}>ℹ️</span>
          </div>
          <input
            type="password"
            placeholder="••••••••••••••••"
            style={STYLES.input}
          />
        </div>

        {/* Design URL Field */}
        <div>
          <div style={{ ...STYLES.flexRow, gap: "8px", marginBottom: "8px" }}>
            <label style={{ fontSize: "12px", fontWeight: 600, color: COLOR.text.secondary }}>
              Design URL
            </label>
            <span style={{ color: COLOR.input.icon }}>ℹ️</span>
          </div>
          <input
            type="text"
            placeholder="https://figma.com/file/..."
            style={STYLES.input}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
        <button style={STYLES.button}>
          Awesome
        </button>
        <button style={STYLES.button}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div style={{ fontSize: "12px", fontWeight: 600, color: COLOR.text.secondary }}>
        Recent Breakdowns
      </div>
    </div>
  );
}
