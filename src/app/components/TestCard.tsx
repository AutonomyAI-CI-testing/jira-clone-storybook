import { FaChevronUp } from "react-icons/fa";
import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#1C1D17] px-5 pb-[62px] pt-5 font-['Inter',sans-serif] font-semibold"
    >
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline
          size={16}
          className="text-[#b5b5b5]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FaChevronUp size={8} className="text-[#8b9291]" aria-hidden="true" />
        <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <FaChevronUp size={12} className="text-[#b2b2b1]" aria-hidden="true" />
        <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-2">
        <label
          htmlFor="testcard-token"
          className="text-[11.5px] leading-[14px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <IoInformationCircleOutline
          size={15}
          className="text-[#a4a4a3]"
          aria-hidden="true"
        />
      </div>
      <input
        id="testcard-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-2">
        <label
          htmlFor="testcard-url"
          className="text-[11.5px] leading-[14px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <IoInformationCircleOutline
          size={15}
          className="text-[#a3a3a2]"
          aria-hidden="true"
        />
      </div>
      <input
        id="testcard-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-[11px] h-9 w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex gap-[17px]">
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

      <div className="mt-[47px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
