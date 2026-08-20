import { FiSettings, FiInfo } from "react-icons/fi";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#2b2b27",
        fontFamily: "Inter, sans-serif",
        width: "254px",
        minHeight: "508px",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        <FiSettings style={{ color: "#b5b5b5", width: "14px", height: "16px" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <HiChevronUp style={{ color: "#8b9291", width: "8px", height: "5px", flexShrink: 0 }} />
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronDown style={{ color: "#b2b2b1", width: "12px", height: "8px", flexShrink: 0 }} />
        <span
          className="font-semibold"
          style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="font-semibold"
            style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Personal Access Token
          </span>
          <FiInfo style={{ color: "#a4a4a3", width: "15px", height: "15px", flexShrink: 0 }} />
        </div>
        <div
          className="w-full px-3 py-2"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            height: "36px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#737470", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL field */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="font-semibold"
            style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Design URL
          </span>
          <FiInfo style={{ color: "#a3a3a2", width: "15px", height: "15px", flexShrink: 0 }} />
        </div>
        <div
          className="w-full px-3 py-2"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            height: "37px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#71726e", fontSize: "10.5px", lineHeight: "12.71px" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 mb-8">
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            lineHeight: "13.92px",
            borderRadius: "4px",
            width: "87px",
            height: "40px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
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
            lineHeight: "13.92px",
            borderRadius: "4px",
            width: "87px",
            height: "40px",
            border: "none",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
