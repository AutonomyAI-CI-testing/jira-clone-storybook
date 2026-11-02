import cx from "classix";

const actionButtonClass =
  "w-[85px] rounded bg-[#843a17] py-2.5 font-primary-bold text-2xs text-[#8c8078]";

const fieldClass =
  "mt-2.5 w-full rounded border border-border-bold bg-background-input px-3 py-2.5 font-primary-light text-2xs text-font placeholder:text-font-subtlest";

const fieldLabelClass =
  "flex items-center gap-2 font-primary-bold text-2xs text-font-subtle";

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
  >
    <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      <circle cx="7" cy="8" r="3.3" />
      <path d="M11.4 8h1.2M1.4 8h1.2M7 3.6V2.4M7 13.6v-1.2M10.11 4.89 10.96 4.04M3.04 11.96l.85-.85M10.11 11.11l.85.85M3.04 4.04l.85.85" />
    </g>
  </svg>
);

const ChevronSmallIcon = (): JSX.Element => (
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" aria-hidden="true">
    <path
      d="M1 4 4 1l3 3"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronLargeIcon = (): JSX.Element => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path
      d="M1.5 6.5 6 2l4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="7.5" cy="4.5" r="0.9" fill="currentColor" />
    <path
      d="M7.5 6.7v4.1"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded p-0.5 text-font-subtle hover:bg-background-neutral"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <span className="shrink-0 text-font-subtlest">
        <ChevronSmallIcon />
      </span>
      <span className="truncate font-primary-light text-2xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-2">
      <span className="shrink-0 text-font-subtle">
        <ChevronLargeIcon />
      </span>
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <div className={cx("mt-7", fieldLabelClass)}>
      <span>Personal Access Token</span>
      <InfoIcon />
    </div>
    <input
      aria-label="Personal Access Token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className={fieldClass}
    />

    <div className={cx("mt-2.5", fieldLabelClass)}>
      <span>Design URL</span>
      <InfoIcon />
    </div>
    <input
      aria-label="Design URL"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className={fieldClass}
    />

    <div className="mt-5 flex items-center gap-4">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <div className="mt-12 font-primary-bold text-xs">Recent Breakdowns</div>
  </div>
);
