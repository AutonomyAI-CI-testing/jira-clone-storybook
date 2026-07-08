const GearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1e1e1e",
        padding: "20px",
        width: "254px",
        fontFamily: "Inter, sans-serif",
        color: "#b5b5b5",
        borderRadius: "6px",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, fontSize: "13.5px", color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Subtitle row */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "10px", color: "#8b9291", fontSize: "12px" }}>
        <ChevronUpIcon />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div style={{ height: "48px" }} />

      {/* Section header */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
        <span style={{ color: "#b2b2b1" }}><ChevronUpIcon /></span>
        <span style={{ fontWeight: 600, fontSize: "14px", color: "#b2b2b1" }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px", color: "#a4a4a3", fontSize: "12px" }}>
          <span>Personal Access Token</span>
          <span style={{ color: "#a4a4a3" }}><InfoIcon /></span>
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            borderRadius: "4px",
            padding: "8px 10px",
            color: "#737470",
            fontSize: "12px",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px", color: "#a4a4a3", fontSize: "12px" }}>
          <span>Design URL</span>
          <span style={{ color: "#a4a4a3" }}><InfoIcon /></span>
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          style={{
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#272822",
            border: "2px solid #929291",
            borderRadius: "4px",
            padding: "8px 10px",
            color: "#71726e",
            fontSize: "12px",
            outline: "none",
          }}
        />
      </div>

      {/* Button row */}
      <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginBottom: "32px" }}>
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            border: "none",
            borderRadius: "4px",
            width: "85px",
            height: "37px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            border: "none",
            borderRadius: "4px",
            width: "85px",
            height: "37px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div style={{ fontWeight: 600, fontSize: "14px", color: "#b0b0b0" }}>
        Recent Breakdowns
      </div>
    </div>
  );
};
