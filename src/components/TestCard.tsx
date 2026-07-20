import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#1e1e1e] text-white min-h-screen p-5 font-sans max-w-sm mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings className="text-gray-300 text-2xl" />
      </div>

      {/* Sub-row */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp className="text-[#a07050] text-base" />
        <span className="text-[#a07050] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <FiChevronUp className="text-white text-lg" />
        <h2 className="text-lg font-bold text-white">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium text-gray-200">Personal Access Token</label>
          <FiInfo className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-[#4a4a4a] rounded px-3 py-2 text-gray-300 placeholder-gray-500 text-sm outline-none focus:border-[#b5451b]"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium text-gray-200">Design URL</label>
          <FiInfo className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-[#4a4a4a] rounded px-3 py-2 text-gray-300 placeholder-gray-500 text-sm outline-none focus:border-[#b5451b]"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#b5451b] hover:bg-[#c0531f] text-white font-semibold py-3 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5451b] hover:bg-[#c0531f] text-white font-semibold py-3 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-bold text-white">Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
