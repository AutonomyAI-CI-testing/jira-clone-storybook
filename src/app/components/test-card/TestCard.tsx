import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] p-4 flex flex-col gap-4"
      style={{ backgroundColor: "#2a2a2a", fontFamily: "sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold" style={{ color: "#b5b5b5" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline style={{ color: "#b5b5b5" }} size={18} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={12} style={{ color: "#8b9291" }} />
        <span className="text-xs" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-3 mt-4">
        <div className="flex items-center gap-2">
          <FiChevronUp size={14} style={{ color: "#b2b2b1" }} />
          <span className="text-base font-bold" style={{ color: "#b2b2b1" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: "#b2b2b1" }}>
              Personal Access Token
            </span>
            <AiOutlineInfoCircle size={14} style={{ color: "#b2b2b1" }} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full text-xs px-3 py-2 rounded"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
              color: "#8b9291",
              outline: "none",
            }}
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xs" style={{ color: "#b2b2b1" }}>
              Design URL
            </span>
            <AiOutlineInfoCircle size={14} style={{ color: "#b2b2b1" }} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full text-xs px-3 py-2 rounded"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
              color: "#8b9291",
              outline: "none",
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            className="flex-1 py-2 rounded-lg text-sm font-medium"
            style={{ backgroundColor: "#843a17", color: "#8c8078" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 rounded-lg text-sm font-medium"
            style={{ backgroundColor: "#843a17", color: "#8c8078" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-base font-bold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
