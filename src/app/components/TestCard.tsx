import cx from "classix";
import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const headingClass = "font-primary-bold text-[13.5px] leading-[16px]";
const labelClass = "font-primary-bold text-[11.5px] leading-[14px]";
const inputClass =
  "w-full bg-[#272822] px-5 font-primary-bold text-[11.5px] leading-[14px] text-[#b0b0b0] outline-none";
const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]";

export const TestCard = () => (
  <div id="testElem" className="w-[254px] bg-[#1e1e1e] px-5 py-5">
    <div className="flex items-center justify-between">
      <span className={cx(headingClass, "text-[#b5b5b5]")}>
        UI magician Agent
      </span>
      <button type="button" aria-label="Settings">
        <IoSettingsOutline size={16} className="text-[#b5b5b5]" />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <IoChevronUpOutline size={12} className="text-[#8b9291]" />
      <span className={cx(labelClass, "text-[#8b9291]")}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <IoChevronUpOutline size={14} className="text-[#b2b2b1]" />
      <span className={cx(headingClass, "text-[#b2b2b1]")}>Add New Design</span>
    </div>

    <div className="mt-[28px] flex items-center gap-4">
      <span className={cx(labelClass, "text-[#a4a4a3]")}>
        Personal Access Token
      </span>
      <IoInformationCircleOutline size={15} className="text-[#a4a4a3]" />
    </div>

    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      className={cx(
        inputClass,
        "mt-[12px] h-[36px] border border-[#a5adad] placeholder:text-[#737470]"
      )}
    />

    <div className="mt-[11px] flex items-center gap-4">
      <span className={cx(labelClass, "text-[#a3a3a2]")}>Design URL</span>
      <IoInformationCircleOutline size={15} className="text-[#a3a3a2]" />
    </div>

    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className={cx(
        inputClass,
        "mt-[11px] h-[37px] border-2 border-[#929291] placeholder:text-[#71726e]"
      )}
    />

    <div className="ml-[23px] mt-[21px] flex gap-[15px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <p className={cx(headingClass, "mt-[45px] text-[#b0b0b0]")}>
      Recent Breakdowns
    </p>
  </div>
);
