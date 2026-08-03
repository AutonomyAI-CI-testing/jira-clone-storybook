import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export default function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        color: "white",
        width: "20rem",
        borderRadius: "0.5rem",
        padding: "1.25rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        fontFamily: "sans-serif",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span style={{ fontWeight: "bold", fontSize: "1.125rem" }}>UI magician Agent</span>
        <FiSettings style={{ width: "1.25rem", height: "1.25rem", color: "#9ca3af" }} />
      </div>

      {/* Hint/subtitle row */}
      <div className="flex items-center gap-1" style={{ fontSize: "0.875rem", color: "#b87333" }}>
        <FiChevronUp style={{ width: "1rem", height: "1rem", flexShrink: 0 }} />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div style={{ marginTop: "0.5rem" }} />

      {/* Add New Design section */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <div className="flex items-center gap-2">
          <FiChevronUp style={{ width: "1rem", height: "1rem" }} />
          <span style={{ fontWeight: "bold", fontSize: "1.125rem" }}>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <div className="flex items-center gap-1">
            <label style={{ fontSize: "0.875rem", color: "#d1d5db", fontWeight: 500 }}>
              Personal Access Token
            </label>
            <FiInfo style={{ width: "1rem", height: "1rem", color: "#9ca3af" }} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            style={{
              backgroundColor: "transparent",
              border: "1px solid #6b7280",
              borderRadius: "0.25rem",
              padding: "0.5rem 0.75rem",
              fontSize: "0.875rem",
              color: "#9ca3af",
              outline: "none",
              width: "100%",
            }}
          />
        </div>

        {/* Design URL */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          <div className="flex items-center gap-1">
            <label style={{ fontSize: "0.875rem", color: "#d1d5db", fontWeight: 500 }}>
              Design URL
            </label>
            <FiInfo style={{ width: "1rem", height: "1rem", color: "#9ca3af" }} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            style={{
              backgroundColor: "transparent",
              border: "1px solid #6b7280",
              borderRadius: "0.25rem",
              padding: "0.5rem 0.75rem",
              fontSize: "0.875rem",
              color: "#9ca3af",
              outline: "none",
              width: "100%",
            }}
          />
        </div>

        {/* Action buttons */}
        <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.25rem" }}>
          <button
            style={{
              flex: 1,
              backgroundColor: "#a0522d",
              color: "white",
              fontWeight: 600,
              padding: "0.75rem 0",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              flex: 1,
              backgroundColor: "#a0522d",
              color: "white",
              fontWeight: 600,
              padding: "0.75rem 0",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div style={{ marginTop: "1rem" }} />

      {/* Recent Breakdowns */}
      <div>
        <span style={{ fontWeight: "bold", fontSize: "1.125rem" }}>Recent Breakdowns</span>
      </div>
    </div>
  );
}
