import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = () => {
  const labelClass = "font-primary-bold text-[11.5px] leading-[13.92px]";
  const fieldClass = "w-full bg-[#272822] px-4 font-primary-bold outline-none";
  const buttonClass = cx(
    "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold",
    "text-[11.5px] leading-[13.92px] text-[#8c8078]"
  );

  return (
    <div
      id="testElem"
      className="h-[508px] w-[254px] bg-[#1C1D17] px-5 pt-5 font-primary"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <HiOutlineCog size={16} className="shrink-0 text-[#b5b5b5]" />
      </div>

      {/* Collapsed source row */}
      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp size={10} className="shrink-0 text-[#8b9291]" />
        <span className={cx(labelClass, "min-w-0 truncate text-[#8b9291]")}>
          From entire frame to a single design
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[77px] flex items-center gap-2">
        <HiChevronUp size={12} className="shrink-0 text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7 flex items-center gap-3">
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
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className={cx(
          fieldClass,
          "mt-3 h-[36px] border border-[#a5adad] text-[11.5px] leading-[13.92px]",
          "text-[#737470] placeholder:text-[#737470]"
        )}
      />

      {/* Design URL */}
      <div className="mt-3 flex items-center gap-3">
        <span className={cx(labelClass, "text-[#a3a3a2]")}>Design URL</span>
        <HiOutlineInformationCircle
          size={15}
          className="shrink-0 text-[#a3a3a2]"
        />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={cx(
          fieldClass,
          "mt-3 h-[37px] border-2 border-[#929291] text-[10.5px] leading-[12.71px]",
          "text-[#71726e] placeholder:text-[#71726e]"
        )}
      />

      {/* Actions */}
      <div className="mt-[23px] flex gap-[17px] pl-6">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
