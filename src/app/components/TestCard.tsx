import { FaCog, FaInfoCircle, FaChevronUp } from "react-icons/fa";

export function TestCard() {
  return (
    <div id="testElem" className="bg-[#1a1a1a] w-64 p-4 rounded-lg flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] font-semibold text-base">UI magician Agent</span>
        <FaCog className="text-[#b5b5b5]" />
      </div>

      {/* Chevron subtitle */}
      <div className="flex items-center gap-2">
        <FaChevronUp className="text-[#8b9291] text-xs" />
        <span className="text-[#8b9291] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mt-2">
        <FaChevronUp className="text-[#b2b2b1] text-xs" />
        <span className="text-[#b2b2b1] font-bold text-base">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-[#a4a4a3] text-sm">Personal Access Token</span>
          <FaInfoCircle className="text-[#a4a4a3] text-xs" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#272822] border border-[#929291] rounded px-3 py-2 text-[#737470] placeholder-[#737470] text-sm outline-none w-full"
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-[#a3a3a2] text-sm">Design URL</span>
          <FaInfoCircle className="text-[#a3a3a2] text-xs" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#272822] border border-[#a5adad] rounded px-3 py-2 text-[#71726e] placeholder-[#71726e] text-sm outline-none w-full"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="bg-[#843a17] text-[#8c8078] rounded-lg px-4 py-2 text-sm font-medium flex-1">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] rounded-lg px-4 py-2 text-sm font-medium flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
        <span className="text-[#b0b0b0] font-semibold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
}
