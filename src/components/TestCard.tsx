export const TestCard = (): JSX.Element => {
  const inputStyle: React.CSSProperties = {
    display: "block",
    width: "100%",
    background: "#383838",
    border: "1px solid #555",
    borderRadius: 6,
    padding: "12px 14px",
    color: "#aaa",
    fontSize: 14,
    marginTop: 8,
    outline: "none",
    boxSizing: "border-box",
  };

  const buttonStyle: React.CSSProperties = {
    background: "#c1541a",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "12px 28px",
    fontWeight: 600,
    fontSize: 15,
    cursor: "pointer",
    flex: 1,
  };

  return (
    <div
      id="testElem"
      style={{
        background: "#2a2a2a",
        minHeight: "100vh",
        padding: "24px 20px",
        fontFamily: "sans-serif",
        color: "#e8e8e8",
        maxWidth: 400,
      }}
    >
      {/* 1. Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontWeight: 700, fontSize: 18 }}>UI magician Agent</span>
        {/* Gear icon */}
        <svg
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
      </div>

      {/* 2. Chevron + muted text row */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
        <span style={{ color: "#b5703a", fontSize: 14 }}>⌃</span>
        <span style={{ color: "#b5703a", fontSize: 14 }}>From entire frame to a singl...</span>
      </div>

      {/* 3. Spacer */}
      <div style={{ height: 48 }} />

      {/* 4. Add New Design heading */}
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
        <span style={{ color: "#e8e8e8", fontSize: 15 }}>⌃</span>
        <span style={{ fontWeight: 700, fontSize: 16 }}>Add New Design</span>
      </div>

      {/* 5. Personal Access Token */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#ccc" }}>
          <span>Personal Access Token</span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 16,
              height: 16,
              borderRadius: "50%",
              border: "1px solid #888",
              fontSize: 10,
              color: "#888",
            }}
          >
            i
          </span>
        </div>
        <input style={inputStyle} placeholder="figd_xxxxxxxxxxxxxxxxxx" readOnly />
      </div>

      {/* 6. Design URL */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#ccc" }}>
          <span>Design URL</span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 16,
              height: 16,
              borderRadius: "50%",
              border: "1px solid #888",
              fontSize: 10,
              color: "#888",
            }}
          >
            i
          </span>
        </div>
        <input style={inputStyle} placeholder="https://www.figma.com/file/:" readOnly />
      </div>

      {/* 7. Two buttons */}
      <div style={{ display: "flex", gap: 16 }}>
        <button style={buttonStyle}>Awesome</button>
        <button style={buttonStyle}>Prepare</button>
      </div>

      {/* 8. Recent Breakdowns */}
      <h2 style={{ fontWeight: 700, fontSize: 18, marginTop: 48, marginBottom: 0 }}>
        Recent Breakdowns
      </h2>
    </div>
  );
};
