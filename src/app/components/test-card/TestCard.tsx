/**
 * Standalone reproduction of the "Test Page - Simple" Figma frame.
 * Self-contained: no props, no state, no data — it exists to prove that a
 * component built from a Figma design renders in this project.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-black px-5 pb-[62px] pt-5 font-primary">
    {/* Header */}
    <div className="flex items-start justify-between text-[#b5b5b5]">
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </h2>
      <GearIcon />
    </div>

    {/* Collapsed summary */}
    <div className="mt-[18px] flex items-center gap-[9px] text-[#d4d4d4]">
      <ChevronUp className="h-[5px] w-[8px] shrink-0" />
      <span className="truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[77px] flex items-center gap-[5px] text-[#d4d4d4]">
      <ChevronUp className="h-[8px] w-[12px] shrink-0" />
      <h3 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    {/* Personal Access Token */}
    <div className="mt-[28px]">
      <div className="flex items-center gap-[14px] text-[#b5b5b5]">
        <label
          htmlFor="test-card-token"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
        >
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-token"
        name="personalAccessToken"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] text-[#d4d4d4] outline-none placeholder:text-[#737470]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-3">
      <div className="flex items-center gap-[14px] text-[#b5b5b5]">
        <label
          htmlFor="test-card-design-url"
          className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
        >
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-card-design-url"
        name="designUrl"
        placeholder="https://www.figma.com/file/:"
        className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-[18px] font-primary-bold text-[10.5px] text-[#d4d4d4] outline-none placeholder:text-[#71726e]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px] pl-6">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    {/* Recent list */}
    <h4 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h4>
  </div>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-4 w-[14px] shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = ({ className }: { className: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.2}
  >
    <circle cx="7.5" cy="7.5" r="6.4" />
    <path d="M7.5 7.2v3.6" strokeLinecap="round" />
    <circle cx="7.5" cy="4.7" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);
