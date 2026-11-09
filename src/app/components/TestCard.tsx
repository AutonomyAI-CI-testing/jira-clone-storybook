import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const INPUT_CLASSES =
  "mt-4 h-14 w-full rounded border border-border-bold bg-background-input px-4 text-base text-font placeholder:text-font-subtlest";

const BUTTON_CLASSES =
  "h-14 w-[152px] rounded-md bg-[var(--Orange800)] text-base text-[color:var(--Neutral0)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col bg-elevation-surface px-10 pb-40 pt-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-primary-bold">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center rounded p-1 text-font-subtle"
      >
        <FiSettings size={22} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-2 text-font-subtle">
      <FiChevronUp size={18} aria-hidden="true" />
      <span className="text-sm">From entire frame to a singl…</span>
    </div>

    <div className="mt-36 flex items-center gap-2">
      <FiChevronUp size={20} aria-hidden="true" />
      <h2 className="text-xl font-primary-bold">Add New Design</h2>
    </div>

    <label
      htmlFor="personal-access-token"
      className="mt-14 flex items-center gap-2 text-base"
    >
      Personal Access Token
      <FiInfo size={18} aria-hidden="true" className="text-font-subtle" />
    </label>
    <input
      id="personal-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className={INPUT_CLASSES}
    />

    <label
      htmlFor="design-url"
      className={cx("flex items-center gap-2 text-base", "mt-10")}
    >
      Design URL
      <FiInfo size={18} aria-hidden="true" className="text-font-subtle" />
    </label>
    <input
      id="design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className={INPUT_CLASSES}
    />

    <div className="mt-10 flex gap-10">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h2 className="mt-32 text-xl font-primary-bold">Recent Breakdowns</h2>
  </div>
);
