const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-7 w-7 shrink-0 text-font"
  >
    <circle cx="12" cy="12" r="3.4" />
    <circle cx="12" cy="12" r="7.6" />
    <path d="M12 1.6v2.8M12 19.6v2.8M1.6 12h2.8M19.6 12h2.8M4.6 4.6l2 2M17.4 17.4l2 2M19.4 4.6l-2 2M6.6 17.4l-2 2" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M5 15.5 12 8.5l7 7" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    aria-hidden="true"
    className="h-[30px] w-[30px] shrink-0"
  >
    <circle cx="12" cy="12" r="10.2" />
    <path d="M12 11v6" strokeLinecap="round" />
    <circle cx="12" cy="17.8" r="1.1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="7.4" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-elevation-surface-sunken px-10 pt-10 pb-32 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="mt-7 flex items-center gap-3 text-font-subtle">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <span className="truncate font-primary-bold text-xl">
        From entire frame to a single element
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <ChevronUpIcon className="h-6 w-6 shrink-0" />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <div className="mt-[60px] flex items-center gap-2 text-font-subtle">
      <span className="font-primary-bold text-xl">Personal Access Token</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-6 h-[78px] w-full rounded border border-border bg-background-input px-10 font-primary-bold text-xl text-font placeholder:text-font-subtlest"
    />

    <div className="mt-5 flex items-center gap-2 text-font-subtle">
      <span className="font-primary-bold text-xl">Design URL</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-7 h-[74px] w-full rounded border-2 border-border-bold bg-background-input px-10 font-primary-bold text-xl text-font placeholder:text-font-subtlest"
    />

    <div className="mt-12 flex gap-8 pl-12">
      <button
        type="button"
        className="h-[74px] w-[170px] rounded bg-[var(--Orange800)] font-primary-bold text-xl text-font-inverse hover:bg-[var(--Orange900)] active:bg-[var(--Orange900)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[74px] w-[170px] rounded bg-[var(--Orange800)] font-primary-bold text-xl text-font-inverse hover:bg-[var(--Orange900)] active:bg-[var(--Orange900)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);
