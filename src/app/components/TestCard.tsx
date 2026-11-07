import cx from "classix";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

const fieldBaseClass =
  "w-full border-[var(--DarkNeutral600)] bg-[var(--DarkNeutral200)] px-[18px] font-primary-bold text-2xs text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral600)]";

const labelClass =
  "font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]";

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--DarkNeutral700)]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[var(--DarkNeutral100)] pb-[62px] font-primary text-[color:var(--DarkNeutral900)]"
    >
      <div className="h-[9px] w-full bg-[var(--DarkNeutral0)]" />

      <div className="flex items-center justify-between px-5 pt-[11px]">
        <span className="font-primary-bold text-xs">UI magician Agent</span>
        <MdSettings
          size={16}
          aria-hidden
          className="text-[color:var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] px-5">
        <RiArrowUpSLine
          size={14}
          aria-hidden
          className="shrink-0 text-[color:var(--DarkNeutral700)]"
        />
        <span className={cx(labelClass, "truncate")}>
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-[9px] px-5">
        <RiArrowUpSLine size={14} aria-hidden className="shrink-0" />
        <span className="font-primary-bold text-xs">Add New Design</span>
      </div>

      <div className="mt-[28px] flex items-center gap-2 px-5">
        <span className={labelClass}>Personal Access Token</span>
        <IoInformationCircleOutline
          size={15}
          aria-hidden
          className="shrink-0 text-[color:var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-3 px-5">
        <input
          type="text"
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={cx(fieldBaseClass, "h-9 border")}
        />
      </div>

      <div className="mt-[11px] flex items-center gap-2 px-5">
        <span className={labelClass}>Design URL</span>
        <IoInformationCircleOutline
          size={15}
          aria-hidden
          className="shrink-0 text-[color:var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-[11px] px-5">
        <input
          type="text"
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className={cx(fieldBaseClass, "h-[37px] border-2")}
        />
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-[44px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-[46px] px-5 font-primary-bold text-xs">
        Recent Breakdowns
      </div>
    </div>
  );
};
