import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#272822", width: "254px", fontFamily: "Inter, sans-serif" }}
      className="flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span className="font-semibold text-sm" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <FiSettings size={16} color="#b5b5b5" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 px-5 pb-4">
        <FiChevronUp size={12} color="#8b9291" />
        <span className="font-semibold text-xs" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-10" />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          <FiChevronUp size={13} color="#b2b2b1" />
          <span className="font-semibold text-sm" style={{ color: "#b2b2b1" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-3">
          <div className="flex items-center gap-1 mb-2">
            <span className="font-semibold text-xs" style={{ color: "#a4a4a3" }}>
              Personal Access Token
            </span>
            <FiInfo size={13} color="#a4a4a3" />
          </div>
          <div
            className="w-full px-3 py-2"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span className="font-semibold text-xs" style={{ color: "#737470" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="mb-5">
          <div className="flex items-center gap-1 mb-2">
            <span className="font-semibold text-xs" style={{ color: "#a3a3a2" }}>
              Design URL
            </span>
            <FiInfo size={13} color="#a3a3a2" />
          </div>
          <div
            className="w-full px-3 py-2"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span className="font-semibold text-xs" style={{ color: "#71726e" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 py-2 rounded font-semibold text-xs"
            style={{ backgroundColor: "#843a17", color: "#8c8078" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 rounded font-semibold text-xs"
            style={{ backgroundColor: "#843a17", color: "#8c8078" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Recent Breakdowns */}
      <div className="px-5 pt-2">
        <span className="font-semibold text-sm" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
