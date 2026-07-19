export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#282420",
        color: "#ffffff",
        width: "320px",
        padding: "24px",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontWeight: "700", fontSize: "18px", color: "#ffffff" }}>
          UI magician Agent
        </span>
        <span style={{ fontSize: "20px", color: "#ffffff" }}>⚙</span>
      </div>

      {/* Subheading row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "32px",
        }}
      >
        <span style={{ fontSize: "12px", color: "#c8956c" }}>∧</span>
        <span style={{ fontSize: "13px", color: "#c8956c" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <span style={{ fontSize: "14px", color: "#ffffff" }}>∧</span>
        <span style={{ fontWeight: "700", fontSize: "17px", color: "#ffffff" }}>
          Add New Design
        </span>
      </div>

      {/* Form field: Personal Access Token */}
      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "6px",
          }}
        >
          <label style={{ fontSize: "13px", color: "#ffffff" }}>
            Personal Access Token
          </label>
          <span style={{ fontSize: "14px", color: "#c8956c" }}>ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            width: "100%",
            backgroundColor: "#332e28",
            border: "1px solid #444444",
            borderRadius: "4px",
            padding: "10px 12px",
            color: "#888",
            fontSize: "13px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Form field: Design URL */}
      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "6px",
          }}
        >
          <label style={{ fontSize: "13px", color: "#ffffff" }}>
            Design URL
          </label>
          <span style={{ fontSize: "14px", color: "#c8956c" }}>ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            width: "100%",
            backgroundColor: "#332e28",
            border: "1px solid #888888",
            borderRadius: "4px",
            padding: "10px 12px",
            color: "#888",
            fontSize: "13px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Buttons row */}
      <div style={{ display: "flex", gap: "12px", marginBottom: "32px" }}>
        <button
          style={{
            flex: 1,
            backgroundColor: "#b35a2a",
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
            backgroundColor: "#b35a2a",
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

      {/* Recent Breakdowns heading */}
      <div>
        <span style={{ fontWeight: "700", fontSize: "18px", color: "#ffffff" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
