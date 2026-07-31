import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2622] text-white min-h-screen w-full max-w-xs mx-auto p-5 flex flex-col gap-2 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <FiSettings className="text-gray-400 w-5 h-5" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 text-[#c07a50] text-sm mb-6">
        <FiChevronUp className="w-4 h-4" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="flex flex-col gap-4">
        {/* Section heading */}
        <div className="flex items-center gap-2">
          <FiChevronUp className="w-4 h-4 text-white" />
          <h2 className="text-base font-bold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <label className="text-sm text-gray-300">Personal Access Token</label>
            <FiInfo className="text-gray-400 w-4 h-4" />
          </div>
          <input
            type="text"
            readOnly
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full bg-[#1e1b18] border border-[#4a3f35] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <label className="text-sm text-gray-300">Design URL</label>
            <FiInfo className="text-gray-400 w-4 h-4" />
          </div>
          <input
            type="text"
            readOnly
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#1e1b18] border border-[#4a3f35] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-600 focus:outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-2">
          <button className="flex-1 bg-[#9b4a1e] hover:bg-[#7e3c17] text-white font-semibold py-3 rounded-lg text-sm">
            Awesome
          </button>
          <button className="flex-1 bg-[#9b4a1e] hover:bg-[#7e3c17] text-white font-semibold py-3 rounded-lg text-sm">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-8">
        <h2 className="text-base font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
