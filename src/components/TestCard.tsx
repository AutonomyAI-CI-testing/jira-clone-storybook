import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1e1e1e",
        color: "#d4d4d4",
        fontFamily: "sans-serif",
        padding: "20px",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* ── Header row ── */}
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
            fontWeight: 700,
          }}
        >
          UI magician Agent
        </span>
        <HiCog size={24} style={{ color: "#999" }} />
      </div>

      {/* ── Collapsible subtitle row ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "40px",
          paddingLeft: "4px",
        }}
      >
        <HiChevronUp size={16} style={{ color: "#e8e8e8", flexShrink: 0 }} />
        <span style={{ color: "#c2956c", fontSize: "14px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Add New Design section ── */}
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          <HiChevronUp size={18} style={{ color: "#e8e8e8", flexShrink: 0 }} />
          <span
            style={{
              color: "#e8e8e8",
              fontSize: "18px",
              fontWeight: 700,
            }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token field */}
        <div style={{ marginBottom: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <label
              style={{
                color: "#d4d4d4",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              Personal Access Token
            </label>
            <HiInformationCircle size={18} style={{ color: "#888" }} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            style={{
              width: "100%",
              backgroundColor: "#2a2a2a",
              border: "1px solid #555",
              borderRadius: "4px",
              padding: "10px 12px",
              color: "#ccc",
              fontSize: "13px",
              boxSizing: "border-box",
              outline: "none",
            }}
          />
        </div>

        {/* Design URL field */}
        <div style={{ marginBottom: "24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <label
              style={{
                color: "#d4d4d4",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              Design URL
            </label>
            <HiInformationCircle size={18} style={{ color: "#888" }} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            style={{
              width: "100%",
              backgroundColor: "#2a2a2a",
              border: "1px solid #7a7a7a",
              borderRadius: "4px",
              padding: "10px 12px",
              color: "#ccc",
              fontSize: "13px",
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
            justifyContent: "center",
          }}
        >
          <button
            style={{
              backgroundColor: "#b5451b",
              color: "#f0f0f0",
              border: "none",
              borderRadius: "8px",
              padding: "12px 28px",
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
              backgroundColor: "#9e3d17",
              color: "#c8c8c8",
              border: "none",
              borderRadius: "8px",
              padding: "12px 28px",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              flex: 1,
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* ── Recent Breakdowns heading ── */}
      <div style={{ marginTop: "48px" }}>
        <span
          style={{
            color: "#e8e8e8",
            fontSize: "18px",
            fontWeight: 700,
          }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
