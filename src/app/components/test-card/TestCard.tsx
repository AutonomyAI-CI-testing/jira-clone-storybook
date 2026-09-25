/**
 * TestCard — smoke-test reproduction of the attached Figma panel.
 *
 * Deliberately self-contained: no props, no state, no data. Approximate
 * spacing/colour/typography are acceptable here, so a few values are
 * hardcoded rather than routed through the repo's semantic tokens.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-[62px] pt-5 [font-family:Inter,sans-serif]"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    {/* Collapsed selection row */}
    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpSmall />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design */}
    <div className="mt-[77px] flex items-center gap-2">
      <ChevronUpLarge />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-7 flex items-center gap-3">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon />
    </div>
    <div className="mt-3 flex h-9 items-center border border-[#a5adad] bg-[#272822] px-4">
      <input
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxx"
        className="w-full bg-transparent text-[11.5px] font-semibold text-[#b5b5b5] outline-none placeholder:font-semibold placeholder:text-[#737470]"
      />
    </div>

    {/* Design URL */}
    <div className="mt-[11px] flex items-center gap-3">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <InfoIcon />
    </div>
    <div className="mt-[11px] flex h-[37px] items-center border-2 border-[#929291] bg-[#272822] px-4">
      <input
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className="w-full bg-transparent text-[10.5px] font-semibold text-[#b5b5b5] outline-none placeholder:font-semibold placeholder:text-[#71726e]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex gap-4 pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    {/* Recent Breakdowns */}
    <div className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={14}
    height={16}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width={15}
    height={15}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#a3a3a2]"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const ChevronUpSmall = () => (
  <svg
    viewBox="0 0 8 5"
    width={8}
    height={5}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#8b9291]"
  >
    <path d="M1 4l3-3 3 3" />
  </svg>
);

const ChevronUpLarge = () => (
  <svg
    viewBox="0 0 12 8"
    width={12}
    height={8}
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0 text-[#b2b2b1]"
  >
    <path d="M1 7l5-5 5 5" />
  </svg>
);
