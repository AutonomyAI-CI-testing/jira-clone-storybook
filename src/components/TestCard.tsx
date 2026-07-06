export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        padding: "20px",
        width: "100%",
        maxWidth: "384px",
        fontFamily: "sans-serif",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "#b5b5b5", fontWeight: 600, fontSize: "14px" }}>UI magician Agent</span>
        <span style={{ color: "#b5b5b5", fontSize: "18px" }}>⚙</span>
      </div>

      {/* Subtitle row */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
        <span style={{ color: "#b5b5b5", fontSize: "12px" }}>^</span>
        <span style={{ color: "#8b6f5e", fontSize: "12px" }}>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div style={{ height: "32px" }} />

      {/* Add New Design heading row */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px" }}>
        <span style={{ color: "#b2b2b1", fontSize: "12px" }}>^</span>
        <span style={{ color: "#b2b2b1", fontWeight: 600, fontSize: "14px" }}>Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginTop: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "#a4a4a3", fontSize: "12px", fontWeight: 600 }}>Personal Access Token</span>
          <span style={{ color: "#a4a4a3", fontSize: "12px" }}>ⓘ</span>
        </div>
        <input
          style={{
            border: "1px solid #a5adad",
            backgroundColor: "#272822",
            color: "#a4a4a3",
            fontSize: "12px",
            padding: "8px",
            borderRadius: "4px",
            marginTop: "4px",
            width: "100%",
            boxSizing: "border-box",
          }}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL field */}
      <div style={{ marginTop: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "#a4a4a3", fontSize: "12px", fontWeight: 600 }}>Design URL</span>
          <span style={{ color: "#a4a4a3", fontSize: "12px" }}>ⓘ</span>
        </div>
        <input
          style={{
            border: "2px solid #929291",
            backgroundColor: "#272822",
            color: "#a4a4a3",
            fontSize: "12px",
            padding: "8px",
            borderRadius: "4px",
            marginTop: "4px",
            width: "100%",
            boxSizing: "border-box",
          }}
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Button row */}
      <div style={{ display: "flex", gap: "16px", marginTop: "24px", justifyContent: "center" }}>
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#c8a090",
            fontWeight: 600,
            fontSize: "14px",
            padding: "12px 24px",
            borderRadius: "8px",
            flex: 1,
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#c8a090",
            fontWeight: 600,
            fontSize: "14px",
            padding: "12px 24px",
            borderRadius: "8px",
            flex: 1,
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div style={{ marginTop: "32px" }}>
        <span style={{ color: "#b0b0b0", fontWeight: 600, fontSize: "14px" }}>Recent Breakdowns</span>
      </div>
    </div>
  );
};
