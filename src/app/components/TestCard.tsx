import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test card reproducing the "UI magician Agent" Figma frame.
 *
 * Self-contained on purpose: no props, no state, no data. It pins the dark
 * look through the raw palette variables because the reference surface has no
 * matching semantic role and the theme roles flip with the active theme.
 */
const fieldClass =
  "mt-3 h-16 w-full rounded border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral250)] px-4 text-base text-[color:var(--DarkNeutral900)] placeholder:text-[color:var(--DarkNeutral800)]";

const actionClass =
  "rounded-md bg-[var(--Orange800)] px-8 py-4 text-base text-[color:var(--DarkNeutral900)]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] p-10 font-primary"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1000)]">
        UI magician Agent
      </h2>

      <button
        type="button"
        aria-label="Settings"
        className="text-[color:var(--DarkNeutral1000)]"
      >
        <FiSettings aria-hidden="true" size={24} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-[color:var(--DarkNeutral800)]">
      <FiChevronUp aria-hidden="true" size={20} className="shrink-0" />
      <span className="min-w-0 truncate text-base">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <FiChevronUp
        aria-hidden="true"
        size={20}
        className="shrink-0 text-[color:var(--DarkNeutral1000)]"
      />
      <h3 className="font-primary-bold text-xl text-[color:var(--DarkNeutral1000)]">
        Add New Design
      </h3>
    </div>

    <div className="mt-8">
      <div className="flex items-center gap-2 text-[color:var(--DarkNeutral900)]">
        <span className="text-base">Personal Access Token</span>
        <FiInfo
          aria-hidden="true"
          size={18}
          className="shrink-0 text-[color:var(--DarkNeutral800)]"
        />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={fieldClass}
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-2 text-[color:var(--DarkNeutral900)]">
        <span className="text-base">Design URL</span>
        <FiInfo
          aria-hidden="true"
          size={18}
          className="shrink-0 text-[color:var(--DarkNeutral800)]"
        />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className={fieldClass}
      />
    </div>

    <div className="mt-10 flex justify-center gap-8">
      <button type="button" className={actionClass}>
        Awesome
      </button>
      <button type="button" className={actionClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-20 font-primary-bold text-xl text-[color:var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h3>
  </div>
);

export default TestCard;
