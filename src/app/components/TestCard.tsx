/**
 * TestCard — a self-contained, prop-less panel recreated from a Figma frame.
 *
 * It is a fixed-look dark surface, so it pins its own colours instead of
 * reading the app's theme tokens (every semantic token re-resolves per theme,
 * which would recolour the panel). It is a smoke test: no props, no state,
 * no data, no interaction.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-[#1e1e1e] pb-[62px] font-primary text-[13.5px] leading-[1.21] text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-start justify-between px-5 pt-5">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearGlyph />
      </div>

      {/* Collapsed section */}
      <div className="flex items-center gap-[9px] px-5 pt-[18px]">
        <ChevronUpGlyph className="h-[5px] w-2 text-[#b5b5b5]" />
        <span className="text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="flex items-center gap-[5px] px-5 pt-[77px]">
        <ChevronUpGlyph className="h-2 w-3 text-[#c7c7c7]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-5 px-5 pt-[28px]">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoGlyph />
      </div>
      <div className="px-5 pt-3">
        <input
          type="text"
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-9 w-[211px] border border-[#a5adad] bg-[#272822] pl-[18px] text-[11.5px] font-semibold text-[#737470] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="flex items-center gap-5 px-5 pt-[11px]">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <InfoGlyph />
      </div>
      <div className="px-5 pt-3">
        <input
          type="text"
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] pl-[18px] text-[10.5px] font-semibold text-[#71726e] placeholder:text-[#71726e]"
        />
      </div>

      {/* Actions */}
      <div className="flex gap-[17px] pl-11 pt-[22px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <p className="px-5 pt-[46px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  );
};

const GearGlyph = () => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#9a9a9a]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpGlyph = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoGlyph = () => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0 text-[#a5adad]"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.75"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M7.5 6.9v3.4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.9" r="0.85" fill="currentColor" />
  </svg>
);

export default TestCard;
