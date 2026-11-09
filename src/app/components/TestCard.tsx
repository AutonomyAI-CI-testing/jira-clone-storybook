import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded bg-[var(--DarkNeutral-100)] px-10 pb-10 pt-11 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-black text-xl text-[color:var(--DarkNeutral1000)]">
        UI magician Agent
      </h2>
      <FiSettings
        size={24}
        className="shrink-0 text-[color:var(--DarkNeutral900)]"
        aria-hidden="true"
      />
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp
        size={20}
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
        aria-hidden="true"
      />
      <span className="min-w-0 flex-1 truncate font-primary-bold text-base text-[color:var(--DarkNeutral800)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <FiChevronUp
        size={26}
        className="shrink-0 text-[color:var(--DarkNeutral1000)]"
        aria-hidden="true"
      />
      <h3 className="font-primary-black text-[22px] text-[color:var(--DarkNeutral1000)]">
        Add New Design
      </h3>
    </div>

    <div className="mt-16">
      <div className="flex items-center gap-3">
        <label
          htmlFor="testcard-access-token"
          className="font-primary-bold text-lg text-[color:var(--DarkNeutral900)]"
        >
          Personal Access Token
        </label>
        <FiInfo
          size={22}
          className="shrink-0 text-[color:var(--DarkNeutral900)]"
          aria-hidden="true"
        />
      </div>
      <input
        id="testcard-access-token"
        defaultValue="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-4 h-[52px] w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral0)] px-8 font-primary text-base text-[color:var(--DarkNeutral800)]"
      />
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-3">
        <label
          htmlFor="testcard-design-url"
          className="font-primary-bold text-lg text-[color:var(--DarkNeutral900)]"
        >
          Design URL
        </label>
        <FiInfo
          size={22}
          className="shrink-0 text-[color:var(--DarkNeutral900)]"
          aria-hidden="true"
        />
      </div>
      <input
        id="testcard-design-url"
        defaultValue="https://www.figma.com/file/"
        className="mt-4 h-[52px] w-full rounded border border-[color:var(--DarkNeutral600)] bg-[var(--DarkNeutral0)] px-8 font-primary text-base text-[color:var(--DarkNeutral800)]"
      />
    </div>

    <div className="mt-16 flex gap-8">
      <button
        type="button"
        className="h-[74px] w-[170px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-xl text-[color:var(--DarkNeutral900)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[74px] w-[170px] rounded-lg bg-[var(--Orange800)] font-primary-bold text-xl text-[color:var(--DarkNeutral900)]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-black text-[22px] text-[color:var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h3>
  </div>
);
