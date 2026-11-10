import { BiChevronUp } from "react-icons/bi";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";

/**
 * Static reproduction of the "UI magician Agent" panel frame.
 * Self-contained: no props, no state, no handlers.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1c1c1c] px-5 pt-5 pb-[62px] font-primary-bold text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Settings"
        className="flex cursor-pointer items-center justify-center text-[#b5b5b5]"
      >
        <MdOutlineSettings size={15} aria-hidden />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <BiChevronUp size={12} aria-hidden className="shrink-0 text-[#b5b5b5]" />
      <span className="min-w-0 truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <BiChevronUp size={16} aria-hidden className="shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px]">
      <label htmlFor="testElem-token" className="flex items-center gap-1">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <IoInformationCircleOutline
          size={15}
          aria-hidden
          className="shrink-0 text-[#a4a4a3]"
        />
      </label>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-[11px]">
      <label htmlFor="testElem-url" className="flex items-center gap-1">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <IoInformationCircleOutline
          size={15}
          aria-hidden
          className="shrink-0 text-[#a3a3a2]"
        />
      </label>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#71726e] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="flex h-[37px] w-[85px] cursor-pointer items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] cursor-pointer items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
