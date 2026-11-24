import cx from "classix";

const inputBaseClass =
  "h-9 w-full rounded bg-[#272822] px-4 font-primary-bold text-2xs text-[#b5b5b5]";

const fieldLabelClass = "flex items-center gap-5 font-primary-bold text-2xs";

const actionButtonClass =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078] hover:bg-[#9a471d] active:bg-[#6f3113]";

const ChevronUp = ({ className }: { className: string }): JSX.Element => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-4 w-3.5"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.4v3.8"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="8" cy="5" r="0.8" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#0d0d0d] px-5 py-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xs text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Open settings"
        className="flex-center h-4 w-3.5 text-[#b5b5b5] hover:text-[#e0e0e0]"
      >
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUp className="h-[5px] w-2 shrink-0" />
      <span className="font-primary-bold text-2xs">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUp className="h-2 w-3 shrink-0" />
      <h3 className="font-primary-bold text-xs">Add New Design</h3>
    </div>

    <label
      htmlFor="testcard-token"
      className={cx(fieldLabelClass, "mt-7 text-[#a4a4a3]")}
    >
      <span>Personal Access Token</span>
      <InfoIcon />
    </label>
    <input
      id="testcard-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={cx(
        inputBaseClass,
        "mt-3 border border-[#a5adad] placeholder:text-[#737470]"
      )}
    />

    <label
      htmlFor="testcard-url"
      className={cx(fieldLabelClass, "mt-3 text-[#a3a3a2]")}
    >
      <span>Design URL</span>
      <InfoIcon />
    </label>
    <input
      id="testcard-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className={cx(
        inputBaseClass,
        "mt-3 border-2 border-[#929291] placeholder:text-[#71726e]"
      )}
    />

    <div className="mt-[22px] flex justify-center gap-4">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h3 className="mt-12 font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
