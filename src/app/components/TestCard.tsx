import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const labelClass = "font-primary-bold text-2xs text-font-subtle";

const fieldClass =
  "w-full rounded border border-border-bold bg-elevation-surface-raised px-[19px] font-primary-bold text-2xs text-font-subtlest placeholder:text-font-subtlest";

const buttonClass =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral0)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface font-primary text-font"
  >
    {/* Top strip */}
    <div className="h-[9px] w-full bg-elevation-surface-sunken" />

    {/* Title row */}
    <div className="flex items-start justify-between px-5 pt-[11px]">
      <h2 className="font-primary-bold text-xs text-font">UI magician Agent</h2>
      <HiOutlineCog aria-hidden="true" size={16} className="text-icon" />
    </div>

    {/* Collapsed summary */}
    <div className="flex items-center gap-2 px-5 pt-[18px]">
      <HiChevronUp
        aria-hidden="true"
        size={12}
        className="text-font-subtlest"
      />
      <span className="min-w-0 truncate font-primary-bold text-2xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="flex items-center gap-1.5 px-5 pt-[77px]">
      <HiChevronUp aria-hidden="true" size={14} className="text-font-subtle" />
      <h3 className="font-primary-bold text-xs text-font-subtle">
        Add New Design
      </h3>
    </div>

    {/* Personal Access Token */}
    <div className="px-5 pt-[26px]">
      <div className="flex items-center gap-3">
        <label htmlFor="testcard-access-token" className={labelClass}>
          Personal Access Token
        </label>
        <HiOutlineInformationCircle
          aria-hidden="true"
          size={15}
          className="text-font-subtle"
        />
      </div>
      <input
        id="testcard-access-token"
        className={`mt-3 h-9 ${fieldClass}`}
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    {/* Design URL */}
    <div className="px-5 pt-[9px]">
      <div className="flex items-center gap-3">
        <label htmlFor="testcard-design-url" className={labelClass}>
          Design URL
        </label>
        <HiOutlineInformationCircle
          aria-hidden="true"
          size={15}
          className="text-font-subtle"
        />
      </div>
      <input
        id="testcard-design-url"
        className={`mt-[11px] h-[37px] border-2 ${fieldClass}`}
        placeholder="https://www.figma.com/file/"
      />
    </div>

    {/* Actions */}
    <div className="flex gap-[17px] pl-6 pt-[22px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h4 className="px-5 pb-[62px] pt-[46px] font-primary-bold text-xs text-font-subtle">
      Recent Breakdowns
    </h4>
  </div>
);
