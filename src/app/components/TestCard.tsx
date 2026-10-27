import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static reproduction of the Figma "Add New Design" panel.
 *
 * Self-contained smoke-test component: takes no props, holds no state and has
 * no interactivity. Colours use the raw ramp variables declared in
 * `src/app/styles/app.css`, which are theme-independent, so the panel keeps its
 * dark look under whichever theme is active.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[color:var(--DarkNeutral0)] px-10 pb-16 pt-12 font-primary-light text-base text-[color:var(--DarkNeutral1000)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Agent settings"
        className="text-[color:var(--DarkNeutral1000)]"
      >
        <FaCog size={22} />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <FaChevronUp size={16} aria-hidden />
      <span className="truncate">From entire frame to a singl…</span>
    </div>

    <h2 className="mt-40 flex items-center gap-3 font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
      <FaChevronUp size={18} aria-hidden />
      Add New Design
    </h2>

    <div className="mt-16 flex items-center gap-3">
      <label htmlFor="test-card-access-token">Personal Access Token</label>
      <FaInfoCircle size={18} aria-hidden />
    </div>
    <input
      id="test-card-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-8 h-[68px] w-full rounded border-2 border-[color:var(--DarkNeutral600)] bg-[color:var(--DarkNeutral250)] px-9 outline-none placeholder:text-[color:var(--DarkNeutral600)]"
    />

    <div className="mt-8 flex items-center gap-3">
      <label htmlFor="test-card-design-url">Design URL</label>
      <FaInfoCircle size={18} aria-hidden />
    </div>
    <input
      id="test-card-design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className="mt-8 h-[68px] w-full rounded border-2 border-[color:var(--DarkNeutral600)] bg-[color:var(--DarkNeutral250)] px-9 outline-none placeholder:text-[color:var(--DarkNeutral600)]"
    />

    <div className="mt-12 flex justify-center gap-8">
      <button
        type="button"
        className="h-[72px] w-[170px] rounded-lg bg-[color:var(--Orange800)] font-primary text-[color:var(--DarkNeutral900)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[72px] w-[170px] rounded-lg bg-[color:var(--Orange800)] font-primary text-[color:var(--DarkNeutral900)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
