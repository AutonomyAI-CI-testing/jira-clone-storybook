import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

/**
 * Smoke-test card reproducing the "UI magician Agent" Figma frame.
 *
 * Self-contained and prop-less on purpose: the panel is a fixed dark surface, so
 * every colour is written as an arbitrary value rather than a semantic token, and
 * nothing here is interactive. Not reachable from any route.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] font-primary-bold text-[#b5b5b5]"
  >
    <div className="h-[9px] w-full bg-[#161613]" />

    <div className="px-[20px] pb-[62px] pt-[11px]">
      <div className="flex h-[16px] items-center justify-between">
        <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <MdSettings size={16} className="text-[#b5b5b5]" aria-hidden="true" />
      </div>

      <div className="mt-[18px] flex h-[14px] items-center gap-[9px]">
        <RiArrowUpSLine
          size={14}
          className="text-[#8b9291]"
          aria-hidden="true"
        />
        <span className="truncate text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex h-[16px] items-center gap-[5px]">
        <RiArrowUpSLine
          size={14}
          className="text-[#b2b2b1]"
          aria-hidden="true"
        />
        <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex h-[14px] items-center gap-[6px]">
        <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[#a4a4a3]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-[10px] flex h-[39px] items-center border border-[#a5adad] bg-[#272822] px-[18px]">
        <span className="text-[11.5px] leading-[14px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxxxx
        </span>
      </div>

      <div className="mt-[10px] flex h-[14px] items-center gap-[6px]">
        <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[#a3a3a2]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-[9px] flex h-[41px] items-center border-2 border-[#929291] bg-[#272822] px-[18px]">
        <span className="text-[10.5px] leading-[13px] text-[#71726e]">
          https://www.figma.com/file/
        </span>
      </div>

      <div className="mt-[18px] flex h-[40px] items-center justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[46px] text-[13.5px] leading-[16px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  </div>
);
