const GearIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-[14px] shrink-0 text-font-subtle"
    fill="none"
    height="16"
    viewBox="0 0 14 16"
    width="14"
  >
    <g stroke="currentColor" strokeLinecap="round" strokeWidth="1.2">
      <circle cx="7" cy="8" r="4.6" />
      <circle cx="7" cy="8" r="1.8" />
      <path d="M7 1.4v2M7 12.6v2M1.4 8h2M10.6 8h2M3.05 4.05l1.4 1.4M9.55 10.55l1.4 1.4M10.95 4.05l-1.4 1.4M4.45 10.55l-1.4 1.4" />
    </g>
  </svg>
);

const ChevronUpIcon = ({ width }: { width: number }) => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height={width * 0.6}
    viewBox="0 0 10 6"
    width={width}
  >
    <path
      d="M1 5 5 1l4 4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height="15"
    viewBox="0 0 15 15"
    width="15"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7.5 6.9v3.4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.4"
    />
    <circle cx="7.5" cy="4.6" fill="currentColor" r="0.9" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="flex items-center gap-2 text-font-subtle">
      <span className="text-2xs">{label}</span>
      <InfoIcon />
    </div>
    <input
      className="mt-3 w-full rounded border border-border-bold bg-background-input px-3 py-2 text-2xs text-font placeholder:text-font-subtlest"
      placeholder={placeholder}
      type="text"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-xs text-font">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <ChevronUpIcon width={9} />
      <span className="text-2xs">From entire frame to a singl...</span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <ChevronUpIcon width={12} />
      <span className="font-primary-bold text-xs text-font">
        Add New Design
      </span>
    </div>

    <div className="mt-5 flex flex-col gap-3">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
    </div>

    <div className="mt-5 flex justify-center gap-4">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          className="h-10 w-[87px] rounded bg-[var(--Orange800)] font-primary text-2xs text-font"
          type="button"
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-12 font-primary-bold text-xs text-font-subtle">
      Recent Breakdowns
    </div>
  </div>
);
