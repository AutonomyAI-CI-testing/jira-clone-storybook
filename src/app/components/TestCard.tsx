import cx from "classix";

/**
 * Smoke-test component drawn from the "UI magician Agent" Figma frame.
 *
 * Self-contained: no props, no state, no data. The panel's colours are the
 * design's own values rather than theme tokens, because none of the repo's
 * semantic tokens describe this dark third-party palette.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1c1c1c] px-5 pb-[62px] pt-5 font-primary"
  >
    {/* Title row */}
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <GearIcon className="text-[#b5b5b5]" />
    </div>

    {/* Collapsed source row */}
    <button
      type="button"
      className="mt-[18px] flex w-full items-center gap-2 text-left font-primary-bold text-[11.5px] leading-[14px] text-[#8b9291]"
    >
      <ChevronUp className="h-[5px] w-2" />
      <span className="truncate">From entire frame to a single component</span>
    </button>

    {/* Section header */}
    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUp className="h-2 w-3" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <Field
      className="mt-[28px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      inputClassName="border border-[#a5adad] text-[11.5px]"
    />

    <Field
      className="mt-[11px]"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      inputClassName="border-2 border-[#929291] text-[10.5px]"
    />

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px] pl-6">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    {/* Section heading */}
    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  className: string;
  label: string;
  placeholder: string;
  inputClassName: string;
}

const Field = ({
  className,
  label,
  placeholder,
  inputClassName,
}: FieldProps): JSX.Element => (
  <div className={cx("flex flex-col gap-3", className)}>
    <div className="flex items-center gap-2">
      <span className="font-primary text-[11.5px] leading-[14px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon className="text-[#8b8b8b]" />
    </div>
    <input
      readOnly
      type="text"
      placeholder={placeholder}
      className={cx(
        "h-9 w-full bg-[#272822] px-[19px] font-primary text-[#737470] placeholder:text-[#737470] outline-none",
        inputClassName
      )}
    />
  </div>
);

const ActionButton = ({
  children,
}: {
  children: string;
}): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
  >
    {children}
  </button>
);

interface GlyphProps {
  className: string;
}

const ChevronUp = ({ className }: GlyphProps): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={cx("shrink-0", className)}
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = ({ className }: GlyphProps): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    aria-hidden="true"
    className={cx("h-4 w-[14px] shrink-0", className)}
  >
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 1.2v1.8M8 13v1.8M1.2 8h1.8M13 8h1.8M3.2 3.2l1.3 1.3M11.5 11.5l1.3 1.3M12.8 3.2l-1.3 1.3M4.5 11.5l-1.3 1.3"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = ({ className }: GlyphProps): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    role="img"
    aria-label="More information"
    className={cx("h-[15px] w-[15px] shrink-0", className)}
  >
    <circle cx="8" cy="8" r="6.6" stroke="currentColor" strokeWidth="1.2" />
    <circle cx="8" cy="5.1" r="0.85" fill="currentColor" />
    <path
      d="M8 7.4V11"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);
