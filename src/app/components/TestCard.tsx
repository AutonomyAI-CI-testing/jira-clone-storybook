import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => {
  const headingClass =
    "font-primary-bold text-xs text-[color:var(--Neutral400)]";
  const metaClass = "font-primary-bold text-2xs text-[color:var(--Neutral500)]";
  const rowClass = "flex items-center gap-[9px]";
  const inputClass =
    "mt-3 h-9 w-full rounded border border-[color:var(--DarkNeutral800)] bg-[color:var(--DarkNeutral200)] px-[19px] font-primary-bold text-2xs text-[color:var(--Neutral600)]";
  const buttonClass =
    "h-[37px] w-[85px] rounded bg-[color:var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]";

  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pt-5 pb-5 font-primary text-2xs"
    >
      <div className="flex items-center justify-between">
        <span className={headingClass}>UI magician Agent</span>
        <FiSettings
          aria-hidden="true"
          className="h-4 w-[14px] text-[color:var(--Neutral400)]"
        />
      </div>

      <div className={`mt-[18px] ${rowClass}`}>
        <FiChevronUp
          aria-hidden="true"
          className="h-[5px] w-2 text-[color:var(--Neutral600)]"
        />
        <span className="font-primary-bold text-2xs text-[color:var(--Neutral600)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px]">
        <FiChevronUp
          aria-hidden="true"
          className="h-2 w-3 text-[color:var(--Neutral400)]"
        />
        <span className={headingClass}>Add New Design</span>
      </div>

      <label className={`mt-7 ${rowClass}`}>
        <span className={metaClass}>Personal Access Token</span>
        <FiInfo
          aria-hidden="true"
          className="h-[15px] w-[15px] text-[color:var(--Neutral500)]"
        />
      </label>
      <input
        readOnly
        defaultValue="figd_xxxxxxxxxxxxxxxxxx"
        className={inputClass}
      />

      <label className={`mt-3 ${rowClass}`}>
        <span className={metaClass}>Design URL</span>
        <FiInfo
          aria-hidden="true"
          className="h-[15px] w-[15px] text-[color:var(--Neutral500)]"
        />
      </label>
      <input
        readOnly
        defaultValue="https://www.figma.com/file/:"
        className={`${inputClass} h-[37px] border-2`}
      />

      <div className="mt-[22px] flex items-center gap-[17px] pl-6">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <span className={`mt-[46px] ${headingClass}`}>Recent Breakdowns</span>
    </div>
  );
};
