import cx from "classix";
import { BsChevronUp } from "react-icons/bs";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";

const labelClass = "text-[11.5px] leading-[13.92px]";
const iconClass = "shrink-0 text-[#c9c9c9]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="h-[508px] w-[254px] bg-[#1C1D17] px-5 py-5 font-primary text-[13.5px] leading-[16.34px] text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <span className="font-primary-bold">UI magician Agent</span>
        <MdOutlineSettings size={16} className={iconClass} aria-hidden="true" />
      </div>

      {/* Collapsed summary */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <BsChevronUp size={10} className={iconClass} aria-hidden="true" />
        <span className={cx(labelClass, "text-[#8b9291]")}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[9px]">
        <BsChevronUp size={14} className={iconClass} aria-hidden="true" />
        <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal access token */}
      <div className="mt-[28px] flex items-center justify-between">
        <span className={cx(labelClass, "text-[#a4a4a3]")}>
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className={iconClass}
          aria-hidden="true"
        />
      </div>
      <div className="mt-[12px] flex h-[36px] w-[211px] items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
        <span className={cx(labelClass, "text-[#737470]")}>
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL */}
      <div className="mt-[11px] flex w-[211px] items-center gap-[11px]">
        <span className={cx(labelClass, "text-[#a3a3a2]")}>Design URL</span>
        <HiOutlineInformationCircle
          size={15}
          className={iconClass}
          aria-hidden="true"
        />
      </div>
      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] pl-[20px]">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/
        </span>
      </div>

      {/* Actions */}
      <div className="mt-[22px] flex gap-[17px] pl-[24px]">
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

      {/* Recent breakdowns */}
      <div className="mt-[46px] font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
