import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        color: "#e0e0e0",
        fontFamily: "sans-serif",
        padding: "20px",
        minHeight: "100vh",
        maxWidth: "400px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "20px" }}>
          UI magician Agent
        </span>
        <FiSettings style={{ color: "#aaaaaa", fontSize: "22px" }} />
      </div>

      {/* Sub-header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "48px",
        }}
      >
        <FiChevronUp style={{ color: "#aaaaaa", fontSize: "16px" }} />
        <span style={{ color: "#a07060", fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        <FiChevronUp style={{ color: "#aaaaaa", fontSize: "18px" }} />
        <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "18px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "8px",
          }}
        >
          <label style={{ color: "#e0e0e0", fontSize: "14px" }}>
            Personal Access Token
          </label>
          <FiInfo style={{ color: "#aaaaaa", fontSize: "14px" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: "100%",
            backgroundColor: "#3a3a3a",
            border: "1px solid #555555",
            borderRadius: "4px",
            padding: "10px 12px",
            color: "#888888",
            fontSize: "14px",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "8px",
          }}
        >
          <label style={{ color: "#e0e0e0", fontSize: "14px" }}>Design URL</label>
          <FiInfo style={{ color: "#aaaaaa", fontSize: "14px" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            width: "100%",
            backgroundColor: "#3a3a3a",
            border: "1px solid #888888",
            borderRadius: "4px",
            padding: "10px 12px",
            color: "#888888",
            fontSize: "14px",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "48px",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            backgroundColor: "#b85c38",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "14px 32px",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#9e4e30",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "14px 32px",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "18px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
