import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const labelClass = "font-primary-bold text-2xs text-[var(--DarkNeutral800)]";

const fieldClass =
  "mt-3 w-full rounded border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 py-2 font-primary-bold text-2xs text-[var(--Neutral400)] placeholder:text-[var(--Neutral700)]";

const buttonClass =
  "inline-flex w-[85px] items-center justify-center rounded bg-[var(--Orange800)] py-2 font-primary-bold text-2xs text-[var(--DarkNeutral600)]";

const iconClass = "text-[var(--Neutral400)]";

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-[var(--DarkNeutral-100)] p-5">
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xs text-[var(--Neutral400)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center"
      >
        <FaCog size={15} aria-hidden="true" className={iconClass} />
      </button>
    </div>

    <div className="mt-5 flex items-center gap-2">
      <FaChevronUp
        size={10}
        aria-hidden="true"
        className="text-[var(--Neutral500)]"
      />
      <span className="font-primary-bold text-2xs text-[var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16">
      <div className="flex items-center gap-2">
        <FaChevronUp size={12} aria-hidden="true" className={iconClass} />
        <h2 className="font-primary-bold text-xs text-[var(--Neutral400)]">
          Add New Design
        </h2>
      </div>

      <div className="mt-8 flex items-center gap-2">
        <label htmlFor="test-card-token" className={labelClass}>
          Personal Access Token
        </label>
        <FaInfoCircle size={15} aria-hidden="true" className={iconClass} />
      </div>
      <input
        id="test-card-token"
        name="token"
        className={fieldClass}
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />

      <div className="mt-3 flex items-center gap-2">
        <label htmlFor="test-card-url" className={labelClass}>
          Design URL
        </label>
        <FaInfoCircle size={15} aria-hidden="true" className={iconClass} />
      </div>
      <input
        id="test-card-url"
        name="url"
        className={fieldClass}
        placeholder="https://www.figma.com/file/:"
      />

      <div className="mt-5 flex gap-4">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>
    </div>

    <h2 className="mt-12 font-primary-bold text-xs text-[var(--Neutral400)]">
      Recent Breakdowns
    </h2>
  </div>
);
