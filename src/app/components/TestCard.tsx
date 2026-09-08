import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1e1f1a",
        width: "256px",
        minHeight: "508px",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold text-sm" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        <FiChevronUp size={10} color="#8b9291" />
        <span className="font-semibold text-xs truncate" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp size={12} color="#b2b2b1" />
        <span className="font-semibold text-sm" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mb-1">
        <span className="font-semibold text-xs" style={{ color: "#a4a4a3" }}>
          Personal Access Token
        </span>
        <FiInfo size={14} color="#a4a4a3" />
      </div>

      {/* Token input */}
      <div
        className="flex items-center mb-3 px-2"
        style={{
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
          height: "37px",
          borderRadius: "2px",
        }}
      >
        <span className="font-semibold text-xs" style={{ color: "#737470" }}>
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2 mb-1">
        <span className="font-semibold text-xs" style={{ color: "#a3a3a2" }}>
          Design URL
        </span>
        <FiInfo size={14} color="#a3a3a2" />
      </div>

      {/* URL input */}
      <div
        className="flex items-center mb-5 px-2"
        style={{
          backgroundColor: "#272822",
          border: "2px solid #929291",
          height: "37px",
          borderRadius: "2px",
        }}
      >
        <span className="font-semibold text-xs" style={{ color: "#71726e" }}>
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 flex items-center justify-center font-semibold"
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            height: "37px",
            color: "#8c8078",
            fontSize: "11.5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 flex items-center justify-center font-semibold"
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            height: "37px",
            color: "#8c8078",
            fontSize: "11.5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div>
        <span className="font-semibold text-sm" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
