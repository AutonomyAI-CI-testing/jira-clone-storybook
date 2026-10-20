const IconChevronUp = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M6 15l6-6 6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconGear = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconInfo = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 11v6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
    <circle cx="12" cy="7.5" r="1.1" fill="currentColor" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="pt-7">
    <div className="mb-3 flex items-center gap-3 text-[var(--DarkNeutral1000)]">
      <span className="font-primary-bold text-[15px]">{label}</span>
      <IconInfo />
    </div>
    <input
      readOnly
      placeholder={placeholder}
      className="h-[46px] w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral0)] px-4 font-primary text-[15px] text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral600)]"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between border-b border-[var(--DarkNeutral350)] px-7 py-5">
      <span className="font-primary-bold text-xl">UI magician Agent</span>
      <IconGear />
    </div>

    <div className="flex items-center gap-3 px-7 py-5 text-[var(--DarkNeutral900)]">
      <IconChevronUp />
      <span className="truncate text-base">
        From entire frame to a single component
      </span>
    </div>

    <div className="flex items-center gap-2 px-7 pt-14">
      <IconChevronUp />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="px-7">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
    </div>

    <div className="flex gap-5 px-7 pt-9">
      <button
        type="button"
        className="h-[52px] w-[168px] rounded bg-[var(--Orange800)] font-primary-bold text-base text-[var(--DarkNeutral1100)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[52px] w-[168px] rounded bg-[var(--Orange800)] font-primary-bold text-base text-[var(--DarkNeutral1100)]"
      >
        Prepare
      </button>
    </div>

    <h2 className="px-7 pb-10 pt-16 font-primary-bold text-xl">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}
