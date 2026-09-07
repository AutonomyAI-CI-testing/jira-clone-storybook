import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

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
      }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} color="#b5b5b5" />
      </div>

      {/* Sub-row: chevron + subtitle */}
      <div className="flex items-center gap-2 mb-10">
        <FiChevronUp size={10} color="#8b9291" />
        <span style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design heading */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp size={10} color="#b2b2b1" />
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
          <AiOutlineInfoCircle size={14} color="#a4a4a3" />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded px-3 py-2 outline-none"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            color: "#737470",
            fontSize: "11.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1">
          <span style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}>
            Design URL
          </span>
          <AiOutlineInfoCircle size={14} color="#a3a3a2" />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded px-3 py-2 outline-none"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            color: "#71726e",
            fontSize: "10.5px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mb-10">
        <button
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            width: "85px",
            height: "37px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span style={{ color: "#8c8078", fontSize: "11.5px", fontWeight: 600 }}>
            Awesome
          </span>
        </button>
        <button
          style={{
            backgroundColor: "#843a17",
            borderRadius: "4px",
            width: "85px",
            height: "37px",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span style={{ color: "#8c8078", fontSize: "11.5px", fontWeight: 600 }}>
            Prepare
          </span>
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
