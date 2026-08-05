import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64"
      style={{ backgroundColor: "#1a1a17", minHeight: "508px", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span className="font-semibold" style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        <FiSettings style={{ color: "#b5b5b5", width: "14px", height: "16px" }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 px-5 pb-8">
        <FiChevronUp style={{ color: "#8b9291", width: "8px", height: "8px", flexShrink: 0 }} />
        <span className="font-semibold" style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ height: "60px" }} />

      {/* Add New Design */}
      <div className="flex items-center gap-2 px-5 mb-4">
        <FiChevronUp style={{ color: "#b2b2b1", width: "12px", height: "12px", flexShrink: 0 }} />
        <span className="font-semibold" style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="px-5 mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span className="font-semibold" style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
            Personal Access Token
          </span>
          <FiInfo style={{ color: "#a4a4a3", width: "14px", height: "14px" }} />
        </div>
        <div
          className="w-full px-3 py-2"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
          }}
        >
          <span className="font-semibold" style={{ color: "#737470", fontSize: "11.5px" }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="px-5 mb-4">
        <div className="flex items-center gap-1 mb-1">
          <span className="font-semibold" style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
            Design URL
          </span>
          <FiInfo style={{ color: "#a3a3a2", width: "14px", height: "14px" }} />
        </div>
        <div
          className="w-full px-3 py-2"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
          }}
        >
          <span className="font-semibold" style={{ color: "#71726e", fontSize: "10.5px" }}>
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 px-5 mb-8">
        <button
          className="flex-1 py-2 font-semibold"
          style={{ backgroundColor: "#843a17", borderRadius: "4px", color: "#8c8078", fontSize: "11.5px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 font-semibold"
          style={{ backgroundColor: "#843a17", borderRadius: "4px", color: "#8c8078", fontSize: "11.5px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span className="font-semibold" style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
