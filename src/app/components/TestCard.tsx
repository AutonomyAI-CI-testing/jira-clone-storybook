/**
 * Smoke-test component: reproduces an external Figma frame (a dark plugin
 * settings panel) as a single self-contained card. It deliberately sits
 * outside this repo's semantic token system — the design is an external one,
 * so the colours and sizes below are taken from that frame's own style guide
 * rather than from `background-*` / `font-*` tokens.
 *
 * No props, no state, no interactivity: the inputs are display-only and the
 * buttons are inert.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#000000] p-[20px] font-['Inter',sans-serif] font-semibold"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</span>
        <GearIcon />
      </div>

      {/* Collapsed section summary */}
      <div className="mt-[18px] flex items-center gap-[10px]">
        <ChevronUpIcon className="h-[5px] w-[8px] text-[#8b9291]" />
        <span className="text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design */}
      <div className="mt-[70px] flex items-center gap-[10px]">
        <ChevronUpIcon className="h-[8px] w-[12px] text-[#b2b2b1]" />
        <span className="text-[13.5px] text-[#b2b2b1]">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-[35px] flex flex-col gap-[6px]">
        <div className="flex items-center gap-[6px]">
          <span className="text-[11.5px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="h-[36px] w-[211px] border border-[#a5adad] bg-[#272822] px-[12px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-[17px] flex flex-col gap-[6px]">
        <div className="flex items-center gap-[6px]">
          <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
          <InfoIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="h-[37px] w-[211px] border-2 border-[#929291] bg-[#272822] px-[12px] text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
        />
      </div>

      {/* Actions */}
      <div className="mt-[27px] flex items-center justify-center gap-[17px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded-[4px] bg-[#843a17] text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 className="mt-[47px] text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const GearIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({
  className,
}: {
  className: string;
}): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 7L6 1L11 7" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[#a4a4a3]"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-5" />
    <path d="M12 8h.01" />
  </svg>
);

export default TestCard;
