import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASS_NAME =
  "mt-3 w-full rounded border border-border-bold bg-background-input px-5 py-3 text-2xs text-font placeholder:text-font-subtlest";

const BUTTON_CLASS_NAME =
  "rounded bg-[var(--Orange800)] px-4 py-3 font-primary-bold text-2xs text-font-subtle";

const BUTTON_LABELS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface px-5 pb-16 pt-5 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-bold text-xs">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="-m-1 rounded p-1 text-icon"
      >
        <FiSettings size={16} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-2xs text-font-subtlest">
      <FiChevronUp size={10} aria-hidden="true" />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <h3 className="mt-20 flex items-center gap-2 font-primary-bold text-xs">
      <FiChevronUp size={14} aria-hidden="true" />
      Add New Design
    </h3>

    <label
      htmlFor="testElem-access-token"
      className="mt-7 flex w-fit items-center gap-3 text-2xs text-font-subtle"
    >
      Personal Access Token
      <FiInfo size={15} aria-hidden="true" />
    </label>
    <input
      id="testElem-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className={FIELD_CLASS_NAME}
    />

    <label
      htmlFor="testElem-design-url"
      className="mt-3 flex w-fit items-center gap-3 text-2xs text-font-subtle"
    >
      Design URL
      <FiInfo size={15} aria-hidden="true" />
    </label>
    <input
      id="testElem-design-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className={FIELD_CLASS_NAME}
    />

    <div className="mt-5 flex justify-end gap-4">
      {BUTTON_LABELS.map((label) => (
        <button key={label} type="button" className={BUTTON_CLASS_NAME}>
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-12 font-primary-black text-xs">Recent Breakdowns</h3>
  </div>
);
