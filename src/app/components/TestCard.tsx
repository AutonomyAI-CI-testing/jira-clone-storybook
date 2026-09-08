import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        width: "254px",
        fontFamily: "Inter, sans-serif",
        padding: "20px",
        boxSizing: "border-box",
        minHeight: "508px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        <IoSettingsOutline style={{ color: "#b5b5b5", fontSize: "16px" }} />
      </div>

      {/* Collapsed subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp style={{ color: "#8b9291", fontSize: "12px" }} />
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Add New Design section title */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp style={{ color: "#b2b2b1", fontSize: "14px" }} />
        <span style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}>
            Personal Access Token
          </span>
          <AiOutlineInfoCircle style={{ color: "#a4a4a3", fontSize: "14px" }} />
        </div>
        <div
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            height: "37px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "12px",
          }}
        >
          <span style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
            Design URL
          </span>
          <AiOutlineInfoCircle style={{ color: "#a3a3a2", fontSize: "14px" }} />
        </div>
        <div
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            height: "37px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "12px",
          }}
        >
          <span style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}>
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            width: "85px",
            height: "37px",
            borderRadius: "4px",
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
            width: "85px",
            height: "37px",
            borderRadius: "4px",
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
        <span style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}

export default TestCard;
