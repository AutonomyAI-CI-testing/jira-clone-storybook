/**
 * TestCard — smoke-test component built from a Figma frame.
 *
 * Deliberately self-contained: no props, no state, no repo imports. Styling is
 * Tailwind-only, and because this repo overrides `theme.colors` / `fontFamily`,
 * the design's dark palette is expressed with arbitrary values rather than
 * default palette utilities. Colours and spacing are approximations read off the
 * design image, not the design's own tokens.
 */

const GearIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = (): JSX.Element => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoBadge = (): JSX.Element => (
  <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border border-[#8A8A8A] text-[11px] leading-none text-[#8A8A8A]">
    i
  </span>
);

const FIELD_CLASS =
  "mt-4 w-full border border-[#4A4A4A] bg-transparent px-4 py-5 text-[15px] text-[#D6D6D6] placeholder:text-[#8A8A8A] focus:outline-none";

const SECTION_CLASS = "font-primary-bold text-[21px] text-[#D6D6D6]";

const buttonLabels = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[1016px] w-[508px] flex-col bg-[#0D0D0D] p-10 font-primary text-[#D6D6D6]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[20px]">UI magician Agent</h2>
      <GearIcon />
    </div>

    <div className="mt-10 flex items-center gap-3 text-[#B5B5B5]">
      <ChevronUp />
      <span className="truncate text-[17px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-36 flex items-center gap-3">
      <ChevronUp />
      <h2 className={SECTION_CLASS}>Add New Design</h2>
    </div>

    <div className="mt-12 flex items-center gap-2">
      <span className="text-[17px] text-[#C4C4C4]">Personal Access Token</span>
      <InfoBadge />
    </div>
    <input
      type="text"
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className={FIELD_CLASS}
    />

    <div className="mt-10 flex items-center gap-2">
      <span className="text-[17px] text-[#C4C4C4]">Design URL</span>
      <InfoBadge />
    </div>
    <input
      type="text"
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/"
      className={FIELD_CLASS}
    />

    <div className="mt-14 flex gap-9 px-12">
      {buttonLabels.map((label) => (
        <button
          key={label}
          type="button"
          className="flex-1 rounded-md bg-[#8B3A17] py-5 text-[18px] text-[#D2A492]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className={`mt-20 ${SECTION_CLASS}`}>Recent Breakdowns</h2>

    <div className="flex-1" />
  </div>
);

export default TestCard;
