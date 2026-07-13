import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] text-white p-5 w-full max-w-sm font-sans flex flex-col gap-4"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="font-bold text-lg">UI magician Agent</span>
        <FiSettings size={22} className="text-[#aaaaaa]" />
      </div>

      {/* Collapse row */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={16} className="text-[#aaaaaa]" />
        <span className="text-[#c97a4a] text-sm">From entire frame to a singl...</span>
      </div>

      {/* Section heading */}
      <div className="flex items-center gap-2 mt-2">
        <FiChevronUp size={18} className="text-[#aaaaaa]" />
        <span className="font-bold text-base">Add New Design</span>
      </div>

      {/* Personal Access Token input */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#aaaaaa]">Personal Access Token</span>
          <FiInfo size={15} className="text-[#aaaaaa]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="bg-[#3a3a3a] border border-[#555555] text-[#aaaaaa] placeholder-[#666666] rounded px-3 py-2 text-sm w-full outline-none"
        />
      </div>

      {/* Design URL input */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#aaaaaa]">Design URL</span>
          <FiInfo size={15} className="text-[#aaaaaa]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="bg-[#3a3a3a] border border-[#555555] text-[#aaaaaa] placeholder-[#666666] rounded px-3 py-2 text-sm w-full outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-1">
        <button className="flex-1 bg-[#b85c2c] text-white font-semibold py-3 rounded-lg text-sm">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c2c] text-white font-semibold py-3 rounded-lg text-sm">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns heading */}
      <div className="mt-2">
        <span className="font-bold text-base">Recent Breakdowns</span>
      </div>
    </div>
  );
}
