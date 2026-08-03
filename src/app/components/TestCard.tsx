import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white w-80 rounded-lg p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-lg">UI magician Agent</span>
        <FiSettings className="text-gray-300 w-5 h-5" />
      </div>

      {/* Hint row */}
      <div className="flex items-center gap-1 mb-8">
        <FiChevronUp className="text-[#b87333] w-4 h-4 flex-shrink-0" />
        <span className="text-[#b87333] text-sm truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="text-white w-4 h-4 flex-shrink-0" />
          <span className="font-bold text-lg">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <label className="text-sm text-gray-200">Personal Access Token</label>
            <FiInfo className="text-gray-400 w-4 h-4 flex-shrink-0" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-500 rounded px-3 py-2.5 text-sm text-gray-400 placeholder-gray-600 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <label className="text-sm text-gray-200">Design URL</label>
            <FiInfo className="text-gray-400 w-4 h-4 flex-shrink-0" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-500 rounded px-3 py-2.5 text-sm text-gray-400 placeholder-gray-600 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg text-sm">
            Awesome
          </button>
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg text-sm">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="font-bold text-lg">Recent Breakdowns</span>
      </div>
    </div>
  );
}
