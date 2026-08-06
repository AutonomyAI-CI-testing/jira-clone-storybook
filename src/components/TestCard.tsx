import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-64 p-5"
      style={{ backgroundColor: "#1a1a17", fontFamily: "Inter, sans-serif", minHeight: "508px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold" style={{ color: "#b5b5b5", fontSize: "13.5px" }}>
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mb-10">
        <FiChevronUp size={10} style={{ color: "#8b9291" }} />
        <span className="font-semibold" style={{ color: "#8b9291", fontSize: "11.5px" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-3">
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-2">
          <FiChevronUp size={12} style={{ color: "#b2b2b1" }} />
          <span className="font-semibold" style={{ color: "#b2b2b1", fontSize: "13.5px" }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="font-semibold" style={{ color: "#a4a4a3", fontSize: "11.5px" }}>
              Personal Access Token
            </span>
            <AiOutlineInfoCircle size={14} style={{ color: "#a4a4a3" }} />
          </div>
          <div
            className="w-full px-3 py-2"
            style={{
              backgroundColor: "#272822",
              border: "1px solid #a5adad",
            }}
          >
            <span className="font-semibold" style={{ color: "#737470", fontSize: "11.5px" }}>
              figd_xxxxxxxxxxxxxxxxxx
            </span>
          </div>
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="font-semibold" style={{ color: "#a3a3a2", fontSize: "11.5px" }}>
              Design URL
            </span>
            <AiOutlineInfoCircle size={14} style={{ color: "#a3a3a2" }} />
          </div>
          <div
            className="w-full px-3 py-2"
            style={{
              backgroundColor: "#272822",
              border: "2px solid #929291",
            }}
          >
            <span className="font-semibold" style={{ color: "#71726e", fontSize: "10.5px" }}>
              https://www.figma.com/file/:
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <button
            className="flex-1 py-2 rounded font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078", fontSize: "11.5px", borderRadius: "4px" }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-2 rounded font-semibold"
            style={{ backgroundColor: "#843a17", color: "#8c8078", fontSize: "11.5px", borderRadius: "4px" }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="font-semibold" style={{ color: "#b0b0b0", fontSize: "13.5px" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
