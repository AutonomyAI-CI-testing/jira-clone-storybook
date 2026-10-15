import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard
 *
 * A self-contained reproduction of the "UI magician Agent" panel from the
 * reference design. It takes no props and holds no state.
 *
 * Colours are written as the nearest steps of the repo's own palette
 * (`src/app/styles/app.css`) rather than as new hex literals, because the
 * reference design is not part of this app's semantic token system and has no
 * exact match there. The dark panel and the rust buttons are approximations.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[420px] bg-[var(--DarkNeutral100)] px-8 pb-10 pt-6 font-primary text-[var(--DarkNeutral1000)]"
    >
      <header className="flex items-start justify-between">
        <h1 className="font-primary-black text-xl text-[var(--Neutral200)]">
          UI magician Agent
        </h1>
        <button
          type="button"
          aria-label="Open settings"
          className="cursor-pointer text-[var(--DarkNeutral1000)] hover:text-[var(--Neutral200)]"
        >
          <FiSettings size={22} />
        </button>
      </header>

      <div className="mt-7 flex items-center gap-3 text-[var(--Neutral500)]">
        <FiChevronUp size={18} className="shrink-0" />
        <span className="min-w-0 truncate text-base">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-32 flex items-center gap-3">
        <FiChevronUp size={26} className="shrink-0 text-[var(--Neutral200)]" />
        <h2 className="font-primary-black text-2xl text-[var(--Neutral200)]">
          Add New Design
        </h2>
      </div>

      <div className="mt-12">
        <div className="mb-3 flex items-center gap-2">
          <label
            htmlFor="testElem-token"
            className="font-primary text-base text-[var(--DarkNeutral1000)]"
          >
            Personal Access Token
          </label>
          <FiInfo
            size={16}
            aria-hidden="true"
            className="shrink-0 text-[var(--DarkNeutral1000)]"
          />
        </div>
        <input
          id="testElem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="h-14 w-full rounded-[3px] border border-[var(--Neutral500)] bg-[var(--DarkNeutral250)] px-4 font-primary text-sm text-[var(--Neutral200)] placeholder:text-[var(--Neutral500)] focus:outline-none"
        />
      </div>

      <div className="mt-6">
        <div className="mb-3 flex items-center gap-2">
          <label
            htmlFor="testElem-url"
            className="font-primary text-base text-[var(--DarkNeutral1000)]"
          >
            Design URL
          </label>
          <FiInfo
            size={16}
            aria-hidden="true"
            className="shrink-0 text-[var(--DarkNeutral1000)]"
          />
        </div>
        <input
          id="testElem-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="h-14 w-full rounded-[3px] border border-[var(--Neutral500)] bg-[var(--DarkNeutral250)] px-4 font-primary text-sm text-[var(--Neutral200)] placeholder:text-[var(--Neutral500)] focus:outline-none"
        />
      </div>

      <div className="mt-8 flex gap-5">
        <button
          type="button"
          className="h-14 flex-1 cursor-pointer rounded-[6px] bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--Neutral200)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-14 flex-1 cursor-pointer rounded-[6px] bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--Neutral200)]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-20 font-primary-black text-xl text-[var(--Neutral200)]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
