const GearGlyph = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#d0d0d0]"
  >
    <circle cx="7" cy="8" r="4.2" stroke="currentColor" />
    <circle cx="7" cy="8" r="1.5" stroke="currentColor" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1="7"
        y1="1.4"
        x2="7"
        y2="3.2"
        stroke="currentColor"
        transform={`rotate(${angle} 7 8)`}
      />
    ))}
  </svg>
);

const ChevronUpGlyph = ({ className }: { className: string }): JSX.Element => (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className={className}>
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoGlyph = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#a4a4a3]"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" />
    <circle cx="7.5" cy="4.6" r="0.9" fill="currentColor" />
    <path
      d="M7.5 7.2v3.4"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[#1e1e1e] px-5 pb-16 pt-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </span>
      <GearGlyph />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpGlyph className="h-[5px] w-2 text-[#8b9291]" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUpGlyph className="h-2 w-3 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex items-center gap-7">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoGlyph />
    </div>
    <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] leading-[13.92px] text-[#737470]">
      figd_xxxxxxxxxxxxxxxxxx
    </div>

    <div className="mt-[11px] flex items-center gap-1.5">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <InfoGlyph />
    </div>
    <div className="mt-3 flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] leading-[12.71px] text-[#71726e]">
      https://www.figma.com/file/:
    </div>

    <div className="mt-[22px] flex gap-4 pl-6">
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
