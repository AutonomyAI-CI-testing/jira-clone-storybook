/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma frame.
 *
 * Smoke test only: static markup, no props, no state, no data. Layout comes from
 * Tailwind classes. The frame's colours are written as arbitrary values because no
 * semantic token in this project is a match for them (the nearest are
 * `--DarkNeutral200` #22272b and `--Orange800` #974f0c, both visibly different
 * shades); typography uses the project's own font families in place of Inter.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#000000] p-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon className="h-4 w-[14px] text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <ChevronUp className="h-[5px] w-2 text-[#8b9291]" />
        <p className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <ChevronUp className="h-2 w-3 text-[#b2b2b1]" />
        <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[28px] flex items-center gap-[18px]">
        <label
          htmlFor="test-card-token"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <InfoIcon className="h-[15px] w-[15px] text-[#a4a4a3]" />
      </div>
      <input
        id="test-card-token"
        readOnly
        defaultValue="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[11px] h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] leading-[13.92px] text-[#737470] outline-none"
      />

      <div className="mt-[11px] flex items-center gap-[18px]">
        <label
          htmlFor="test-card-url"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <InfoIcon className="h-[15px] w-[15px] text-[#a3a3a2]" />
      </div>
      <input
        id="test-card-url"
        readOnly
        defaultValue="https://www.figma.com/file/:"
        className="mt-[10px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[19px] font-primary-bold text-[10.5px] leading-[12.71px] text-[#71726e] outline-none"
      />

      <div className="mt-[23px] flex justify-end gap-[17px]">
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

      <h3 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const ChevronUp = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    preserveAspectRatio="none"
    vectorEffect="non-scaling-stroke"
    aria-hidden="true"
    className={className}
  >
    <polyline points="1 7 6 1 11 7" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
