import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#272727] text-white min-h-screen w-full max-w-sm mx-auto p-5 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-bold text-white">UI magician Agent</h1>
        <FiSettings className="text-gray-400 w-6 h-6" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#c8733a] text-sm mb-10">
        <FiChevronUp className="w-4 h-4" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="w-4 h-4 text-white" />
          <h2 className="text-lg font-semibold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-300">Personal Access Token</span>
            <FiInfo className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 focus:outline-none"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-300">Design URL</span>
            <FiInfo className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-gray-400 text-sm placeholder-gray-500 focus:outline-none"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#c8733a] text-white font-semibold py-3 rounded-xl">
            Awesome
          </button>
          <button className="flex-1 bg-[#c8733a] text-white font-semibold py-3 rounded-xl">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
