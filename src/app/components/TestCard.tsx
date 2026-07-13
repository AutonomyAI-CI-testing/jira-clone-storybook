import { LuChevronUp, LuInfo, LuSettings2 } from "react-icons/lu";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#1e1e1e] text-white min-h-screen p-5 flex flex-col gap-4 max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">UI magician Agent</h1>
        <LuSettings2 className="text-gray-400 text-xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 text-[#b5451b] text-sm">
        <LuChevronUp className="text-base shrink-0" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <LuChevronUp className="text-base shrink-0" />
        <h2 className="text-lg font-bold">Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span>Personal Access Token</span>
          <LuInfo className="text-gray-400" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md px-3 py-2 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span>Design URL</span>
          <LuInfo className="text-gray-400" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md px-3 py-2 text-sm text-gray-400 placeholder-gray-500 focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-4 mt-2">
        <button className="flex-1 bg-[#b5451b] text-white font-semibold py-3 rounded-xl hover:opacity-90">
          Awesome
        </button>
        <button className="flex-1 bg-[#b5451b] text-white font-semibold py-3 rounded-xl hover:opacity-90">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
}
