import cx from "classix";

/**
 * TestCard
 *
 * A static, self-contained reproduction of the "UI magician Agent" panel from
 * the referenced Figma frame. It is a smoke-test fixture: it takes no props and
 * holds no state — the chevrons do not collapse, the buttons do not act and the
 * fields do not accept typing.
 *
 * The panel's palette is the design's own (black surfaces, rust buttons) rather
 * than the app's semantic theme tokens, which have no counterpart for it. The
 * type uses the repo's CircularStd families so no second font enters the bundle.
 */

interface GlyphProps {
  className?: string;
}

/** Small upward chevron marking the two collapsible rows. */
const ChevronUp = ({ className }: GlyphProps) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

/** Round "more info" affordance sitting beside each field label. */
const InfoIcon = ({ className }: GlyphProps) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <circle cx="8" cy="8" r="6.4" stroke="currentColor" strokeWidth={1.2} />
    <path
      d="M8 7.4v4"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.9" r="0.9" fill="currentColor" />
  </svg>
);

/** Settings gear, drawn as a cogged ring around a hub. */
const GearIcon = ({ className }: GlyphProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="8" cy="8" r="2.5" />
    <circle cx="8" cy="8" r="5.3" strokeDasharray="1.5 2.6" />
  </svg>
);

interface FieldProps {
  className?: string;
  label: string;
  value: string;
  inputClassName: string;
}

/** A label row with its info glyph, above a static input showing its placeholder. */
const Field = ({ className, label, value, inputClassName }: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <span className="font-primary text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      tabIndex={-1}
      value={value}
      aria-label={label}
      className={cx(
        "mt-3 w-full bg-[#272822] px-3 font-primary text-[11.5px] leading-[13.92px] text-[#737470] outline-none",
        inputClassName
      )}
    />
  </div>
);

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 pb-16 font-primary"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Settings"
        className="shrink-0 text-[#b5b5b5] outline-none"
      >
        <GearIcon className="h-4 w-[14px]" />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUp className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate font-primary text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <h3 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxx"
      inputClassName="h-[36px] border border-[#a5adad]"
    />
    <Field
      className="mt-3"
      label="Design URL"
      value="https://www.figma.com/file/"
      inputClassName="h-[37px] border-2 border-[#929291]"
    />

    <div className="mt-[22px] flex gap-4">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="h-[37px] flex-1 rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
