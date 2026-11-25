import { HiOutlineInformationCircle } from "react-icons/hi";
import { IoChevronUpOutline, IoSettingsOutline } from "react-icons/io5";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame
 * attached to this task. Self-contained: no props, no state, no handlers.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#1c1c1c] px-5 pb-5 pt-5 font-primary text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-4 text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline
          aria-hidden="true"
          size={15}
          className="shrink-0 text-[#b5b5b5]"
        />
      </div>

      {/* Collapse row */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <IoChevronUpOutline
          aria-hidden="true"
          size={10}
          className="shrink-0 text-[#8b9291]"
        />
        <span className="truncate text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a single component
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[62px] flex items-center gap-[5px]">
        <IoChevronUpOutline
          aria-hidden="true"
          size={13}
          className="shrink-0 text-[#b2b2b1]"
        />
        <span className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center gap-[8px]">
        <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          aria-hidden="true"
          size={15}
          className="shrink-0 text-[#a4a4a3]"
        />
      </div>
      <div className="mt-3 flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[18px]">
        <span className="truncate text-[11.5px] leading-[14px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex items-center gap-[8px]">
        <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle
          aria-hidden="true"
          size={15}
          className="shrink-0 text-[#a3a3a2]"
        />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[18px]">
        <span className="truncate text-[10.5px] leading-[13px] text-[#71726e]">
          https://www.figma.com/file/
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex justify-center gap-[17px]">
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

      {/* Recent Breakdowns */}
      <div className="mt-[46px] font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
