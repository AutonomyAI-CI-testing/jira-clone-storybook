import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2a2a2a",
        width: "100%",
        maxWidth: "320px",
        padding: "24px 20px",
        fontFamily: "sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <span
          style={{
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "18px",
          }}
        >
          UI magician Agent
        </span>
        <FiSettings style={{ color: "#ffffff", fontSize: "20px" }} />
      </div>

      {/* Subtitle row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          marginBottom: "8px",
        }}
      >
        <FiChevronUp style={{ color: "#c47a3a", fontSize: "16px" }} />
        <span style={{ color: "#c47a3a", fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "32px" }} />

      {/* Section header: Add New Design */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "20px",
        }}
      >
        <FiChevronUp style={{ color: "#ffffff", fontSize: "18px" }} />
        <span
          style={{
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "17px",
          }}
        >
          Add New Design
        </span>
      </div>

      {/* Field: Personal Access Token */}
      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "8px",
          }}
        >
          <label style={{ color: "#e0e0e0", fontSize: "13px" }}>
            Personal Access Token
          </label>
          <FiInfo style={{ color: "#9a9a9a", fontSize: "14px" }} />
        </div>
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
            color: "#9a9a9a",
            fontSize: "13px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Field: Design URL */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "8px",
          }}
        >
          <label style={{ color: "#e0e0e0", fontSize: "13px" }}>
            Design URL
          </label>
          <FiInfo style={{ color: "#9a9a9a", fontSize: "14px" }} />
        </div>
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
            color: "#9a9a9a",
            fontSize: "13px",
            outline: "none",
            boxSizing: "border-box",
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
          style={{
            backgroundColor: "#8B3A1A",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "12px 24px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            flex: 1,
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#8B3A1A",
            color: "#ffffff",
            border: "none",
            borderRadius: "10px",
            padding: "12px 24px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            flex: 1,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <span
          style={{
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "17px",
          }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
