import { HiInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Deliberately self-contained: no props, no state, no behaviour. Spacing and
 * colour are approximations taken from the frame's style guide, and are written
 * as Tailwind arbitrary values because the frame's palette has no counterpart
 * among this repo's semantic colour tokens.
 */
export const TestCard = (): JSX.Element => {
  const fieldLabelClass = "text-[11.5px] leading-[13.92px]";
  const fieldBoxClass = "flex w-[211px] items-center bg-[#272822]";
  const actionButtonClass =
    "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#1C1D17] pb-[62px] font-primary-bold text-[#b5b5b5]"
    >
      {/* Top strip */}
      <div className="h-[9px] w-full bg-[#161613]" />

      {/* Header */}
      <div className="mt-[11px] flex items-center justify-between px-5">
        <span className="text-[13.5px] leading-[16.34px]">
          UI magician Agent
        </span>
        <MdSettings size={16} className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-[9px] px-5">
        <RiArrowUpSLine size={14} className="shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[5px] px-5">
        <RiArrowUpSLine size={16} className="shrink-0 text-[#b2b2b1]" />
        <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] px-5">
        <div className="flex items-center gap-5">
          <span className={`${fieldLabelClass} text-[#a4a4a3]`}>
            Personal Access Token
          </span>
          <HiInformationCircle size={15} className="shrink-0 text-[#a4a4a3]" />
        </div>
        <div
          className={`mt-[12px] h-[36px] border border-[#a5adad] pl-[19px] ${fieldBoxClass}`}
        >
          <span className={`${fieldLabelClass} text-[#737470]`}>
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL */}
      <div className="mt-[11px] px-5">
        <div className="flex items-center gap-3">
          <span className={`${fieldLabelClass} text-[#a3a3a2]`}>
            Design URL
          </span>
          <HiInformationCircle size={15} className="shrink-0 text-[#a3a3a2]" />
        </div>
        <div
          className={`mt-[11px] h-[37px] border-2 border-[#929291] pl-5 ${fieldBoxClass}`}
        >
          <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-[23px] flex gap-[17px] pl-[44px]">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[46px] px-5 text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
