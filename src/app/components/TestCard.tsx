import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test card built from the Figma frame "Test Page - Simple".
 * Deliberately self-contained: no props, no state, no data.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral-100)] px-10 pb-28 pt-8 font-primary text-[var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <span className="text-2xl">UI magician Agent</span>
      <FiSettings aria-hidden size={24} />
    </div>

    <div className="mt-8 flex items-center gap-3 text-[var(--DarkNeutral800)]">
      <FiChevronUp aria-hidden size={20} />
      <span className="text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-32 flex items-center gap-3">
      <FiChevronUp aria-hidden size={24} />
      <span className="font-primary-bold text-2xl">Add New Design</span>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <label htmlFor="testElem-token" className="text-lg">
        Personal Access Token
      </label>
      <FiInfo aria-hidden size={20} />
    </div>
    <input
      id="testElem-token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className="mt-4 h-[52px] w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral100)] px-4 text-lg text-[var(--DarkNeutral900)] placeholder:text-[var(--DarkNeutral700)]"
    />

    <div className="mt-6 flex items-center gap-3">
      <label htmlFor="testElem-design-url" className="text-lg">
        Design URL
      </label>
      <FiInfo aria-hidden size={20} />
    </div>
    <input
      id="testElem-design-url"
      placeholder="https://www.figma.com/file/"
      className="mt-4 h-[52px] w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral100)] px-4 text-lg text-[var(--DarkNeutral900)] placeholder:text-[var(--DarkNeutral700)]"
    />

    <div className="mt-10 flex gap-3">
      <button
        type="button"
        className="rounded-lg bg-[#a83e1e] px-10 py-4 text-lg text-[var(--DarkNeutral700)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded-lg bg-[#a83e1e] px-10 py-4 text-lg text-[var(--DarkNeutral700)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-20 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
