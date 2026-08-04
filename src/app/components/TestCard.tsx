import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#272320] text-white min-h-screen w-full max-w-sm mx-auto px-6 py-5 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xl font-bold">UI magician Agent</span>
        <FiSettings className="w-6 h-6 text-gray-300" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 text-[#c07a50] text-sm mb-10">
        <FiChevronUp className="w-4 h-4" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="w-5 h-5 text-white" />
          <span className="text-lg font-semibold">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-200">Personal Access Token</label>
            <FiInfo className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full border border-gray-600 rounded bg-transparent px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-200">Design URL</label>
            <FiInfo className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full border border-gray-600 rounded bg-transparent px-3 py-3 text-sm text-gray-400 placeholder-gray-500 outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#a0522d] hover:bg-[#8b4513] text-white font-semibold py-3 rounded-lg transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
