import { IoSettingsOutline } from "react-icons/io5";
import { HiChevronUp } from "react-icons/hi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      style={{
        background: "#252525",
        color: "#e8e8e8",
        width: "508px",
        minHeight: "900px",
        display: "flex",
        flexDirection: "column",
        padding: "24px 24px 40px 24px",
        borderRadius: "12px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <span style={{ fontSize: "22px", fontWeight: "700" }}>UI magician Agent</span>
        <IoSettingsOutline size={28} style={{ color: "#e8e8e8" }} />
      </div>

      {/* Collapsed section row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "40px",
        }}
      >
        <HiChevronUp size={18} style={{ color: "#aaa" }} />
        <span style={{ fontSize: "14px", color: "#aaa" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "32px",
        }}
      >
        <HiChevronUp size={22} style={{ color: "#e8e8e8" }} />
        <span style={{ fontSize: "22px", fontWeight: "700" }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <span style={{ fontSize: "16px", fontWeight: "500" }}>Personal Access Token</span>
          <AiOutlineInfoCircle size={18} style={{ color: "#aaa" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: "100%",
            background: "transparent",
            border: "1.5px solid #666",
            borderRadius: "6px",
            padding: "18px 16px",
            fontSize: "14px",
            color: "#888",
            outline: "none",
            boxSizing: "border-box",
          }}
          readOnly
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: "48px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <span style={{ fontSize: "16px", fontWeight: "500" }}>Design URL</span>
          <AiOutlineInfoCircle size={18} style={{ color: "#aaa" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            width: "100%",
            background: "transparent",
            border: "1.5px solid #666",
            borderRadius: "6px",
            padding: "18px 16px",
            fontSize: "14px",
            color: "#888",
            outline: "none",
            boxSizing: "border-box",
          }}
          readOnly
        />
      </div>

      {/* Buttons row */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          justifyContent: "center",
          marginBottom: "64px",
        }}
      >
        <button
          style={{
            background: "#9c4a1a",
            color: "#fff",
            border: "none",
            borderRadius: "14px",
            padding: "18px 40px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            background: "#9c4a1a",
            color: "#fff",
            border: "none",
            borderRadius: "14px",
            padding: "18px 40px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span style={{ fontSize: "22px", fontWeight: "700" }}>Recent Breakdowns</span>
      </div>
    </div>
  );
}
