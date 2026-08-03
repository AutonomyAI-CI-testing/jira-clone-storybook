import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-80 rounded-lg p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-lg font-bold text-white">UI magician Agent</h1>
        <FiSettings className="w-5 h-5 text-gray-400" />
      </div>

      {/* Hint row */}
      <div className="flex items-center gap-1 mb-8">
        <FiChevronUp className="w-4 h-4 text-[#b87333]" />
        <span className="text-[#b87333] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp className="w-4 h-4 text-white" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-sm text-gray-300">Personal Access Token</span>
          <FiInfo className="w-3.5 h-3.5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full bg-transparent border border-gray-600 rounded px-3 py-2.5 text-gray-400 text-sm placeholder-gray-600 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-sm text-gray-300">Design URL</span>
          <FiInfo className="w-3.5 h-3.5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full bg-transparent border border-gray-600 rounded px-3 py-2.5 text-gray-400 text-sm placeholder-gray-600 outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-8">
        <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
}
