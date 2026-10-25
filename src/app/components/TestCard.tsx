const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ size = 12 }: { size?: number }): JSX.Element => (
  <svg
    aria-hidden="true"
    width={size}
    height={Math.round(size * 0.66)}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <circle cx="8" cy="8" r="6.6" />
    <path d="M8 7.3v3.9" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.85" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({ label, value }: { label: string; value: string }): JSX.Element => (
  <div>
    <div className="flex items-center gap-5">
      <span className="text-[11.5px] font-primary-bold text-font-subtle">
        {label}
      </span>
      <span className="text-font-subtle">
        <InfoIcon />
      </span>
    </div>
    <div className="mt-3 flex h-9 items-center rounded border border-border-bold bg-background-input px-3">
      <span className="truncate text-[11.5px] font-primary-bold text-font-subtlest">
        {value}
      </span>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-elevation-surface-sunken px-5 py-5"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-primary-bold text-font">
        UI magician Agent
      </span>
      <span className="text-font">
        <GearIcon />
      </span>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <span className="text-font-subtle">
        <ChevronUpIcon size={8} />
      </span>
      <span className="min-w-0 truncate text-[11.5px] font-primary-bold text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[76px] flex items-center gap-2">
      <span className="text-font-subtle">
        <ChevronUpIcon />
      </span>
      <span className="text-[13.5px] font-primary-bold text-font">
        Add New Design
      </span>
    </div>

    <div className="mt-6 space-y-3">
      <Field label="Personal Access Token" value="figd_xxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" value="https://www.figma.com/file/" />
    </div>

    <div className="mt-5 flex gap-4">
      <button
        type="button"
        className="h-9 flex-1 rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-9 flex-1 rounded bg-[#843a17] text-[11.5px] font-primary-bold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-[13.5px] font-primary-bold text-font">
      Recent Breakdowns
    </h2>
  </div>
);
