import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const fieldBase =
  "h-9 w-full border-border-bold bg-elevation-surface-raised px-[18px] text-2xs leading-[14px] text-font placeholder:text-font-subtlest";

const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs leading-[14px] text-[var(--Neutral0)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-full max-w-[254px] flex-col bg-elevation-surface px-5 pb-[62px] pt-5 font-primary-bold text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="text-xs leading-4">UI magician Agent</h2>
      <HiOutlineCog size={16} aria-hidden="true" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <HiChevronUp
        size={12}
        className="shrink-0 text-font-subtle"
        aria-hidden="true"
      />
      <span className="truncate text-2xs leading-[14px] text-font-subtlest">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-1.5">
      <HiChevronUp size={14} className="shrink-0" aria-hidden="true" />
      <span className="text-xs leading-4">Add New Design</span>
    </div>

    <div className="mt-[28px] flex items-center gap-3">
      <label
        htmlFor="testcard-token"
        className="text-2xs leading-[14px] text-font-subtle"
      >
        Personal Access Token
      </label>
      <HiOutlineInformationCircle
        size={15}
        className="text-font-subtle"
        aria-hidden="true"
      />
    </div>
    <input
      id="testcard-token"
      name="testcard-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className={cx("mt-3 border", fieldBase)}
    />

    <div className="mt-[11px] flex items-center gap-3">
      <label
        htmlFor="testcard-design-url"
        className="text-2xs leading-[14px] text-font-subtle"
      >
        Design URL
      </label>
      <HiOutlineInformationCircle
        size={15}
        className="text-font-subtle"
        aria-hidden="true"
      />
    </div>
    <input
      id="testcard-design-url"
      name="testcard-design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className={cx("mt-[11px] border-2", fieldBase)}
    />

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-[47px] text-xs leading-4">Recent Breakdowns</h3>
  </div>
);
