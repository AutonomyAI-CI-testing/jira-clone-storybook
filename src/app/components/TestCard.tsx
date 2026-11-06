import { BiChevronUp, BiInfoCircle } from "react-icons/bi";
import { MdSettings } from "react-icons/md";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained: no props, no data, no behaviour. Every value is an
 * arbitrary-value utility because the frame's palette (#000000 / #272822 / #843a17)
 * has no role in this repo's token set, and `theme.colors` is a full override here —
 * a stock palette class would compile to nothing.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <MdSettings size={16} className="text-[#b5b5b5]" aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex items-center gap-[10px]">
      <BiChevronUp size={10} className="text-[#8b9291]" aria-hidden="true" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[6px]">
      <BiChevronUp size={12} className="text-[#b2b2b1]" aria-hidden="true" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <label
        htmlFor="test-card-token"
        className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <BiInfoCircle size={15} className="text-[#a4a4a3]" aria-hidden="true" />
    </div>

    <input
      id="test-card-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-light text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-2">
      <label
        htmlFor="test-card-url"
        className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <BiInfoCircle size={15} className="text-[#a3a3a2]" aria-hidden="true" />
    </div>

    <input
      id="test-card-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] font-primary-light text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[23px] flex justify-center gap-[17px]">
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

    <span className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
