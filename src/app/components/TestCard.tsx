import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const labelClass = "text-[11.5px] leading-[13.92px] font-semibold";
const headingClass = "text-[13.5px] leading-[16.34px] font-semibold";
const fieldClass = "mt-3 w-full bg-[#272822] font-semibold outline-none";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#1C1D17] px-5 pb-5 pt-5 font-[family-name:Inter,sans-serif]"
    >
      {/* Title row */}
      <div className="flex items-start justify-between">
        <span className={cx(headingClass, "text-[#b5b5b5]")}>
          UI magician Agent
        </span>
        <HiOutlineCog size={16} className="shrink-0 text-[#b5b5b5]" />
      </div>

      {/* Collapsed section row */}
      <div className="mt-[18px] flex items-center gap-[9px]">
        <HiChevronUp size={10} className="shrink-0 text-[#8b9291]" />
        <span className={cx(labelClass, "text-[#8b9291]")}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section heading */}
      <div className="mt-[77px] flex items-center gap-[5px]">
        <HiChevronUp size={12} className="shrink-0 text-[#b2b2b1]" />
        <span className={cx(headingClass, "text-[#b2b2b1]")}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[28px] flex items-center justify-between">
        <span className={cx(labelClass, "text-[#a4a4a3]")}>
          Personal Access Token
        </span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[#a4a4a3]"
        />
      </div>
      <input
        readOnly
        type="text"
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(
          fieldClass,
          "border border-[#a5adad] px-[19px] py-[11px] text-[11.5px] leading-[13.92px] placeholder:text-[#737470]"
        )}
      />

      {/* Design URL */}
      <div className="mt-[10px] flex items-center justify-between">
        <span className={cx(labelClass, "text-[#a3a3a2]")}>Design URL</span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[#a3a3a2]"
        />
      </div>
      <input
        readOnly
        type="text"
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className={cx(
          fieldClass,
          "border-2 border-[#929291] px-[19px] py-[12px] text-[10.5px] leading-[12.71px] placeholder:text-[#71726e]"
        )}
      />

      {/* Actions */}
      <div className="mt-[20px] flex items-start gap-[17px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      {/* Footer heading */}
      <span className={cx(headingClass, "mt-[47px] text-[#b0b0b0]")}>
        Recent Breakdowns
      </span>
    </div>
  );
};
