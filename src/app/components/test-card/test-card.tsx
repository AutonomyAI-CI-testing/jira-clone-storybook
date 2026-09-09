import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[280px] bg-black p-4 text-sm text-[#b5b5b5]"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={18} className="text-[#8b9291]" />
      </div>

      <div className="mb-6 flex items-center gap-2">
        <FiChevronUp size={12} className="text-[#8b9291]" />
        <span className="text-xs font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mb-3 flex items-center gap-2">
        <FiChevronUp size={14} className="text-[#b2b2b1]" />
        <span className="text-sm font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mb-1 flex items-center gap-1">
        <span className="text-xs font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo size={12} className="text-[#a4a4a3]" />
      </div>
      <div className="mb-4 w-full rounded border border-[#a5adad] bg-[#272822] px-3 py-2">
        <span className="text-xs text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mb-1 flex items-center gap-1">
        <span className="text-xs font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo size={12} className="text-[#a3a3a2]" />
      </div>
      <div className="mb-4 w-full rounded border border-[#929291] bg-[#272822] px-3 py-2">
        <span className="text-xs text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="mb-8 flex gap-4">
        <button className="rounded bg-[#843a17] px-6 py-2 text-xs font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="rounded bg-[#843a17] px-6 py-2 text-xs font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      <span className="text-sm font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
