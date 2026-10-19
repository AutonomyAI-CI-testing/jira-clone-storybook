/**
 * Smoke-test component: a static reproduction of the attached Figma frame
 * (the dark "UI magician Agent" panel).
 *
 * Deliberately self-contained — no props, no state, no interactivity. Values
 * come from the frame's exported style guide, expressed as Tailwind arbitrary
 * values because the design's dark palette has no equivalent in this app's
 * semantic token set.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] bg-[#1e1e1e] px-5 py-5 font-primary text-[#b5b5b5]"
  >
    {/* Title bar */}
    <div className="flex items-start justify-between">
      <h1 className="text-[13.5px] leading-[16.34px]">UI magician Agent</h1>
      <GearGlyph className="mt-0.5 h-4 w-3.5 shrink-0" />
    </div>

    {/* Collapsed summary line */}
    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpGlyph className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section heading */}
    <div className="mt-[76px] flex items-center gap-2">
      <ChevronUpGlyph className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <h2 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-3">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoGlyph className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
    </div>
    <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Design URL */}
    <div className="mt-3 flex items-center gap-3">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <InfoGlyph className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]" />
    </div>
    <div className="mt-3 flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-[19px]">
      <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px] pl-6">
      <CardButton>Awesome</CardButton>
      <CardButton>Prepare</CardButton>
    </div>

    {/* Section heading */}
    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const CardButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

interface GlyphProps {
  className?: string;
}

const GearGlyph = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M19.14 12.94a7.6 7.6 0 0 0 0-1.88l2.03-1.58a.5.5 0 0 0 .12-.62l-1.92-3.32a.5.5 0 0 0-.59-.22l-2.39.96a7.3 7.3 0 0 0-1.62-.94L14.4 2.8a.5.5 0 0 0-.48-.4h-3.84a.5.5 0 0 0-.47.4l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96a.5.5 0 0 0-.59.22L2.74 8.86a.5.5 0 0 0 .12.62l2.03 1.58a7.6 7.6 0 0 0 0 1.88l-2.03 1.58a.5.5 0 0 0-.12.62l1.92 3.32c.12.22.37.3.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.04.24.23.4.47.4h3.84c.24 0 .44-.16.48-.4l.36-2.54a7.3 7.3 0 0 0 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.5.5 0 0 0-.12-.62l-2.03-1.58ZM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z" />
  </svg>
);

const ChevronUpGlyph = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoGlyph = ({ className = "" }: GlyphProps): JSX.Element => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="8" cy="8" r="6.9" />
    <path d="M8 7.2v4.2" />
    <path d="M8 4.9h.01" />
  </svg>
);
