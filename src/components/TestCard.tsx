import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        padding: "20px",
        width: "100%",
        maxWidth: "300px",
        borderRadius: "8px",
        fontFamily: "sans-serif",
      }}
    >
      {/* 1 — Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "6px",
        }}
      >
        <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "18px" }}>
          UI magician Agent
        </span>
        <AiOutlineSetting size={22} color="#ffffff" />
      </div>

      {/* 2 — Subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          marginTop: "4px",
          marginBottom: "32px",
        }}
      >
        <HiChevronUp color="#c47a45" size={16} />
        <span style={{ color: "#c47a45", fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* 3 — Section heading */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <HiChevronUp color="#ffffff" size={18} />
        <span style={{ color: "#ffffff", fontWeight: "bold", fontSize: "18px" }}>
          Add New Design
        </span>
      </div>

      {/* 4 — Personal Access Token label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "6px",
        }}
      >
        <span style={{ color: "#ffffff", fontSize: "14px" }}>
          Personal Access Token
        </span>
        <AiOutlineInfoCircle color="#888888" size={16} />
      </div>

      {/* 5 — PAT input */}
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        style={{
          width: "100%",
          backgroundColor: "#3a3a3a",
          border: "1px solid #555555",
          borderRadius: "4px",
          padding: "8px 12px",
          color: "#aaaaaa",
          fontSize: "14px",
          boxSizing: "border-box",
          marginBottom: "12px",
          outline: "none",
        }}
      />

      {/* 6 — Design URL label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "6px",
        }}
      >
        <span style={{ color: "#ffffff", fontSize: "14px" }}>Design URL</span>
        <AiOutlineInfoCircle color="#888888" size={16} />
      </div>

      {/* 7 — Design URL input */}
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        style={{
          width: "100%",
          backgroundColor: "#3a3a3a",
          border: "1px solid #555555",
          borderRadius: "4px",
          padding: "8px 12px",
          color: "#aaaaaa",
          fontSize: "14px",
          boxSizing: "border-box",
          marginBottom: "12px",
          outline: "none",
        }}
      />

      {/* 8 — Action buttons */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          marginTop: "8px",
          marginBottom: "32px",
        }}
      >
        <button
          style={{
            backgroundColor: "#a0522d",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#a0522d",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* 9 — Recent Breakdowns */}
      <div style={{ color: "#ffffff", fontWeight: "bold", fontSize: "20px" }}>
        Recent Breakdowns
      </div>
    </div>
  );
}
