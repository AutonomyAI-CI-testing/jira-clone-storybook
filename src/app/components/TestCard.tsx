import { HiOutlineInformationCircle } from "react-icons/hi2";
import { MdSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained on purpose: no props, no state, no data. The frame's dark
 * palette has no counterpart in this repo's semantic tokens, so the colours
 * are written as literals here rather than through `--color-*` variables.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1a1a1a] px-5 pb-[62px] pt-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Settings"
        className="text-[#c4c4c4]"
      >
        <MdSettings size={16} aria-hidden />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <RiArrowUpSLine size={10} aria-hidden />
      <span className="text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] text-[#b2b2b1]">
      <RiArrowUpSLine size={14} aria-hidden />
      <h3 className="font-primary-bold text-[13.5px] leading-[16.34px]">
        Add New Design
      </h3>
    </div>

    <div className="mt-[26px]">
      <div className="flex items-center gap-[10px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          aria-hidden
          className="text-[#c4c4c4]"
        />
      </div>
      <div className="mt-[10px] flex h-[39px] w-full items-center rounded border border-[#a5adad] bg-[#272822] px-[11px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>
    </div>

    <div className="mt-[8px]">
      <div className="flex items-center gap-[10px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          aria-hidden
          className="text-[#c4c4c4]"
        />
      </div>
      <div className="mt-[9px] flex h-[41px] w-full items-center rounded border-2 border-[#929291] bg-[#272822] px-[11px]">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>
    </div>

    <div className="mt-[20px] flex gap-[17px] pl-[24px]">
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

    <h3 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
