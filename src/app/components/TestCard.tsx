import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#272822",
        fontFamily: "Inter, sans-serif",
        width: "254px",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span
          style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}
        >
          UI magician Agent
        </span>
        <IoSettingsOutline style={{ color: "#b5b5b5", fontSize: "16px" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-6">
        <FiChevronUp style={{ color: "#8b9291", fontSize: "12px" }} />
        <span
          style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp style={{ color: "#b2b2b1", fontSize: "12px" }} />
        <span
          style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-1 mb-1">
        <span
          style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}
        >
          Personal Access Token
        </span>
        <AiOutlineInfoCircle style={{ color: "#a4a4a3", fontSize: "14px" }} />
      </div>

      {/* Personal Access Token input */}
      <input
        readOnly
        value=""
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full mb-3"
        style={{
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
          borderRadius: "0",
          padding: "8px 10px",
          fontSize: "11.5px",
          fontWeight: 600,
          color: "#737470",
          outline: "none",
          boxSizing: "border-box",
          fontFamily: "Inter, sans-serif",
        }}
      />

      {/* Design URL label */}
      <div className="flex items-center gap-1 mb-1">
        <span
          style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}
        >
          Design URL
        </span>
        <AiOutlineInfoCircle style={{ color: "#a3a3a2", fontSize: "14px" }} />
      </div>

      {/* Design URL input */}
      <input
        readOnly
        value=""
        placeholder="https://www.figma.com/file/:"
        className="w-full mb-4"
        style={{
          backgroundColor: "#272822",
          border: "2px solid #929291",
          borderRadius: "0",
          padding: "8px 10px",
          fontSize: "10.5px",
          fontWeight: 600,
          color: "#71726e",
          outline: "none",
          boxSizing: "border-box",
          fontFamily: "Inter, sans-serif",
        }}
      />

      {/* Action buttons */}
      <div className="flex gap-3 mb-8">
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            borderRadius: "4px",
            border: "none",
            padding: "10px 22px",
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
            borderRadius: "4px",
            border: "none",
            padding: "10px 22px",
            cursor: "pointer",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div>
        <span
          style={{ color: "#b0b0b0", fontSize: "13.5px", fontWeight: 600 }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
