import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

/**
 * Smoke-test card. Self-contained: no props, no state, no data.
 * Reproduces the layout of the "UI magician Agent" Figma frame.
 */
export const TestCard = (): JSX.Element => {
  const headingClass =
    "font-primary-bold text-xs text-[color:var(--Neutral400)]";
  const labelClass = "text-2xs text-[color:var(--Neutral400)]";
  const fieldClass =
    "h-9 w-full rounded border border-[color:var(--Neutral400)] bg-[var(--DarkNeutral200)] px-5 text-2xs text-[color:var(--Neutral400)] outline-none placeholder:text-[color:var(--Neutral500)]";
  const buttonClass =
    "flex h-9 w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs text-[color:var(--Neutral600)]";

  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[var(--DarkNeutral0)] px-5 pb-10 pt-5 font-primary text-[color:var(--Neutral400)]"
    >
      <div className="flex items-center justify-between">
        <span className={headingClass}>UI magician Agent</span>
        <HiOutlineCog size={16} aria-hidden="true" />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp size={12} className="shrink-0" aria-hidden="true" />
        <span className="truncate text-2xs text-[color:var(--Neutral500)]">
          From entire frame to a single design
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <HiChevronUp size={14} className="shrink-0" aria-hidden="true" />
        <span className={headingClass}>Add New Design</span>
      </div>

      <div className="mt-7 flex items-center gap-5">
        <span className={labelClass}>Personal Access Token</span>
        <HiOutlineInformationCircle size={15} aria-hidden="true" />
      </div>
      <input
        readOnly
        className={`mt-3 ${fieldClass}`}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <div className="mt-3 flex items-center gap-5">
        <span className={labelClass}>Design URL</span>
        <HiOutlineInformationCircle size={15} aria-hidden="true" />
      </div>
      <input
        readOnly
        className={`mt-3 ${fieldClass}`}
        placeholder="https://www.figma.com/file/:"
      />

      <div className="mt-5 flex justify-center gap-4">
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
