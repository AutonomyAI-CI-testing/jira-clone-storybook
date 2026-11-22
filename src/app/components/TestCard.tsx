export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="w-[254px] bg-[#1e1e1e] px-5 py-5 font-primary">
      <div className="flex items-start justify-between gap-2">
        <h2 className="text-[13.5px] font-primary-bold leading-4 text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <GearIcon className="mt-px h-4 w-[14px] shrink-0 text-[#b0b0b0]" />
      </div>

      <div className="mt-4 flex items-center gap-2 text-[#8b9291]">
        <ChevronIcon className="h-[5px] w-2 shrink-0" />
        <span className="truncate text-[11.5px] font-primary-bold leading-[14px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2 text-[#b2b2b1]">
        <ChevronIcon className="h-2 w-3 shrink-0" />
        <h2 className="text-[13.5px] font-primary-bold leading-4">Add New Design</h2>
      </div>

      <div className="mt-7">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11.5px] font-primary-bold leading-[14px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#b0b0b0]" />
        </div>
        <input
          type="text"
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-4 text-[11.5px] font-primary-bold leading-[14px] text-[#737470] placeholder:text-[#737470] focus-visible:outline-none"
        />
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11.5px] font-primary-bold leading-[14px] text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#b0b0b0]" />
        </div>
        <input
          type="text"
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-4 text-[10.5px] font-primary-bold leading-[13px] text-[#71726e] placeholder:text-[#71726e] focus-visible:outline-none"
        />
      </div>

      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-primary-bold leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-primary-bold leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-12 text-[13.5px] font-primary-bold leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.48.48 0 0 0-.59-.22l-2.39.96a7.03 7.03 0 0 0-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.48.48 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58ZM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z" />
  </svg>
);

const ChevronIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="7.5" cy="4.6" r="0.9" fill="currentColor" />
    <path d="M7.5 7v3.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

interface IconProps {
  className?: string;
}
