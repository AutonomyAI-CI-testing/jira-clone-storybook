import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#1a1a1a] px-5 py-6 font-sans text-[#e0e0e0]"
    >
      {/* Header row */}
      <div className="mb-3 flex items-center justify-between">
        <span className="text-lg font-semibold text-[#e8e8e8]">UI magician Agent</span>
        <FiSettings size={22} className="text-[#b0a090]" />
      </div>

      {/* Collapsible indicator row */}
      <div className="mb-10 flex items-center gap-2">
        <FiChevronUp size={16} className="text-[#9a8070]" />
        <span className="text-sm text-[#9a8070]">From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6 flex items-center gap-2">
        <FiChevronUp size={18} className="text-[#e8e8e8]" />
        <span className="text-xl font-bold text-[#e8e8e8]">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm font-medium text-[#e0e0e0]">Personal Access Token</span>
        <FiInfo size={15} className="text-[#9a8a7a]" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
        className="mb-4 w-full rounded border border-[#3a3a3a] bg-[#2a2828] px-3 py-3 text-sm text-[#6a6060] placeholder:text-[#6a6060] focus:outline-none"
      />

      {/* Design URL field */}
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm font-medium text-[#e0e0e0]">Design URL</span>
        <FiInfo size={15} className="text-[#9a8a7a]" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        readOnly
        className="mb-6 w-full rounded border border-[#4a4040] bg-[#2a2828] px-3 py-3 text-sm text-[#6a6060] placeholder:text-[#6a6060] focus:outline-none"
      />

      {/* Action buttons */}
      <div className="mb-10 flex gap-4 px-2">
        <button className="flex-1 rounded-xl bg-[#b5481e] py-4 text-base font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-xl bg-[#9a3d18] py-4 text-base font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <span className="text-lg font-semibold text-[#e8e8e8]">Recent Breakdowns</span>
      </div>
    </div>
  );
};

export default TestCard;
