import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black px-5 pt-5 pb-[61px] font-primary"
    >
      {/* Title */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiCog size={16} className="text-[#b5b5b5]" aria-hidden />
      </div>

      {/* Collapsed summary */}
      <div className="mt-[18px] flex items-center gap-2">
        <HiChevronUp size={12} className="shrink-0 text-[#8b9291]" aria-hidden />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-2">
        <HiChevronUp size={12} className="shrink-0 text-[#b2b2b1]" aria-hidden />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-[27px] flex items-center gap-2">
        <label
          htmlFor="testElem-token"
          className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <HiInformationCircle
          size={15}
          className="shrink-0 text-[#a4a4a3]"
          aria-hidden
        />
      </div>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-3 text-[11.5px] leading-[13.92px] text-[#b5b5b5] placeholder:text-[#737470]"
      />

      {/* Design URL field */}
      <div className="mt-[11px] flex items-center gap-2">
        <label
          htmlFor="testElem-url"
          className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <HiInformationCircle
          size={15}
          className="shrink-0 text-[#a3a3a2]"
          aria-hidden
        />
      </div>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-[10.5px] leading-[12.71px] text-[#a3a3a2] placeholder:text-[#71726e]"
      />

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

      {/* Recent Breakdowns */}
      <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
