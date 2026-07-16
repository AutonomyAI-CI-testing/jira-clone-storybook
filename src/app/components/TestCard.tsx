import {
  HiOutlineCog,
  HiChevronUp,
  HiInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="bg-[#2a2a2a] min-h-screen w-full max-w-[420px] mx-auto px-5 py-6 font-primary text-white"
    >
      {/* ── Header row ── */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl font-primary-bold text-white">
          UI magician Agent
        </h1>
        <HiOutlineCog className="text-gray-400 shrink-0" size={26} />
      </div>

      {/* ── Collapsible subtitle ── */}
      <div className="flex items-center gap-2 mb-10">
        <HiChevronUp className="text-[#c47a52] shrink-0" size={16} />
        <span className="text-[#c47a52] text-sm">
          From entire frame to a singl...
        </span>
      </div>

      {/* ── Add New Design section ── */}
      <div className="flex items-center gap-2 mb-6">
        <HiChevronUp className="text-white shrink-0" size={18} />
        <h2 className="text-lg font-primary-bold text-white">Add New Design</h2>
      </div>

      {/* ── Personal Access Token ── */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-white font-primary">
            Personal Access Token
          </span>
          <HiInformationCircle className="text-gray-400 shrink-0" size={18} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full bg-transparent border border-[#555] rounded px-3 py-2.5 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#777] transition-colors"
          readOnly
        />
      </div>

      {/* ── Design URL ── */}
      <div className="mb-7">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-white font-primary">Design URL</span>
          <HiInformationCircle className="text-gray-400 shrink-0" size={18} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full bg-transparent border border-[#555] rounded px-3 py-2.5 text-sm text-gray-300 placeholder-gray-500 outline-none focus:border-[#777] transition-colors"
          readOnly
        />
      </div>

      {/* ── Action buttons ── */}
      <div className="flex gap-4 mb-12">
        <button className="flex-1 bg-[#b85c2c] hover:bg-[#c96b38] text-white font-primary-bold py-3 rounded-lg transition-colors">
          Awesome
        </button>
        <button className="flex-1 bg-[#b85c2c] hover:bg-[#c96b38] text-white font-primary-bold py-3 rounded-lg transition-colors">
          Prepare
        </button>
      </div>

      {/* ── Recent Breakdowns ── */}
      <h2 className="text-xl font-primary-bold text-white">
        Recent Breakdowns
      </h2>
    </div>
  );
};
