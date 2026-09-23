import { FiChevronUp } from "react-icons/fi";
import { HiInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-black px-5 pt-5 font-primary">
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Settings"
        className="flex text-[#b5b5b5]"
      >
        <IoSettingsOutline size={16} />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <span className="flex shrink-0 text-[#8b9291]">
        <FiChevronUp size={10} />
      </span>
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-2">
      <span className="flex shrink-0 text-[#b2b2b1]">
        <FiChevronUp size={12} />
      </span>
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testElem-access-token"
          className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <span className="flex text-[#a4a4a3]">
          <HiInformationCircle size={15} />
        </span>
      </div>
      <input
        id="testElem-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470] focus:outline-none"
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testElem-design-url"
          className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <span className="flex text-[#a3a3a2]">
          <HiInformationCircle size={15} />
        </span>
      </div>
      <input
        id="testElem-design-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
      />
    </div>

    <div className="mt-[22px] flex justify-center gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[46px] pb-5">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
