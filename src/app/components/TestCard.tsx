import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static recreation of the "UI magician Agent" panel from the Figma frame.
 *
 * Deliberately self-contained — no props, no state, no data — because it exists
 * to check that the design renders end to end. The frame is a near-black panel
 * with rust buttons, which no semantic role in this theme covers, so the
 * colours are taken from the raw palette through arbitrary values.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-10 py-12 font-primary text-[color:var(--DarkNeutral1100)]"
  >
    <header className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded-full p-1 text-[color:var(--DarkNeutral1000)] transition-colors hover:bg-white/10"
      >
        <FiSettings aria-hidden="true" size={22} />
      </button>
    </header>

    <div className="mt-6 flex items-center gap-2 text-lg text-[color:var(--DarkNeutral900)]">
      <FiChevronUp aria-hidden="true" size={20} />
      <span>From entire frame to a singl...</span>
    </div>

    <section className="mt-16">
      <h2 className="flex items-center gap-2 font-primary-bold text-2xl">
        <FiChevronUp aria-hidden="true" size={24} />
        Add New Design
      </h2>

      <div className="mt-8">
        <label
          htmlFor="personal-access-token"
          className="flex items-center gap-2 text-base"
        >
          Personal Access Token
          <FiInfo aria-hidden="true" size={20} />
        </label>
        <input
          id="personal-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className="mt-3 w-full rounded-md border border-border-bold bg-transparent px-3 py-4 text-base text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-8">
        <label
          htmlFor="design-url"
          className="flex items-center gap-2 text-base"
        >
          Design URL
          <FiInfo aria-hidden="true" size={20} />
        </label>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-3 w-full rounded-md border border-border-bold bg-transparent px-3 py-4 text-base text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral700)]"
        />
      </div>

      <div className="mt-8 flex gap-8">
        <button
          type="button"
          className="rounded-lg bg-[var(--Orange800)] px-10 py-5 text-lg text-[color:var(--DarkNeutral1100)] transition-colors hover:bg-[var(--Orange900)]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="rounded-lg bg-[var(--Orange800)] px-10 py-5 text-lg text-[color:var(--DarkNeutral1100)] transition-colors hover:bg-[var(--Orange900)]"
        >
          Prepare
        </button>
      </div>
    </section>

    <h2 className="mt-16 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
