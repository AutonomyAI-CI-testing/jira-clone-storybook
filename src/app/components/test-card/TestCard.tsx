import { FiChevronUp, FiSettings, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#282420] text-white min-h-screen p-6 flex flex-col gap-6 max-w-sm mx-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <FiSettings className="text-gray-300" size={22} />
      </div>

      {/* Subtext */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-gray-400" size={16} />
        <span className="text-[#c4742a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-8" />

      {/* Add New Design */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-white" size={18} />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-200">Personal Access Token</label>
          <FiInfo className="text-gray-400" size={15} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#1e1a17] border border-[#3a3028] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-600 focus:outline-none w-full"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-200">Design URL</label>
          <FiInfo className="text-gray-400" size={15} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#1e1a17] border border-[#3a3028] rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-600 focus:outline-none w-full"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center">
        <button className="flex-1 bg-[#b05a2a] text-white font-semibold rounded-xl px-8 py-3 hover:bg-[#c4641e] transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b05a2a] text-white font-semibold rounded-xl px-8 py-3 hover:bg-[#c4641e] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-xl font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}

export default TestCard;
