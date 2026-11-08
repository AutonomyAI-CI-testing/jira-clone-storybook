import { HiChevronUp, HiInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 font-[Inter,sans-serif]"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <IoSettingsOutline
        aria-hidden="true"
        size={16}
        className="shrink-0 text-[#b5b5b5]"
      />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        size={10}
        className="shrink-0 text-[#8b9291]"
      />
      <span className="min-w-0 truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design section header */}
    <div className="mt-[77px] flex items-center gap-2">
      <HiChevronUp
        aria-hidden="true"
        size={12}
        className="shrink-0 text-[#b2b2b1]"
      />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token field */}
    <div className="mt-[28px] flex items-center justify-between">
      <label
        htmlFor="testcard-token"
        className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <HiInformationCircle
        aria-hidden="true"
        size={15}
        className="shrink-0 text-[#a4a4a3]"
      />
    </div>

    <input
      id="testcard-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-[12px] h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
    />

    {/* Design URL field */}
    <div className="mt-[11px] flex items-center gap-2">
      <label
        htmlFor="testcard-design-url"
        className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <HiInformationCircle
        aria-hidden="true"
        size={15}
        className="shrink-0 text-[#a3a3a2]"
      />
    </div>

    <input
      id="testcard-design-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] font-semibold leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
    />

    {/* Action buttons — part of the frame, not wired to anything */}
    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <span className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
