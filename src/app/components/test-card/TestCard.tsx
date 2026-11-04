const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-4 w-4 shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpSmall = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-[5px] w-2 shrink-0"
    viewBox="0 0 8 5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path d="M0.5 4.5 4 1 7.5 4.5" />
  </svg>
);

const ChevronUpLarge = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-2 w-3 shrink-0"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path d="M1 7 6 1.5 11 7" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
  >
    <circle cx="7.5" cy="7.5" r="7" />
    <path d="M7.5 6.5v4" strokeLinecap="round" />
    <circle cx="7.5" cy="4" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-[var(--DarkNeutral700)]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <div className="mt-3 flex h-9 items-center rounded border border-border-bold bg-[var(--DarkNeutral250)] px-3">
      <span className="font-primary-bold text-2xs text-[var(--DarkNeutral600)]">
        {placeholder}
      </span>
    </div>
  </div>
);

const CardButton = ({ label }: CardButtonProps): JSX.Element => (
  <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)]">
    <span className="font-primary-bold text-2xs text-[var(--DarkNeutral600)]">
      {label}
    </span>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] overflow-hidden rounded bg-[var(--DarkNeutral0)] font-primary text-[var(--DarkNeutral700)]"
  >
    <div className="h-[9px] w-full bg-[var(--DarkNeutral100)]" />

    <div className="px-5 pb-12">
      <div className="flex items-start justify-between pt-5">
        <span className="font-primary-bold text-xs text-[var(--DarkNeutral900)]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-4 flex items-center gap-2">
        <ChevronUpSmall />
        <span className="truncate font-primary-bold text-2xs text-[var(--DarkNeutral700)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-20" />

      <div className="ml-1.5 flex items-center gap-1.5">
        <ChevronUpLarge />
        <span className="font-primary-bold text-xs text-[var(--DarkNeutral900)]">
          Add New Design
        </span>
      </div>

      <div className="mt-6 space-y-4">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
      </div>

      <div className="mt-6 flex gap-4 pl-6">
        <CardButton label="Awesome" />
        <CardButton label="Prepare" />
      </div>

      <div className="mt-12">
        <span className="font-primary-bold text-xs text-[var(--DarkNeutral900)]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface CardButtonProps {
  label: string;
}
