import cx from "classix";
import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const labelRowClass = "flex items-center gap-[10px] px-[20px]";

const fieldClass =
  "mx-[20px] w-[211px] bg-[#272822] pl-[19px] font-semibold text-[#737470]";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black pb-[60px] font-['Inter',sans-serif]"
    >
      <div className="flex items-center justify-between px-[20px] pt-[20px]">
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IoSettingsOutline size={16} className="text-[#b5b5b5]" />
      </div>

      <div className={cx("mt-[18px]", labelRowClass)}>
        <HiChevronUp size={10} className="text-[#8b9291]" />
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className={cx("mt-[77px]", labelRowClass)}>
        <HiChevronUp size={14} className="text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className={cx("mt-[28px]", labelRowClass)}>
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <HiOutlineInformationCircle size={15} className="text-[#a4a4a3]" />
      </div>

      <input
        type="text"
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={cx(
          "mt-[12px] h-[36px] border border-[#a5adad] text-[11.5px] placeholder:text-[#737470]",
          fieldClass
        )}
      />

      <div className={cx("mt-[11px]", labelRowClass)}>
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
          Design URL
        </span>
        <HiOutlineInformationCircle size={15} className="text-[#a3a3a2]" />
      </div>

      <input
        type="text"
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className={cx(
          "mt-[11px] h-[37px] border-2 border-[#929291] pl-[20px] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]",
          fieldClass
        )}
      />

      <div className="mt-[22px] flex gap-[17px] pl-[44px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-[46px] px-[20px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
