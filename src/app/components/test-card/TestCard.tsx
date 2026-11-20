const ChevronUp = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height={20}
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    viewBox="0 0 24 24"
    width={20}
  >
    <path d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height={24}
    viewBox="0 0 24 24"
    width={24}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} />
    <path d="M12 11v5.5" stroke="currentColor" strokeLinecap="round" strokeWidth={1.5} />
    <circle cx="12" cy="7.6" fill="currentColor" r="1.1" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height={28}
    viewBox="0 0 24 24"
    width={28}
  >
    <circle
      cx="12"
      cy="12"
      r="8"
      stroke="currentColor"
      strokeDasharray="1.8 2.8"
      strokeWidth={3.5}
    />
    <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth={1.6} />
  </svg>
);

const inputClassName =
  "mt-3 w-full rounded-none border border-[color:var(--DarkNeutral900)] bg-[var(--DarkNeutral200)] px-4 py-3 text-sm placeholder:text-[color:var(--DarkNeutral700)]";

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}) => (
  <div className="mt-6">
    <div className="flex items-center gap-3">
      <label className="text-sm" htmlFor={id}>
        {label}
      </label>
      <InfoIcon />
    </div>
    <input className={inputClassName} id={id} placeholder={placeholder} type="text" />
  </div>
);

const actions = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 py-6 font-primary text-sm text-[color:var(--DarkNeutral1100)]"
    id="testElem"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-lg">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-5 flex items-center gap-3">
      <ChevronUp />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-28 flex items-center gap-3">
      <ChevronUp />
      <span className="font-primary-bold text-lg">Add New Design</span>
    </div>

    <div className="mt-8">
      <Field
        id="testcard-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <Field
      id="testcard-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-8 flex justify-center gap-8">
      {actions.map((action) => (
        <button
          className="w-[170px] rounded-lg bg-[var(--Orange800)] px-4 py-3 text-sm text-[color:var(--DarkNeutral1100)]"
          key={action}
          type="button"
        >
          {action}
        </button>
      ))}
    </div>

    <div className="mt-28">
      <span className="font-primary-bold text-lg">Recent Breakdowns</span>
    </div>
  </div>
);

export default TestCard;
