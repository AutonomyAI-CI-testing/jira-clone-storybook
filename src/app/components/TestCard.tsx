import { FiSettings, FiInfo, FiChevronUp } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64"
      style={{
        backgroundColor: "#272822",
        minHeight: "508px",
        fontFamily: "Inter, sans-serif",
        padding: "0",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px" }}
        >
          UI magician Agent
        </span>
        <FiSettings size={16} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 px-5 pb-10">
        <FiChevronUp size={12} style={{ color: "#8b9291" }} />
        <span
          className="font-semibold"
          style={{ color: "#8b9291", fontSize: "11.5px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section header */}
        <div className="flex items-center gap-2 mb-4">
          <FiChevronUp size={13} style={{ color: "#b2b2b1" }} />
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-1 mb-2">
          <span
            className="font-semibold"
            style={{ color: "#a4a4a3", fontSize: "11.5px" }}
          >
            Personal Access Token
          </span>
          <FiInfo size={13} style={{ color: "#a4a4a3" }} />
        </div>

        {/* Token input */}
        <div
          className="rounded px-3 py-2 mb-3"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#737470", fontSize: "11.5px" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-1 mb-2">
          <span
            className="font-semibold"
            style={{ color: "#a3a3a2", fontSize: "11.5px" }}
          >
            Design URL
          </span>
          <FiInfo size={13} style={{ color: "#a3a3a2" }} />
        </div>

        {/* URL input */}
        <div
          className="rounded px-3 py-2 mb-5"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#71726e", fontSize: "10.5px" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            className="font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              borderRadius: "4px",
              padding: "8px 24px",
            }}
          >
            Awesome
          </button>
          <button
            className="font-semibold"
            style={{
              backgroundColor: "#843a17",
              color: "#8c8078",
              fontSize: "11.5px",
              borderRadius: "4px",
              padding: "8px 24px",
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="px-5 pb-6">
        <span
          className="font-semibold"
          style={{ color: "#b0b0b0", fontSize: "13.5px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
