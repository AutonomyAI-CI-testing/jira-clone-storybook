import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Smoke test: a static reproduction of the supplied Figma frame.
 * Self-contained by design — no props, no state, no handlers.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pb-5 pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
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

    <div className="mt-7">
      <div className="flex items-center justify-between">
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
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-2 text-2xs text-[color:var(--Neutral700)] outline-none placeholder:text-[color:var(--Neutral700)]"
      />
    </div>

    <div className="mt-3">
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
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-9 w-full border-2 border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-2 text-2xs text-[color:var(--Neutral700)] outline-none placeholder:text-[color:var(--Neutral700)]"
      />
    </div>

    <div className="mt-[22px] flex gap-4 pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Neutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Neutral600)]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-[47px] text-xs font-primary-bold text-[color:var(--Neutral400)]">
      Recent Breakdowns
    </span>
  </div>
);
