import type { ReactNode } from "react";

/**
 * TestCard
 *
 * A self-contained, presentational reproduction of the "UI magician Agent"
 * panel from a Figma frame. It takes no props, holds no state, has no handlers
 * and is not wired into any route — it exists to render the design once.
 *
 * The panel reproduces a foreign dark design, so it uses that design's own
 * colours as literal values rather than the app's semantic tokens.
 */

const inputBase =
  "mt-3 w-full bg-[#272822] px-[19px] font-semibold outline-none";

const buttonBase =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]";

const labelBase =
  "text-[11.5px] leading-[13.92px] font-semibold text-[#a4a4a3]";

/** Shared 24x24 stroke-glyph wrapper so the icons stay one consistent grid. */
const Glyph = ({
  className,
  strokeWidth = 2,
  children,
}: {
  className?: string;
  strokeWidth?: number;
  children: ReactNode;
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const chevronUp = <polyline points="18 15 12 9 6 15" />;

const infoCircle = (
  <>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </>
);

const gear = (
  <>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </>
);

export const TestCard = () => (
  <div id="testElem">
    <div className="min-h-[508px] w-[254px] bg-[#1C1D17] px-5 pt-5 pb-5 font-[Inter,sans-serif]">
      <div className="flex items-start justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <Glyph className="h-4 w-[14px] shrink-0 text-[#8b9291]">{gear}</Glyph>
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <Glyph className="h-[5px] w-2 shrink-0 text-[#8b9291]">
          {chevronUp}
        </Glyph>
        <p className="truncate text-[11.5px] leading-[13.92px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-[76px] ml-1.5 flex items-center gap-1.5">
        <Glyph className="h-2 w-3 shrink-0 text-[#b2b2b1]">{chevronUp}</Glyph>
        <h2 className="text-[13.5px] leading-[16.34px] font-semibold text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-7 flex items-center gap-7">
        <label htmlFor="testElem-token" className={labelBase}>
          Personal Access Token
        </label>
        <Glyph className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]">
          {infoCircle}
        </Glyph>
      </div>
      <input
        id="testElem-token"
        className={`${inputBase} h-9 border border-[#a5adad] text-[11.5px] text-[#737470] placeholder:text-[#737470]`}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <div className="mt-3 flex items-center gap-5">
        <label htmlFor="testElem-url" className={labelBase}>
          Design URL
        </label>
        <Glyph className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]">
          {infoCircle}
        </Glyph>
      </div>
      <input
        id="testElem-url"
        className={`${inputBase} h-[37px] border-2 border-[#929291] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]`}
        placeholder="https://www.figma.com/file/:"
      />

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button type="button" className={buttonBase}>
          Awesome
        </button>
        <button type="button" className={buttonBase}>
          Prepare
        </button>
      </div>

      <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);
