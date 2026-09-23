import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      style={{ fontFamily: "Inter, sans-serif" }}
      className="flex w-[254px] flex-col bg-[#1c1c1c] px-5 py-5 text-[13.5px] font-semibold text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span>UI magician Agent</span>
        <FiSettings size={16} className="text-[#b5b5b5]" />
      </div>

      <div className="mt-5 flex items-center gap-2">
        <FiChevronUp size={11} className="shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <FiChevronUp size={14} className="shrink-0 text-[#b2b2b1]" />
        <span className="text-[#b2b2b1]">Add New Design</span>
      </div>

      <div className="mt-10">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <FiInfo size={15} className="text-[#a4a4a3]" />
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-2 h-[37px] w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] text-[#737470] placeholder:text-[11.5px] placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
          <FiInfo size={15} className="text-[#a3a3a2]" />
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-2 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] text-[#71726e] placeholder:text-[10.5px] placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-8 flex items-center gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-16 text-[#b0b0b0]">Recent Breakdowns</div>
    </div>
  );
};
