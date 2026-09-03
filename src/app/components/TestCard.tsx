import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-64 min-h-screen p-5 flex flex-col gap-0"
      style={{ backgroundColor: "#272822", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <FiSettings size={14} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-12">
        <FiChevronUp size={10} color="#8b9291" />
        <span className="text-xs font-semibold truncate" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        {/* Section header */}
        <div className="flex items-center gap-2">
          <FiChevronUp size={12} color="#b2b2b1" />
          <span className="text-sm font-semibold" style={{ color: "#b2b2b1" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold" style={{ color: "#a4a4a3" }}>
              Personal Access Token
            </span>
            <FiInfo size={13} color="#a4a4a3" />
          </div>
          <div
            className="w-full px-3 py-2.5 text-xs font-semibold rounded"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              color: "#737470",
            }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-semibold" style={{ color: "#a3a3a2" }}>
              Design URL
            </span>
            <FiInfo size={13} color="#a3a3a2" />
          </div>
          <div
            className="w-full px-3 py-2.5 text-xs font-semibold rounded"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              color: "#71726e",
            }}
          >
            https://www.figma.com/file/:
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 py-2.5 text-xs font-semibold rounded"
            style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2.5 text-xs font-semibold rounded"
            style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1 min-h-[3rem]" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-sm font-semibold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
