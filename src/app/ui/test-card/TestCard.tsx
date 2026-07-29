import { FiSettings, FiChevronUp } from "react-icons/fi";
import { AiOutlineInfoCircle } from "react-icons/ai";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[320px] bg-[#2a2a2a] text-white p-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings className="w-6 h-6 text-gray-300" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#b07a50] text-sm mb-10">
        <FiChevronUp className="w-4 h-4 flex-shrink-0" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="w-4 h-4 text-gray-200" />
          <h2 className="text-base font-semibold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-200">Personal Access Token</label>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-transparent border border-[#4a4a4a] rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-200">Design URL</label>
            <AiOutlineInfoCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-transparent border border-[#4a4a4a] rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-gray-400"
          />
        </div>

        {/* Action buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#b05a2a] hover:bg-[#c06030] text-white font-medium py-3 px-4 rounded-lg transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#b05a2a] hover:bg-[#c06030] text-white font-medium py-3 px-4 rounded-lg transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-base font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
