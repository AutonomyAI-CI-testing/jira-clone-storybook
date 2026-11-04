import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static recreation of the "UI magician Agent" Figma frame.
 *
 * Self-contained smoke-test component: no props, no state, nothing wired up.
 * The colours are fixed values taken from the raw palette in
 * `src/app/styles/app.css` because no semantic role resolves to this frame's
 * dark ground or its orange, and the panel is meant to look the same in every
 * theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral-100)] px-10 py-10 font-primary text-[color:var(--DarkNeutral700)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <FiSettings aria-hidden="true" className="h-6 w-6" />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <span
        role="img"
        aria-label="Collapse section"
        className="flex shrink-0 text-[color:var(--DarkNeutral1100)]"
      >
        <FiChevronUp aria-hidden="true" className="h-5 w-5" />
      </span>
      <p className="truncate text-lg">From entire frame to a singl...</p>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <span
        role="img"
        aria-label="Collapse section"
        className="flex shrink-0 text-[color:var(--DarkNeutral1100)]"
      >
        <FiChevronUp aria-hidden="true" className="h-6 w-6" />
      </span>
      <h2 className="font-primary-bold text-2xl text-[color:var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <div className="mt-10 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-access-token" className="text-lg">
          Personal Access Token
        </label>
        <FiInfo aria-hidden="true" className="h-5 w-5 shrink-0" />
      </div>
      <input
        id="test-card-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="w-full rounded-md border border-[color:var(--DarkNeutral350)] bg-[var(--DarkNeutral100)] px-4 py-5 text-lg text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral600)]"
      />
    </div>

    <div className="mt-5 flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-design-url" className="text-lg">
          Design URL
        </label>
        <FiInfo aria-hidden="true" className="h-5 w-5 shrink-0" />
      </div>
      <input
        id="test-card-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="w-full rounded-md border border-[color:var(--DarkNeutral350)] bg-[var(--DarkNeutral100)] px-4 py-5 text-lg text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral600)]"
      />
    </div>

    <div className="mt-10 flex gap-9">
      <button
        type="button"
        className="w-[168px] rounded-lg bg-[var(--Orange800)] px-4 py-5 text-lg text-[color:var(--DarkNeutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[168px] rounded-lg bg-[var(--Orange800)] px-4 py-5 text-lg text-[color:var(--DarkNeutral600)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-2xl text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
