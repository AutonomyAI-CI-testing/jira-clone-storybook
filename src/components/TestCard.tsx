import { AiOutlineInfoCircle, AiOutlineSetting } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

export default function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        color: "#ffffff",
        fontFamily: "sans-serif",
        padding: "24px 20px",
        maxWidth: "360px",
        minHeight: "600px",
        borderRadius: "8px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: "20px" }}>
          UI magician Agent
        </span>
        <AiOutlineSetting size={22} style={{ color: "#aaaaaa" }} />
      </div>

      {/* Subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: "#b8652a",
          fontSize: "14px",
          marginBottom: "40px",
        }}
      >
        <FiChevronUp size={14} />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontWeight: "bold",
          fontSize: "18px",
          marginBottom: "24px",
        }}
      >
        <FiChevronUp size={18} />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "8px",
            fontSize: "14px",
            color: "#cccccc",
          }}
        >
          <span>Personal Access Token</span>
          <AiOutlineInfoCircle size={16} style={{ color: "#aaaaaa" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: "100%",
            backgroundColor: "#3a3a3a",
            border: "1px solid #555555",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#aaaaaa",
            fontSize: "14px",
            boxSizing: "border-box",
            outline: "none",
          }}
          readOnly
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
            fontSize: "14px",
            color: "#cccccc",
          }}
        >
          <span>Design URL</span>
          <AiOutlineInfoCircle size={16} style={{ color: "#aaaaaa" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            width: "100%",
            backgroundColor: "#3a3a3a",
            border: "1px solid #888888",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#aaaaaa",
            fontSize: "14px",
            boxSizing: "border-box",
            outline: "none",
          }}
          readOnly
        />
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "40px",
          justifyContent: "center",
        }}
      >
        <button
          style={{
            flex: 1,
            backgroundColor: "#c0622b",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "15px",
            padding: "12px 0",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            flex: 1,
            backgroundColor: "#c0622b",
            color: "#ffffff",
            fontWeight: "bold",
            fontSize: "15px",
            padding: "12px 0",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          color: "#ffffff",
        }}
      >
        Recent Breakdowns
      </div>
    </div>
  );
}
