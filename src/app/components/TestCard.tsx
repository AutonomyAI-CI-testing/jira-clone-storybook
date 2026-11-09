import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import cx from "classix";

const headingClass = "text-[13.5px] leading-[16.34px] text-[#b5b5b5]";
const labelClass = "text-[11.5px] leading-[13.92px] text-[#a4a4a3]";
const fieldClass =
  "mt-[11px] w-full rounded bg-[#272822] px-[19px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-5 pb-5 pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className={headingClass}>UI magician Agent</span>
      <MdSettings size={16} className="text-[#b5b5b5]" aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <HiChevronUp size={12} className="text-[#8b9291]" aria-hidden="true" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[60px] flex items-center gap-[5px]">
      <HiChevronUp size={12} className="text-[#b2b2b1]" aria-hidden="true" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[12px] flex items-center justify-between">
      <span className={labelClass}>Personal Access Token</span>
      <HiOutlineInformationCircle
        size={15}
        className="text-[#a4a4a3]"
        aria-hidden="true"
      />
    </div>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={cx(
        fieldClass,
        "h-[36px] border border-[#a5adad] text-[11.5px]"
      )}
    />

    <div className="mt-[11px] flex items-center gap-[9px]">
      <span className={labelClass}>Design URL</span>
      <HiOutlineInformationCircle
        size={15}
        className="text-[#a4a4a3]"
        aria-hidden="true"
      />
    </div>
    <input
      readOnly
      placeholder="https://www.figma.com/file/:"
      className={cx(
        fieldClass,
        "h-[37px] border-2 border-[#929291] text-[10.5px]"
      )}
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <span className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
