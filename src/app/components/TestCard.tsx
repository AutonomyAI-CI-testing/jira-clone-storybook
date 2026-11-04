import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col rounded-md bg-[color:var(--DarkNeutral0)] p-10 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h2>
      <FiSettings
        size={28}
        aria-hidden
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
      />
    </div>

    <div className="mt-12 flex items-center gap-3">
      <FiChevronUp
        size={24}
        aria-hidden
        className="shrink-0 text-[color:var(--DarkNeutral900)]"
      />
      <span className="truncate text-lg">From entire frame to a singl...</span>
    </div>

    <div className="mt-36 flex items-center gap-3">
      <FiChevronUp
        size={28}
        aria-hidden
        className="shrink-0 text-[color:var(--DarkNeutral1100)]"
      />
      <h3 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
        Add New Design
      </h3>
    </div>

    <div className="mt-14">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-personal-access-token" className="text-lg">
          Personal Access Token
        </label>
        <FiInfo size={22} aria-hidden className="shrink-0" />
      </div>
      <input
        id="test-card-personal-access-token"
        name="personal-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className="mt-8 w-full rounded border border-[color:var(--DarkNeutral600)] bg-[color:var(--DarkNeutral100)] p-4 text-lg text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2">
        <label htmlFor="test-card-design-url" className="text-lg">
          Design URL
        </label>
        <FiInfo size={22} aria-hidden className="shrink-0" />
      </div>
      <input
        id="test-card-design-url"
        name="design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-8 w-full rounded border border-[color:var(--DarkNeutral600)] bg-[color:var(--DarkNeutral100)] p-4 text-lg text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-14 flex items-center gap-8 px-12">
      <button
        type="button"
        className="w-[170px] rounded-md bg-[color:var(--Orange800)] py-6 text-center text-lg text-[color:var(--DarkNeutral800)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[170px] rounded-md bg-[color:var(--Orange800)] py-6 text-center text-lg text-[color:var(--DarkNeutral800)]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h3>
  </div>
);
