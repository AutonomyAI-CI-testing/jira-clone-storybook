const BUTTON_LABELS = ["Awesome", "Prepare"];

const FIELD_CLASSES =
  "w-full rounded-sm border border-[var(--Neutral500)] bg-[var(--DarkNeutral200)] px-4 py-3 font-primary-light text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--Neutral600)]";

const Glyph = ({ children, size = 24, className = "" }: GlyphProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
);

interface GlyphProps {
  children: React.ReactNode;
  size?: number;
  className?: string;
}

const GearGlyph = (): JSX.Element => (
  <Glyph className="shrink-0 text-[var(--DarkNeutral1000)]">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Glyph>
);

const ChevronUpGlyph = (): JSX.Element => (
  <Glyph className="shrink-0 text-[var(--DarkNeutral1000)]">
    <polyline points="18 15 12 9 6 15" />
  </Glyph>
);

const InfoGlyph = (): JSX.Element => (
  <Glyph size={18} className="shrink-0 text-[var(--DarkNeutral1000)]">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </Glyph>
);

const CollapsibleRow = ({ label, className }: CollapsibleRowProps) => (
  <div className="flex items-center gap-3">
    <ChevronUpGlyph />
    <span className={className}>{label}</span>
  </div>
);

interface CollapsibleRowProps {
  label: string;
  className: string;
}

const Field = ({ label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-3">
    <span className="flex items-center gap-3 font-primary text-base">
      {label}
      <InfoGlyph />
    </span>
    <input type="text" placeholder={placeholder} className={FIELD_CLASSES} />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral-100)] px-10 py-10 font-primary text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <GearGlyph />
    </div>

    <div className="mt-4">
      <CollapsibleRow
        label="From entire frame to a singl..."
        className="truncate font-primary text-base text-font-subtle"
      />
    </div>

    <div className="mt-40">
      <CollapsibleRow
        label="Add New Design"
        className="font-primary-black text-lg"
      />
    </div>

    <div className="mt-20">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-10">
      <Field label="Design URL" placeholder="https://www.figma.com/file/" />
    </div>

    <div className="mt-16 flex items-center gap-6">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="rounded-md bg-[var(--Red800)] px-7 py-3 font-primary text-base text-[var(--DarkNeutral1000)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-32 font-primary-black text-xl">Recent Breakdowns</h2>
  </div>
);
