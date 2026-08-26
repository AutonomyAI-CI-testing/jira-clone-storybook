import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        width: "254px",
        minHeight: "508px",
        fontFamily: "Inter, sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-sm font-semibold"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        <FiSettings size={16} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        <FiChevronUp size={12} color="#8b9291" />
        <span
          className="text-xs font-semibold truncate"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp size={12} color="#b2b2b1" />
        <span
          className="text-sm font-semibold"
          style={{ color: "#b2b2b1" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span
            className="text-xs font-semibold"
            style={{ color: "#a4a4a3" }}
          >
            Personal Access Token
          </span>
          <FiInfo size={13} color="#a4a4a3" />
        </div>
        <div
          className="w-full px-3 py-2 rounded"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
          }}
        >
          <span
            className="text-xs font-semibold"
            style={{ color: "#737470" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1">
          <span
            className="text-xs font-semibold"
            style={{ color: "#a3a3a2" }}
          >
            Design URL
          </span>
          <FiInfo size={13} color="#a3a3a2" />
        </div>
        <div
          className="w-full px-3 py-2 rounded"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
          }}
        >
          <span
            className="text-xs font-semibold"
            style={{ color: "#71726e", fontSize: "10.5px" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 py-2 rounded font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            borderRadius: "4px",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 rounded font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            borderRadius: "4px",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span
          className="text-sm font-semibold"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
