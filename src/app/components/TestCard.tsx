import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Smoke-test component: a static reproduction of the "UI magician Agent" Figma
 * panel. Self-contained — no props, no state, no side effects. The panel pins
 * its own dark colours on purpose, so it does not re-skin with the app theme.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black font-primary text-2xs text-[color:var(--Neutral400)]"
  >
    <div className="h-[9px] w-full bg-[var(--DarkNeutral100)]" />

    <div className="px-5 pt-3">
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          UI magician Agent
        </span>
        <FaCog
          size={14}
          aria-hidden="true"
          className="text-[color:var(--Neutral500)]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2 pl-1">
        <FaChevronUp
          size={8}
          aria-hidden="true"
          className="text-[color:var(--Neutral500)]"
        />
        <span className="text-2xs text-[color:var(--Neutral500)]">
          From entire frame to a singl…
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-1 pl-1.5">
        <FaChevronUp
          size={12}
          aria-hidden="true"
          className="text-[color:var(--Neutral400)]"
        />
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px]">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-token"
            className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]"
          >
            Personal Access Token
          </label>
          <FaInfoCircle
            size={15}
            aria-hidden="true"
            className="text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <input
          id="test-card-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-4 text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
        />
      </div>

      <div className="mt-3">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-url"
            className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]"
          >
            Design URL
          </label>
          <FaInfoCircle
            size={15}
            aria-hidden="true"
            className="text-[color:var(--DarkNeutral800)]"
          />
        </div>
        <input
          id="test-card-url"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-9 w-full border-2 border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-4 text-2xs text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]"
        />
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
        >
          Prepare
        </button>
      </div>

      <h3 className="mt-[47px] pb-6 font-primary-bold text-xs text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </h3>
    </div>
  </div>
);
