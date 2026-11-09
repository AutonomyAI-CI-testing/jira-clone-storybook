import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[color:var(--DarkNeutral-100)] pb-[61px] text-[color:var(--DarkNeutral900)]"
  >
    <div className="h-[9px] w-full bg-black" />

    <div className="flex flex-col px-5">
      <div className="flex items-center justify-between pt-[11px]">
        <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
          UI magician Agent
        </span>
        <FaCog
          aria-hidden="true"
          size={16}
          className="text-[color:var(--Neutral400)]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FaChevronUp
          aria-hidden="true"
          size={10}
          className="text-[color:var(--Neutral500)]"
        />
        <span className="text-2xs font-primary-bold text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <FaChevronUp
          aria-hidden="true"
          size={12}
          className="text-[color:var(--Neutral400)]"
        />
        <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-2xs font-primary-bold text-[color:var(--DarkNeutral800)]">
            Personal Access Token
          </span>
          <FaInfoCircle
            aria-hidden="true"
            size={15}
            className="text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <input
          readOnly
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-9 w-full rounded border border-[color:var(--DarkNeutral800)] bg-[color:var(--DarkNeutral200)] px-3 text-2xs text-[color:var(--Neutral400)] placeholder:text-[color:var(--Neutral700)]"
        />
      </div>

      <div className="mt-[11px] flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-2xs font-primary-bold text-[color:var(--DarkNeutral800)]">
            Design URL
          </span>
          <FaInfoCircle
            aria-hidden="true"
            size={15}
            className="text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <input
          readOnly
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="h-[37px] w-full rounded border-2 border-[color:var(--DarkNeutral800)] bg-[color:var(--DarkNeutral200)] px-3 text-2xs text-[color:var(--Neutral400)] placeholder:text-[color:var(--Neutral700)]"
        />
      </div>

      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[color:var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Neutral600)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[color:var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Neutral600)]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px]">
        <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  </div>
);
