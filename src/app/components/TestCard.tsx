import cx from "classix";

/**
 * Static reproduction of the "UI magician Agent" panel from the reference design.
 *
 * Smoke test: self-contained, no props, no state, no data, no handlers. The panel
 * carries the design's own colours and sizes rather than this repo's semantic
 * tokens, because the design is a fixed dark/rust surface with no matching role.
 */

const PANEL =
  "flex w-[254px] flex-col bg-[#1C1D17] px-5 pb-5 pt-5 font-primary";
const HEADING = "font-primary-bold text-[13.5px] leading-[16.34px]";
const LABEL = "font-primary-bold text-[11.5px] leading-[13.92px]";
const FIELD =
  "mt-3 w-full bg-[#272822] px-3 py-2 font-primary-bold text-[11.5px] text-[#737470] placeholder:text-[#737470] focus-visible:outline-none";
const BUTTON =
  "w-[85px] rounded-[4px] bg-[#843a17] py-[11px] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

const BUTTON_LABELS = ["Awesome", "Prepare"];

const ChevronUp = () => (
  <svg
    viewBox="0 0 12 8"
    className="h-[8px] w-[12px] shrink-0"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M1 7L6 2L11 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 16 16"
    className="h-[15px] w-[15px] shrink-0"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="8" cy="4.7" r="0.9" fill="currentColor" />
    <path
      d="M8 7.2v4.4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
  emphasis = "default",
  className,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className={cx(LABEL, "text-[#a4a4a3]")}>
        {label}
      </label>
      <span className="text-[#a4a4a3]">
        <InfoIcon />
      </span>
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={cx(
        FIELD,
        emphasis === "strong"
          ? "border-2 border-[#929291]"
          : "border border-[#a5adad]"
      )}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={PANEL}>
    <div className="flex items-start justify-between">
      <h2 className={cx(HEADING, "text-[#b5b5b5]")}>UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[#b5b5b5]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2 text-[#8b9291]">
      <ChevronUp />
      <span className={cx(LABEL, "truncate")}>
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUp />
      <h3 className={HEADING}>Add New Design</h3>
    </div>

    <Field
      className="mt-7"
      id="testcard-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-3"
      id="testcard-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      emphasis="strong"
    />

    <div className="mt-6 flex gap-4 pl-1">
      {BUTTON_LABELS.map((label) => (
        <button key={label} type="button" className={BUTTON}>
          {label}
        </button>
      ))}
    </div>

    <h3 className={cx(HEADING, "mt-12 text-[#b0b0b0]")}>Recent Breakdowns</h3>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  emphasis?: "default" | "strong";
  className?: string;
}
