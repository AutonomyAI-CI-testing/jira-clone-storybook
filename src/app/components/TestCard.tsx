/**
 * Static reproduction of the "UI magician Agent" settings panel from the Figma
 * frame. Self-contained smoke-test component: no props, no state, no handlers.
 * Colours and sizes are taken from the frame's exported style guide and are
 * intentionally approximate.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-black px-5 pt-5 text-[13.5px] leading-[16px] font-semibold text-[#b5b5b5]"
    >
      <div className="flex items-start justify-between">
        <span>UI magician Agent</span>
        <GearIcon className="mt-px h-4 w-[14px] shrink-0" />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0" />
        <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[9px] text-[#b2b2b1]">
        <ChevronUpIcon className="h-2 w-3 shrink-0" />
        <span>Add New Design</span>
      </div>

      <label
        htmlFor="testElem-token"
        className="mt-7 flex items-center gap-2 text-[11.5px] leading-[14px] text-[#a4a4a3]"
      >
        Personal Access Token
        <InfoIcon className="h-[15px] w-[15px] shrink-0" />
      </label>
      <input
        id="testElem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] leading-[14px] font-semibold text-[#737470] outline-none placeholder:text-[#737470]"
      />

      <label
        htmlFor="testElem-url"
        className="mt-[11px] flex items-center gap-2 text-[11.5px] leading-[14px] text-[#a3a3a2]"
      >
        Design URL
        <InfoIcon className="h-[15px] w-[15px] shrink-0" />
      </label>
      <input
        id="testElem-url"
        type="text"
        placeholder="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-5 text-[11.5px] leading-[14px] font-semibold text-[#71726e] outline-none placeholder:text-[#71726e]"
      />

      <div className="mt-[22px] flex justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-[47px]">Recent Breakdowns</span>
    </div>
  );
};

const GearIcon = ({ className }: IconProps) => (
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
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M18 15l-6-6-6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
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
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface IconProps {
  className: string;
}
