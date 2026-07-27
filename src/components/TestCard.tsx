import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#282828", color: "#e5e5e5", width: "320px" }}
      className="rounded-lg p-4 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <AiOutlineSetting size={22} style={{ color: "#aaaaaa" }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mb-6">
        <FiChevronUp size={14} style={{ color: "#a0522d" }} />
        <span style={{ color: "#a0522d" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp size={16} className="text-white" />
        <span className="text-white font-bold text-base">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-white text-sm font-medium">Personal Access Token</span>
          <AiOutlineInfoCircle size={15} style={{ color: "#aaaaaa" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            backgroundColor: "#383838",
            border: "1px solid #555555",
            color: "#aaaaaa",
          }}
          className="w-full rounded px-3 py-2 text-sm outline-none placeholder-gray-500"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-white text-sm font-medium">Design URL</span>
          <AiOutlineInfoCircle size={15} style={{ color: "#aaaaaa" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            backgroundColor: "#383838",
            border: "1px solid #555555",
            color: "#aaaaaa",
          }}
          className="w-full rounded px-3 py-2 text-sm outline-none placeholder-gray-500"
          readOnly
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mb-8">
        <button
          style={{ backgroundColor: "#b5502a" }}
          className="flex-1 py-3 rounded-lg text-white font-semibold text-sm"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: "#b5502a" }}
          className="flex-1 py-3 rounded-lg text-white font-semibold text-sm"
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <span className="text-white font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export default TestCard;
