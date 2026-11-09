import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Smoke test: a static reproduction of the "UI magician Agent" Figma frame.
 * Self-contained, no props, not wired into the app.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[var(--DarkNeutral-100)] font-primary"
  >
    <div className="h-[9px] w-full bg-black" />

    <div className="flex items-start justify-between px-5 pt-[11px]">
      <h2 className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer bg-transparent p-0 text-[color:var(--Neutral400)]"
      >
        <FaCog size={16} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2 px-5">
      <FaChevronUp
        size={10}
        aria-hidden="true"
        className="shrink-0 text-[color:var(--Neutral500)]"
      />
      <span className="font-primary-bold text-2xs text-[color:var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-2 px-5">
      <FaChevronUp
        size={12}
        aria-hidden="true"
        className="shrink-0 text-[color:var(--Neutral400)]"
      />
      <h3 className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
        Add New Design
      </h3>
    </div>

    <div className="mt-7 px-5">
      <div className="mb-[10px] flex items-center gap-2">
        <label
          htmlFor="test-card-token"
          className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]"
        >
          Personal Access Token
        </label>
        <FaInfoCircle
          size={14}
          aria-hidden="true"
          className="text-[color:var(--DarkNeutral800)]"
        />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-4 font-primary-bold text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
      />
    </div>

    <div className="mt-[11px] px-5">
      <div className="mb-[9px] flex items-center gap-2">
        <label
          htmlFor="test-card-url"
          className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]"
        >
          Design URL
        </label>
        <FaInfoCircle
          size={14}
          aria-hidden="true"
          className="text-[color:var(--DarkNeutral800)]"
        />
      </div>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className="h-[37px] w-full border-2 border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-4 font-primary-bold text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
      />
    </div>

    <div className="mt-[22px] flex gap-4 pl-11">
      <button
        type="button"
        className="h-[37px] w-[85px] cursor-pointer rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] cursor-pointer rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-[47px] px-5 font-primary-bold text-xs text-[color:var(--Neutral400)]">
      Recent Breakdowns
    </h3>
  </div>
);
