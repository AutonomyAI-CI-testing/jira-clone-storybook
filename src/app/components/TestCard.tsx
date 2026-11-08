import cx from "classix";
import { HiChevronUp, HiOutlineInformationCircle } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";

const fieldLabelClass = "font-primary-bold text-2xs text-font-subtle";
const fieldClass =
  "h-[36px] w-full rounded border border-border-bold bg-elevation-surface-raised px-3 font-primary text-2xs text-font-subtlest placeholder:text-font-subtlest";
const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-font";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="dark flex min-h-[508px] w-[254px] flex-col bg-elevation-surface font-primary text-font"
    >
      <div className="h-[9px] w-full bg-[var(--DarkNeutral-100)]" />

      <div className="flex flex-col px-5 pt-3">
        <div className="flex items-center justify-between">
          <span className="font-primary-bold text-xs text-font">
            UI magician Agent
          </span>
          <IoSettingsOutline size={16} className="shrink-0 text-font-subtle" />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <HiChevronUp size={14} className="shrink-0 text-font-subtle" />
          <span className="min-w-0 flex-1 truncate font-primary-bold text-2xs text-font-subtlest">
            From entire frame to a single component
          </span>
        </div>

        <div className="mt-[76px] flex items-center gap-2">
          <HiChevronUp size={16} className="shrink-0 text-font-subtle" />
          <span className="font-primary-bold text-xs text-font">
            Add New Design
          </span>
        </div>

        <div className={cx("mt-7 flex items-center gap-2")}>
          <label htmlFor="testElem-token" className={fieldLabelClass}>
            Personal Access Token
          </label>
          <HiOutlineInformationCircle
            size={15}
            className="shrink-0 text-font-subtle"
          />
        </div>
        <input
          id="testElem-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={cx("mt-3", fieldClass)}
        />

        <div className={cx("mt-3 flex items-center gap-2")}>
          <label htmlFor="testElem-url" className={fieldLabelClass}>
            Design URL
          </label>
          <HiOutlineInformationCircle
            size={15}
            className="shrink-0 text-font-subtle"
          />
        </div>
        <input
          id="testElem-url"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className={cx("mt-3", fieldClass)}
        />

        <div className="mt-6 flex justify-center gap-[17px]">
          <button type="button" className={buttonClass}>
            Awesome
          </button>
          <button type="button" className={buttonClass}>
            Prepare
          </button>
        </div>

        <span className="mt-12 font-primary-bold text-xs text-font">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
