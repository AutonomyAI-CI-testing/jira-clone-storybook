import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static smoke-test component built from the "UI magician Agent" Figma frame.
 * Self-contained on purpose: no props, no state, no route wiring.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black pb-5"
  >
    <div className="h-[9px] w-full bg-[var(--DarkNeutral-100)]" />

    <div className="flex flex-col px-5 pt-[11px]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
          UI magician Agent
        </span>
        <FaCog size={16} className="text-[color:var(--Neutral400)]" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
        <FaChevronUp size={8} className="text-[color:var(--Neutral400)]" />
        <span className="text-2xs font-primary-bold text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-[5px] pl-[6px]">
        <FaChevronUp size={12} className="text-[color:var(--Neutral400)]" />
        <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-4">
        <label
          htmlFor="test-card-token"
          className="text-2xs font-primary-bold text-[color:var(--DarkNeutral800)]"
        >
          Personal Access Token
        </label>
        <FaInfoCircle size={15} className="text-[color:var(--Neutral400)]" />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full rounded-none border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px] text-2xs text-[color:var(--Neutral400)] placeholder:text-[color:var(--Neutral700)]"
      />

      <div className="mt-[11px] flex items-center gap-4">
        <label
          htmlFor="test-card-url"
          className="text-2xs font-primary-bold text-[color:var(--DarkNeutral800)]"
        >
          Design URL
        </label>
        <FaInfoCircle size={15} className="text-[color:var(--Neutral400)]" />
      </div>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full rounded-none border-2 border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[18px] text-2xs text-[color:var(--Neutral400)] placeholder:text-[color:var(--Neutral700)]"
      />

      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] cursor-pointer rounded bg-[var(--Orange800)] text-center text-2xs font-primary-bold text-[color:var(--Neutral600)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] cursor-pointer rounded bg-[var(--Orange800)] text-center text-2xs font-primary-bold text-[color:var(--Neutral600)]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-[47px] text-xs font-primary-bold text-[color:var(--DarkNeutral800)]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
