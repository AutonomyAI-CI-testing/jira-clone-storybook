import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const titleClass = "font-primary-bold text-xs text-[var(--DarkNeutral900)]";
const labelClass = "font-primary-bold text-2xs text-[var(--DarkNeutral800)]";
const inputClass =
  "w-full bg-[var(--DarkNeutral200)] px-3 py-[9px] font-primary-bold text-2xs text-[var(--DarkNeutral900)] outline-none placeholder:text-[var(--DarkNeutral600)]";
const buttonClass =
  "rounded bg-[var(--Orange800)] px-4 py-2 font-primary-bold text-2xs text-[var(--DarkNeutral900)]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[var(--DarkNeutral-100)] p-5 font-primary"
    >
      <div className="flex items-center justify-between">
        <span className={titleClass}>UI magician Agent</span>
        <IoSettingsOutline
          size={16}
          aria-hidden="true"
          className="text-[var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <IoChevronUp
          size={12}
          aria-hidden="true"
          className="shrink-0 text-[var(--DarkNeutral700)]"
        />
        <span className="truncate font-primary-bold text-2xs text-[var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-1.5 pl-1.5">
        <IoChevronUp
          size={16}
          aria-hidden="true"
          className="shrink-0 text-[var(--DarkNeutral900)]"
        />
        <span className={titleClass}>Add New Design</span>
      </div>

      <div className="mt-7">
        <div className="mb-3 flex items-center gap-1.5">
          <span className={labelClass}>Personal Access Token</span>
          <IoInformationCircleOutline
            size={15}
            aria-hidden="true"
            className="text-[var(--DarkNeutral700)]"
          />
        </div>
        <input
          className={`${inputClass} rounded border border-[color:var(--DarkNeutral800)]`}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-3">
        <div className="mb-3 flex items-center gap-1.5">
          <span className={labelClass}>Design URL</span>
          <IoInformationCircleOutline
            size={15}
            aria-hidden="true"
            className="text-[var(--DarkNeutral700)]"
          />
        </div>
        <input
          className={`${inputClass} rounded border-2 border-[color:var(--DarkNeutral700)]`}
          placeholder="https://www.figma.com/file/"
        />
      </div>

      <div className="mt-5 flex gap-4 pl-6">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <p className={`mt-[46px] ${titleClass}`}>Recent Breakdowns</p>
    </div>
  );
};
