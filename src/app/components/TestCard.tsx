/**
 * Static reproduction of the supplied Figma frame ("UI magician Agent" settings
 * panel) — a smoke test for the design-to-preview path. No props, no state, no
 * interactivity.
 *
 * Colours are the design's own extracted values, written as arbitrary Tailwind
 * values on purpose: this repo replaces `theme.colors` with semantic
 * CSS-variable tokens (the Atlassian ramps), and the design's warm
 * near-black/rust palette has no equivalent there. Mapping it onto tokens would
 * mean changing the theme system, which this component must not touch.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1C1D17] px-5 pb-16 pt-5 font-primary"
  >
    <div className="flex items-start justify-between text-[#b5b5b5]">
      <h1 className="font-primary-bold text-[13.5px]">UI magician Agent</h1>
      <SettingsIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-2 text-[#8b9291]">
      <ChevronUp width={8} height={5} />
      <span className="truncate text-[11.5px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUp width={12} height={8} />
      <h2 className="font-primary-bold text-[13.5px]">Add New Design</h2>
    </div>

    <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
    <Field label="Design URL" placeholder="https://www.figma.com/file/" />

    <div className="mt-4 flex gap-[15px] pl-[22px]">
      <button type="button" className={actionClassName}>
        Awesome
      </button>
      <button type="button" className={actionClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 font-primary-bold text-[13.5px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <>
    <div className="mt-7 flex items-center gap-3 text-[#a4a4a3]">
      <span className="font-primary-light text-[11.5px]">{label}</span>
      <InfoIcon />
    </div>
    <input
      className="mt-2.5 h-[37px] w-full border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] text-[#e3e3e3] placeholder:text-[#737470]"
      placeholder={placeholder}
      aria-label={label}
    />
  </>
);

const actionClassName =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]";

const SettingsIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = ({ width, height }: ChevronUpProps): JSX.Element => (
  <svg
    aria-hidden="true"
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 7l5-5 5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
  >
    <circle cx="8" cy="8" r="6.6" />
    <path d="M8 7.4v4" strokeLinecap="round" />
    <circle cx="8" cy="4.9" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

interface ChevronUpProps {
  width: number;
  height: number;
}
