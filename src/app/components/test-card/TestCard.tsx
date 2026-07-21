import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] min-h-screen w-full px-5 py-5 font-sans"
    >
      {/* ── Header row ── */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-white text-xl font-bold">UI magician Agent</span>
        <FiSettings className="text-white" size={22} />
      </div>

      {/* ── Subtitle row ── */}
      <div className="flex items-center gap-2 mb-8">
        <FiChevronUp className="text-[#b5693a]" size={16} />
        <span className="text-[#b5693a] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Spacer ── */}
      <div className="h-6" />

      {/* ── Add New Design heading ── */}
      <div className="flex items-center gap-2 mb-6">
        <FiChevronUp className="text-white" size={18} />
        <span className="text-white text-lg font-bold">Add New Design</span>
      </div>

      {/* ── Personal Access Token label ── */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#cccccc] text-sm font-semibold">
          Personal Access Token
        </span>
        <FiInfo className="text-[#999999]" size={15} />
      </div>

      {/* ── PAT input ── */}
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="w-full bg-[#333333] border border-[#555555] rounded px-3 py-2 mb-4 text-[#888888] text-sm placeholder-[#666666] focus:outline-none"
      />

      {/* ── Design URL label ── */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#cccccc] text-sm font-semibold">Design URL</span>
        <FiInfo className="text-[#999999]" size={15} />
      </div>

      {/* ── Design URL input ── */}
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="w-full bg-[#333333] border border-[#666666] rounded px-3 py-2 mb-6 text-[#888888] text-sm placeholder-[#666666] focus:outline-none"
      />

      {/* ── Action buttons ── */}
      <div className="flex gap-4 justify-center mb-10">
        <button
          type="button"
          className="bg-[#a0522d] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#b5603a] active:bg-[#8b4423] transition-colors"
        >
          Awesome
        </button>
        <button
          type="button"
          className="bg-[#a0522d] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#b5603a] active:bg-[#8b4423] transition-colors"
        >
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns heading ── */}
      <div className="mt-4">
        <span className="text-white text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
};
