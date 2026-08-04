import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#282220] text-white min-h-screen w-full max-w-[420px] mx-auto p-6 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-xl font-semibold text-white">UI magician Agent</h1>
        <FiSettings className="w-6 h-6 text-white opacity-70" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2 mb-12">
        <FiChevronUp className="w-4 h-4 text-[#b07040]" />
        <span className="text-sm text-[#b07040]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div>
        {/* Section heading */}
        <div className="flex items-center gap-2 mb-5">
          <FiChevronUp className="w-4 h-4 text-white" />
          <h2 className="text-lg font-semibold text-white">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            <FiInfo className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <label className="text-sm text-gray-300">Design URL</label>
            <FiInfo className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 bg-[#b05a28] text-white font-medium py-3 rounded-lg">
            Awesome
          </button>
          <button className="flex-1 bg-[#b05a28] text-white font-medium py-3 rounded-lg">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold text-white">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
