const PANEL_BG = "bg-[#000000]";
const FIELD_BG = "bg-[#272822]";
const GLYPH = "#b0b0b0";

const ChevronUp = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className={className}
    focusable="false"
  >
    <path
      d="M1 6.75 6 1.75l5 5"
      stroke={GLYPH}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoGlyph = () => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.6" stroke={GLYPH} strokeWidth="1.2" />
    <circle cx="7.5" cy="4.4" r="0.95" fill={GLYPH} />
    <path
      d="M7.5 6.7v4.2"
      stroke={GLYPH}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const GearGlyph = () => (
  <svg
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    focusable="false"
    className="h-4 w-[14px] shrink-0"
  >
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <rect
        key={angle}
        x="6"
        y="0.5"
        width="2"
        height="3"
        rx="0.6"
        fill="#b5b5b5"
        transform={`rotate(${angle} 7 8)`}
      />
    ))}
    <circle cx="7" cy="8" r="4.4" stroke="#b5b5b5" strokeWidth="1.6" />
    <circle cx="7" cy="8" r="1.6" fill="#b5b5b5" />
  </svg>
);

const FIELD =
  "h-9 w-full rounded font-primary text-2xs text-[#737470] placeholder:text-[#737470]";

/**
 * Static, props-free reproduction of the Figma "UI magician Agent" panel.
 * Colours are the design's own values: the app's semantic tokens have no
 * counterpart for this panel's black / rust palette.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className={`w-[254px] px-5 pt-5 pb-12 ${PANEL_BG}`}>
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearGlyph />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <ChevronUp className="h-[5px] w-2 shrink-0" />
        <span className="truncate font-primary-bold text-2xs text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-20 flex items-center gap-2">
        <ChevronUp className="h-2 w-3 shrink-0" />
        <span className="font-primary-bold text-xs text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-2">
        <label
          htmlFor="personal-access-token"
          className="font-primary-bold text-2xs text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <InfoGlyph />
      </div>
      <input
        id="personal-access-token"
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={`mt-3 border border-[#a5adad] px-3 ${FIELD} ${FIELD_BG}`}
      />

      <div className="mt-3 flex items-center gap-2">
        <label
          htmlFor="design-url"
          className="font-primary-bold text-2xs text-[#a3a3a2]"
        >
          Design URL
        </label>
        <InfoGlyph />
      </div>
      <input
        id="design-url"
        readOnly
        placeholder="https://www.figma.com/file/"
        className={`mt-3 border-2 border-[#929291] px-3 ${FIELD} ${FIELD_BG}`}
      />

      <div className="mt-6 flex gap-4 pl-6">
        <button
          type="button"
          className="h-9 w-[85px] cursor-pointer rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-9 w-[85px] cursor-pointer rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-12 font-primary-bold text-xs text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};
