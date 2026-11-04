import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke test: reproduces the "UI magician Agent" panel from the attached Figma
 * frame. Self-contained — no props, no state, no data.
 *
 * Every colour is a raw palette variable applied as an arbitrary value, because
 * the frame's near-black surfaces and burnt-orange buttons have no semantic role
 * in this token set, and the panel is a fixed-appearance reproduction that must
 * not re-theme.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-full max-w-[508px] bg-[var(--DarkNeutral0)] p-6 font-primary text-white"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <FiSettings
        aria-hidden
        size={26}
        className="shrink-0 text-[var(--DarkNeutral700)]"
      />
    </div>

    {/* Collapsed section */}
    <div className="mt-5 flex items-center gap-2 text-[var(--DarkNeutral700)]">
      <FiChevronUp aria-hidden size={20} className="shrink-0" />
      <span className="truncate text-lg">
        From entire frame to a single component…
      </span>
    </div>

    {/* Section */}
    <div className="mt-32 flex items-center gap-2">
      <FiChevronUp aria-hidden size={22} className="shrink-0" />
      <h3 className="font-primary-black text-xl">Add New Design</h3>
    </div>

    {/* Personal Access Token */}
    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testElem-access-token"
          className="font-primary-bold text-lg"
        >
          Personal Access Token
        </label>
        <FiInfo aria-hidden size={22} className="shrink-0" />
      </div>
      <input
        id="testElem-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border-2 border-[var(--Neutral700)] bg-[var(--DarkNeutral100)] px-3 py-4 text-lg placeholder:text-[var(--DarkNeutral600)]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-5">
      <div className="flex items-center gap-2">
        <label
          htmlFor="testElem-design-url"
          className="font-primary-bold text-lg"
        >
          Design URL
        </label>
        <FiInfo aria-hidden size={22} className="shrink-0" />
      </div>
      <input
        id="testElem-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border-2 border-[var(--Neutral700)] bg-[var(--DarkNeutral100)] px-3 py-4 text-lg placeholder:text-[var(--DarkNeutral600)]"
      />
    </div>

    {/* Actions */}
    <div className="mt-6 flex gap-8">
      <button
        type="button"
        className="rounded bg-[var(--Orange800)] px-8 py-4 font-primary-bold text-lg text-[var(--Red400)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="rounded bg-[var(--Orange800)] px-8 py-4 font-primary-bold text-lg text-[var(--Red400)]"
      >
        Prepare
      </button>
    </div>

    {/* Footer */}
    <h3 className="mt-16 font-primary-black text-xl">Recent Breakdowns</h3>
  </div>
);
