import { HiCog6Tooth, HiChevronUp, HiInformationCircle } from "react-icons/hi2";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="flex flex-col bg-[#2a2a2a] p-6"
      style={{ maxWidth: 360 }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <HiCog6Tooth className="text-white" size={22} />
      </div>

      {/* Collapsed section row */}
      <div className="mt-3 flex items-center gap-2">
        <HiChevronUp className="text-[#c8733a]" size={16} />
        <span className="text-sm text-[#c8733a]">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="text-white" size={18} />
        <span className="text-base font-bold text-white">Add New Design</span>
      </div>

      {/* Form area */}
      <div className="mt-5 flex flex-col gap-4">
        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-white">Personal Access Token</span>
            <HiInformationCircle className="text-[#888888]" size={16} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            className="rounded border border-[#555555] bg-[#333333] px-3 py-2 text-sm text-[#aaaaaa] placeholder:text-[#777777] outline-none"
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm text-white">Design URL</span>
            <HiInformationCircle className="text-[#888888]" size={16} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            className="rounded border border-[#555555] bg-[#333333] px-3 py-2 text-sm text-[#aaaaaa] placeholder:text-[#777777] outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b85c2a] px-4 py-3 text-sm font-bold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b85c2a] px-4 py-3 text-sm font-bold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-10">
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
