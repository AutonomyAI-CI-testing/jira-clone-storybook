import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FiChevronUp } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: "#2b2b2b", color: "#e5e5e5" }}
      className="w-full max-w-sm min-h-screen p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <IoSettingsOutline size={22} style={{ color: "#a0a0a0" }} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp size={16} style={{ color: "#a0a0a0" }} />
        <span style={{ color: "#b97a4a" }} className="text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp size={18} className="text-white" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-semibold text-gray-300">
            Personal Access Token
          </label>
          <AiOutlineInfoCircle size={16} style={{ color: "#a0a0a0" }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-2 text-sm"
          style={{
            backgroundColor: "#3a3a3a",
            border: "1px solid #555",
            color: "#888",
            outline: "none",
          }}
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-semibold text-gray-300">
            Design URL
          </label>
          <AiOutlineInfoCircle size={16} style={{ color: "#a0a0a0" }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-2 text-sm"
          style={{
            backgroundColor: "#3a3a3a",
            border: "1px solid #888",
            color: "#888",
            outline: "none",
          }}
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 justify-center mb-8">
        <button
          className="rounded-lg px-8 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#b05a2a" }}
        >
          Awesome
        </button>
        <button
          className="rounded-lg px-8 py-3 text-sm font-semibold text-white"
          style={{ backgroundColor: "#b05a2a" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
}
