import { LuSettings, LuChevronUp, LuInfo } from "react-icons/lu";

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "4px",
  border: "1px solid #555",
  background: "transparent",
  padding: "8px 12px",
  fontSize: "0.875rem",
  color: "#b3b3b3",
  outline: "none",
  boxSizing: "border-box",
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        width: "100%",
        maxWidth: "384px",
        borderRadius: "8px",
        padding: "20px",
        fontFamily: "sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div style={{ marginBottom: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#ffffff" }}>UI magician Agent</span>
        <LuSettings size={22} style={{ color: "#9ca3af" }} />
      </div>

      {/* Collapsed row */}
      <div style={{ marginBottom: "32px", display: "flex", alignItems: "center", gap: "8px" }}>
        <LuChevronUp size={16} style={{ color: "#92400e" }} />
        <span style={{ fontSize: "0.875rem", color: "#92400e" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div style={{ marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}>
        <LuChevronUp size={18} style={{ color: "#ffffff" }} />
        <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#ffffff" }}>Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#d1d5db" }}>
            Personal Access Token
          </span>
          <LuInfo size={16} style={{ color: "#9ca3af" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          style={inputStyle}
        />
      </div>

      {/* Design URL field */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ marginBottom: "8px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#d1d5db" }}>Design URL</span>
          <LuInfo size={16} style={{ color: "#9ca3af" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={inputStyle}
        />
      </div>

      {/* Buttons row */}
      <div style={{ marginBottom: "32px", display: "flex", gap: "16px" }}>
        <button
          type="button"
          style={{ backgroundColor: "#b85c38", flex: 1, borderRadius: "8px", padding: "12px 0", fontSize: "0.875rem", fontWeight: "600", color: "#ffffff", border: "none", cursor: "pointer" }}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#b85c38", flex: 1, borderRadius: "8px", padding: "12px 0", fontSize: "0.875rem", fontWeight: "600", color: "#ffffff", border: "none", cursor: "pointer" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#ffffff" }}>Recent Breakdowns</span>
      </div>
    </div>
  );
};
