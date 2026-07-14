import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#282828", color: "#fff", padding: "24px", maxWidth: "320px", fontFamily: "sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span style={{ fontWeight: 700, fontSize: "20px" }}>UI magician Agent</span>
        <FiSettings size={22} color="#fff" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        <FiChevronUp size={16} color="#c47a3a" />
        <span style={{ color: "#c47a3a", fontSize: "14px" }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp size={18} color="#fff" />
        <span style={{ fontWeight: 700, fontSize: "18px" }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-2 mb-2">
        <span style={{ fontSize: "14px" }}>Personal Access Token</span>
        <FiInfo size={14} color="#aaa" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        style={{
          width: "100%",
          backgroundColor: "#1e1e1e",
          border: "1px solid #444",
          borderRadius: "4px",
          color: "#aaa",
          padding: "10px 12px",
          marginBottom: "16px",
          fontSize: "14px",
          boxSizing: "border-box",
        }}
      />

      {/* Design URL */}
      <div className="flex items-center gap-2 mb-2">
        <span style={{ fontSize: "14px" }}>Design URL</span>
        <FiInfo size={14} color="#aaa" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        style={{
          width: "100%",
          backgroundColor: "#1e1e1e",
          border: "1px solid #444",
          borderRadius: "4px",
          color: "#aaa",
          padding: "10px 12px",
          marginBottom: "24px",
          fontSize: "14px",
          boxSizing: "border-box",
        }}
      />

      {/* Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          style={{
            flex: 1,
            backgroundColor: "#b85c2c",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 0",
            fontWeight: 600,
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#b85c2c",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 0",
            fontWeight: 600,
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div style={{ fontWeight: 700, fontSize: "18px" }}>Recent Breakdowns</div>
    </div>
  );
}
