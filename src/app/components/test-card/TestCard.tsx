import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#1a1a1a] px-5 pt-5 pb-10 font-primary"
    >
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={16} color="#b5b5b5" aria-hidden />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <FiChevronUp size={10} color="#8b9291" aria-hidden />
        <span className="min-w-0 truncate text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-20 flex items-center gap-3">
        <FiChevronUp size={14} color="#b2b2b1" aria-hidden />
        <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-6">
        <label
          htmlFor="testElem-token"
          className="text-[11.5px] leading-[14px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <FiInfo size={15} color="#a4a4a3" aria-hidden />
      </div>
      <input
        id="testElem-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] leading-[14px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-3 flex items-center gap-6">
        <label
          htmlFor="testElem-design-url"
          className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <FiInfo size={15} color="#a3a3a2" aria-hidden />
      </div>
      <input
        id="testElem-design-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] leading-[13px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-12 font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
