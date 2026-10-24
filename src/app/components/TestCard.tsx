/**
 * TestCard — a self-contained reproduction of the reference Figma panel.
 *
 * This is a standalone dark surface taken from an external design, not part of
 * this app's themed UI: its colours are the design's own values, written as
 * Tailwind arbitrary utilities, because no semantic token in this repo matches
 * them (the closest to #1e1e1e is --DarkNeutral100 #1d2125) and the semantic
 * roles would paint the panel white-on-light under the default theme. The
 * `font-semibold` weight stands in for the design's Inter 600 — the repo's
 * Circular Std families carry weight in the family name, so they are not used
 * here. Values are read from the design's style guide; approximation is fine.
 */

const ChevronUpGlyph = ({
  width,
  height,
  strokeWidth,
  className,
}: ChevronUpGlyphProps): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path
      d={`M1 ${height - 1} L${width / 2} 1 L${width - 1} ${height - 1}`}
    />
  </svg>
);

const GearGlyph = (): JSX.Element => (
  <svg
    width={14}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#c5c5c5]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoGlyph = (): JSX.Element => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    className="shrink-0 text-[#9a9a9a]"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth={1.1} />
    <circle cx="7.5" cy="4.6" r="0.85" fill="currentColor" />
    <path
      d="M7.5 6.9v3.6"
      stroke="currentColor"
      strokeWidth={1.1}
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] px-5 pb-[62px] pt-5 font-sans text-[11.5px] font-semibold leading-[13.92px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16.34px]">UI magician Agent</span>
      <GearGlyph />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <ChevronUpGlyph
        width={8}
        height={5}
        strokeWidth={1.2}
        className="shrink-0 text-[#a0a0a0]"
      />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="h-[77px]" />

    <div className="flex items-center gap-[9px]">
      <ChevronUpGlyph
        width={12}
        height={8}
        strokeWidth={1.8}
        className="shrink-0 text-[#b2b2b1]"
      />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-4">
        <span className="text-[#a4a4a3]">Personal Access Token</span>
        <InfoGlyph />
      </div>
      <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-[19px]">
        <span className="text-[#737470]">figd_xxxxxxxxxxxxxxxxxx</span>
      </div>
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-4">
        <span className="text-[#a3a3a2]">Design URL</span>
        <InfoGlyph />
      </div>
      <div className="mt-3 flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-[19px]">
        <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>
    </div>

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface ChevronUpGlyphProps {
  width: number;
  height: number;
  strokeWidth: number;
  className?: string;
}
