import cx from "classix";

const iconBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const GearIcon = ({ className }: { className?: string }) => (
  <svg {...iconBase} className={cx("h-6 w-6 shrink-0", className)} aria-hidden="true">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg {...iconBase} className={cx("h-5 w-5 shrink-0", className)} aria-hidden="true">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg {...iconBase} className={cx("h-5 w-5 shrink-0", className)} aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const Field = ({ label, placeholder }: { label: string; placeholder: string }) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <span className="font-primary-bold">{label}</span>
      <InfoIcon className="text-font-subtle" />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="h-14 w-full rounded border border-border-bold bg-elevation-surface-overlay px-4 text-font placeholder:text-font-subtle"
    />
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-14 flex-1 cursor-pointer rounded bg-[var(--Orange700)] font-primary text-[var(--Neutral0)]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="dark flex w-[508px] flex-col gap-8 bg-elevation-surface p-7 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <GearIcon />
    </div>

    <div className="flex min-w-0 items-center gap-2 text-sm text-font-subtle">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a single frame breakdown</span>
    </div>

    <div className="mt-6 flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <ChevronUpIcon className="h-6 w-6" />
        <h2 className="font-primary-bold text-lg">Add New Design</h2>
      </div>

      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" />

      <div className="mt-2 flex gap-9">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>
    </div>

    <h2 className="mt-8 font-primary-black text-lg">Recent Breakdowns</h2>
  </div>
);
