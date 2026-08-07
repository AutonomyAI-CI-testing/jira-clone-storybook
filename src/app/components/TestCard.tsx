import { FiSettings, FiChevronUp, FiChevronDown, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        width: "254px",
        minHeight: "508px",
        backgroundColor: "#1a1a17",
        fontFamily: "Inter, sans-serif",
        overflow: "auto",
      }}
      className="flex flex-col"
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <span
          style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        <FiSettings style={{ color: "#b5b5b5", width: 14, height: 16, flexShrink: 0 }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <FiChevronUp style={{ color: "#8b9291", width: 8, height: 5, flexShrink: 0 }} />
        <span
          style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design section */}
      <div className="px-5 flex flex-col gap-3">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-1">
          <FiChevronDown style={{ color: "#b2b2b1", width: 12, height: 8, flexShrink: 0 }} />
          <span
            style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span
              style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
            >
              Personal Access Token
            </span>
            <FiInfo style={{ color: "#a4a4a3", width: 15, height: 15, flexShrink: 0 }} />
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              borderRadius: "2px",
              height: "37px",
            }}
            className="flex items-center px-3"
          >
            <span
              style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
            >
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span
              style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}
            >
              Design URL
            </span>
            <FiInfo style={{ color: "#a3a3a2", width: 15, height: 15, flexShrink: 0 }} />
          </div>
          <div
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              borderRadius: "2px",
              height: "37px",
            }}
            className="flex items-center px-3"
          >
            <span
              style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600, lineHeight: "12.71px" }}
            >
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              width: "85px",
              height: "37px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
              border: "none",
              cursor: "default",
            }}
          >
            Awesome
          </button>
          <button
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              width: "85px",
              height: "37px",
              color: "#8c8078",
              fontSize: "11.5px",
              fontWeight: 600,
              lineHeight: "13.92px",
              border: "none",
              cursor: "default",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Recent Breakdowns */}
      <div className="px-5">
        <span
          style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
