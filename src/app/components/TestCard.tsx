import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";

export function TestCard() {
  return (
    <div id="testElem">
      <div className="bg-[#272822] text-white p-5 w-full max-w-sm rounded-lg space-y-5">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <span className="text-[#b5b5b5] text-xl font-bold">UI magician Agent</span>
          <IoSettingsOutline className="text-[#b5b5b5] text-2xl" />
        </div>

        {/* Collapse row */}
        <div className="flex items-center gap-2">
          <IoChevronUp className="text-[#8b9291] text-sm" />
          <span className="text-[#8b9291] text-sm">From entire frame to a singl...</span>
        </div>

        {/* Section header */}
        <div className="flex items-center gap-2 mt-4">
          <IoChevronUp className="text-[#b2b2b1] text-base" />
          <span className="text-[#b2b2b1] text-lg font-bold">Add New Design</span>
        </div>

        {/* Personal Access Token field */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <label className="text-[#a4a4a3] text-sm font-medium">Personal Access Token</label>
            <IoInformationCircleOutline className="text-[#a4a4a3] text-base" />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            className="w-full bg-[#1e1e1a] border border-[#a5adad] rounded px-3 py-2 text-[#737470] placeholder-[#737470] text-sm focus:outline-none"
          />
        </div>

        {/* Design URL field */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <label className="text-[#a3a3a2] text-sm font-medium">Design URL</label>
            <IoInformationCircleOutline className="text-[#a3a3a2] text-base" />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full bg-[#1e1e1a] border border-[#929291] rounded px-3 py-2 text-[#71726e] placeholder-[#71726e] text-sm focus:outline-none"
          />
        </div>

        {/* Buttons row */}
        <div className="flex gap-3">
          <button className="flex-1 bg-[#843a17] text-[#d4c4b8] font-semibold py-3 rounded-xl hover:opacity-90">
            Awesome
          </button>
          <button className="flex-1 bg-[#843a17] text-[#d4c4b8] font-semibold py-3 rounded-xl hover:opacity-90">
            Prepare
          </button>
        </div>

        {/* Footer */}
        <div className="pt-4">
          <span className="text-[#b0b0b0] text-lg font-bold">Recent Breakdowns</span>
        </div>
      </div>
    </div>
  );
}
