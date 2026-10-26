/**
 * TestCard — a static reproduction of the "UI magician Agent" panel from the
 * "Test Page - Simple" Figma file. Self-contained: no props, no state, no data.
 * Every value below is taken from the frame's extracted style guide.
 */

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUp = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 16l7-8 7 8" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9.5" />
    <path d="M12 11v5" />
    <path d="M12 7.6h.01" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1a1a1a] px-5 pb-[62px] pt-5 font-primary text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs">UI magician Agent</span>
      <span aria-hidden="true">
        <GearIcon />
      </span>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] text-[#8b9291]">
      <span aria-hidden="true">
        <ChevronUp width={8} height={5} />
      </span>
      <span className="font-primary-bold text-2xs">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[7px] text-[#b2b2b1]">
      <span aria-hidden="true">
        <ChevronUp width={12} height={8} />
      </span>
      <span className="font-primary-bold text-xs">Add New Design</span>
    </div>

    <label
      htmlFor="test-card-access-token"
      className="mt-[28px] flex items-center gap-2 font-primary-bold text-2xs text-[#a4a4a3]"
    >
      Personal Access Token
      <span aria-hidden="true">
        <InfoIcon />
      </span>
    </label>
    <input
      id="test-card-access-token"
      name="test-card-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-[18px] font-primary-bold text-2xs text-[#737470] placeholder:text-[#737470] focus-visible:outline-none"
    />

    <label
      htmlFor="test-card-design-url"
      className="mt-[11px] flex items-center gap-2 font-primary-bold text-2xs text-[#a3a3a2]"
    >
      Design URL
      <span aria-hidden="true">
        <InfoIcon />
      </span>
    </label>
    <input
      id="test-card-design-url"
      name="test-card-design-url"
      type="text"
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 font-primary-bold text-2xs text-[#71726e] placeholder:text-[#71726e] focus-visible:outline-none"
    />

    <div className="ml-6 mt-[22px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-2xs text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] font-primary-bold text-xs text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
