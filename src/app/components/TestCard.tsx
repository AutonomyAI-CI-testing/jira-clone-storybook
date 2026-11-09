import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const headingClass =
  "font-primary-bold text-[13.5px] leading-[16px] text-[color:var(--DarkNeutral900)]";
const labelClass =
  "text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral800)]";
const mutedClass =
  "text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral600)]";
const iconClass = "shrink-0 text-[color:var(--DarkNeutral800)]";
const inputClass =
  "mt-[12px] h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px] text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral600)] placeholder:text-[color:var(--DarkNeutral600)]";
const buttonClass =
  "h-9 w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral700)] hover:bg-[var(--Orange700)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral100)] px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <p className={headingClass}>UI magician Agent</p>
      <button type="button" aria-label="Settings">
        <HiOutlineCog size={16} className={iconClass} />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp
        size={10}
        aria-hidden="true"
        className="shrink-0 text-[color:var(--DarkNeutral600)]"
      />
      <span className={cx("min-w-0 truncate", mutedClass)}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <HiChevronUp size={13} aria-hidden="true" className={iconClass} />
      <p className={headingClass}>Add New Design</p>
    </div>

    <div className="mt-[28px] flex items-center gap-5">
      <span className={labelClass}>Personal Access Token</span>
      <HiOutlineInformationCircle size={15} className={iconClass} />
    </div>
    <input
      className={inputClass}
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      aria-label="Personal Access Token"
    />

    <div className="mt-[11px] flex items-center gap-5">
      <span className={labelClass}>Design URL</span>
      <HiOutlineInformationCircle size={15} className={iconClass} />
    </div>
    <input
      className={inputClass}
      placeholder="https://www.figma.com/file/:"
      aria-label="Design URL"
    />

    <div className="mt-[22px] flex items-center justify-end gap-[17px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <p className={cx("mt-[47px]", headingClass)}>Recent Breakdowns</p>
  </div>
);
