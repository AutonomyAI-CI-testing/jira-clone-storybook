export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        color: "white",
        padding: "24px 20px",
        borderRadius: "12px",
        maxWidth: "360px",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        gap: "0",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontWeight: "700", fontSize: "18px" }}>UI magician Agent</span>
        <span style={{ fontSize: "22px", color: "#aaa", cursor: "pointer" }}>⚙</span>
      </div>

      {/* Subtitle chevron row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: "#b35c2e",
          fontSize: "14px",
          marginBottom: "32px",
        }}
      >
        <span>∧</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <span style={{ fontWeight: "700", fontSize: "16px" }}>∧</span>
        <span style={{ fontWeight: "700", fontSize: "18px" }}>Add New Design</span>
      </div>

      {/* Personal Access Token label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px",
          fontSize: "14px",
          color: "#ccc",
        }}
      >
        <span>Personal Access Token</span>
        <span style={{ color: "#888", fontSize: "16px" }}>ⓘ</span>
      </div>

      {/* Token input */}
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        style={{
          backgroundColor: "#3a3a3a",
          border: "1px solid #555",
          borderRadius: "6px",
          padding: "10px 12px",
          color: "#888",
          fontSize: "14px",
          outline: "none",
          marginBottom: "16px",
          width: "100%",
          boxSizing: "border-box",
        }}
      />

      {/* Design URL label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px",
          fontSize: "14px",
          color: "#ccc",
        }}
      >
        <span>Design URL</span>
        <span style={{ color: "#888", fontSize: "16px" }}>ⓘ</span>
      </div>

      {/* URL input */}
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        style={{
          backgroundColor: "#3a3a3a",
          border: "1px solid #555",
          borderRadius: "6px",
          padding: "10px 12px",
          color: "#888",
          fontSize: "14px",
          outline: "none",
          marginBottom: "24px",
          width: "100%",
          boxSizing: "border-box",
        }}
      />

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "32px",
        }}
      >
        <button
          style={{
            flex: 1,
            backgroundColor: "#b35c2e",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 0",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#b35c2e",
            color: "white",
            border: "none",
            borderRadius: "8px",
            padding: "12px 0",
            fontWeight: "600",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div style={{ fontWeight: "700", fontSize: "18px" }}>Recent Breakdowns</div>
    </div>
  );
}
