/**
 * TestCard — smoke test for the Figma frame-to-component path.
 *
 * Reproduces the "UI magician Agent" panel from the attached Figma frame. It is
 * deliberately self-contained: no props, no state, no route wiring. Colours are
 * the frame's literal values rather than this app's semantic tokens, because the
 * frame's dark palette has no equivalent in the token set and this is an
 * explicitly approximate smoke test.
 */

interface GlyphProps {
  className?: string;
}

const SettingsGlyph = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.55V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.7 15a1.7 1.7 0 0 0-1.55-1H3a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.7 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.7h.09A1.7 1.7 0 0 0 10.1 3.15V3a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1 1.55 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.09a1.7 1.7 0 0 0 1.55 1H21a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.55 1z" />
  </svg>
);

const ChevronUpGlyph = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoGlyph = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.8" />
    <path d="M8 7.4v4.1" />
    <circle cx="8" cy="4.9" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const fieldLabelClass = "font-primary-bold text-[11.5px] text-[#a4a4a3]";

const fieldInputClass =
  "mt-[12px] h-9 w-full bg-[#272822] px-[18px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black font-primary text-[11.5px] leading-[1.21] text-[#8b9291]"
  >
    <div className="h-[9px] w-full shrink-0 bg-white/5" />

    <div className="flex flex-col px-5 pb-[60px] pt-[11px]">
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <button
          type="button"
          aria-label="Settings"
          className="text-[#a8a8a8] outline-none"
        >
          <SettingsGlyph className="h-4 w-[14px]" />
        </button>
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUpGlyph className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-[75px]" />

      <div className="flex items-center gap-[5px]">
        <ChevronUpGlyph className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-[28px] flex items-center gap-[10px]">
        <label htmlFor="test-card-access-token" className={fieldLabelClass}>
          Personal Access Token
        </label>
        <InfoGlyph className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
      </div>
      <input
        id="test-card-access-token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`${fieldInputClass} border border-[#a5adad]`}
      />

      <div className="mt-[11px] flex items-center gap-[10px]">
        <label htmlFor="test-card-design-url" className={fieldLabelClass}>
          Design URL
        </label>
        <InfoGlyph className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
      </div>
      <input
        id="test-card-design-url"
        placeholder="https://www.figma.com/file/:"
        className={`${fieldInputClass} mt-[11px] h-[37px] border-2 border-[#929291] text-[10.5px] placeholder:text-[10.5px] placeholder:text-[#71726e]`}
      />

      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-[47px] font-primary-bold text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
