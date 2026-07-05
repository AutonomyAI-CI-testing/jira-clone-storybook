import { IoSettingsOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-72 min-h-screen p-4 gap-4"
      style={{ backgroundColor: "#2a2a2a", color: "#b5b5b5" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-lg font-semibold">UI magician Agent</span>
        <IoSettingsOutline size={22} style={{ color: "#b5b5b5" }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1">
        <FiChevronUp size={16} style={{ color: "#8b9291" }} />
        <span className="text-sm" style={{ color: "#8b9291" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={18} style={{ color: "#b2b2b1" }} />
        <span className="text-base font-bold" style={{ color: "#b2b2b1" }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm" style={{ color: "#a4a4a3" }}>
            Personal Access Token
          </span>
          <BsInfoCircle size={14} style={{ color: "#a4a4a3" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "#333333",
            border: "1px solid #4a4a4a",
            color: "#737470",
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm" style={{ color: "#a4a4a3" }}>
            Design URL
          </span>
          <BsInfoCircle size={14} style={{ color: "#a4a4a3" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{
            backgroundColor: "#333333",
            border: "1px solid #4a4a4a",
            color: "#737470",
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-1">
        <button
          className="flex-1 py-3 rounded-xl font-semibold text-sm"
          style={{ backgroundColor: "#b45309", color: "#f5ede6" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-3 rounded-xl font-semibold text-sm"
          style={{ backgroundColor: "#b45309", color: "#f5ede6" }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-base font-bold" style={{ color: "#b0b0b0" }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};

export default TestCard;
