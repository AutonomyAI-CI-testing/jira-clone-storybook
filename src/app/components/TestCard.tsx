import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#1e1e1e] text-white p-5 w-full max-w-sm font-sans min-h-screen">
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold">UI magician Agent</span>
        <HiCog className="text-2xl text-[#9ca3af]" />
      </div>

      {/* Sub-row */}
      <div className="flex items-center gap-1 mb-8">
        <HiChevronUp className="text-[#9ca3af]" />
        <span className="text-[#9ca3af] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-5">
        <HiChevronUp className="text-white text-lg" />
        <span className="text-xl font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-2">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-sm text-white">Personal Access Token</span>
          <HiInformationCircle className="text-[#9ca3af] text-base" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-[#4a4a4a] rounded text-[#9ca3af] text-sm px-3 py-3 outline-none placeholder:text-[#6b7280]"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-6">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-sm text-white">Design URL</span>
          <HiInformationCircle className="text-[#9ca3af] text-base" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-[#4a4a4a] rounded text-[#9ca3af] text-sm px-3 py-3 outline-none placeholder:text-[#6b7280]"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-10">
        <button className="flex-1 bg-[#c1541a] text-white font-semibold py-3 rounded-lg hover:bg-[#a84515]">
          Awesome
        </button>
        <button className="flex-1 bg-[#c1541a] text-white font-semibold py-3 rounded-lg hover:bg-[#a84515]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-xl font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}
