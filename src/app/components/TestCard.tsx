import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

export function TestCard() {
  return (
    <div id="testElem">
      <div className="bg-[#272822] text-white w-full max-w-sm mx-auto p-5 rounded-lg space-y-5 font-sans">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-[#b5b5b5]">UI magician Agent</span>
          <IoSettingsOutline className="text-[#b5b5b5] text-2xl" />
        </div>

        {/* Collapse row */}
        <div className="flex items-center gap-2">
          <IoChevronUp className="text-[#8b9291] text-sm" />
          <span className="text-sm text-[#8b9291]">From entire frame to a singl...</span>
        </div>

        {/* Section header */}
        <div className="flex items-center gap-2 mt-4">
          <IoChevronUp className="text-[#b2b2b1] text-lg" />
          <span className="text-lg font-bold text-[#b2b2b1]">Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-[#a4a4a3]">Personal Access Token</label>
            <IoInformationCircleOutline className="text-[#a4a4a3] text-base" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            className="w-full bg-[#1e1e1a] text-[#737470] placeholder-[#737470] border border-[#a5adad] rounded px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <label className="text-sm text-[#a3a3a2]">Design URL</label>
            <IoInformationCircleOutline className="text-[#a3a3a2] text-base" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#1e1e1a] text-[#71726e] placeholder-[#71726e] border border-[#929291] rounded px-3 py-2 text-sm outline-none"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#843a17] text-[#8c8078] font-semibold py-2 rounded-lg text-sm">
            Awesome
          </button>
          <button className="flex-1 bg-[#843a17] text-[#8c8078] font-semibold py-2 rounded-lg text-sm">
            Prepare
          </button>
        </div>

        {/* Footer */}
        <div>
          <span className="text-lg font-bold text-[#b0b0b0]">Recent Breakdowns</span>
        </div>
      </div>
    </div>
  );
}
