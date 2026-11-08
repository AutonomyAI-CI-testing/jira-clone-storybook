import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

export const TestCard = (): JSX.Element => {
  const buttonClass =
    "h-[37px] w-[85px] rounded-[4px] bg-[var(--Orange800)] font-primary text-2xs text-[color:var(--Neutral600)]";

  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[var(--DarkNeutral0)] font-primary"
    >
      <div className="h-[9px] w-full bg-[linear-gradient(180deg,var(--DarkNeutral200),var(--DarkNeutral0))]" />

      <div className="flex flex-col px-5 pt-[11px]">
        <div className="flex items-center justify-between">
          <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
            UI magician Agent
          </span>
          <HiOutlineCog
            size={16}
            className="shrink-0 text-[color:var(--Neutral400)]"
          />
        </div>

        <div className="mt-[18px] flex items-center gap-2">
          <HiChevronUp
            size={12}
            aria-hidden="true"
            className="shrink-0 text-[color:var(--Neutral500)]"
          />
          <span className="min-w-0 truncate text-2xs text-[color:var(--Neutral500)]">
            From entire frame to a single element
          </span>
        </div>

        <div className="mt-[77px] flex items-center gap-2">
          <HiChevronUp
            size={14}
            aria-hidden="true"
            className="shrink-0 text-[color:var(--Neutral400)]"
          />
          <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
            Add New Design
          </span>
        </div>

        <div className="mt-[28px] flex items-center gap-5">
          <span className="text-2xs text-[color:var(--DarkNeutral800)]">
            Personal Access Token
          </span>
          <HiOutlineInformationCircle
            size={15}
            aria-hidden="true"
            className="shrink-0 text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <input
          readOnly
          type="text"
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[12px] h-[36px] w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] pl-[19px] text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
        />

        <div className="mt-[11px] flex items-center gap-5">
          <span className="text-2xs text-[color:var(--DarkNeutral800)]">
            Design URL
          </span>
          <HiOutlineInformationCircle
            size={15}
            aria-hidden="true"
            className="shrink-0 text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <input
          readOnly
          type="text"
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className="mt-[11px] h-[37px] w-full border-2 border-[color:var(--Neutral500)] bg-[var(--DarkNeutral200)] pl-[20px] text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
        />

        <div className="mt-[23px] flex justify-end gap-[17px]">
          <button type="button" className={buttonClass}>
            Awesome
          </button>
          <button type="button" className={buttonClass}>
            Prepare
          </button>
        </div>

        <span className="mt-[46px] font-primary-bold text-xs text-[color:var(--Neutral400)]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
