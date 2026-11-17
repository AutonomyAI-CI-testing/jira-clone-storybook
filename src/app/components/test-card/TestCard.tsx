import cx from "classix";

const ChevronUpGlyph = ({ size = 10 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 10 10"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d="M1.75 6.5 5 3.25 8.25 6.5"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoGlyph = () => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.25" stroke="currentColor" strokeWidth="1.1" />
    <circle cx="7.5" cy="4.75" r="0.9" fill="currentColor" />
    <path d="M7.5 6.9v3.35" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);

const GEAR_TEETH_ANGLES = [0, 45, 90, 135, 180, 225, 270, 315];

const GearGlyph = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="8" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.3" />
    {GEAR_TEETH_ANGLES.map((angle) => (
      <line
        key={angle}
        x1="8"
        y1="1.7"
        x2="8"
        y2="3.7"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        transform={`rotate(${angle} 8 8)`}
      />
    ))}
  </svg>
);

const FieldPreview = ({
  className,
  label,
  value,
  emphasized = false,
}: {
  className?: string;
  label: string;
  value: string;
  emphasized?: boolean;
}) => (
  <div className={cx("flex flex-col gap-2", className)}>
    <div className="flex items-center gap-2 text-2xs font-primary-bold text-[color:var(--DarkNeutral800)]">
      <span>{label}</span>
      <InfoGlyph />
    </div>
    <div
      className={cx(
        "bg-[color:var(--DarkNeutral250)] px-2.5 py-2.5 text-2xs font-primary-bold text-[color:var(--DarkNeutral600)]",
        emphasized
          ? "border-2 border-[color:var(--DarkNeutral700)]"
          : "border border-[color:var(--DarkNeutral600)]"
      )}
    >
      {value}
    </div>
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="w-[85px] rounded bg-[color:var(--Orange800)] py-2.5 text-center text-2xs font-primary-bold text-[color:var(--DarkNeutral700)]"
  >
    {children}
  </button>
);

export default function TestCard() {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[color:var(--DarkNeutral0)] p-5 font-primary text-2xs text-[color:var(--DarkNeutral800)]"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-primary-bold text-[color:var(--DarkNeutral900)]">
          UI magician Agent
        </span>
        <GearGlyph />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[color:var(--DarkNeutral700)]">
        <ChevronUpGlyph size={9} />
        <span className="min-w-0 truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-16 flex items-center gap-3 text-xs font-primary-bold text-[color:var(--DarkNeutral900)]">
        <ChevronUpGlyph size={12} />
        <span>Add New Design</span>
      </div>

      <FieldPreview
        className="mt-6"
        label="Personal Access Token"
        value="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <FieldPreview
        className="mt-3"
        label="Design URL"
        value="https://www.figma.com/file/"
        emphasized
      />

      <div className="mt-5 flex items-center justify-center gap-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      <div className="mt-10 text-xs font-primary-bold text-[color:var(--DarkNeutral900)]">
        Recent Breakdowns
      </div>
    </div>
  );
}
