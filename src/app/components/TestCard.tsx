import cx from "classix";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const GearIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-[14px] shrink-0"
    fill="none"
    viewBox="0 0 14 16"
  >
    <path
      d="M7 5.4a2.6 2.6 0 1 0 0 5.2 2.6 2.6 0 0 0 0-5.2Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M7 1.7v1.5M7 12.8v1.5M12.3 8h-1.5M3.2 8H1.7M10.75 4.25l-1.06 1.06M4.31 10.69 3.25 11.75M10.75 11.75l-1.06-1.06M4.31 5.31 3.25 4.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.2"
    />
  </svg>
);

const ChevronUp = ({ className }: { className: string }) => (
  <svg
    aria-hidden="true"
    className={cx("shrink-0", className)}
    fill="none"
    viewBox="0 0 12 8"
  >
    <path
      d="M1 6.5 6 1.5l5 5"
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
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    viewBox="0 0 15 15"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.1" />
    <path
      d="M7.5 7v4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.2"
    />
    <circle cx="7.5" cy="4.6" r="0.85" fill="currentColor" />
  </svg>
);

const Field = ({ className, placeholder, variant }: FieldProps) => (
  <div
    className={cx(
      "flex w-[211px] items-center bg-[var(--DarkNeutral200)] px-[19px]",
      variant === "token"
        ? "h-[36px] border border-[var(--DarkNeutral700)]"
        : "h-[37px] border-2 border-[var(--DarkNeutral700)]",
      className
    )}
  >
    <span
      className={cx(
        "font-primary-bold text-[var(--DarkNeutral600)]",
        variant === "token"
          ? "text-[11.5px] leading-[13.92px]"
          : "text-[10.5px] leading-[12.71px]"
      )}
    >
      {placeholder}
    </span>
  </div>
);

interface FieldProps {
  className?: string;
  placeholder: string;
  variant: "token" | "url";
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[var(--DarkNeutral200)] px-5 py-5 font-primary-light text-[var(--DarkNeutral800)]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--DarkNeutral900)]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[var(--DarkNeutral800)]">
      <ChevronUp className="h-[5px] w-2" />
      <span className="font-primary-bold text-[11.5px] leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[78px] flex items-center gap-2 text-[var(--DarkNeutral900)]">
      <ChevronUp className="h-2 w-3" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-2 text-[var(--DarkNeutral800)]">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px]">
        Personal Access Token
      </span>
      <InfoIcon />
    </div>

    <Field
      className="mt-3"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      variant="token"
    />

    <div className="mt-[11px] flex items-center gap-2 text-[var(--DarkNeutral800)]">
      <span className="font-primary-bold text-[11.5px] leading-[13.92px]">
        Design URL
      </span>
      <InfoIcon />
    </div>

    <Field
      className="mt-[11px]"
      placeholder="https://www.figma.com/file/:"
      variant="url"
    />

    <div className="ml-6 mt-[22px] flex gap-[17px]">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] font-primary-bold text-[11.5px] leading-[13.92px] text-[var(--DarkNeutral800)]"
        >
          {label}
        </button>
      ))}
    </div>

    <span className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[var(--DarkNeutral900)]">
      Recent Breakdowns
    </span>
  </div>
);
