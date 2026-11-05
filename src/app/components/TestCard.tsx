import cx from "classix";
import { HiInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiArrowDropUpLine } from "react-icons/ri";

const headingClass = "font-primary-bold text-sm text-[var(--Neutral400)]";
const mutedClass = "font-primary text-xs text-[var(--Neutral500)]";
const fieldClass =
  "w-full bg-[var(--DarkNeutral200)] px-3 py-2.5 font-primary text-xs text-[var(--Neutral400)] placeholder:text-[var(--Neutral600)]";
const buttonClass =
  "rounded bg-[var(--Orange800)] px-4 py-2.5 font-primary text-xs text-[var(--Neutral600)]";

export const TestCard = () => {
  return (
    <div id="testElem" className="flex w-[254px] flex-col bg-black px-5 py-5">
      <div className="flex items-center justify-between">
        <span className={headingClass}>UI magician Agent</span>
        <MdSettings
          size={16}
          className="text-[var(--Neutral400)]"
          aria-hidden="true"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <RiArrowDropUpLine
          size={18}
          className="text-[var(--Neutral500)]"
          aria-hidden="true"
        />
        <span className={mutedClass}>From entire frame to a singl...</span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <RiArrowDropUpLine
          size={22}
          className="text-[var(--Neutral400)]"
          aria-hidden="true"
        />
        <span className={headingClass}>Add New Design</span>
      </div>

      <label className="mt-7 block">
        <span className={cx("flex items-center gap-2", mutedClass)}>
          Personal Access Token
          <HiInformationCircle size={15} aria-hidden="true" />
        </span>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={cx(
            fieldClass,
            "mt-3 border border-[color:var(--DarkNeutral800)]"
          )}
        />
      </label>

      <label className="mt-3 block">
        <span className={cx("flex items-center gap-2", mutedClass)}>
          Design URL
          <HiInformationCircle size={15} aria-hidden="true" />
        </span>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className={cx(
            fieldClass,
            "mt-3 border-2 border-[color:var(--DarkNeutral800)]"
          )}
        />
      </label>

      <div className="mt-6 flex justify-center gap-4">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className={cx("mt-12", headingClass)}>Recent Breakdowns</div>
    </div>
  );
};
