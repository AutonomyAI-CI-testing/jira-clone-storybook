/* TestCard — a static, self-contained approximation of the cropped Figma frame
 * ("UI magician Agent" panel), 254 x 508 CSS px.
 *
 * The frame's palette is its own warm dark scale, which has no role in this
 * repo's theme blocks, so the nearest raw palette variables are used as
 * arbitrary values. Sizes and offsets come from the frame's extracted style
 * guide.
 */

const ChevronUp = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 7 6 1.5 11 7" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="4.1" strokeWidth="1.3" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1="8"
        y1="1.6"
        x2="8"
        y2="3.4"
        strokeWidth="1.6"
        strokeLinecap="round"
        transform={`rotate(${angle} 8 8)`}
      />
    ))}
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.4" strokeWidth="1.2" />
    <line
      x1="8"
      y1="7.2"
      x2="8"
      y2="11.6"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const LabeledField = ({
  className,
  label,
  placeholder,
}: {
  className: string;
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div className={className}>
    <span className="flex items-center gap-2 text-[11.5px]">
      {label}
      <InfoIcon />
    </span>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 h-9 w-full rounded-none border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-4 text-[11.5px] placeholder:text-[color:var(--Neutral700)]"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[var(--DarkNeutral-100)] px-5 pt-5 font-primary text-[11.5px] text-[color:var(--Neutral400)]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px]">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[color:var(--Neutral500)]">
      <ChevronUp width={8} height={5} />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUp width={12} height={8} />
      <span className="font-primary-bold text-[13.5px]">Add New Design</span>
    </div>

    <LabeledField
      className="mt-7"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <LabeledField
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="ml-6 mt-[22px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[color:var(--Neutral600)]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] text-[color:var(--Neutral600)]"
      >
        Prepare
      </button>
    </div>

    <div className="mt-12 font-primary-bold text-[13.5px]">
      Recent Breakdowns
    </div>
  </div>
);
