/**
 * Smoke test: a static reproduction of the "UI magician Agent" Figma frame.
 * Self-contained — no props, no state, no data.
 */

const PANEL_CLASS = "w-[254px] bg-[#1b1b1b] px-5 py-5 font-primary";

const FIELD_CLASS =
  "mt-3 h-[36px] w-full rounded border border-[#a5adad] bg-[#272822] px-[19px] text-2xs text-[#737470]";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]";

const ChevronUp = ({ width }: ChevronUpProps) => (
  <svg
    width={width}
    height={Math.round(width * (8 / 12))}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 7 6 1.5 11 7" />
  </svg>
);

interface ChevronUpProps {
  width: number;
}

const GearIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="7" />
    <path d="M7.5 7.3v4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className={PANEL_CLASS}>
    <div className="flex items-center justify-between text-[#b5b5b5]">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-4 flex items-center gap-2 text-[#8b9291]">
      <ChevronUp width={8} />
      <span className="truncate text-2xs">From entire frame to a singl...</span>
    </div>

    <div className="mt-[76px] flex items-center gap-2 text-[#b2b2b1]">
      <ChevronUp width={12} />
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <label
      htmlFor="testElem-token"
      className="mt-7 flex items-center gap-1 text-2xs text-[#a4a4a3]"
    >
      Personal Access Token
      <InfoIcon />
    </label>
    <input
      id="testElem-token"
      defaultValue="figd_xxxxxxxxxxxxxxxxxx"
      className={FIELD_CLASS}
    />

    <label
      htmlFor="testElem-url"
      className="mt-3 flex items-center gap-1 text-2xs text-[#a3a3a2]"
    >
      Design URL
      <InfoIcon />
    </label>
    <input
      id="testElem-url"
      defaultValue="https://www.figma.com/file/:"
      className={`${FIELD_CLASS} border-2 border-[#929291]`}
    />

    <div className="mt-5 flex gap-[17px] pl-6">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <div className="mt-11 font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
