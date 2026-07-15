import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        background: "#1e1e1e",
        color: "#fff",
        padding: "24px",
        minHeight: "100vh",
        width: "100%",
        maxWidth: "380px",
        boxSizing: "border-box",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
        <span style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}>UI magician Agent</span>
        <IoSettingsOutline size={24} style={{ color: "#fff" }} />
      </div>

      {/* Subtitle */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "40px" }}>
        <HiChevronUp size={16} style={{ color: "#c8651d" }} />
        <span style={{ color: "#c8651d", fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px" }}>
        <HiChevronUp size={20} style={{ color: "#fff" }} />
        <span style={{ fontSize: "18px", fontWeight: "bold", color: "#fff" }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <label style={{ fontSize: "14px", fontWeight: "500", color: "#fff" }}>
            Personal Access Token
          </label>
          <AiOutlineInfoCircle size={16} style={{ color: "#9ca3af" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            background: "#2a2a2a",
            borderColor: "#444",
            width: "100%",
            padding: "12px",
            borderRadius: "4px",
            border: "1px solid #444",
            color: "#9ca3af",
            fontSize: "14px",
            outline: "none",
            boxSizing: "border-box",
          }}
          readOnly
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
          <label style={{ fontSize: "14px", fontWeight: "500", color: "#fff" }}>Design URL</label>
          <AiOutlineInfoCircle size={16} style={{ color: "#9ca3af" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            background: "#2a2a2a",
            borderColor: "#444",
            width: "100%",
            padding: "12px",
            borderRadius: "4px",
            border: "1px solid #444",
            color: "#9ca3af",
            fontSize: "14px",
            outline: "none",
            boxSizing: "border-box",
          }}
          readOnly
        />
      </div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "16px", marginBottom: "40px" }}>
        <button
          style={{
            background: "#a64b23",
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "600",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            background: "#a64b23",
            flex: 1,
            padding: "12px",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "600",
            fontSize: "16px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span style={{ fontSize: "20px", fontWeight: "bold", color: "#fff" }}>Recent Breakdowns</span>
      </div>
    </div>
  );
}
