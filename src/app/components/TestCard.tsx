import {
  IoChevronDown,
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] px-5 pb-[62px] font-primary-bold"
  >
    <div className="-mx-5 h-[9px] bg-[#161613]" />

    <div className="mt-[11px] flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <IoSettingsOutline size={16} className="shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <IoChevronDown size={10} className="shrink-0 text-[#8b9291]" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <IoChevronUp size={12} className="shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center justify-between">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <IoInformationCircleOutline
        size={15}
        className="shrink-0 text-[#a4a4a3]"
      />
    </div>
    <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-[11px] flex items-center justify-between">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <IoInformationCircleOutline
        size={15}
        className="shrink-0 text-[#a3a3a2]"
      />
    </div>
    <div className="mt-[11px] flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-[19px]">
      <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="mt-[22px] flex justify-center gap-4">
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

    <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
