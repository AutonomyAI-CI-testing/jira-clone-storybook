import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const headingClass =
  "font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--DarkNeutral900)]";
const labelClass =
  "font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral800)]";
const fieldClass =
  "flex w-full items-center border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-5 font-primary-bold text-[var(--DarkNeutral600)]";
const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral600)]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[var(--DarkNeutral0)] px-5 pb-[62px] pt-5 font-primary text-[var(--DarkNeutral900)]"
    >
      <div className="flex items-center justify-between">
        <span className={headingClass}>UI magician Agent</span>
        <HiOutlineCog size={16} className="text-[var(--DarkNeutral900)]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <HiChevronUp size={14} className="text-[var(--DarkNeutral900)]" />
        <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-1.5">
        <HiChevronUp size={16} className="text-[var(--DarkNeutral900)]" />
        <span className={headingClass}>Add New Design</span>
      </div>

      <div className="mt-[28px] flex items-center gap-5">
        <span className={labelClass}>Personal Access Token</span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[var(--DarkNeutral800)]"
        />
      </div>
      <div
        className={cx(
          fieldClass,
          "mt-3 h-[36px] border text-[11.5px] leading-[13.92px]"
        )}
      >
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      <div className="mt-3 flex items-center gap-5">
        <span className={labelClass}>Design URL</span>
        <HiOutlineInformationCircle
          size={15}
          className="text-[var(--DarkNeutral800)]"
        />
      </div>
      <div
        className={cx(
          fieldClass,
          "mt-2 h-[41px] border-2 text-[10.5px] leading-[12.71px]"
        )}
      >
        https://www.figma.com/file/:
      </div>

      <div className="mt-[18px] flex justify-center gap-[15px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className={cx(headingClass, "mt-[45px]")}>Recent Breakdowns</div>
    </div>
  );
};
