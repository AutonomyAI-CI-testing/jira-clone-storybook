import { IoSettingsOutline, IoChevronUp } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2b2b2b",
        color: "#f0f0f0",
        fontFamily: "sans-serif",
        padding: "20px",
        maxWidth: "360px",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Header Row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "18px", color: "#ffffff" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={24} color="#f0f0f0" />
      </div>

      {/* Collapsible row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "32px",
        }}
      >
        <IoChevronUp size={16} color="#f0f0f0" />
        <span style={{ color: "#c1622f", fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "24px" }} />

      {/* Add New Design section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <IoChevronUp size={18} color="#ffffff" />
        <span style={{ fontWeight: 700, fontSize: "18px", color: "#ffffff" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontSize: "14px", color: "#f0f0f0" }}>
          Personal Access Token
        </span>
        <AiOutlineInfoCircle size={16} color="#f0f0f0" />
      </div>

      {/* Token input */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        style={{
          width: "100%",
          backgroundColor: "#3a3a3a",
          border: "1px solid #555555",
          borderRadius: "4px",
          padding: "10px 12px",
          color: "#888888",
          fontSize: "14px",
          marginBottom: "16px",
          boxSizing: "border-box",
          outline: "none",
        }}
      />

      {/* Design URL label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <span style={{ fontSize: "14px", color: "#f0f0f0" }}>Design URL</span>
        <AiOutlineInfoCircle size={16} color="#f0f0f0" />
      </div>

      {/* URL input */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        style={{
          width: "100%",
          backgroundColor: "#3a3a3a",
          border: "1px solid #777777",
          borderRadius: "4px",
          padding: "10px 12px",
          color: "#888888",
          fontSize: "14px",
          marginBottom: "24px",
          boxSizing: "border-box",
          outline: "none",
        }}
      />

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        <button
          style={{
            backgroundColor: "#c1622f",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "14px 28px",
            fontWeight: 600,
            fontSize: "15px",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#a0522d",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "14px 28px",
            fontWeight: 600,
            fontSize: "15px",
            cursor: "pointer",
            flex: 1,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <span style={{ fontWeight: 700, fontSize: "18px", color: "#ffffff" }}>
        Recent Breakdowns
      </span>
    </div>
  );
}
