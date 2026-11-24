import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASS =
  "mt-3 h-9 w-full rounded border border-border bg-background-input px-3 text-2xs text-font placeholder:text-font-subtlest focus-visible:bg-background-input-pressed";
const FIELD_LABEL_CLASS = "text-2xs font-primary-bold text-font-subtle";
const BUTTON_CLASS =
  "h-9 w-[85px] rounded bg-background-danger-bold text-2xs font-primary-bold text-font-inverse";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-elevation-surface-sunken px-5 pb-16 pt-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xs text-font-subtle">
        UI magician Agent
      </h2>
      <FiSettings
        className="h-4 w-4 shrink-0 text-icon-subtle"
        aria-hidden="true"
      />
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp
        className="h-2 w-2 shrink-0 text-icon-subtle"
        aria-hidden="true"
      />
      <span className="truncate font-primary-bold text-2xs text-font-subtlest">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <FiChevronUp
        className="h-2.5 w-2.5 shrink-0 text-icon-subtle"
        aria-hidden="true"
      />
      <h3 className="font-primary-bold text-xs text-font-subtle">
        Add New Design
      </h3>
    </div>

    <div className="mt-3 flex items-center justify-between">
      <label htmlFor="test-card-token" className={FIELD_LABEL_CLASS}>
        Personal Access Token
      </label>
      <FiInfo
        className="h-4 w-4 shrink-0 text-icon-subtle"
        aria-hidden="true"
      />
    </div>
    <input
      id="test-card-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={FIELD_CLASS}
    />

    <div className="mt-3 flex items-center gap-2">
      <label htmlFor="test-card-url" className={FIELD_LABEL_CLASS}>
        Design URL
      </label>
      <FiInfo
        className="h-4 w-4 shrink-0 text-icon-subtle"
        aria-hidden="true"
      />
    </div>
    <input
      id="test-card-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className={FIELD_CLASS}
    />

    <div className="mt-5 flex items-center justify-center gap-4">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-11 font-primary-bold text-xs text-font-subtle">
      Recent Breakdowns
    </h3>
  </div>
);
