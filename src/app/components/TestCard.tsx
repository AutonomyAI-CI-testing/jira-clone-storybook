import { FiChevronUp, FiInfo } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

/**
 * Static approximation of the "UI magician Agent" panel from the shared Figma
 * frame. A smoke test: measurements come from the design's exported style guide,
 * but this is not a pixel-faithful reproduction and it is not wired into the app.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#141414] px-5 pt-5 pb-[62px] font-primary-bold"
    >
      <div className="flex items-start justify-between">
        <span className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline
          size={16}
          aria-hidden
          className="shrink-0 text-[#b5b5b5]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <FiChevronUp
          size={10}
          aria-hidden
          className="shrink-0 text-[#8b9291]"
        />
        <span className="text-[11.5px] leading-[13.92px] whitespace-nowrap text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[83px] flex items-center gap-[7px]">
        <FiChevronUp size={12} aria-hidden className="shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-[9px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <FiInfo size={15} aria-hidden className="shrink-0 text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-[9px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <FiInfo size={15} aria-hidden className="shrink-0 text-[#a3a3a2]" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex items-center justify-end gap-[17px]">
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

      <h3 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
