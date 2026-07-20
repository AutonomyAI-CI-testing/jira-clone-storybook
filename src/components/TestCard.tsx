import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        color: "#ffffff",
        fontFamily: "sans-serif",
        padding: "24px 20px",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* ── 1. Top header row ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <span style={{ fontWeight: 700, fontSize: "18px", color: "#ffffff" }}>
          UI magician Agent
        </span>
        <FiSettings size={22} style={{ color: "#aaaaaa", flexShrink: 0 }} />
      </div>

      {/* ── 2. Subtitle row ── */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "40px" }}>
        <FiChevronUp size={16} style={{ color: "#c87941", flexShrink: 0 }} />
        <span
          style={{
            color: "#c87941",
            fontSize: "14px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "260px",
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* ── 3. "Add New Design" section header ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <FiChevronUp size={18} style={{ color: "#ffffff" }} />
        <span style={{ fontWeight: 700, fontSize: "17px", color: "#ffffff" }}>
          Add New Design
        </span>
      </div>

      {/* ── 4. Personal Access Token field ── */}
      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "8px",
          }}
        >
          <label style={{ fontSize: "13px", color: "#e0e0e0", fontWeight: 600 }}>
            Personal Access Token
          </label>
          <FiInfo size={15} style={{ color: "#aaaaaa" }} />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#333333",
            border: "1px solid #4a4a4a",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#888888",
            fontSize: "13px",
            outline: "none",
          }}
        />
      </div>

      {/* ── 5. Design URL field ── */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "8px",
          }}
        >
          <label style={{ fontSize: "13px", color: "#e0e0e0", fontWeight: 600 }}>
            Design URL
          </label>
          <FiInfo size={15} style={{ color: "#aaaaaa" }} />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          style={{
            width: "100%",
            boxSizing: "border-box",
            backgroundColor: "#333333",
            border: "1px solid #4a4a4a",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#888888",
            fontSize: "13px",
            outline: "none",
          }}
        />
      </div>

      {/* ── 6. Two buttons ── */}
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
            flex: 1,
            backgroundColor: "#b5541c",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
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
            backgroundColor: "#b5541c",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "12px 24px",
            fontWeight: 600,
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* ── 7. Recent Breakdowns heading ── */}
      <div>
        <span style={{ fontWeight: 700, fontSize: "17px", color: "#ffffff" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
