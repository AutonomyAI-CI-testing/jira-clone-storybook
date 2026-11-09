import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static reproduction of the "UI magician Agent" frame.
 * Self-contained: no props, no state, no data. Markup and styling only.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[var(--DarkNeutral100)] p-10 font-primary text-[color:var(--DarkNeutral900)]"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl text-[color:var(--DarkNeutral1000)]">
        UI magician Agent
      </h2>
      <FiSettings
        aria-hidden="true"
        className="text-2xl text-[color:var(--DarkNeutral900)]"
      />
    </div>

    {/* Collapsed summary row */}
    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-xl text-[color:var(--DarkNeutral900)]"
      />
      <p className="truncate text-base text-[color:var(--DarkNeutral900)]">
        From entire frame to a single component
      </p>
    </div>

    {/* Add New Design */}
    <div className="mt-[176px] flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        className="shrink-0 text-xl text-[color:var(--DarkNeutral900)]"
      />
      <h3 className="font-primary-black text-xl text-[color:var(--DarkNeutral1000)]">
        Add New Design
      </h3>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[60px] flex items-center gap-2">
      <label
        htmlFor="test-card-personal-access-token"
        className="font-primary-light text-sm text-[color:var(--DarkNeutral900)]"
      >
        Personal Access Token
      </label>
      <FiInfo
        aria-hidden="true"
        className="text-xl text-[color:var(--DarkNeutral900)]"
      />
    </div>
    <input
      id="test-card-personal-access-token"
      defaultValue="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-6 h-[68px] w-full rounded border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral250)] px-10 text-sm text-[color:var(--DarkNeutral800)]"
    />

    {/* Design URL */}
    <div className="mt-8 flex items-center gap-2">
      <label
        htmlFor="test-card-design-url"
        className="font-primary-light text-sm text-[color:var(--DarkNeutral900)]"
      >
        Design URL
      </label>
      <FiInfo
        aria-hidden="true"
        className="text-xl text-[color:var(--DarkNeutral900)]"
      />
    </div>
    <input
      id="test-card-design-url"
      defaultValue="https://www.figma.com/file/"
      className="mt-6 h-[68px] w-full rounded border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral250)] px-10 text-sm text-[color:var(--DarkNeutral800)]"
    />

    {/* Actions */}
    <div className="mt-12 flex justify-center gap-9">
      <button
        type="button"
        className="h-[66px] w-[168px] rounded-md bg-[var(--Orange800)] text-lg text-[color:var(--DarkNeutral1000)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[66px] w-[168px] rounded-md bg-[var(--Orange800)] text-lg text-[color:var(--DarkNeutral1000)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h3 className="mt-[104px] font-primary-black text-xl text-[color:var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h3>
  </div>
);
