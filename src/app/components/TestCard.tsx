import { HiInformationCircle } from "react-icons/hi";
import { MdKeyboardArrowUp, MdSettings } from "react-icons/md";

const headingClass =
  "font-primary-bold text-xs text-[color:var(--DarkNeutral900)]";
const labelClass = "font-primary text-2xs text-[color:var(--DarkNeutral800)]";
const iconClass = "text-[color:var(--DarkNeutral800)]";
const fieldClass =
  "h-9 w-full border border-[color:var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-4 font-primary-light text-2xs text-[color:var(--DarkNeutral600)] placeholder:text-[color:var(--DarkNeutral600)]";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary text-2xs text-[color:var(--DarkNeutral700)]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[var(--DarkNeutral100)] px-5 pb-16 pt-5 text-[color:var(--DarkNeutral900)]"
    >
      <div className="flex items-center justify-between">
        <span className={headingClass}>UI magician Agent</span>
        <MdSettings size={16} aria-hidden="true" className={iconClass} />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[color:var(--DarkNeutral700)]">
        <MdKeyboardArrowUp size={12} aria-hidden="true" />
        <span className="font-primary text-2xs">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-1.5">
        <MdKeyboardArrowUp size={14} aria-hidden="true" className={iconClass} />
        <span className={headingClass}>Add New Design</span>
      </div>

      <div className="mt-7 flex items-center gap-5">
        <span className={labelClass}>Personal Access Token</span>
        <HiInformationCircle
          size={15}
          aria-hidden="true"
          className={iconClass}
        />
      </div>
      <input
        className={`mt-3 ${fieldClass}`}
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        aria-label="Personal Access Token"
      />

      <div className="mt-3 flex items-center gap-5">
        <span className={labelClass}>Design URL</span>
        <HiInformationCircle
          size={15}
          aria-hidden="true"
          className={iconClass}
        />
      </div>
      <input
        className={`mt-3 border-2 ${fieldClass}`}
        placeholder="https://www.figma.com/file/"
        aria-label="Design URL"
      />

      <div className="mt-6 flex gap-4 pl-6">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-12">
        <span className={headingClass}>Recent Breakdowns</span>
      </div>
    </div>
  );
};
