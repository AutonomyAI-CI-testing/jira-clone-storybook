import React from "react";
import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1e1e1e",
        minHeight: "100vh",
        padding: "24px 20px",
        fontFamily: "sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            color: "#e8e8e8",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          UI magician Agent
        </span>
        <FiSettings size={22} style={{ color: "#b0b0b0", flexShrink: 0 }} />
      </div>

      {/* Collapsed sub-row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "32px",
        }}
      >
        <FiChevronUp size={16} style={{ color: "#9a7a5a", flexShrink: 0 }} />
        <span style={{ color: "#a07055", fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "12px" }} />

      {/* Add New Design heading row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "24px",
        }}
      >
        <FiChevronUp size={18} style={{ color: "#e8e8e8", flexShrink: 0 }} />
        <span
          style={{
            color: "#e8e8e8",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label + input */}
      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <span
            style={{ color: "#c8c8c8", fontSize: "14px", fontWeight: "500" }}
          >
            Personal Access Token
          </span>
          <FiInfo size={16} style={{ color: "#9a9a9a" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            width: "100%",
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            borderRadius: "6px",
            padding: "12px 14px",
            color: "#888888",
            fontSize: "14px",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL label + input */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <span
            style={{ color: "#c8c8c8", fontSize: "14px", fontWeight: "500" }}
          >
            Design URL
          </span>
          <FiInfo size={16} style={{ color: "#9a9a9a" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            width: "100%",
            backgroundColor: "#2a2a2a",
            border: "1px solid #6a6a6a",
            borderRadius: "6px",
            padding: "12px 14px",
            color: "#888888",
            fontSize: "14px",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
      </div>

      {/* Buttons row */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginBottom: "40px",
          justifyContent: "center",
        }}
      >
        <button
          type="button"
          style={{
            flex: 1,
            backgroundColor: "#b5451b",
            color: "#f0e0d0",
            fontWeight: "600",
            fontSize: "15px",
            padding: "14px 20px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          type="button"
          style={{
            flex: 1,
            backgroundColor: "#a03d18",
            color: "#f0e0d0",
            fontWeight: "600",
            fontSize: "15px",
            padding: "14px 20px",
            borderRadius: "10px",
            border: "none",
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
            color: "#e8e8e8",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
