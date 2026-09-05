import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div id="testElem">
      <div
        style={{
          width: "254px",
          backgroundColor: "#1c1d17",
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          padding: "20px 20px 32px 20px",
          boxSizing: "border-box",
          minHeight: "508px",
          display: "flex",
          flexDirection: "column",
          gap: "0",
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
          <span style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
            UI magician Agent
          </span>
          <FiSettings style={{ color: "#b5b5b5", fontSize: "16px" }} />
        </div>

        {/* Subtitle row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "48px",
          }}
        >
          <FiChevronUp style={{ color: "#8b9291", fontSize: "12px" }} />
          <span
            style={{
              color: "#8b9291",
              fontSize: "11.5px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
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
            gap: "8px",
            marginBottom: "20px",
          }}
        >
          <FiChevronUp style={{ color: "#b2b2b1", fontSize: "14px" }} />
          <span style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "8px",
          }}
        >
          <span style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
            Personal Access Token
          </span>
          <FiInfo style={{ color: "#a4a4a3", fontSize: "13px" }} />
        </div>

        {/* Token input */}
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            width: "100%",
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#737470",
            fontSize: "11.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            padding: "10px 12px",
            boxSizing: "border-box",
            marginBottom: "16px",
            outline: "none",
            borderRadius: "0",
          }}
        />

        {/* Design URL label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "8px",
          }}
        >
          <span style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
            Design URL
          </span>
          <FiInfo style={{ color: "#a3a3a2", fontSize: "13px" }} />
        </div>

        {/* URL input */}
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          style={{
            width: "100%",
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#71726e",
            fontSize: "11.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            padding: "10px 12px",
            boxSizing: "border-box",
            marginBottom: "20px",
            outline: "none",
            borderRadius: "0",
          }}
        />

        {/* Buttons row */}
        <div
          style={{
            display: "flex",
            gap: "14px",
            marginBottom: "40px",
          }}
        >
          <button
            style={{
              flex: 1,
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              border: "none",
              borderRadius: "4px",
              padding: "10px 0",
              cursor: "pointer",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              flex: 1,
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              border: "none",
              borderRadius: "4px",
              padding: "10px 0",
              cursor: "pointer",
            }}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns heading */}
        <span style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
