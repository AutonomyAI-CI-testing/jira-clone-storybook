import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1e1e1e",
        color: "#e0e0e0",
        fontFamily: "sans-serif",
        minHeight: "100vh",
        padding: "24px 20px",
        maxWidth: "360px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between" style={{ marginBottom: "16px" }}>
        <span
          style={{
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "#f0f0f0",
          }}
        >
          UI magician Agent
        </span>
        <FiSettings size={22} style={{ color: "#a0a0a0", flexShrink: 0 }} />
      </div>

      {/* Collapsed sub-row */}
      <div className="flex items-center" style={{ gap: "8px", marginBottom: "48px" }}>
        <FiChevronUp size={16} style={{ color: "#a07050", flexShrink: 0 }} />
        <span
          style={{
            fontSize: "0.9rem",
            color: "#a07050",
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div
        className="flex items-center"
        style={{ gap: "10px", marginBottom: "24px" }}
      >
        <FiChevronUp size={18} style={{ color: "#e0e0e0", flexShrink: 0 }} />
        <span
          style={{
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "#e0e0e0",
          }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: "16px" }}>
        <div
          className="flex items-center"
          style={{ gap: "8px", marginBottom: "8px" }}
        >
          <span
            style={{
              fontSize: "0.875rem",
              color: "#d0d0d0",
              fontWeight: 500,
            }}
          >
            Personal Access Token
          </span>
          <FiInfo size={16} style={{ color: "#888" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            borderRadius: "6px",
            padding: "12px 14px",
            color: "#c0c0c0",
            fontSize: "0.875rem",
            outline: "none",
            boxSizing: "border-box",
          }}
          readOnly
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: "28px" }}>
        <div
          className="flex items-center"
          style={{ gap: "8px", marginBottom: "8px" }}
        >
          <span
            style={{
              fontSize: "0.875rem",
              color: "#d0d0d0",
              fontWeight: 500,
            }}
          >
            Design URL
          </span>
          <FiInfo size={16} style={{ color: "#888" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full"
          style={{
            backgroundColor: "#2a2a2a",
            border: "1px solid #666",
            borderRadius: "6px",
            padding: "12px 14px",
            color: "#c0c0c0",
            fontSize: "0.875rem",
            outline: "none",
            boxSizing: "border-box",
          }}
          readOnly
        />
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
        <button
          type="button"
          style={{
            flex: 1,
            backgroundColor: "#b5451b",
            color: "#f0e8d0",
            fontWeight: 600,
            fontSize: "1rem",
            border: "none",
            borderRadius: "10px",
            padding: "14px 0",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{
            flex: 1,
            backgroundColor: "#9e3c16",
            color: "#f0e8d0",
            fontWeight: 600,
            fontSize: "1rem",
            border: "none",
            borderRadius: "10px",
            padding: "14px 0",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span
          style={{
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "#e0e0e0",
          }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
