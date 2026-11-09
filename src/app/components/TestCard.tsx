import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral-100)] px-10 py-9 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1000)]">
        UI magician Agent
      </h2>
      <FiSettings
        aria-hidden="true"
        size={26}
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
      />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        size={22}
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
      />
      <p className="truncate text-base">From entire frame to a single component</p>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        size={26}
        className="shrink-0 text-[color:var(--DarkNeutral1000)]"
      />
      <h3 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1000)]">
        Add New Design
      </h3>
    </div>

    <div className="mt-10 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-token" className="text-base">
          Personal Access Token
        </label>
        <FiInfo
          aria-hidden="true"
          size={22}
          className="shrink-0 text-[color:var(--DarkNeutral800)]"
        />
      </div>
      <input
        id="test-card-token"
        readOnly
        defaultValue="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="h-[72px] w-full rounded border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-6 text-base text-[color:var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-10 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <label htmlFor="test-card-url" className="text-base">
          Design URL
        </label>
        <FiInfo
          aria-hidden="true"
          size={22}
          className="shrink-0 text-[color:var(--DarkNeutral800)]"
        />
      </div>
      <input
        id="test-card-url"
        readOnly
        defaultValue="https://www.figma.com/file/"
        className="h-[72px] w-full rounded border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-6 text-base text-[color:var(--DarkNeutral700)]"
      />
    </div>

    <div className="mt-10 flex gap-9 pl-12">
      <button
        type="button"
        className="h-[62px] w-[172px] rounded-md bg-[var(--Orange800)] font-primary-bold text-base text-[color:var(--DarkNeutral900)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[62px] w-[172px] rounded-md bg-[var(--Orange800)] font-primary-bold text-base text-[color:var(--DarkNeutral900)]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-20 font-primary-bold text-xl text-[color:var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h3>
  </div>
);
