import { MdInfoOutline, MdKeyboardArrowUp, MdSettings } from "react-icons/md";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1C1D17] font-primary-bold"
  >
    <div className="h-[9px] w-full bg-[#161613]" />

    <div className="flex items-center justify-between px-5 pt-[11px]">
      <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
      <button type="button" aria-label="Settings" className="text-[#b5b5b5]">
        <MdSettings size={16} />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[23px]">
      <MdKeyboardArrowUp
        size={12}
        aria-hidden="true"
        className="text-[#8b9291]"
      />
      <span className="text-[11.5px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-[5px] pl-[26px]">
      <MdKeyboardArrowUp
        size={12}
        aria-hidden="true"
        className="text-[#b2b2b1]"
      />
      <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
    </div>

    <div className="mt-[24px] flex items-center gap-[10px] px-5">
      <span className="text-[11.5px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <MdInfoOutline size={15} aria-hidden="true" className="text-[#a4a4a3]" />
    </div>

    <div className="mx-5 mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="text-[11.5px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-[18px] flex items-center gap-[10px] px-5">
      <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
      <MdInfoOutline size={15} aria-hidden="true" className="text-[#a3a3a2]" />
    </div>

    <div className="mx-5 mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-5">
      <span className="text-[10.5px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="mt-[23px] flex gap-[17px] pl-[44px]">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[47px] px-5 text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
