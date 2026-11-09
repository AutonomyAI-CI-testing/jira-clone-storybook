import cx from "classix";
import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Static, self-contained reproduction of the cropped Figma frame
 * ("UI magician Agent" panel). No props, no state, no interactivity.
 */
const labelRowClass = "flex items-center gap-[24px]";
const labelTextClass = "font-primary-bold text-[11.5px] leading-[13.92px]";
const inputBaseClass =
  "w-[211px] bg-[#272822] font-primary-bold leading-[13.92px]";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-black px-[20px] pt-[20px]"
    >
      {/* Title bar */}
      <div className="flex w-full items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} className="text-[#b5b5b5]" />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <IoChevronUp size={12} className="text-[#8b9291]" />
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
        <IoChevronUp size={14} className="text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal access token field */}
      <div className={cx(labelRowClass, "mt-[28px]")}>
        <span className={cx(labelTextClass, "text-[#a4a4a3]")}>
          Personal Access Token
        </span>
        <IoInformationCircleOutline size={15} className="text-[#a4a4a3]" />
      </div>
      <div
        className={cx(
          inputBaseClass,
          "mt-[11px] border border-[color:#a5adad] px-[19px] py-[11px] text-[11.5px] text-[#737470]"
        )}
      >
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      {/* Design URL field */}
      <div className={cx(labelRowClass, "mt-[11px]")}>
        <span className={cx(labelTextClass, "text-[#a3a3a2]")}>Design URL</span>
        <IoInformationCircleOutline size={15} className="text-[#a3a3a2]" />
      </div>
      <div
        className={cx(
          inputBaseClass,
          "mt-[10px] border-2 border-[color:#929291] px-[18px] py-[10px] text-[10.5px] text-[#71726e]"
        )}
      >
        https://www.figma.com/file/:
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      {/* Recent breakdowns */}
      <span className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
