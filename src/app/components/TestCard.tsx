import {
  RiArrowUpSFill,
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

/**
 * Static reproduction of the "UI magician Agent" side panel from the Figma
 * frame. Self-contained on purpose: no props, no state, no data.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-black px-5 pt-5 font-primary text-[#b5b5b5]"
    >
      {/* Title */}
      <div className="flex h-[16px] items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <RiSettings3Line size={16} aria-hidden className="shrink-0" />
      </div>

      {/* Collapsed description */}
      <div className="mt-[18px] flex h-[14px] items-center gap-[9px]">
        <RiArrowUpSLine
          size={12}
          aria-hidden
          className="shrink-0 text-[#8b9291]"
        />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Empty band above the form, as in the frame */}
      <div className="h-[77px]" />

      {/* Add New Design */}
      <div className="flex h-[16px] items-center gap-[5px]">
        <RiArrowUpSFill
          size={14}
          aria-hidden
          className="shrink-0 text-[#b2b2b1]"
        />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex h-[14px] items-center gap-[10px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <RiInformationLine
          size={15}
          aria-hidden
          className="shrink-0 text-[#a4a4a3]"
        />
      </div>
      <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex h-[14px] items-center gap-[10px]">
        <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <RiInformationLine
          size={15}
          aria-hidden
          className="shrink-0 text-[#a3a3a2]"
        />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[19px]">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px]">
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

      {/* Recent Breakdowns */}
      <span className="mt-[47px] h-[16px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
