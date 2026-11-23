/**
 * Static reproduction of the "UI magician Agent" Figma panel.
 *
 * Smoke test only: no props, no state, no handlers. Sizes, colours and type
 * come from the design's extracted style guide. The panel is off-system, so it
 * uses literal values rather than this repo's semantic colour tokens.
 */

function GearGlyph() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChevronUpGlyph({ width, height }: { width: number; height: number }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <polyline points="18 15 12 9 6 15" />
    </svg>
  );
}

function InfoGlyph() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[#a4a4a3]">
      <span className="text-[11.5px] leading-[13.92px] font-semibold">
        {children}
      </span>
      <InfoGlyph />
    </div>
  );
}

export function TestCard() {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#000000] px-5 pt-5 pb-[62px] [font-family:Inter,ui-sans-serif,system-ui,sans-serif]"
    >
      <div className="flex items-center justify-between text-[#b5b5b5]">
        <span className="text-[13.5px] leading-[16.34px] font-semibold">
          UI magician Agent
        </span>
        <GearGlyph />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
        <ChevronUpGlyph width={8} height={5} />
        <span className="text-[11.5px] leading-[13.92px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[5px] text-[#b2b2b1]">
        <ChevronUpGlyph width={12} height={8} />
        <span className="text-[13.5px] leading-[16.34px] font-semibold">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px]">
        <FieldLabel>Personal Access Token</FieldLabel>
        <input
          type="text"
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-[211px] border border-[#a5adad] bg-[#272822] px-[18px] text-[11.5px] leading-[13.92px] font-semibold text-[#b5b5b5] placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-[11px]">
        <FieldLabel>Design URL</FieldLabel>
        <input
          type="text"
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="mt-[11px] h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[18px] text-[10.5px] leading-[12.71px] font-semibold text-[#b5b5b5] placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-[22px] ml-1 flex gap-[17px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[47px] text-[13.5px] leading-[16.34px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
}
