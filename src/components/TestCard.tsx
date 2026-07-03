import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import { HiChevronUp } from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="bg-[#1a1a1a] text-[#b5b5b5] p-5 w-full max-w-sm font-semibold"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-base font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <AiOutlineSetting className="text-[#b5b5b5] text-xl" />
      </div>

      {/* Subtext row */}
      <div className="flex items-center gap-1 text-xs text-[#8b9291] mb-8">
        <HiChevronUp className="text-sm" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="flex items-center gap-2 mb-4">
        <HiChevronUp className="text-[#b2b2b1] text-base" />
        <span className="text-base font-bold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1 text-xs text-[#a4a4a3]">
          <span>Personal Access Token</span>
          <AiOutlineInfoCircle className="text-sm" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded px-3 py-2 text-xs text-[#737470] placeholder-[#737470] outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1 text-xs text-[#a4a4a3]">
          <span>Design URL</span>
          <AiOutlineInfoCircle className="text-sm" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-[#2a2a2a] border border-[#3a3a3a] rounded px-3 py-2 text-xs text-[#737470] placeholder-[#737470] outline-none"
          readOnly
        />
      </div>

      {/* Buttons row */}
      <div className="flex gap-3 mb-8">
        <button className="flex-1 bg-[#8b4b2f] rounded-lg py-3 text-sm font-semibold text-[#c8a898]">
          Awesome
        </button>
        <button className="flex-1 bg-[#8b4b2f] rounded-lg py-3 text-sm font-semibold text-[#c8a898]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="text-lg font-bold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}
