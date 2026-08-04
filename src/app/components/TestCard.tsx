import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1e1e1e] text-white p-5 w-72 min-h-screen font-sans flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mt-2">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <FiSettings className="text-gray-400" size={20} />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-gray-400" size={16} />
        <span className="text-[#c07040] italic text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FiChevronUp className="text-white" size={16} />
          <h2 className="text-base font-semibold">Add New Design</h2>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">Personal Access Token</span>
            <FiInfo className="text-gray-400" size={14} />
          </div>
          <input
            className="w-full bg-[#2a2a2a] border border-[#555] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-600 outline-none"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-300">Design URL</span>
            <FiInfo className="text-gray-400" size={14} />
          </div>
          <input
            className="w-full bg-[#2a2a2a] border border-[#555] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-600 outline-none"
            placeholder="https://www.figma.com/file/:"
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-1">
          <button className="flex-1 bg-[#b05c2a] hover:bg-[#c06a30] text-white font-semibold py-3 rounded-lg transition-colors">
            Awesome
          </button>
          <button className="flex-1 bg-[#b05c2a] hover:bg-[#c06a30] text-white font-semibold py-3 rounded-lg transition-colors">
            Prepare
          </button>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-base font-semibold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
