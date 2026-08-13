import { IoSettingsOutline } from "react-icons/io5";
import { LuChevronUp } from "react-icons/lu";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[254px] min-h-[508px] px-4 py-4"
      style={{ backgroundColor: "#1e1e1b", fontFamily: "Inter, sans-serif" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#b5b5b5" }}
        >
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} color="#b5b5b5" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1.5 mb-8">
        <LuChevronUp size={10} color="#8b9291" />
        <span
          className="text-[11.5px] font-semibold"
          style={{ color: "#8b9291" }}
        >
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Add New Design */}
      <div className="flex items-center gap-2 mb-4">
        <LuChevronUp size={12} color="#b2b2b1" />
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#b2b2b1" }}
        >
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-1.5 mb-1">
        <span
          className="text-[11.5px] font-semibold"
          style={{ color: "#a4a4a3" }}
        >
          Personal Access Token
        </span>
        <AiOutlineInfoCircle size={15} color="#a4a4a3" />
      </div>
      <div
        className="w-full px-3 py-2 rounded mb-3"
        style={{
          backgroundColor: "#272822",
          border: "1px solid #a5adad",
        }}
      >
        <span className="text-[11.5px] font-semibold" style={{ color: "#737470" }}>
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="flex items-center gap-1.5 mb-1">
        <span
          className="text-[11.5px] font-semibold"
          style={{ color: "#a3a3a2" }}
        >
          Design URL
        </span>
        <AiOutlineInfoCircle size={15} color="#a3a3a2" />
      </div>
      <div
        className="w-full px-3 py-2 rounded mb-4"
        style={{
          backgroundColor: "#272822",
          border: "2px solid #929291",
        }}
      >
        <span className="text-[11.5px] font-semibold" style={{ color: "#71726e" }}>
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-6">
        <button
          className="flex-1 py-2 text-[11.5px] font-semibold rounded"
          style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 text-[11.5px] font-semibold rounded"
          style={{ backgroundColor: "#843a17", color: "#8c8078", borderRadius: "4px" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span
          className="text-[13.5px] font-semibold"
          style={{ color: "#b0b0b0" }}
        >
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
