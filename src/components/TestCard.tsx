import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1e1e1e",
        minHeight: "100vh",
        padding: "24px 20px",
        fontFamily: "sans-serif",
        boxSizing: "border-box",
        maxWidth: "380px",
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
            fontSize: "1.25rem",
            fontWeight: "700",
            letterSpacing: "-0.01em",
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
          marginBottom: "36px",
          paddingLeft: "4px",
        }}
      >
        <FiChevronUp size={16} style={{ color: "#a07858", flexShrink: 0 }} />
        <span
          style={{
            color: "#a07858",
            fontSize: "0.875rem",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <FiChevronUp size={18} style={{ color: "#e0e0e0", flexShrink: 0 }} />
        <span
          style={{
            color: "#e0e0e0",
            fontSize: "1.1rem",
            fontWeight: "700",
          }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div style={{ marginBottom: "4px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <span
            style={{
              color: "#d0d0d0",
              fontSize: "0.8125rem",
              fontWeight: "600",
            }}
          >
            Personal Access Token
          </span>
          <FiInfo size={16} style={{ color: "#9a9a9a" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          style={{
            width: "100%",
            backgroundColor: "#2a2a2a",
            border: "1px solid #4a4a4a",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#c0c0c0",
            fontSize: "0.875rem",
            outline: "none",
            boxSizing: "border-box",
          }}
          readOnly
        />
      </div>

      {/* Design URL field */}
      <div style={{ marginBottom: "24px", marginTop: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <span
            style={{
              color: "#d0d0d0",
              fontSize: "0.8125rem",
              fontWeight: "600",
            }}
          >
            Design URL
          </span>
          <FiInfo size={16} style={{ color: "#9a9a9a" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            width: "100%",
            backgroundColor: "#2a2a2a",
            border: "1px solid #666",
            borderRadius: "6px",
            padding: "10px 12px",
            color: "#c0c0c0",
            fontSize: "0.875rem",
            outline: "none",
            boxSizing: "border-box",
          }}
          readOnly
        />
      </div>

      {/* Action buttons */}
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
            backgroundColor: "#b5451b",
            color: "#f0e0d0",
            border: "none",
            borderRadius: "8px",
            padding: "12px 28px",
            fontSize: "0.9375rem",
            fontWeight: "600",
            cursor: "pointer",
            flex: 1,
          }}
          type="button"
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#994018",
            color: "#e8d0c0",
            border: "none",
            borderRadius: "8px",
            padding: "12px 28px",
            fontSize: "0.9375rem",
            fontWeight: "600",
            cursor: "pointer",
            flex: 1,
          }}
          type="button"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span
          style={{
            color: "#e0e0e0",
            fontSize: "1.1rem",
            fontWeight: "700",
          }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
