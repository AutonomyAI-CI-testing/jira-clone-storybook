import { IoSettingsOutline } from "react-icons/io5";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: "#1e1e1b",
        width: "254px",
        padding: "20px",
        fontFamily: "Inter, sans-serif",
        minHeight: "508px",
        boxSizing: "border-box",
      }}
      className="flex flex-col"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-4">
        <span
          style={{ color: "#b5b5b5", fontSize: "13.5px", fontWeight: 600 }}
        >
          UI magician Agent
        </span>
        <IoSettingsOutline color="#b5b5b5" size={16} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 mb-8">
        <IoChevronUpOutline color="#8b9291" size={12} />
        <span
          style={{ color: "#8b9291", fontSize: "11.5px", fontWeight: 600 }}
          className="truncate"
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="flex items-center gap-2 mb-4">
        <IoChevronDownOutline color="#b2b2b1" size={14} />
        <span
          style={{ color: "#b2b2b1", fontSize: "13.5px", fontWeight: 600 }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span
            style={{ color: "#a4a4a3", fontSize: "11.5px", fontWeight: 600 }}
          >
            Personal Access Token
          </span>
          <IoInformationCircleOutline color="#a4a4a3" size={14} />
        </div>
        <div
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            padding: "8px 12px",
          }}
        >
          <span
            style={{ color: "#737470", fontSize: "11.5px", fontWeight: 600 }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL field */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1">
          <span
            style={{ color: "#a3a3a2", fontSize: "11.5px", fontWeight: 600 }}
          >
            Design URL
          </span>
          <IoInformationCircleOutline color="#a3a3a2" size={14} />
        </div>
        <div
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            padding: "8px 12px",
          }}
        >
          <span
            style={{ color: "#71726e", fontSize: "10.5px", fontWeight: 600 }}
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            fontSize: "11.5px",
            fontWeight: 600,
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
          className="flex-1 py-2"
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
            cursor: "pointer",
          }}
          className="flex-1 py-2"
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
}

export default TestCard;
