import {
  HiChevronDown,
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black font-primary-bold"
  >
    <div className="h-[9px] w-full bg-[#141414]" aria-hidden="true" />

    <div className="flex flex-col px-5 pb-[62px] pt-[11px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <HiOutlineCog size={16} className="text-[#9a9a9a]" aria-hidden="true" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <HiChevronUp
          size={10}
          className="shrink-0 text-[#8b9291]"
          aria-hidden="true"
        />
        <p className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="ml-[6px] mt-[77px] flex items-center gap-[5px]">
        <HiChevronDown
          size={12}
          className="shrink-0 text-[#b2b2b1]"
          aria-hidden="true"
        />
        <h3 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      <div className="mt-[28px] flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[#a4a4a3]"
          aria-hidden="true"
        />
      </div>

      <input
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[36px] w-full border border-[color:#a5adad] bg-[#272822] px-[19px] text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-3 flex items-center gap-2">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[#a3a3a2]"
          aria-hidden="true"
        />
      </div>

      <input
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[color:#929291] bg-[#272822] px-5 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex gap-4">
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

      <h3 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  </div>
);
