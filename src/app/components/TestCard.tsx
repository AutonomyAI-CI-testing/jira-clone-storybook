import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[508px] bg-[var(--DarkNeutral-100)] p-6">
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px] text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <FiSettings
        aria-hidden
        className="text-[var(--DarkNeutral1100)]"
        size={24}
      />
    </div>

    {/* Collapsible row */}
    <div className="mt-6 flex items-center gap-2">
      <FiChevronUp
        aria-hidden
        className="shrink-0 text-[var(--DarkNeutral700)]"
        size={22}
      />
      <span className="min-w-0 truncate font-primary text-base text-[var(--DarkNeutral700)]">
        From entire frame to a single component
      </span>
    </div>

    {/* Section header */}
    <div className="mt-24 flex items-center gap-2">
      <FiChevronUp
        aria-hidden
        className="shrink-0 text-[var(--DarkNeutral1100)]"
        size={22}
      />
      <h2 className="font-primary-bold text-[22px] text-[var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-token"
          className="font-primary text-base text-[var(--DarkNeutral1100)]"
        >
          Personal Access Token
        </label>
        <FiInfo
          aria-hidden
          className="text-[var(--DarkNeutral1100)]"
          size={18}
        />
      </div>
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-2 w-full rounded border border-[var(--DarkNeutral500)] bg-transparent px-4 py-3 font-primary text-base text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-6">
      <div className="flex items-center gap-2">
        <label
          htmlFor="test-card-url"
          className="font-primary text-base text-[var(--DarkNeutral1100)]"
        >
          Design URL
        </label>
        <FiInfo
          aria-hidden
          className="text-[var(--DarkNeutral1100)]"
          size={18}
        />
      </div>
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-2 w-full rounded border border-[var(--DarkNeutral500)] bg-transparent px-4 py-3 font-primary text-base text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]"
      />
    </div>

    {/* Actions */}
    <div className="mt-8 flex gap-4">
      <button
        type="button"
        className="flex-1 rounded bg-[var(--Orange700)] px-4 py-3 font-primary-bold text-lg text-[var(--Orange300)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex-1 rounded bg-[var(--Orange700)] px-4 py-3 font-primary-bold text-lg text-[var(--Orange300)]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-24 font-primary-bold text-[22px] text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
