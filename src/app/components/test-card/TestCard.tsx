import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] rounded-[4px] bg-[#1a1613] p-5 font-['Inter']"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={18} className="text-[#b5b5b5]" aria-hidden />
      </div>

      {/* Collapsible info row */}
      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={14} className="text-[#8b9291]" aria-hidden />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="mt-10 flex items-center gap-2">
        <FiChevronUp size={14} className="text-[#b2b2b1]" aria-hidden />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </label>
          <FiInfo size={12} className="text-[#a4a4a3]" aria-hidden />
        </div>
        <input
          type="text"
          disabled
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-2 w-full rounded-[2px] border border-[1px] border-[#a5adad] bg-[#272822] px-3 py-2 text-[11.5px] font-semibold text-[#737470] placeholder-[#737470] outline-none"
        />
      </div>

      <div className="mt-4">
        <div className="flex items-center gap-1">
          <label className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </label>
          <FiInfo size={12} className="text-[#a3a3a2]" aria-hidden />
        </div>
        <input
          type="text"
          disabled
          placeholder="https://www.figma.com/file/:"
          className="mt-2 w-full rounded-[2px] border-[2px] border-[#929291] bg-[#272822] px-3 py-2 text-[10.5px] font-semibold text-[#71726e] placeholder-[#71726e] outline-none"
        />
      </div>

      {/* Action buttons */}
      <div className="mt-4 flex items-center gap-2">
        <button
          type="button"
          className="rounded-[4px] bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-[4px] bg-[#843a17] px-4 py-2 text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section header */}
      <div className="mt-10">
        <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
