import { MdSettings } from "react-icons/md";
import { RiArrowUpSLine, RiInformationLine } from "react-icons/ri";

const iconClassName = "shrink-0 text-font-subtle";

const fieldClassName =
  "mt-3 h-9 w-full rounded-none border border-border-bold bg-elevation-surface-raised px-2 text-2xs text-font outline-none placeholder:text-font-subtlest";

const actionClassName =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs text-[var(--DarkNeutral900)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark min-h-[508px] w-[254px] bg-elevation-surface p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
      <MdSettings size={16} aria-hidden="true" className={iconClassName} />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <RiArrowUpSLine size={16} aria-hidden="true" className={iconClassName} />
      <span className="text-2xs text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-2">
      <RiArrowUpSLine size={20} aria-hidden="true" className={iconClassName} />
      <h3 className="font-primary-bold text-xs">Add New Design</h3>
    </div>

    <div className="mt-[28px]">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-token" className="text-2xs text-font-subtle">
          Personal Access Token
        </label>
        <RiInformationLine
          size={15}
          aria-hidden="true"
          className={iconClassName}
        />
      </div>
      <input
        id="test-card-token"
        name="token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={fieldClassName}
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-url" className="text-2xs text-font-subtle">
          Design URL
        </label>
        <RiInformationLine
          size={15}
          aria-hidden="true"
          className={iconClassName}
        />
      </div>
      <input
        id="test-card-url"
        name="url"
        placeholder="https://www.figma.com/file/:"
        className={fieldClassName}
      />
    </div>

    <div className="mt-[22px] flex justify-center gap-4">
      <button type="button" className={actionClassName}>
        Awesome
      </button>
      <button type="button" className={actionClassName}>
        Prepare
      </button>
    </div>

    <h3 className="mt-12 font-primary-bold text-xs">Recent Breakdowns</h3>
  </div>
);
