import cx from "classix";
import { HiInformationCircle } from "react-icons/hi";
import { IoChevronUpOutline } from "react-icons/io5";
import { MdSettings } from "react-icons/md";

const sectionTitleClass = "font-primary-bold text-[13.5px] leading-[16px]";
const labelClass = "text-[11.5px] leading-[14px] text-font-subtle";
const summaryClass = cx("min-w-0 truncate", labelClass);
const inputClass =
  "mt-3 w-full border border-border-bold bg-[var(--DarkNeutral200)] px-2 py-2.5 text-[11.5px] leading-[14px] text-font-subtlest placeholder:text-font-subtlest";
const buttonClass =
  "rounded bg-[var(--Orange800)] px-4 py-3 font-primary-bold text-[11.5px] leading-[14px] text-[var(--Orange100)]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark w-[254px] bg-elevation-surface px-5 pb-16 pt-5 text-font"
    >
      {/* Title row */}
      <div className="flex items-center justify-between">
        <span className={sectionTitleClass}>UI magician Agent</span>
        <MdSettings size={16} aria-hidden="true" className="text-icon" />
      </div>

      {/* Collapsed summary */}
      <div className="mt-4 flex items-center gap-1.5">
        <IoChevronUpOutline
          size={12}
          aria-hidden="true"
          className="text-icon"
        />
        <span className={summaryClass}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="mt-20 flex items-center gap-1.5">
        <IoChevronUpOutline
          size={12}
          aria-hidden="true"
          className="text-icon"
        />
        <span className={sectionTitleClass}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-7">
        <div className="flex items-center gap-2">
          <label htmlFor="testcard-token" className={labelClass}>
            Personal Access Token
          </label>
          <HiInformationCircle
            size={15}
            aria-hidden="true"
            className="text-icon"
          />
        </div>
        <input
          id="testcard-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={inputClass}
        />
      </div>

      {/* Design URL */}
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <label htmlFor="testcard-design-url" className={labelClass}>
            Design URL
          </label>
          <HiInformationCircle
            size={15}
            aria-hidden="true"
            className="text-icon"
          />
        </div>
        <input
          id="testcard-design-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className={inputClass}
        />
      </div>

      {/* Actions */}
      <div className="mt-5 flex items-center gap-4">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-12">
        <span className={sectionTitleClass}>Recent Breakdowns</span>
      </div>
    </div>
  );
};
