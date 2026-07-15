import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] min-h-screen p-5 text-white w-full max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <FiSettings className="text-gray-400 text-xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp className="text-orange-400 text-sm" />
        <span className="text-orange-400 text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="text-white text-lg" />
          <h2 className="text-lg font-bold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm font-medium text-gray-200">Personal Access Token</label>
            <FiInfo className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#3a3a3a] border border-gray-600 rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-gray-400"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm font-medium text-gray-200">Design URL</label>
            <FiInfo className="text-gray-400 text-sm" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#3a3a3a] border border-gray-600 rounded px-3 py-2 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-gray-400"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#b85c2a] hover:bg-[#a04f22] text-white font-semibold py-3 rounded-lg">
            Awesome
          </button>
          <button className="flex-1 bg-[#b85c2a] hover:bg-[#a04f22] text-white font-semibold py-3 rounded-lg">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-6">
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
