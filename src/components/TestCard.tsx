import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#1a1a1a", minHeight: "100vh", maxWidth: "24rem", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}
    >
      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
        <h1 style={{ color: "#ffffff", fontSize: "1.25rem", fontWeight: "bold", margin: 0 }}>UI magician Agent</h1>
        <AiOutlineSetting style={{ color: "#ffffff" }} size={24} />
      </div>

      {/* Subtitle row */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
        <FiChevronUp style={{ color: "#a87255" }} size={16} />
        <span style={{ color: "#a87255", fontSize: "0.875rem" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
        <FiChevronUp style={{ color: "#ffffff" }} size={18} />
        <h2 style={{ color: "#ffffff", fontSize: "1.125rem", fontWeight: "bold", margin: 0 }}>Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <label style={{ color: "#d4d4d4", fontSize: "0.875rem" }}>Personal Access Token</label>
          <AiOutlineInfoCircle style={{ color: "#d4d4d4" }} size={16} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            width: "100%",
            backgroundColor: "#2a2a2a",
            border: "1px solid #444",
            borderRadius: "4px",
            color: "#888",
            fontSize: "0.875rem",
            padding: "12px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <label style={{ color: "#d4d4d4", fontSize: "0.875rem" }}>Design URL</label>
          <AiOutlineInfoCircle style={{ color: "#d4d4d4" }} size={16} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            width: "100%",
            backgroundColor: "#2a2a2a",
            border: "1px solid #888",
            borderRadius: "4px",
            color: "#888",
            fontSize: "0.875rem",
            padding: "12px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginBottom: "48px" }}>
        <button
          style={{
            backgroundColor: "#b45309",
            color: "#ffffff",
            fontWeight: "600",
            padding: "12px 32px",
            borderRadius: "8px",
            fontSize: "0.875rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#9a4a0a",
            color: "#ffffff",
            fontWeight: "600",
            padding: "12px 32px",
            borderRadius: "8px",
            fontSize: "0.875rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 style={{ color: "#ffffff", fontSize: "1.25rem", fontWeight: "bold", margin: 0 }}>Recent Breakdowns</h2>
    </div>
  );
}
