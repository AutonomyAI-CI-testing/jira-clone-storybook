const INPUT_CLASSES =
  "mt-3 h-20 w-full rounded border-2 border-[var(--Neutral500)] bg-[var(--DarkNeutral250)] px-5 text-lg text-[var(--DarkNeutral900)] placeholder:text-[var(--DarkNeutral800)]";

const BUTTON_CLASSES =
  "h-28 w-44 rounded-lg bg-[var(--Orange800)] text-xl text-[var(--DarkNeutral1000)]";

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-7 w-7 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.2 5.2l2.1 2.1M16.7 16.7l2.1 2.1M18.8 5.2l-2.1 2.1M7.3 16.7l-2.1 2.1" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-6 w-6 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" />
    <path d="M12 7.5h.01" />
  </svg>
);

const TextField = ({ id, label, placeholder }: TextFieldProps) => (
  <div>
    <div className="flex items-center gap-3 text-lg">
      <label htmlFor={id}>{label}</label>
      <InfoIcon />
    </div>
    <input id={id} placeholder={placeholder} className={INPUT_CLASSES} />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral0)] px-10 py-10 font-primary text-[var(--DarkNeutral800)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h2>
      <GearIcon />
    </div>

    <div className="mt-6 flex items-center gap-3 text-xl">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-32 flex items-center gap-3 font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
      <ChevronUpIcon />
      <span>Add New Design</span>
    </div>

    <div className="mt-10">
      <TextField
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <TextField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex justify-end gap-9">
      <button type="button" className={BUTTON_CLASSES}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASSES}>
        Prepare
      </button>
    </div>

    <h3 className="mt-24 font-primary-bold text-2xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h3>
  </div>
);

interface TextFieldProps {
  id: string;
  label: string;
  placeholder: string;
}
