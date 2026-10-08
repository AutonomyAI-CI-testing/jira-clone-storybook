interface GlyphProps {
  className?: string;
}

const SettingsGlyph = ({ className }: GlyphProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpGlyph = ({ className }: GlyphProps) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 6.5 L6 1.5 L11 6.5" />
  </svg>
);

const InfoCircleGlyph = ({ className }: GlyphProps) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    aria-hidden="true"
    className={className}
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.2v4" strokeLinecap="round" />
    <circle cx="8" cy="4.7" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] bg-black px-5 pt-5 font-['Inter']"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <SettingsGlyph className="h-4 w-[14px] text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpGlyph className="h-[5px] w-2 text-[#8b9291]" />
      <p className="text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUpGlyph className="h-2 w-3 text-[#b2b2b1]" />
      <h2 className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-7">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoCircleGlyph className="h-[15px] w-[15px] text-[#a4a4a3]" />
      </div>
      <div className="mt-3 flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] pl-5">
        <span className="text-[11.5px] font-semibold text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>
    </div>

    <div className="mt-[11px]">
      <div className="flex items-center gap-2">
        <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
          Design URL
        </span>
        <InfoCircleGlyph className="h-[15px] w-[15px] text-[#a3a3a2]" />
      </div>
      <div className="mt-[11px] flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] pl-5">
        <span className="text-[10.5px] font-semibold text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>
    </div>

    <div className="ml-6 mt-[22px] flex gap-[17px]">
      <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]">
        Awesome
      </div>
      <div className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]">
        Prepare
      </div>
    </div>

    <h2 className="mt-[46px] text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
