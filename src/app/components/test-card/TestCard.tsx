import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1e1b] p-4 flex flex-col gap-3"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[#b5b5b5] font-bold text-sm">
          UI magician Agent
        </span>
        <FiSettings className="text-[#b5b5b5]" size={18} />
      </div>

      {/* Collapsible subtitle row */}
      <div className="flex items-center gap-1">
        <FiChevronUp className="text-[#8b9291]" size={14} />
        <span className="text-[#8b9291] text-xs">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-4" />

      {/* Add New Design section header */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-[#b2b2b1]" size={16} />
        <span className="text-[#b2b2b1] font-semibold text-sm">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-xs">Personal Access Token</span>
          <FiInfo className="text-[#a4a4a3]" size={13} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#272822] border border-[#a5adad] rounded text-xs text-[#737470] placeholder-[#737470] px-2 py-2 w-full outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <span className="text-[#a4a4a3] text-xs">Design URL</span>
          <FiInfo className="text-[#a4a4a3]" size={13} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#272822] border-2 border-[#929291] rounded text-xs text-[#737470] placeholder-[#737470] px-2 py-2 w-full outline-none"
          readOnly
        />
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 mt-1">
        <button className="flex-1 bg-[#843a17] text-[#c8b5ae] text-sm font-medium rounded-lg py-2 px-3">
          Awesome
        </button>
        <button className="flex-1 bg-[#843a17] text-[#c8b5ae] text-sm font-medium rounded-lg py-2 px-3">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-2">
        <span className="text-[#b0b0b0] font-semibold text-sm">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
