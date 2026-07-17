export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        color: "#ffffff",
        fontFamily: "sans-serif",
        padding: "20px",
        width: "280px",
        boxSizing: "border-box",
      }}
    >
      {/* ── Header row ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontWeight: "700", fontSize: "18px" }}>
          UI magician Agent
        </span>
        <span style={{ fontSize: "20px", color: "#cccccc" }}>⚙</span>
      </div>

      {/* ── Chevron / subtitle row ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "32px",
        }}
      >
        <span style={{ fontSize: "12px", color: "#c07040" }}>∧</span>
        <span style={{ fontSize: "13px", color: "#c07040" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* ── "Add New Design" section heading ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <span style={{ fontSize: "14px", color: "#ffffff" }}>∧</span>
        <span style={{ fontWeight: "700", fontSize: "18px" }}>
          Add New Design
        </span>
      </div>

      {/* ── Personal Access Token label ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontSize: "13px", color: "#e0e0e0" }}>
          Personal Access Token
        </span>
        <span style={{ fontSize: "14px", color: "#aaaaaa" }}>ⓘ</span>
      </div>

      {/* ── Personal Access Token input ── */}
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        style={{
          width: "100%",
          backgroundColor: "#333333",
          border: "1px solid #555555",
          borderRadius: "4px",
          padding: "10px 12px",
          color: "#888888",
          fontSize: "13px",
          marginBottom: "16px",
          boxSizing: "border-box",
          outline: "none",
        }}
      />

      {/* ── Design URL label ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontSize: "13px", color: "#e0e0e0" }}>Design URL</span>
        <span style={{ fontSize: "14px", color: "#aaaaaa" }}>ⓘ</span>
      </div>

      {/* ── Design URL input ── */}
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        style={{
          width: "100%",
          backgroundColor: "#333333",
          border: "1px solid #666666",
          borderRadius: "4px",
          padding: "10px 12px",
          color: "#888888",
          fontSize: "13px",
          marginBottom: "20px",
          boxSizing: "border-box",
          outline: "none",
        }}
      />

      {/* ── Buttons row ── */}
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
            backgroundColor: "#b5591c",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 0",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#9e4e18",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 0",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* ── Footer ── */}
      <div style={{ fontWeight: "700", fontSize: "18px" }}>
        Recent Breakdowns
      </div>
    </div>
  );
}
