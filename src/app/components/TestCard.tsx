/**
 * TestCard — smoke-test component built from a Figma frame.
 *
 * Self-contained and prop-less on purpose: it exists to prove the design-to-code
 * path, not to be wired into the app.
 *
 * The colours below are literal arbitrary values rather than design tokens. The
 * frame's palette (near-black ground, rust accent) has no equivalent in the
 * repo's semantic token set, and the card must render dark whatever theme is
 * active. Every other value uses the repo's existing Tailwind scale.
 */

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6h.09A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden="true"
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11.5v5" />
    <path d="M12 7.75v.01" />
  </svg>
);

const FIELD_CLASS =
  "mt-5 h-16 w-full rounded border border-[#6e6e6e] bg-[#232323] px-4 font-[monospace] text-base text-[#e8e8e8] placeholder:text-[#8b8b8b]";

const BUTTON_CLASS =
  "h-16 flex-1 rounded-lg bg-[#a8452a] font-primary-bold text-lg text-[#ded6d2]";

const HEADING_CLASS = "font-primary-bold text-xl leading-7 text-[#f2f2f2]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[380px] bg-[#1a1a1a] p-8 pb-24 font-primary text-[#e8e8e8]"
  >
    <div className="flex items-start justify-between">
      <h1 className={HEADING_CLASS}>UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded p-0.5 text-[#e8e8e8]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3 text-base text-[#c9c9c9]">
      <ChevronUpIcon />
      <span className="truncate">From entire frame to a single component</span>
    </div>

    <div className="h-28" />

    <div className="flex items-center gap-3">
      <ChevronUpIcon />
      <h2 className={HEADING_CLASS}>Add New Design</h2>
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-4">
        <label htmlFor="test-card-token" className="text-base text-[#e8e8e8]">
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        name="test-card-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={FIELD_CLASS}
      />
    </div>

    <div className="mt-6">
      <div className="flex items-center gap-4">
        <label htmlFor="test-card-url" className="text-base text-[#e8e8e8]">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-url"
        name="test-card-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={FIELD_CLASS}
      />
    </div>

    <div className="mt-8 flex gap-6">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-16 ${HEADING_CLASS}`}>Recent Breakdowns</h2>
  </div>
);
