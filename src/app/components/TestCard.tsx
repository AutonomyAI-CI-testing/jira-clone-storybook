import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export default function TestCard() {
  return (
    <div id="testElem" className="bg-[#1e1e1e] text-white p-5 max-w-xs w-full rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold">UI magician Agent</span>
        <FiSettings className="text-gray-400 text-xl" />
      </div>

      {/* Subheader */}
      <div className="flex items-center gap-1 mb-8">
        <FiChevronUp className="text-[#c4622d] text-sm" />
        <span className="text-[#c4622d] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp className="text-white text-base" />
        <span className="text-lg font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1 mb-1">
          <label className="text-sm font-medium text-gray-200">Personal Access Token</label>
          <FiInfo className="text-gray-400 text-sm" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-[#444] text-gray-400 text-sm rounded px-3 py-2 outline-none placeholder-gray-500"
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-1">
          <label className="text-sm font-medium text-gray-200">Design URL</label>
          <FiInfo className="text-gray-400 text-sm" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-[#444] text-gray-400 text-sm rounded px-3 py-2 outline-none placeholder-gray-500"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button className="flex-1 bg-[#b5451b] text-white font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5451b] text-white font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
