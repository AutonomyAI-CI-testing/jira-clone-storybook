import { HiCog, HiChevronUp, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-screen w-[320px] bg-[#222] p-5 font-sans text-[#e8e8e8]"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-[#e8e8e8]">
          UI magician Agent
        </span>
        <HiCog size={24} className="text-[#e8e8e8]" />
      </div>

      {/* Subtitle row */}
      <div className="mt-3 flex items-center gap-1">
        <HiChevronUp size={16} className="text-[#a0896a]" />
        <span className="text-sm text-[#a0896a]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-10" />

      {/* Add New Design section header */}
      <div className="mb-5 flex items-center gap-2">
        <HiChevronUp size={18} className="text-[#e8e8e8]" />
        <span className="text-lg font-bold text-[#e8e8e8]">Add New Design</span>
      </div>

      {/* Personal Access Token field */}
      <div className="mb-4">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm font-semibold text-[#e8e8e8]">
            Personal Access Token
          </label>
          <HiInformationCircle size={16} className="text-[#a0896a]" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border border-[#444] bg-[#2a2a2a] px-3 py-2 text-sm text-[#a0896a] placeholder-[#a0896a] outline-none focus:border-[#666]"
        />
      </div>

      {/* Design URL field */}
      <div className="mb-6">
        <div className="mb-1 flex items-center gap-2">
          <label className="text-sm font-semibold text-[#e8e8e8]">
            Design URL
          </label>
          <HiInformationCircle size={16} className="text-[#a0896a]" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border border-[#666] bg-[#2a2a2a] px-3 py-2 text-sm text-[#a0896a] placeholder-[#a0896a] outline-none focus:border-[#888]"
        />
      </div>

      {/* Button row */}
      <div className="mb-10 flex gap-3">
        <button className="flex-1 rounded-lg bg-[#b85c2c] px-6 py-3 text-sm font-semibold text-white">
          Awesome
        </button>
        <button className="flex-1 rounded-lg bg-[#b85c2c] px-6 py-3 text-sm font-semibold text-white">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold text-[#e8e8e8]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
