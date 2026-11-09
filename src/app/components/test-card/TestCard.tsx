import cx from "classix";

const GEAR_TEETH = [0, 45, 90, 135, 180, 225, 270, 315];

const GearIcon = (): JSX.Element => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
    {GEAR_TEETH.map((angle) => (
      <rect
        key={angle}
        x="6.4"
        y="0.6"
        width="1.2"
        height="3.6"
        rx="0.4"
        fill="currentColor"
        transform={`rotate(${angle} 7 8)`}
      />
    ))}
    <circle cx="7" cy="8" r="4" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="7" cy="8" r="1.5" fill="currentColor" />
  </svg>
);

const ChevronUpIcon = ({ width, height }: { width: number; height: number }): JSX.Element => (
  <svg width={width} height={height} viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path
      d="M1.5 6.5 6 2l4.5 4.5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.1" />
    <path d="M7.5 6.9v3.3" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    <circle cx="7.5" cy="4.7" r="0.7" fill="currentColor" />
  </svg>
);

const Field = ({
  label,
  placeholder,
  textClassName = "text-[11.5px]",
}: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-6 text-[11.5px] leading-[13.92px] text-[color:var(--DarkNeutral800)]">
      <span>{label}</span>
      <InfoIcon />
    </div>
    <input
      readOnly
      placeholder={placeholder}
      className={cx(
        "mt-[12px] h-[36px] w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] pl-[19px] text-[color:var(--Neutral700)] outline-none placeholder:text-[color:var(--Neutral700)]",
        textClassName
      )}
    />
  </div>
);

const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] leading-[13.92px] text-[color:var(--Neutral600)]"
  >
    {label}
  </button>
);

/**
 * Standalone panel reproducing the cropped "UI magician Agent" Figma frame.
 * Self-contained by design: no props, no state, no data.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-primary-bold"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px] text-[color:var(--Neutral400)]">
        UI magician Agent
      </span>
      <button type="button" aria-label="Open settings" className="text-white">
        <GearIcon />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[color:var(--Neutral500)]">
      <ChevronUpIcon width={8} height={5} />
      <span className="text-[11.5px] leading-[13.92px]">From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] text-[color:var(--Neutral400)]">
      <ChevronUpIcon width={12} height={8} />
      <span className="text-[13.5px] leading-[16.34px]">Add New Design</span>
    </div>

    <div className="mt-[28px]">
      <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />
    </div>

    <div className="mt-[11px]">
      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        textClassName="text-[10.5px]"
      />
    </div>

    <div className="ml-6 mt-[23px] flex gap-[17px]">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[color:var(--Neutral400)]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  textClassName?: string;
}
