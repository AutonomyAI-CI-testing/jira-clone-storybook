import cx from "classix";
import {
  HiChevronUp,
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const labelRowClass =
  "flex items-center gap-2 text-base text-[color:var(--DarkNeutral1000)]";

const fieldClass =
  "mt-3 w-full rounded border border-[color:var(--DarkNeutral400)] bg-[var(--DarkNeutral300)] px-4 py-4 text-base text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral700)]";

const actionClass =
  "h-[56px] w-[170px] cursor-pointer rounded-md bg-[var(--Orange800)] text-base text-[color:var(--DarkNeutral1000)] hover:bg-[var(--Orange700)]";

export const TestCard = (): JSX.Element => (
  <div id="testElem">
    <div className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] px-10 pt-6 pb-10 font-primary text-[color:var(--DarkNeutral1100)]">
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <button
          type="button"
          aria-label="Settings"
          className="cursor-pointer text-[color:var(--DarkNeutral700)] hover:text-[color:var(--DarkNeutral1100)]"
        >
          <HiOutlineCog size={22} />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3 text-sm text-[color:var(--DarkNeutral700)]">
        <HiOutlineChevronUp size={20} />
        <span>From entire frame to a singl...</span>
      </div>

      <div className="mt-20 flex items-center gap-3 font-primary-bold text-xl">
        <HiChevronUp size={22} />
        <h2>Add New Design</h2>
      </div>

      <label htmlFor="personal-access-token" className={cx("mt-12", labelRowClass)}>
        <span>Personal Access Token</span>
        <HiOutlineInformationCircle size={18} />
      </label>
      <input
        id="personal-access-token"
        className={fieldClass}
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />

      <label htmlFor="design-url" className={cx("mt-5", labelRowClass)}>
        <span>Design URL</span>
        <HiOutlineInformationCircle size={18} />
      </label>
      <input
        id="design-url"
        className={fieldClass}
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-6 flex gap-9">
        <button type="button" className={actionClass}>
          Awesome
        </button>
        <button type="button" className={actionClass}>
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  </div>
);
