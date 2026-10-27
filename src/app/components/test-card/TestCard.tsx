/**
 * TestCard — standalone reproduction of the attached Figma panel.
 *
 * Smoke test only: no props, no state, no data. Values (colours, sizes) come
 * from the frame's extracted style guide and are intentionally off the app's
 * semantic token set, so they are written as literals here.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-black font-primary text-[13.5px] text-[#b5b5b5]"
    >
      <div className="h-[9px] w-full bg-[#1c1c1c]" />

      <div className="flex items-center justify-between px-5 pt-5">
        <span className="font-primary-bold">UI magician Agent</span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px] pl-[23px] pr-5">
        <ChevronUpIcon className="h-[5px] w-2 shrink-0" />
        <span className="truncate text-[11.5px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-[5px] pl-[26px] pr-5">
        <ChevronUpIcon className="h-2 w-3 shrink-0" />
        <span className="font-primary-bold text-[#b2b2b1]">Add New Design</span>
      </div>

      <div className="mt-7 px-5">
        <div className="flex items-center gap-5">
          <label
            htmlFor="figma-access-token"
            className="font-primary-bold text-[11.5px] text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="figma-access-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[19px] text-[11.5px] text-[#737470] outline-none placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-3 px-5">
        <div className="flex items-center gap-4">
          <label
            htmlFor="figma-design-url"
            className="font-primary-bold text-[11.5px] text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="figma-design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] pl-5 text-[10.5px] text-[#71726e] outline-none placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-[44px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-11 px-5 pb-10 font-primary-bold text-[#b0b0b0]">
        Recent Breakdowns
      </div>
    </div>
  );
};

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-[14px] shrink-0 text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 9 8 1l7 8" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.2v4" strokeLinecap="round" />
    <circle cx="8" cy="4.8" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);
