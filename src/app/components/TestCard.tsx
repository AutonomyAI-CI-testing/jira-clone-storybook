/**
 * TestCard — smoke test.
 *
 * A self-contained reproduction of the attached Figma frame ("UI magician
 * Agent" settings panel). Deliberately static: no props, no state, no
 * handlers. Colours are Tailwind arbitrary values rather than design tokens
 * because the token set is a theme-resolved blue-on-neutral palette and this
 * panel is a fixed dark surface with a rust accent.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[#1c1c1c] px-[38px] pt-[40px] pb-[40px] font-primary"
  >
    {/* Header */}
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[21px] text-[#d4d4d4]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="cursor-pointer text-[#c9c9c9]"
      >
        <GearIcon />
      </button>
    </div>

    {/* Collapsed section row */}
    <div className="mt-[36px] flex items-center gap-[14px] text-[#9a9a9a]">
      <ChevronUpIcon />
      <span className="text-[17px]">From entire frame to a singl...</span>
    </div>

    {/* Section heading */}
    <div className="mt-[150px] flex items-center gap-[14px] text-[#d4d4d4]">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-[21px] text-[#e6e6e6]">
        Add New Design
      </h2>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[54px]">
      <div className="flex items-center gap-[14px]">
        <span className="text-[17px] text-[#c9c9c9]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className="mt-[22px] h-[63px] w-full rounded-[4px] border-[1.5px] border-[#6b6b6b] bg-[#2b2b2b] px-[20px] text-[17px] text-[#d4d4d4] placeholder:text-[#8a8a8a]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-[30px]">
      <div className="flex items-center gap-[14px]">
        <span className="text-[17px] text-[#c9c9c9]">Design URL</span>
        <InfoIcon />
      </div>
      <input
        type="text"
        placeholder="https://www.figma.com/file/"
        className="mt-[22px] h-[63px] w-full rounded-[4px] border-[1.5px] border-[#6b6b6b] bg-[#2b2b2b] px-[20px] text-[17px] text-[#d4d4d4] placeholder:text-[#8a8a8a]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[46px] flex gap-[32px]">
      <button
        type="button"
        className="h-[73px] w-[170px] cursor-pointer rounded-[6px] bg-[#a34a21] text-[19px] text-[#c9b3a6]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[73px] w-[175px] cursor-pointer rounded-[6px] bg-[#a34a21] text-[19px] text-[#c9b3a6]"
      >
        Prepare
      </button>
    </div>

    {/* Footer heading */}
    <h2 className="mt-[95px] font-primary-bold text-[21px] text-[#d4d4d4]">
      Recent Breakdowns
    </h2>
  </div>
);

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const GearIcon = (): JSX.Element => (
  <svg {...iconProps} className="h-[26px] w-[26px]" aria-hidden="true">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg {...iconProps} className="h-[20px] w-[20px]" aria-hidden="true">
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg {...iconProps} className="h-[24px] w-[24px]" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);
