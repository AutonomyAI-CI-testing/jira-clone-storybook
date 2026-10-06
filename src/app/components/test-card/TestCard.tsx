/**
 * Smoke-test panel reproducing the "UI magician Agent" Figma frame.
 * Self-contained: no props, no state, no imports.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-[#1e1e1e] px-5 py-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearGlyph />
    </div>

    <div className="mt-2 flex items-center gap-2">
      <ChevronUpGlyph className="h-[5px] w-2 text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <ChevronUpGlyph className="h-2 w-3 text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-6 flex items-center gap-3">
      <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoGlyph />
    </div>

    <div className="mt-2 flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="text-[11.5px] font-semibold text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-3 flex items-center gap-3">
      <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
        Design URL
      </span>
      <InfoGlyph />
    </div>

    <div className="mt-2 flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-5">
      <span className="text-[10.5px] font-semibold text-[#71726e]">
        https://www.figma.com/file/
      </span>
    </div>

    <div className="mt-5 flex items-center gap-4 pl-6">
      <TestCardButton>Awesome</TestCardButton>
      <TestCardButton>Prepare</TestCardButton>
    </div>

    <div className="mt-16 text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

const TestCardButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
  >
    {children}
  </button>
);

const ChevronUpGlyph = ({ className }: { className: string }): JSX.Element => (
  <svg
    className={className}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoGlyph = (): JSX.Element => (
  <svg
    className="h-[15px] w-[15px] text-[#a4a4a3]"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.75" />
    <path d="M7.5 6.6v4" strokeLinecap="round" />
    <circle cx="7.5" cy="4.4" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

const GearGlyph = (): JSX.Element => (
  <svg
    className="h-4 w-[14px] text-[#b5b5b5]"
    viewBox="0 0 14 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="7" cy="8" r="2.6" />
    <circle cx="7" cy="8" r="5.9" />
    <path d="M7 1.4v1.2M7 13.4v1.2M1.3 8h1.2M11.5 8h1.2M3 4l.9.9M10.1 11.1l.9.9M11 4l-.9.9M3.9 11.1 3 12" />
  </svg>
);
