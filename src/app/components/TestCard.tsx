import {
  IoChevronUp,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

/**
 * Smoke-test card: a self-contained reproduction of the "UI magician Agent"
 * settings frame. No props, no state — it renders a fixed layout so it can be
 * put on screen and inspected.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[var(--DarkNeutral0)] px-10 py-12 font-primary text-base text-[color:var(--DarkNeutral1000)]"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px] text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <IoSettingsOutline
        aria-hidden="true"
        size={26}
        className="shrink-0 text-[color:var(--DarkNeutral1000)]"
      />
    </header>

    <div className="mt-7 flex items-center gap-2">
      <IoChevronUp
        aria-hidden="true"
        size={20}
        className="shrink-0 text-[color:var(--DarkNeutral900)]"
      />
      <span className="truncate text-[color:var(--DarkNeutral800)]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-8 h-px w-full bg-[var(--DarkNeutral250)]" />

    <section className="mt-9">
      <div className="flex items-center gap-3">
        <IoChevronUp
          aria-hidden="true"
          size={22}
          className="shrink-0 text-[color:var(--DarkNeutral1000)]"
        />
        <h2 className="font-primary-bold text-[19px] text-[color:var(--DarkNeutral1100)]">
          Add New Design
        </h2>
      </div>

      <div className="mt-12">
        <div className="mb-6 flex items-center gap-2">
          <label
            htmlFor="testElem-access-token"
            className="text-[color:var(--DarkNeutral700)]"
          >
            Personal Access Token
          </label>
          <IoInformationCircleOutline
            aria-hidden="true"
            size={22}
            className="shrink-0 text-[color:var(--DarkNeutral700)]"
          />
        </div>
        <input
          id="testElem-access-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="h-[88px] w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-12 text-[17px] text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral500)]"
        />
      </div>

      <div className="mt-6">
        <div className="mb-6 flex items-center gap-2">
          <label
            htmlFor="testElem-design-url"
            className="text-[color:var(--DarkNeutral700)]"
          >
            Design URL
          </label>
          <IoInformationCircleOutline
            aria-hidden="true"
            size={22}
            className="shrink-0 text-[color:var(--DarkNeutral700)]"
          />
        </div>
        <input
          id="testElem-design-url"
          readOnly
          placeholder="https://www.figma.com/file/"
          className="h-[88px] w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral250)] px-12 text-[17px] text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral500)]"
        />
      </div>

      <div className="mt-11 flex gap-8 pl-12">
        <button
          type="button"
          className="h-[74px] flex-1 rounded-lg bg-[var(--Orange800)] text-[19px] text-[color:var(--DarkNeutral1000)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[74px] flex-1 rounded-lg bg-[var(--Orange800)] text-[19px] text-[color:var(--DarkNeutral1000)]"
        >
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-16 font-primary-bold text-[22px] text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
