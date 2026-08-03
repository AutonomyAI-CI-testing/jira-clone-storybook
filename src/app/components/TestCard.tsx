import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] rounded-lg p-5 w-[320px] flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-white font-bold text-lg">UI magician Agent</span>
        <FiSettings className="text-gray-400 w-5 h-5" />
      </div>

      {/* Hint subtitle row */}
      <div className="flex items-center gap-1">
        <FiChevronUp className="text-[#b87333] w-4 h-4 shrink-0" />
        <span className="text-[#b87333] text-sm truncate">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-2" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white w-4 h-4 shrink-0" />
        <span className="text-white font-bold text-lg">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-gray-300 text-sm font-medium">
            Personal Access Token
          </label>
          <FiInfo className="text-gray-400 w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="bg-transparent border border-gray-500 rounded px-3 py-2 text-gray-400 text-sm placeholder-gray-600 outline-none w-full"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-gray-300 text-sm font-medium">Design URL</label>
          <FiInfo className="text-gray-400 w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="bg-transparent border border-gray-500 rounded px-3 py-2 text-gray-400 text-sm placeholder-gray-600 outline-none w-full"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-[#a0522d] text-white font-semibold py-3 rounded-lg hover:bg-[#8b4513]">
          Awesome
        </button>
        <button className="flex-1 bg-[#a0522d] text-white font-semibold py-3 rounded-lg hover:bg-[#8b4513]">
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="mt-2" />

      {/* Recent Breakdowns */}
      <span className="text-white font-bold text-lg">Recent Breakdowns</span>
    </div>
  );
}

export default TestCard;
