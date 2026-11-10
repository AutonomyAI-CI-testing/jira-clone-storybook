import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col overflow-auto bg-black p-5 [font-family:Inter,sans-serif] text-[13.5px] font-semibold text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <MdSettings aria-hidden className="shrink-0 text-[#b5b5b5]" size={16} />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <MdKeyboardArrowUp
        aria-hidden
        className="shrink-0 text-[#8b9291]"
        size={12}
      />
      <span className="min-w-0 truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[84px] flex items-center gap-[5px]">
      <MdKeyboardArrowUp
        aria-hidden
        className="shrink-0 text-[#b2b2b1]"
        size={12}
      />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-[14px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <MdInfoOutline aria-hidden className="shrink-0 text-[#d0d0d0]" size={15} />
    </div>
    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-[14px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <MdInfoOutline aria-hidden className="shrink-0 text-[#d0d0d0]" size={15} />
    </div>
    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-center text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-center text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
