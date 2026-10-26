import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldClass =
  "mt-3 h-[64px] w-full rounded-sm border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral200)] px-4 text-[17px] text-[var(--DarkNeutral900)] placeholder:text-[var(--DarkNeutral600)]";

const buttonClass =
  "h-[64px] w-[170px] rounded-sm bg-[var(--Orange800)] font-primary-bold text-[19px] text-[var(--Orange300)]";

const labelClass =
  "flex items-center gap-2 font-primary-bold text-[17px] text-[var(--DarkNeutral800)]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] rounded-md border border-[var(--DarkNeutral300A)] bg-[var(--DarkNeutral100)] p-10 font-primary-light text-[var(--DarkNeutral900)]"
    >
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-primary-bold text-[20px] leading-tight text-[var(--DarkNeutral1100)]">
          UI magician Agent
        </h2>
        <FiSettings
          aria-hidden
          className="shrink-0 text-[22px] text-[var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-6 flex items-center gap-2 text-[16px] text-[var(--DarkNeutral700)]">
        <FiChevronUp aria-hidden className="shrink-0 text-[18px]" />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <FiChevronUp
          aria-hidden
          className="shrink-0 text-[22px] text-[var(--DarkNeutral900)]"
        />
        <h3 className="font-primary-bold text-[24px] text-[var(--DarkNeutral1100)]">
          Add New Design
        </h3>
      </div>

      <label className="mt-8 block">
        <span className={labelClass}>
          Personal Access Token
          <FiInfo aria-hidden className="shrink-0" />
        </span>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className={fieldClass}
        />
      </label>

      <label className="mt-5 block">
        <span className={labelClass}>
          Design URL
          <FiInfo aria-hidden className="shrink-0" />
        </span>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className={fieldClass}
        />
      </label>

      <div className="mt-8 flex gap-9 pl-12">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <h3 className="mt-24 font-primary-bold text-[24px] text-[var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h3>
    </div>
  );
};
