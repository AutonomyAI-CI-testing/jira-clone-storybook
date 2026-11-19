import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldClass =
  "mt-3 h-[52px] w-full rounded-md border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral0)] px-4 font-primary text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]";

const actionClass =
  "h-14 min-w-[132px] rounded-md bg-[var(--Orange700)] px-6 font-primary text-[var(--Neutral0)]";

const actions = ["Awesome", "Prepare"];

const fieldLabelClass =
  "flex items-center gap-3 text-base text-[var(--DarkNeutral1000)]";

/**
 * Smoke-test card reproducing the layout of the "Test Page — Simple" Figma frame.
 * Self-contained: no props, no state, no data.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[var(--DarkNeutral100)] px-10 py-8 font-primary text-[var(--DarkNeutral1100)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="text-[var(--DarkNeutral900)]"
        >
          <FiSettings className="text-2xl" aria-hidden />
        </button>
      </div>

      <div className="mt-5 flex items-center gap-3 text-[var(--DarkNeutral700)]">
        <FiChevronUp className="shrink-0 text-xl" aria-hidden />
        <span className="truncate">From entire frame to a singl…</span>
      </div>

      <div className="mt-16">
        <div className="flex items-center gap-3">
          <FiChevronUp className="text-xl" aria-hidden />
          <h2 className="font-primary-bold text-xl">Add New Design</h2>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <label htmlFor="test-card-token" className={fieldLabelClass}>
              Personal Access Token
              <FiInfo className="text-lg" aria-hidden />
            </label>
            <input
              id="test-card-token"
              type="text"
              placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
              className={fieldClass}
            />
          </div>

          <div>
            <label htmlFor="test-card-url" className={fieldLabelClass}>
              Design URL
              <FiInfo className="text-lg" aria-hidden />
            </label>
            <input
              id="test-card-url"
              type="text"
              placeholder="https://www.figma.com/file/"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="mt-8 flex gap-6">
          {actions.map((action) => (
            <button key={action} type="button" className={actionClass}>
              {action}
            </button>
          ))}
        </div>
      </div>

      <h2 className="mt-20 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
