/**
 * TestCard — a self-contained redraw of the "UI magician Agent" panel from a
 * Figma frame. Smoke-test component: no props, no state, no wiring.
 *
 * The panel is a fixed dark surface with rust buttons, and that palette has no
 * role in this repo's semantic token set, so the colours are written against the
 * raw palette through Tailwind arbitrary values (`bg-[var(--DarkNeutral0)]`),
 * which is the escape hatch for a design colour that has no role. Type uses the
 * repo's own families (font-primary / -bold / -black), because theme.fontFamily
 * is a full override and `font-sans` would compile to nothing.
 */

const PANEL_SURFACE = "bg-[var(--DarkNeutral0)]";
const TEXT_PRIMARY = "text-[var(--DarkNeutral1000)]";
const TEXT_HEADING = "text-[var(--DarkNeutral1100)]";
const BUTTON_FILL = "bg-[var(--Orange800)]";

const FIELD_CLASS =
  "w-full rounded border-2 border-[var(--DarkNeutral700)] bg-[var(--DarkNeutral200)] px-4 py-3 font-primary text-[15px] text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral700)]";

const BUTTON_CLASS = `rounded-lg ${BUTTON_FILL} px-10 py-5 font-primary-bold text-[19px] text-[var(--DarkNeutral1100)]`;

function GearIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={26}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
      width={26}
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}

function ChevronUpIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="m6 15 6-6 6 6" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={18}
      stroke="currentColor"
      strokeWidth={1.6}
      viewBox="0 0 24 24"
      width={18}
    >
      <circle cx="12" cy="12" r="9.25" />
      <path d="M12 11v5.4" strokeLinecap="round" />
      <circle cx="12" cy="7.7" fill="currentColor" r="1" stroke="none" />
    </svg>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className={`font-primary-bold text-[16px] ${TEXT_PRIMARY}`}>
          {label}
        </span>
        <InfoIcon />
      </div>
      <input
        aria-label={label}
        className={FIELD_CLASS}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}

export function TestCard() {
  return (
    <div
      className={`flex w-full max-w-[508px] flex-col ${PANEL_SURFACE} px-10 py-8 font-primary ${TEXT_PRIMARY}`}
      id="testElem"
    >
      <div className="flex items-start justify-between">
        <h1 className="font-primary-bold text-[22px] leading-tight">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-12 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="truncate text-[17px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-32 flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <ChevronUpIcon size={24} />
          <h2 className={`font-primary-bold text-[20px] ${TEXT_HEADING}`}>
            Add New Design
          </h2>
        </div>

        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        />
        <Field label="Design URL" placeholder="https://www.figma.com/file/" />

        <div className="mt-4 flex items-center gap-8">
          <button className={BUTTON_CLASS} type="button">
            Awesome
          </button>
          <button className={BUTTON_CLASS} type="button">
            Prepare
          </button>
        </div>
      </div>

      <h2 className={`mt-28 font-primary-black text-[22px] ${TEXT_HEADING}`}>
        Recent Breakdowns
      </h2>
    </div>
  );
}

export default TestCard;
