import cx from "classix";

/**
 * Smoke test: reproduces the Figma "UI magician Agent" panel (frame 2-2) as a
 * self-contained card. No props, no state and no data — it exists only to
 * confirm the component builds and renders.
 *
 * Colours and type sizes come from the Figma style guide; the faces are this
 * repo's own, since Inter is not loaded in the app.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className={cx(
      "flex min-h-[508px] w-[254px] flex-col bg-[#1c1c1c] p-5",
      "font-primary-bold text-[11.5px] leading-[13.92px] text-[#b5b5b5]"
    )}
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[13.5px] leading-[16.34px]">UI magician Agent</h1>
      <GearGlyph className="mt-px text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUpSmallGlyph className="shrink-0" />
      <span className="min-w-0 truncate">From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
      <ChevronUpGlyph className="shrink-0" />
      <h2>Add New Design</h2>
    </div>

    <Field
      id="test-elem-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-7"
      inputClassName="border border-[#a5adad]"
    />

    <Field
      id="test-elem-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-[11px]"
      inputClassName="border-2 border-[#929291] placeholder:text-[10.5px]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      <button type="button" className={actionClassName}>
        Awesome
      </button>
      <button type="button" className={actionClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const actionClassName = "h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]";

const Field = ({
  id,
  label,
  placeholder,
  className = "",
  inputClassName = "",
}: FieldProps): JSX.Element => (
  <div className={cx("flex flex-col", className)}>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-[#a4a4a3]">
        {label}
      </label>
      <InfoGlyph className="shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={cx(
        "mt-3 h-9 w-full bg-[#272822] px-[19px] text-[#b5b5b5]",
        "placeholder:text-[#737470]",
        inputClassName
      )}
    />
  </div>
);

const GearGlyph = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height="16"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
    viewBox="0 0 24 24"
    width="14"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpSmallGlyph = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height="5"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.4"
    viewBox="0 0 8 5"
    width="8"
  >
    <path d="M1 4 4 1l3 3" />
  </svg>
);

const ChevronUpGlyph = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height="8"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
    viewBox="0 0 12 8"
    width="12"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoGlyph = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    fill="none"
    height="15"
    viewBox="0 0 15 15"
    width="15"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 6.8v3.6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.2"
    />
    <circle cx="7.5" cy="4.6" fill="currentColor" r="0.85" />
  </svg>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
}

interface GlyphProps {
  className?: string;
}
