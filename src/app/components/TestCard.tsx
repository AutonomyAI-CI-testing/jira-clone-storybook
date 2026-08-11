import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col gap-3 p-4 w-[254px]"
      style={{ backgroundColor: "#2a2a27", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={12} style={{ color: "#8b9291" }} />
        <span
          className="text-[11.5px] font-semibold truncate"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-3" />

      {/* Add New Design */}
      <div className="flex items-center gap-2">
        <FiChevronDown size={13} style={{ color: "#b2b2b1" }} />
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#b2b2b1" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span
            className="text-[11.5px] font-semibold"
            style={{ color: "#a4a4a3" }}
          >
            Personal Access Token
          </span>
          <AiOutlineInfoCircle size={14} style={{ color: "#a4a4a3" }} />
        </div>
        <div
          className="flex items-center px-3 py-2 rounded"
          style={{
            backgroundColor: "#272822",
            border: "1px solid #a5adad",
            height: "37px",
          }}
        >
          <span
            className="text-[11.5px] font-semibold"
            style={{ color: "#737470" }}
          >
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span
            className="text-[11.5px] font-semibold"
            style={{ color: "#a3a3a2" }}
          >
            Design URL
          </span>
          <AiOutlineInfoCircle size={14} style={{ color: "#a3a3a2" }} />
        </div>
        <div
          className="flex items-center px-3 py-2 rounded"
          style={{
            backgroundColor: "#272822",
            border: "2px solid #929291",
            height: "37px",
          }}
        >
          <span
            className="text-[10.5px] font-semibold"
            style={{ color: "#71726e" }}
          >
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-1">
        <button
          className="flex-1 flex items-center justify-center rounded text-[11.5px] font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            borderRadius: "4px",
            height: "37px",
          }}
        >
          Awesome
        </button>
        <button
          className="flex-1 flex items-center justify-center rounded text-[11.5px] font-semibold"
          style={{
            backgroundColor: "#843a17",
            color: "#8c8078",
            borderRadius: "4px",
            height: "37px",
          }}
        >
          Prepare
        </button>
      </div>

      <div className="mt-3" />

      {/* Recent Breakdowns */}
      <span
        className="text-[13.5px] font-semibold"
        style={{ color: "#b0b0b0" }}
      >
        Recent Breakdowns
      </span>
    </div>
  );
};

export default TestCard;
