interface GlyphProps {
  className?: string;
}

const GearGlyph = ({ className = "" }: GlyphProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
  </svg>
);

const ChevronUpGlyph = ({ className = "" }: GlyphProps) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoGlyph = ({ className = "" }: GlyphProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.2v4.2M8 4.6v.02" />
  </svg>
);

const FIELD_CLASS =
  "mt-3 h-[36px] w-full bg-[#272822] px-[19px] font-primary-bold text-[#737470] outline-none placeholder:text-[#737470]";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#000000] p-5 font-primary text-[11.5px] leading-[13.92px]"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearGlyph className="h-4 w-[14px] text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[#8b9291]">
      <ChevronUpGlyph className="h-[5px] w-2 shrink-0" />
      <span className="min-w-0 truncate font-primary-bold">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUpGlyph className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[27px]">
      <div className="flex items-center">
        <span className="font-primary-bold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoGlyph className="ml-auto h-[15px] w-[15px] text-[#a4a4a3]" />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className={`${FIELD_CLASS} border border-[#a5adad]`}
      />
    </div>

    <div className="mt-3">
      <div className="flex items-center gap-[12px]">
        <span className="font-primary-bold text-[#a3a3a2]">Design URL</span>
        <InfoGlyph className="h-[15px] w-[15px] text-[#a3a3a2]" />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/:"
        className={`${FIELD_CLASS} border-2 border-[#929291] text-[10.5px] leading-[12.71px] placeholder:text-[10.5px]`}
      />
    </div>

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <button type="button" className={BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <div className="mt-[48px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
