import { LuSettings2, LuChevronUp, LuInfo } from "react-icons/lu";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#232323] text-white w-[320px] min-h-screen p-5 font-sans flex flex-col"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-semibold">UI magician Agent</h1>
        <LuSettings2 className="w-6 h-6 text-gray-300" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 text-[#b85c2a] text-sm mb-10">
        <LuChevronUp className="w-4 h-4" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <LuChevronUp className="w-5 h-5" />
        <h2 className="text-lg font-semibold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-sm font-medium text-gray-200">Personal Access Token</span>
          <LuInfo className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-sm font-medium text-gray-200">Design URL</span>
          <LuInfo className="w-4 h-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-gray-600 rounded px-3 py-3 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-10">
        <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c2a] text-white font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="text-lg font-semibold">Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
