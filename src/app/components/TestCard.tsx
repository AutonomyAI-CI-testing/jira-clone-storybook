import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const mutedText = "text-[11.5px] leading-[13.92px]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#000000] px-5 pt-5 pb-[62px] font-primary-bold"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">UI magician Agent</span>
      <IoSettingsOutline size={16} className="text-[#b5b5b5]" aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <IoChevronUpOutline size={10} className="shrink-0 text-[#8b9291]" aria-hidden="true" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-1.5">
      <IoChevronUpOutline size={12} className="shrink-0 text-[#b2b2b1]" aria-hidden="true" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">Add New Design</span>
    </div>

    <div className="mt-[28px] flex items-center gap-5">
      <label htmlFor="test-card-token" className={`${mutedText} text-[#a4a4a3]`}>
        Personal Access Token
      </label>
      <IoInformationCircleOutline size={15} className="text-[#a4a4a3]" aria-hidden="true" />
    </div>
    <input
      id="test-card-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470] focus-visible:outline-none"
    />

    <div className="mt-[11px] flex items-center gap-5">
      <label htmlFor="test-card-design-url" className={`${mutedText} text-[#a3a3a2]`}>
        Design URL
      </label>
      <IoInformationCircleOutline size={15} className="text-[#a3a3a2]" aria-hidden="true" />
    </div>
    <input
      id="test-card-design-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e] focus-visible:outline-none"
    />

    <div className="mt-[21px] flex justify-center gap-[14px]">
      <button
        type="button"
        className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] cursor-pointer rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <p className="mt-[45px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">Recent Breakdowns</p>
  </div>
);
