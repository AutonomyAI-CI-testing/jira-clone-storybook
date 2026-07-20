import { HiOutlineCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#1e1e1e] text-white p-5 rounded-lg w-80 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold">UI magician Agent</span>
        <HiOutlineCog className="text-white text-2xl" />
      </div>

      {/* Collapsible row */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-[#a07858] text-lg flex-shrink-0" />
        <span className="text-[#a07858] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Section header */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-white text-lg flex-shrink-0" />
        <span className="text-lg font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-200">Personal Access Token</label>
          <HiInformationCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#2a2a2a] border border-[#444] text-gray-300 placeholder-gray-500 text-sm rounded px-3 py-2 focus:outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-200">Design URL</label>
          <HiInformationCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#2a2a2a] border border-[#444] text-gray-300 placeholder-gray-500 text-sm rounded px-3 py-2 focus:outline-none"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center">
        <button className="bg-[#b5451b] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#9e3c17] transition-colors">
          Awesome
        </button>
        <button className="bg-[#b5451b] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#9e3c17] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export default TestCard;
