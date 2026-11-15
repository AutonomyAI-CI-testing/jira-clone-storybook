import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-black px-5 pt-5 pb-[62px] font-primary"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <FiSettings size={15} className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
        <FiChevronUp size={14} />
        <span className="text-[11.5px] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-2 text-[#b2b2b1]">
        <FiChevronUp size={16} />
        <span className="text-[13.5px] leading-[16.34px]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px]">
        <div className="flex items-center gap-2 text-[#a4a4a3]">
          <span className="text-[11.5px] leading-[13.92px]">
            Personal Access Token
          </span>
          <FiInfo size={15} />
        </div>
        <input
          aria-label="Personal Access Token"
          defaultValue="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-[11px]">
        <div className="flex items-center gap-2 text-[#a3a3a2]">
          <span className="text-[11.5px] leading-[13.92px]">Design URL</span>
          <FiInfo size={15} />
        </div>
        <input
          aria-label="Design URL"
          defaultValue="https://www.figma.com/file/:"
          className="mt-[11px] h-9 w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e] outline-none"
        />
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent */}
      <p className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  );
};
