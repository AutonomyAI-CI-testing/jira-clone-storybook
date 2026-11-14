import cx from "classix";

/**
 * Smoke-test component: a static rendering of the "UI magician Agent" Figma
 * frame. Takes no props and holds no state — markup and Tailwind classes only.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1a1a1a] px-10 pb-12 pt-10 font-primary text-[#f0f0f0]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="text-[#e6e6e6] outline-none hover:text-white"
      >
        <GearIcon />
      </button>
    </div>

    <ChevronRow
      label="From entire frame to a singl..."
      className="mt-8 text-[15px] text-[#9a9a9a]"
    />

    <ChevronRow
      label="Add New Design"
      className="mt-32 text-[17px] font-primary-bold"
    />

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className="mt-14"
    />

    <Field
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-7"
    />

    <div className="mt-11 flex gap-9 pl-12">
      <button type="button" className={actionButtonClassName}>
        Awesome
      </button>
      <button type="button" className={actionButtonClassName}>
        Prepare
      </button>
    </div>

    <h3 className="mt-24 text-[17px] font-primary-bold">Recent Breakdowns</h3>
  </div>
);

const actionButtonClassName =
  "h-14 w-[170px] rounded-lg bg-[#9a4a24] text-[17px] text-[#cfcfcf] hover:bg-[#a9522a] active:bg-[#8a4220]";

const ChevronRow = ({ label, className }: ChevronRowProps): JSX.Element => (
  <div className={cx("flex items-center gap-3", className)}>
    <ChevronUpIcon />
    <span>{label}</span>
  </div>
);

const Field = ({ label, placeholder, className }: FieldProps): JSX.Element => (
  <div className={cx("flex flex-col gap-3.5", className)}>
    <div className="flex items-center gap-2.5">
      <span className="text-[15px] text-[#c9c9c9]">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="h-12 w-full rounded-md border border-[#4a4a4a] bg-[#141414] px-4 text-[15px] text-[#c9c9c9] outline-none placeholder:text-[#8a8a8a]"
    />
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[22px] w-[22px]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[20px] w-[20px] shrink-0"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
    className="h-[20px] w-[20px] shrink-0 text-[#c9c9c9]"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v4.5" strokeLinecap="round" />
    <circle cx="12" cy="8" r="1" fill="currentColor" stroke="none" />
  </svg>
);

interface ChevronRowProps {
  label: string;
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}
