import { FaCog, FaChevronUp, FaInfoCircle } from "react-icons/fa";

const fieldLabelClassName =
  "flex items-center gap-2 font-primary text-sm text-font-subtle";

const fieldInputClassName =
  "w-full rounded border border-border bg-background-input px-3 py-3 font-primary text-sm text-font placeholder:text-font-subtlest";

const buttonClassName =
  "rounded bg-background-brand-subtlest px-4 py-3 font-primary text-background-brand-bold";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex w-full max-w-[420px] flex-col gap-6 bg-elevation-surface-sunken px-5 py-8"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-lg text-font">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Open settings"
        className="flex items-center text-icon-subtle"
      >
        <FaCog aria-hidden size={20} />
      </button>
    </div>

    <div className="flex items-center gap-2">
      <FaChevronUp
        aria-hidden
        size={14}
        className="shrink-0 text-font-subtle"
      />
      <span className="min-w-0 truncate font-primary-light text-sm text-font-subtle">
        From entire frame to a single component
      </span>
    </div>

    <div className="flex items-center gap-2">
      <FaChevronUp aria-hidden size={16} className="shrink-0 text-font" />
      <h2 className="font-primary-bold text-base text-font">Add New Design</h2>
    </div>

    <div className="flex flex-col gap-2">
      <label className={fieldLabelClassName} htmlFor="testElem-access-token">
        Personal Access Token
        <FaInfoCircle aria-hidden size={14} />
      </label>
      <input
        id="testElem-access-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={fieldInputClassName}
      />
    </div>

    <div className="flex flex-col gap-2">
      <label className={fieldLabelClassName} htmlFor="testElem-design-url">
        Design URL
        <FaInfoCircle aria-hidden size={14} />
      </label>
      <input
        id="testElem-design-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={fieldInputClassName}
      />
    </div>

    <div className="grid grid-cols-2 gap-4">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <div className="flex flex-col gap-6">
      <h2 className="font-primary-bold text-base text-font">
        Recent Breakdowns
      </h2>
      <div className="h-24" />
    </div>
  </div>
);

export default TestCard;
