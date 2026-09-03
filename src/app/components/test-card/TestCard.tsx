import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col"
      style={{
        backgroundColor: "#2a2b26",
        width: "254px",
        minHeight: "508px",
        fontFamily: "Inter, sans-serif",
      }}
    >
      {/* Top bar strip */}
      <div style={{ backgroundColor: "#1a1b17", height: "9px", width: "100%" }} />

      {/* Header row */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span
          className="font-semibold"
          style={{ color: "#b5b5b5", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          UI magician Agent
        </span>
        <FiSettings size={14} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 px-5 pb-4">
        <FiChevronUp size={8} style={{ color: "#8b9291" }} />
        <span
          className="font-semibold truncate"
          style={{ color: "#8b9291", fontSize: "11.5px", lineHeight: "13.92px" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" style={{ minHeight: "32px" }} />

      {/* Add New Design section */}
      <div className="px-5">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-4">
          <FiChevronUp size={12} style={{ color: "#b2b2b1" }} />
          <span
            className="font-semibold"
            style={{ color: "#b2b2b1", fontSize: "13.5px", lineHeight: "16.34px" }}
          >
            Add New Design
          </span>
        </div>

        {/* Personal Access Token label */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="font-semibold"
            style={{ color: "#a4a4a3", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Personal Access Token
          </span>
          <FiInfo size={15} style={{ color: "#a4a4a3" }} />
        </div>

        {/* Token input */}
        <div
          className="w-full mb-4 px-3 py-2"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            borderRadius: "2px",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#737470", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>

        {/* Design URL label */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className="font-semibold"
            style={{ color: "#a3a3a2", fontSize: "11.5px", lineHeight: "13.92px" }}
          >
            Design URL
          </span>
          <FiInfo size={15} style={{ color: "#a3a3a2" }} />
        </div>

        {/* URL input */}
        <div
          className="w-full mb-6 px-3 py-2"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            borderRadius: "2px",
          }}
        >
          <span
            className="font-semibold"
            style={{ color: "#71726e", fontSize: "10.5px", lineHeight: "12.71px" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 mb-8">
          <button
            className="flex-1 flex items-center justify-center font-semibold"
            style={{
              backgroundColor: "#843a17",
              borderRadius: "4px",
              height: "37px",
              color: "#8c8078",
              fontSize: "11.5px",
              lineHeight: "13.92px",
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
              lineHeight: "13.92px",
              border: "none",
              cursor: "pointer",
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
          style={{ color: "#b0b0b0", fontSize: "13.5px", lineHeight: "16.34px" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
