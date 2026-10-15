import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] overflow-auto bg-[#1c1c1c] px-5 pb-[62px] pt-5 font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <span>UI magician Agent</span>
        <RiSettings3Line size={16} className="text-[#d4d4d4]" aria-hidden />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <RiArrowUpSLine
          size={12}
          className="shrink-0 text-[#8b9291]"
          aria-hidden
        />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <RiArrowUpSLine
          size={16}
          className="shrink-0 text-[#b2b2b1]"
          aria-hidden
        />
        <span className="text-[#b2b2b1]">Add New Design</span>
      </div>

      <div className="mt-7">
        <div className="flex items-center gap-4">
          <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <RiInformationLine
            size={15}
            className="shrink-0 text-[#a4a4a3]"
            aria-hidden
          />
        </div>
        <input
          type="text"
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-4">
          <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <RiInformationLine
            size={15}
            className="shrink-0 text-[#a3a3a2]"
            aria-hidden
          />
        </div>
        <input
          type="text"
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-6 flex gap-[17px] pl-6">
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

      <div className="mt-[46px] text-[#b0b0b0]">Recent Breakdowns</div>
    </div>
  );
};
