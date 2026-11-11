/**
 * TestCard — a static reproduction of the "UI magician Agent" panel.
 *
 * Smoke-test component: no props, no state, no data, no interactivity. Colours
 * and sizes are approximations read from the reference frame, written as
 * arbitrary Tailwind values because this repo replaces its whole Tailwind
 * colour scale (stock palette classes would compile to nothing).
 */

const INPUT_CLASS =
  "mt-3 h-14 w-full rounded border border-[#6e6e6e] bg-[#2b2b2b] px-4 text-[14px] text-[#e9e7e4] placeholder:text-[#8a8681]";

const BUTTON_CLASS =
  "w-[170px] rounded-lg bg-[#a8452a] px-8 py-4 text-[17px] text-[#b3afab]";

const HEADING_CLASS = "font-primary-bold text-[19px] text-[#e9e7e4]";

const GearIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="11" x2="12" y2="16" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const LabelRow = ({ label, htmlFor }: { label: string; htmlFor: string }) => (
  <div className="flex items-center gap-2">
    <label htmlFor={htmlFor} className="text-[15px] text-[#d5d2ce]">
      {label}
    </label>
    <InfoIcon className="h-[18px] w-[18px] shrink-0 text-[#b3afab]" />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1a1a1a] px-10 pt-8 pb-20 font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className={HEADING_CLASS}>UI magician Agent</h1>
      <GearIcon className="h-6 w-6 shrink-0 text-[#d8d5d2]" />
    </div>

    <div className="mt-5 flex items-center gap-3 text-[#8f8b87]">
      <ChevronUpIcon className="h-4 w-4 shrink-0" />
      <span className="truncate text-[15px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-28 flex items-center gap-3">
      <ChevronUpIcon className="h-5 w-5 shrink-0 text-[#e9e7e4]" />
      <h2 className={HEADING_CLASS}>Add New Design</h2>
    </div>

    <div className="mt-10">
      <LabelRow label="Personal Access Token" htmlFor="test-card-token" />
      <input
        id="test-card-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={INPUT_CLASS}
      />
    </div>

    <div className="mt-8">
      <LabelRow label="Design URL" htmlFor="test-card-url" />
      <input
        id="test-card-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={INPUT_CLASS}
      />
    </div>

    <div className="mt-12 flex gap-8 pl-12">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className={`mt-24 ${HEADING_CLASS}`}>Recent Breakdowns</h2>
  </div>
);
