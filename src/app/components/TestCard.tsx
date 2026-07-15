import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#2a2a2a] text-white w-full max-w-sm p-5 rounded-lg space-y-4">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">UI magician Agent</span>
        <HiCog className="text-gray-300 text-2xl" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1 text-amber-700 text-sm">
        <HiChevronUp className="text-base shrink-0" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="py-4" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2 font-bold text-base">
        <HiChevronUp className="text-base shrink-0" />
        <span>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="space-y-1">
        <div className="flex items-center gap-1 text-sm text-gray-200">
          <span>Personal Access Token</span>
          <HiInformationCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#1e1e1e] border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="space-y-1">
        <div className="flex items-center gap-1 text-sm text-gray-200">
          <span>Design URL</span>
          <HiInformationCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#1e1e1e] border border-gray-600 rounded px-3 py-2 text-sm text-gray-400 placeholder-gray-500 outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 pt-1">
        <button className="flex-1 bg-amber-700 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg">
          Awesome
        </button>
        <button className="flex-1 bg-amber-700 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="pt-4">
        <span className="font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
}
