import { AiOutlineSetting } from "react-icons/ai";
import { HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-[#2a2a2a] w-full p-6 min-h-screen">

      {/* ── Header ─────────────────────────────────────── */}
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-white text-xl font-bold">UI magician Agent</h1>
        <AiOutlineSetting className="text-white" size={24} />
      </div>

      {/* ── Collapsible hint row ────────────────────────── */}
      <div className="flex items-center gap-2 mb-8">
        <HiChevronUp className="text-[#b07050]" size={18} />
        <span className="text-[#b07050] text-sm">From entire frame to a singl...</span>
      </div>

      {/* ── Add New Design section ──────────────────────── */}
      <div className="flex items-center gap-2 mb-6">
        <HiChevronUp className="text-white" size={20} />
        <h2 className="text-white text-lg font-bold">Add New Design</h2>
      </div>

      {/* ── Personal Access Token ───────────────────────── */}
      <div className="mb-2 flex items-center gap-2">
        <label className="text-white text-sm font-medium">Personal Access Token</label>
        <HiInformationCircle className="text-white opacity-60" size={18} />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="w-full bg-[#1e1e1e] border border-[#4a4a4a] rounded text-[#888] placeholder-[#666] px-3 py-2 text-sm mb-4 outline-none"
        readOnly
      />

      {/* ── Design URL ─────────────────────────────────── */}
      <div className="mb-2 flex items-center gap-2">
        <label className="text-white text-sm font-medium">Design URL</label>
        <HiInformationCircle className="text-white opacity-60" size={18} />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="w-full bg-[#1e1e1e] border border-[#4a4a4a] rounded text-[#888] placeholder-[#666] px-3 py-2 text-sm mb-6 outline-none"
        readOnly
      />

      {/* ── Buttons ────────────────────────────────────── */}
      <div className="flex gap-4 justify-center mb-10">
        <button className="bg-[#b85c2a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#a04e22] transition-colors">
          Awesome
        </button>
        <button className="bg-[#b85c2a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#a04e22] transition-colors">
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns ──────────────────────────── */}
      <h2 className="text-white text-lg font-bold">Recent Breakdowns</h2>
    </div>
  );
};
