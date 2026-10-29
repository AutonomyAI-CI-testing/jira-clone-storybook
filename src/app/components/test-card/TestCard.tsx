/**
 * TestCard — a standalone panel transcribed from the "UI magician Agent" Figma
 * frame (frame space 254x508 at 1x).
 *
 * Deliberately self-contained: no props, no imports, no app state, and it is
 * not wired into any route or screen. It exists so the design-to-component path
 * can be rendered and looked at.
 *
 * Colours, sizes and type are the frame's own literal values rather than the
 * app's semantic tokens: the frame is an unrelated dark tool UI with no
 * equivalents in the semantic palette. The Figma-exported icons are raster
 * images wrapped in SVG, so the glyphs below are drawn inline instead.
 */

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const ChevronUp = ({ className }: { className: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.75" strokeWidth="1.5" />
    <path d="M7.5 6.7v4.1" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="7.5" cy="4.3" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
  /** The frame draws the second field with a heavier, brighter outline. */
  emphasised?: boolean;
}

const Field = ({ label, placeholder, emphasised }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-[24px] text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
      <span>{label}</span>
      <InfoIcon />
    </div>
    <div
      className={
        emphasised
          ? "mt-[11px] flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[12.71px] text-[#71726e]"
          : "mt-[12px] flex h-[36px] items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470]"
      }
    >
      {placeholder}
    </div>
  </div>
);

const ACTION_LABELS = ["Awesome", "Prepare"] as const;

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pt-5 pb-[59px] text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5] [font-family:Inter,system-ui,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <h2 className="text-[13.5px] leading-[16.34px]">UI magician Agent</h2>
      <GearIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[11.5px] leading-[13.92px] text-[#8b9291]">
      <ChevronUp className="h-[5px] w-[8px]" />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px]">
      <ChevronUp className="h-[8px] w-[12px]" />
      <h3 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    <div className="mt-[28px]">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-[11px]">
      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        emphasised
      />
    </div>

    <div className="mt-[22px] ml-[24px] flex gap-[17px]">
      {ACTION_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h3 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
