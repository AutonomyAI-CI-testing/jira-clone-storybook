import {
  IoChevronUpOutline,
  IoInformationCircleOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const inputClass =
  "mt-3 w-full rounded-md border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral100)] px-4 py-3 font-primary text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral700)]";

const labelClass = "font-primary-bold text-base text-[var(--DarkNeutral1000)]";

const buttonClass =
  "flex-1 rounded-md bg-[var(--Orange800)] px-6 py-4 font-primary-bold text-base text-[var(--DarkNeutral800)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral-100)] p-10 font-primary"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl text-[var(--DarkNeutral1000)]">
        UI magician Agent
      </h2>
      <IoSettingsOutline
        size={26}
        className="shrink-0 text-[var(--DarkNeutral800)]"
      />
    </div>

    <div className="mt-6 flex items-center gap-3 text-[var(--DarkNeutral700)]">
      <IoChevronUpOutline size={18} className="shrink-0" />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <IoChevronUpOutline
        size={20}
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
      <h3 className="font-primary-bold text-xl text-[var(--DarkNeutral1000)]">
        Add New Design
      </h3>
    </div>

    <div className="mt-8">
      <div className="flex items-center justify-between">
        <label htmlFor="testcard-access-token" className={labelClass}>
          Personal Access Token
        </label>
        <IoInformationCircleOutline
          size={20}
          className="shrink-0 text-[var(--DarkNeutral800)]"
        />
      </div>
      <input
        id="testcard-access-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={inputClass}
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center justify-between">
        <label htmlFor="testcard-design-url" className={labelClass}>
          Design URL
        </label>
        <IoInformationCircleOutline
          size={20}
          className="shrink-0 text-[var(--DarkNeutral800)]"
        />
      </div>
      <input
        id="testcard-design-url"
        placeholder="https://www.figma.com/file/"
        className={inputClass}
      />
    </div>

    <div className="mt-8 flex gap-8">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-16 font-primary-bold text-xl text-[var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h3>
  </div>
);
