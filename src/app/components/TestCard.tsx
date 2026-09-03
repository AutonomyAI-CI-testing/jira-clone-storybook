import { FaCog } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: "#1a1a18" }}
    >
      <div
        className="flex flex-col overflow-hidden"
        style={{
          backgroundColor: "#272822",
          width: "256px",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
            UI magician Agent
          </span>
          <FaCog color="#b5b5b5" size={14} />
        </div>

        {/* Subtitle row */}
        <div className="flex items-center gap-2 px-5 pb-5">
          <FiChevronUp color="#8b9291" size={10} className="shrink-0" />
          <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
            From entire frame to a singl...
          </span>
        </div>

        {/* Spacer */}
        <div style={{ height: "24px" }} />

        {/* Add New Design section */}
        <div className="px-5 pb-5">
          {/* Section header */}
          <div className="flex items-center gap-2 mb-4">
            <FiChevronUp color="#b2b2b1" size={12} className="shrink-0" />
            <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
              Add New Design
            </span>
          </div>

          {/* Personal Access Token */}
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
                Personal Access Token
              </span>
              <AiOutlineInfoCircle color="#a4a4a3" size={15} className="shrink-0" />
            </div>
            <div
              className="w-full px-3 py-2"
              style={{
                backgroundColor: "#272822",
                border: "1px solid #a5adad",
                borderRadius: "2px",
              }}
            >
              <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
                figd_xxxxxxxxxxxxxxxxxx
              </span>
            </div>
          </div>

          {/* Design URL */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600, lineHeight: "13.92px" }}>
                Design URL
              </span>
              <AiOutlineInfoCircle color="#a3a3a2" size={15} className="shrink-0" />
            </div>
            <div
              className="w-full px-3 py-2"
              style={{
                backgroundColor: "#272822",
                border: "2px solid #929291",
                borderRadius: "2px",
              }}
            >
              <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600, lineHeight: "12.71px" }}>
                https://www.figma.com/file/:
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              className="flex-1 py-2 text-center"
              style={{
                backgroundColor: "#843a17",
                color: "#8c8078",
                fontSize: "11.5px",
                fontWeight: 600,
                lineHeight: "13.92px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Awesome
            </button>
            <button
              className="flex-1 py-2 text-center"
              style={{
                backgroundColor: "#843a17",
                color: "#8c8078",
                fontSize: "11.5px",
                fontWeight: 600,
                lineHeight: "13.92px",
                borderRadius: "4px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Prepare
            </button>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ height: "16px" }} />

        {/* Recent Breakdowns */}
        <div className="px-5 pb-5">
          <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600, lineHeight: "16.34px" }}>
            Recent Breakdowns
          </span>
        </div>
      </div>
    </div>
  );
}
