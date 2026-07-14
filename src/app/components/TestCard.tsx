import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export default function TestCard() {
  return (
    <div id="testElem" className="bg-[#1e1e1e] text-white min-h-screen p-6 max-w-sm mx-auto font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xl font-bold">UI magician Agent</span>
        <FiSettings className="text-gray-400 text-xl" />
      </div>

      {/* Subheader */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp className="text-[#c4622d] text-sm" />
        <span className="text-[#c4622d] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp className="text-white text-lg" />
        <span className="text-xl font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium text-gray-200">Personal Access Token</label>
          <FiInfo className="text-gray-400 text-sm" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-[#444] text-gray-300 placeholder-gray-500 rounded px-3 py-3 text-sm outline-none focus:border-[#c4622d]"
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <label className="text-sm font-medium text-gray-200">Design URL</label>
          <FiInfo className="text-gray-400 text-sm" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-[#c4622d] text-gray-300 placeholder-gray-500 rounded px-3 py-3 text-sm outline-none focus:border-[#c4622d]"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button className="flex-1 bg-[#b5451b] hover:bg-[#c4622d] text-white font-semibold py-3 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5451b] hover:bg-[#c4622d] text-white font-semibold py-3 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
