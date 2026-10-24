import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Self-contained reproduction of the "UI magician Agent" Figma frame.
 * Smoke-test artifact: no props, no state, no interactivity.
 *
 * Colours come from the palette custom properties declared in
 * `src/app/styles/app.css` — the frame is a dark UI whose near-black surfaces
 * and rust buttons have no equivalent in this repo's semantic role set.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-[var(--DarkNeutral100)] px-[40px] py-[40px] font-primary text-[var(--DarkNeutral1000)]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[26px] leading-none">
          UI magician Agent
        </h1>
        <FiSettings aria-hidden="true" className="mt-[2px] h-7 w-7 shrink-0" />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-[38px] flex items-center gap-[14px]">
        <FiChevronUp aria-hidden="true" className="h-6 w-6 shrink-0" />
        <span className="min-w-0 truncate text-[20px]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[150px] flex items-center gap-[10px]">
        <FiChevronUp aria-hidden="true" className="h-7 w-7 shrink-0" />
        <h2 className="font-primary-bold text-[24px] leading-none">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[58px]">
        <div className="flex items-center gap-[14px]">
          <label htmlFor="test-card-token" className="text-[19px]">
            Personal Access Token
          </label>
          <FiInfo aria-hidden="true" className="h-[22px] w-[22px] shrink-0" />
        </div>
        <input
          id="test-card-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-[26px] h-[68px] w-full rounded-[2px] border-2 border-[var(--Neutral500)] bg-[var(--DarkNeutral250)] px-[38px] text-[19px] placeholder:text-[var(--DarkNeutral700)] focus:outline-none"
        />
      </div>

      {/* Design URL */}
      <div className="mt-[46px]">
        <div className="flex items-center gap-[14px]">
          <label htmlFor="test-card-url" className="text-[19px]">
            Design URL
          </label>
          <FiInfo aria-hidden="true" className="h-[22px] w-[22px] shrink-0" />
        </div>
        <input
          id="test-card-url"
          readOnly
          placeholder="https://www.figma.com/file:"
          className="mt-[26px] h-[70px] w-full rounded-[2px] border-2 border-[var(--Neutral500)] bg-[var(--DarkNeutral250)] px-[38px] text-[19px] placeholder:text-[var(--DarkNeutral700)] focus:outline-none"
        />
      </div>

      {/* Actions */}
      <div className="mt-[48px] flex justify-center gap-[35px]">
        <button
          type="button"
          className="h-[75px] w-[170px] rounded-[8px] bg-[var(--Orange800)] text-[22px] text-[var(--DarkNeutral900)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[75px] w-[170px] rounded-[8px] bg-[var(--Orange800)] text-[22px] text-[var(--DarkNeutral900)]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[96px] font-primary-bold text-[24px] leading-none">
        Recent Breakdowns
      </h2>
    </div>
  );
};
