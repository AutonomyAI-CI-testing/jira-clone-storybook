import { HiChevronUp, HiCog, HiInformationCircle } from "react-icons/hi";

const fieldClass =
  "mt-3 flex h-9 items-center rounded bg-[var(--DarkNeutral200)] px-3 text-2xs text-[color:var(--DarkNeutral500)]";

export const TestCard = () => {
  return (
    <div id="testElem" className="w-[254px] bg-black p-5 font-primary">
      <div className="flex items-start justify-between gap-4">
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          UI magician Agent
        </span>
        <HiCog
          size={16}
          aria-hidden="true"
          className="text-[color:var(--Neutral400)]"
        />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <HiChevronUp
          size={12}
          aria-hidden="true"
          className="text-[color:var(--DarkNeutral700)]"
        />
        <span className="text-2xs text-[color:var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <HiChevronUp
          size={16}
          aria-hidden="true"
          className="text-[color:var(--Neutral400)]"
        />
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-2">
        <span className="text-2xs text-[color:var(--DarkNeutral800)]">
          Personal Access Token
        </span>
        <HiInformationCircle
          size={15}
          aria-hidden="true"
          className="text-[color:var(--DarkNeutral800)]"
        />
      </div>
      <div
        className={`${fieldClass} border border-[color:var(--DarkNeutral800)]`}
      >
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      <div className="mt-3 flex items-center gap-2">
        <span className="text-2xs text-[color:var(--DarkNeutral800)]">
          Design URL
        </span>
        <HiInformationCircle
          size={15}
          aria-hidden="true"
          className="text-[color:var(--DarkNeutral800)]"
        />
      </div>
      <div
        className={`${fieldClass} border-2 border-[color:var(--DarkNeutral700)]`}
      >
        https://www.figma.com/file/:
      </div>

      <div className="mt-5 flex gap-4 pl-6">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs text-[color:var(--Neutral500)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs text-[color:var(--Neutral500)]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-12 font-primary-bold text-xs text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </div>
    </div>
  );
};
