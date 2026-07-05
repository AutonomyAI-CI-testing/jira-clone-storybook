import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1e1e1b] text-[#b5b5b5] p-4 flex flex-col gap-3 rounded"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-sm">UI magician Agent</span>
        <FiSettings className="text-[#b5b5b5]" size={18} />
      </div>

      {/* Collapsible subtitle row */}
      <div className="flex items-center gap-1">
        <FiChevronUp className="text-[#8b9291]" size={14} />
        <span className="text-xs text-[#8b9291]">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-[#b2b2b1]" size={16} />
        <span className="font-semibold text-sm text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-xs text-[#a4a4a3]">Personal Access Token</label>
          <FiInfo className="text-[#a4a4a3]" size={13} />
        </div>
        <input
          className="w-full bg-[#272822] border border-[#a5adad] rounded px-3 py-2 text-xs text-[#737470] placeholder-[#737470] outline-none"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <label className="text-xs text-[#a4a4a3]">Design URL</label>
          <FiInfo className="text-[#a4a4a3]" size={13} />
        </div>
        <input
          className="w-full bg-[#272822] border-2 border-[#929291] rounded px-3 py-2 text-xs text-[#737470] placeholder-[#737470] outline-none"
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-1">
        <button className="bg-[#843a17] text-[#8c8078] text-sm font-medium px-6 py-2 rounded-lg flex-1">
          Awesome
        </button>
        <button className="bg-[#843a17] text-[#8c8078] text-sm font-medium px-6 py-2 rounded-lg flex-1">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="font-bold text-sm text-[#b0b0b0]">Recent Breakdowns</span>
      </div>
    </div>
  );
}
