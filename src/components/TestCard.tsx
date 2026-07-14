import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1e1e1e",
        color: "#ffffff",
        padding: "24px 20px",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        maxWidth: "420px",
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
        <span style={{ fontWeight: 700, fontSize: "20px", color: "#ffffff" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={24} color="#cccccc" />
      </div>

      {/* Subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "40px",
        }}
      >
        <HiChevronUp size={18} color="#c2814a" />
        <span style={{ color: "#c2814a", fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "24px",
        }}
      >
        <HiChevronUp size={20} color="#ffffff" />
        <span style={{ fontWeight: 700, fontSize: "18px", color: "#ffffff" }}>
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
          <span style={{ fontSize: "14px", color: "#cccccc" }}>
            Personal Access Token
          </span>
          <AiOutlineInfoCircle size={16} color="#888888" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#2a2a2a",
            border: "1px solid #444444",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#888888",
            fontSize: "14px",
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
          <span style={{ fontSize: "14px", color: "#cccccc" }}>
            Design URL
          </span>
          <AiOutlineInfoCircle size={16} color="#888888" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#2a2a2a",
            border: "1px solid #555555",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#888888",
            fontSize: "14px",
            outline: "none",
          }}
        />
      </div>

      {/* Buttons row */}
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
            backgroundColor: "#a0491a",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "14px 32px",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            flex: 1,
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#8b3d14",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "14px 32px",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            flex: 1,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span style={{ fontWeight: 700, fontSize: "18px", color: "#ffffff" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
