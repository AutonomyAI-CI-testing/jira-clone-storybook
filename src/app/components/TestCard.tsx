import { IoChevronUp, IoInformationCircleOutline } from "react-icons/io5";
import { MdSettings } from "react-icons/md";

const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="h-[508px] w-[254px] overflow-hidden bg-[#1C1D17] font-['Inter',sans-serif]"
    >
      <div className="h-[9px] w-full bg-[#161613]" />

      <div className="mt-[11px] flex items-start justify-between pl-5 pr-6">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <MdSettings size={16} aria-hidden="true" className="text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[5px] pl-[23px]">
        <IoChevronUp size={12} aria-hidden="true" className="text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] pl-[26px]">
        <IoChevronUp size={12} aria-hidden="true" className="text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-2 pl-5">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline
          size={15}
          aria-hidden="true"
          className="text-[#a4a4a3]"
        />
      </div>

      <div className="ml-5 mt-3 flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[18px]">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="ml-5 mt-[11px] flex items-center gap-2">
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <IoInformationCircleOutline
          size={15}
          aria-hidden="true"
          className="text-[#a3a3a2]"
        />
      </div>

      <div className="ml-5 mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-[18px]">
        <span className="text-[10.5px] font-semibold leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      <div className="ml-[44px] mt-[22px] flex gap-[17px]">
        {BUTTON_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
          >
            {label}
          </button>
        ))}
      </div>

      <p className="mt-[46px] pl-5 text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  );
};
