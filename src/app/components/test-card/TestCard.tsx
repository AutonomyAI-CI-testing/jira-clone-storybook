import {
  HiOutlineCog,
  HiChevronUp,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export function TestCard() {
  return (
    <div
      id="testElem"
      className="min-h-screen w-full bg-[#1e1e1e] p-5"
    >
      {/* Header row */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-lg font-bold text-white">UI magician Agent</span>
        <HiOutlineCog size={22} className="text-white opacity-80" />
      </div>

      {/* Subtitle row */}
      <div className="mb-10 flex items-center gap-2">
        <HiChevronUp size={16} className="text-[#c87d3b]" />
        <span className="text-sm text-[#c87d3b]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mb-6 flex items-center gap-2">
        <HiChevronUp size={18} className="text-white" />
        <span className="text-xl font-bold text-white">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm text-white">Personal Access Token</label>
          <HiOutlineInformationCircle size={16} className="text-white opacity-60" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded-md border border-[#404040] bg-[#262626] px-3 py-2 text-sm text-[#a3a3a3] placeholder:text-[#737373]"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm text-white">Design URL</label>
          <HiOutlineInformationCircle size={16} className="text-white opacity-60" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded-md border border-[#404040] bg-[#262626] px-3 py-2 text-sm text-[#a3a3a3] placeholder:text-[#737373]"
        />
      </div>

      {/* Buttons */}
      <div className="mb-10 flex gap-4">
        <button className="flex-1 rounded-lg bg-[#b65c02] px-4 py-3 text-sm font-bold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b65c02] px-4 py-3 text-sm font-bold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold text-white">Recent Breakdowns</span>
      </div>
    </div>
  );
}
