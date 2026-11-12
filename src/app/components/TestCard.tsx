import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const fieldClass =
  "mt-3 w-full rounded border border-border-bold bg-background-input px-5 py-3 text-2xs text-font placeholder:text-font-subtlest";

const fieldLabelClass =
  "flex w-fit items-center gap-3 text-2xs text-font-subtle";

const buttonClass =
  "rounded bg-[var(--Orange800)] px-4 py-3 font-primary-bold text-2xs text-font-subtle";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface px-5 pb-16 pt-5 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xs text-font">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-icon hover:bg-background-neutral"
      >
        <FiSettings size={16} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-2xs text-font-subtlest">
      <FiChevronUp size={10} aria-hidden="true" className="shrink-0" />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <div className="mt-20 flex items-center gap-2 text-xs text-font">
      <FiChevronUp size={14} aria-hidden="true" className="shrink-0" />
      <h3 className="font-primary-bold">Add New Design</h3>
    </div>

    <label htmlFor="testElem-access-token" className={`mt-7 ${fieldLabelClass}`}>
      Personal Access Token
      <FiInfo size={15} aria-hidden="true" className="shrink-0" />
    </label>
    <input
      id="testElem-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className={fieldClass}
    />

    <label htmlFor="testElem-design-url" className={`mt-3 ${fieldLabelClass}`}>
      Design URL
      <FiInfo size={15} aria-hidden="true" className="shrink-0" />
    </label>
    <input
      id="testElem-design-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className={fieldClass}
    />

    <div className="mt-5 flex justify-end gap-4">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-12 font-primary-black text-xs text-font">
      Recent Breakdowns
    </h3>
  </div>
);
