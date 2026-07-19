import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#272421] rounded-xl p-5 w-[320px] flex flex-col gap-4 text-white font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <HiCog className="text-gray-400 text-xl" />
      </div>

      {/* Collapsible hint row */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-[#9e8a78] text-sm" />
        <span className="text-[#9e8a78] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-2">
        <HiChevronUp className="text-white text-base font-bold" />
        <span className="text-white font-bold text-base">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-white font-medium">Personal Access Token</label>
          <HiInformationCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#333030] border border-[#444] text-gray-400 placeholder-gray-500 text-sm rounded px-3 py-2 outline-none w-full"
          readOnly
        />
      </div>

      {/* Design URL field */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-sm text-white font-medium">Design URL</label>
          <HiInformationCircle className="text-gray-400 text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#333030] border border-[#5a8a6a] text-gray-400 placeholder-gray-500 text-sm rounded px-3 py-2 outline-none w-full"
          readOnly
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-1">
        <button className="flex-1 bg-[#c1622f] text-white font-semibold text-sm rounded-lg py-3 px-4 hover:bg-[#a8522a] transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#c1622f] text-white font-semibold text-sm rounded-lg py-3 px-4 hover:bg-[#a8522a] transition-colors">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns footer */}
      <div className="mt-2">
        <span className="text-white font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export default TestCard;
