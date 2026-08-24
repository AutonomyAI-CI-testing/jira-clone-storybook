import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1c1c1c",
        width: "254px",
        fontFamily: "Inter, sans-serif",
        padding: "20px",
        borderRadius: "6px",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        <FiSettings style={{ color: "#b5b5b5", width: "14px", height: "16px" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-6">
        <FiChevronUp style={{ color: "#8b9291", width: "8px", height: "5px" }} />
        <span
          style={{
            color: "#8b9291",
            fontSize: "11.5px",
            fontWeight: 600,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp style={{ color: "#b2b2b1", width: "12px", height: "8px" }} />
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
            Personal Access Token
          </span>
          <FiInfo style={{ color: "#a4a4a3", width: "15px", height: "15px" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#737470",
            fontSize: "11.5px",
            fontWeight: 600,
            width: "100%",
            padding: "10px 12px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
            Design URL
          </span>
          <FiInfo style={{ color: "#a3a3a2", width: "15px", height: "15px" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#71726e",
            fontSize: "11.5px",
            fontWeight: 600,
            width: "100%",
            padding: "10px 12px",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            borderRadius: "4px",
            border: "none",
            padding: "10px 0",
            flex: 1,
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            borderRadius: "4px",
            border: "none",
            padding: "10px 0",
            flex: 1,
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
        Recent Breakdowns
      </span>
    </div>
  );
};
