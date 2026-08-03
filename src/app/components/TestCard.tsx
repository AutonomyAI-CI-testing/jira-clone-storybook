import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="w-full max-w-xs rounded-xl p-5 font-sans text-white"
      style={{ backgroundColor: "#2a2a2a" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        <FiSettings className="w-5 h-5 text-gray-300" />
      </div>

      {/* Hint row */}
      <div className="flex items-center gap-1 mb-10">
        <FiChevronUp className="w-4 h-4" style={{ color: "#b87333" }} />
        <span className="text-sm" style={{ color: "#b87333" }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp className="w-4 h-4 text-white" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-sm text-gray-300">Personal Access Token</span>
          <FiInfo className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none border border-gray-600"
          style={{ backgroundColor: "transparent" }}
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-sm text-gray-300">Design URL</span>
          <FiInfo className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none border border-gray-600"
          style={{ backgroundColor: "transparent" }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-10">
        <button
          className="flex-1 py-3 rounded-lg font-semibold text-white text-sm"
          style={{ backgroundColor: "#a0522d" }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-3 rounded-lg font-semibold text-white text-sm"
          style={{ backgroundColor: "#a0522d" }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
}
