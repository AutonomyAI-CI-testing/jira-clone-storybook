import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const headingClass = "font-primary-bold text-2xl text-[var(--Neutral100)]";

const labelClass = "text-lg font-primary text-[var(--DarkNeutral900)]";

const inputClass =
  "h-16 w-full rounded border-2 border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral100)] px-10 text-lg font-primary text-[var(--DarkNeutral700)] outline-none placeholder:text-[var(--DarkNeutral700)]";

const actionClass =
  "h-[72px] w-[170px] rounded-lg bg-[var(--Orange800)] text-2xl font-primary text-[var(--DarkNeutral1100)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 pb-16 pt-10 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className={headingClass}>UI magician Agent</h1>
      <FiSettings
        size={26}
        className="mt-1 shrink-0 text-[var(--Neutral100)]"
      />
    </div>

    <div className="mt-6 flex items-center gap-2 text-lg text-[var(--DarkNeutral700)]">
      <FiChevronUp size={22} className="shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="h-40" />

    <div className="flex items-center gap-2">
      <FiChevronUp size={24} className="shrink-0 text-[var(--Neutral100)]" />
      <h2 className={headingClass}>Add New Design</h2>
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-3">
        <label htmlFor="testElem-token" className={labelClass}>
          Personal Access Token
        </label>
        <FiInfo size={22} className="shrink-0 text-[var(--DarkNeutral900)]" />
      </div>
      <input
        id="testElem-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
        className={`mt-4 ${inputClass}`}
      />
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-3">
        <label htmlFor="testElem-url" className={labelClass}>
          Design URL
        </label>
        <FiInfo size={22} className="shrink-0 text-[var(--DarkNeutral900)]" />
      </div>
      <input
        id="testElem-url"
        readOnly
        placeholder="https://www.figma.com/file/:"
        className={`mt-4 ${inputClass}`}
      />
    </div>

    <div className="mt-10 flex justify-end gap-9">
      <button type="button" className={actionClass}>
        Awesome
      </button>
      <button type="button" className={actionClass}>
        Prepare
      </button>
    </div>

    <div className="h-28" />

    <h2 className={headingClass}>Recent Breakdowns</h2>
  </div>
);
