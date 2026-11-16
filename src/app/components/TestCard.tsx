/**
 * TestCard — a self-contained reproduction of the "UI magician Agent" Figma
 * frame. Smoke test only: no props, no state, no data, nothing wired up.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-[508px] w-[254px] bg-black px-5 py-5">
      <div className="flex items-start justify-between gap-2">
        <h1 className="text-xs font-primary-bold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <ChevronUpIcon className="h-[5px] w-[8px] shrink-0 text-[#8b9291]" />
        <span className="min-w-0 truncate text-2xs font-primary-bold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <h2 className="mt-[77px] flex items-center gap-2 text-xs font-primary-bold text-[#b2b2b1]">
        <ChevronUpIcon className="h-[8px] w-[12px] shrink-0" />
        Add New Design
      </h2>

      <div className="mt-[28px]">
        <div className="flex items-center gap-2">
          <label
            htmlFor="testElem-token"
            className="text-2xs font-primary-bold text-[#a4a4a3]"
          >
            Personal Access Token
          </label>
          <InfoIcon className="h-[15px] w-[15px] text-[#a4a4a3]" />
        </div>
        <input
          id="testElem-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-[10px] h-[39px] w-full border border-[#a5adad] bg-[#272822] pl-[21px] text-2xs font-primary-bold text-[#b0b0b0] placeholder:text-[#737470]"
        />
      </div>

      <div className="mt-[10px]">
        <div className="flex items-center gap-2">
          <label
            htmlFor="testElem-url"
            className="text-2xs font-primary-bold text-[#a3a3a2]"
          >
            Design URL
          </label>
          <InfoIcon className="h-[15px] w-[15px] text-[#a3a3a2]" />
        </div>
        <input
          id="testElem-url"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-[9px] h-[41px] w-full border-2 border-[#929291] bg-[#272822] pl-[22px] text-2xs font-primary-bold text-[#b0b0b0] placeholder:text-[#71726e]"
        />
      </div>

      <div className="mt-[20px] flex justify-end gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs font-primary-bold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs font-primary-bold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[47px] text-xs font-primary-bold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const GEAR_PATH =
  "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z";

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="16"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    className="shrink-0 text-[#b5b5b5]"
  >
    <path d={GEAR_PATH} />
  </svg>
);

const ChevronUpIcon = ({
  className,
}: {
  className?: string;
}): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <path d="M1.5 6.5 6 2l4.5 4.5" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    aria-hidden="true"
    focusable="false"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.5" strokeWidth="1" />
    <path d="M7.5 7v3.2" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export default TestCard;
