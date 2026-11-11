/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" panel.
 *
 * Smoke test only: static markup, no props, no state. Visual values are written
 * as Tailwind arbitrary values on purpose — this repo's tailwind.config.js
 * replaces theme.colors / theme.fontFamily / theme.boxShadow wholesale rather
 * than extending them, so stock utilities (bg-gray-900, font-sans, …) compile
 * to nothing.
 */

const PANEL = "w-[508px] bg-[#1c1c1c] px-10 pt-10 pb-24 font-primary text-[#e3e3e3]";

const INPUT =
  "mt-3 h-[68px] w-full rounded-[2px] border border-[#6b6b6b] bg-[#232323] px-9 " +
  "text-[17px] text-[#e3e3e3] outline-none placeholder:text-[#7a7a7a]";

const BUTTON = "h-[63px] flex-1 rounded-[6px] bg-[#9e3f1c] text-[19px] text-[#8f8f8f]";

const GearIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: { className?: string }): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v6" strokeLinecap="round" />
    <circle cx="12" cy="7.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const FieldLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}): JSX.Element => (
  <div className="flex items-center gap-5">
    <label htmlFor={htmlFor} className="text-[16px] text-[#c9c9c9]">
      {children}
    </label>
    <span className="flex text-[#d0d0d0]">
      <InfoIcon />
    </span>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={PANEL}>
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[22px] leading-none">UI magician Agent</h1>
      <button type="button" aria-label="Settings" className="flex text-[#d0d0d0]">
        <GearIcon />
      </button>
    </div>

    <div className="mt-7 flex items-center gap-3 pl-2 text-[15px] text-[#9b9b9b]">
      <ChevronUpIcon className="shrink-0 text-[#c9c9c9]" />
      <span>From entire frame to a singl...</span>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <ChevronUpIcon className="shrink-0" />
      <h2 className="font-primary-bold text-[24px] leading-none">Add New Design</h2>
    </div>

    <div className="mt-9">
      <FieldLabel htmlFor="testElem-token">Personal Access Token</FieldLabel>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={INPUT}
      />
    </div>

    <div className="mt-6">
      <FieldLabel htmlFor="testElem-url">Design URL</FieldLabel>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={INPUT}
      />
    </div>

    <div className="mt-8 flex gap-8 pl-12">
      <button type="button" className={BUTTON}>
        Awesome
      </button>
      <button type="button" className={BUTTON}>
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-bold text-[24px] leading-none">Recent Breakdowns</h2>
  </div>
);
