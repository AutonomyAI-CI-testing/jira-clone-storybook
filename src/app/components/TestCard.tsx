const IconChevronUp = ({ className }: { className: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
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

const IconInfo = ({ className }: { className: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 7.4v.01M12 10.8v5.8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const IconSettings = ({ className }: { className: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58ZM12 15.6a3.6 3.6 0 1 1 0-7.2 3.6 3.6 0 0 1 0 7.2Z" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 font-primary-light"
    >
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-4 text-[#b5b5b5]">
          UI magician Agent
        </span>
        <IconSettings className="h-4 w-3.5 text-[#b5b5b5]" />
      </div>

      <div className="mt-[18px] flex items-center gap-3">
        <IconChevronUp className="h-[5px] w-2 text-[#8b9291]" />
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-3">
        <IconChevronUp className="h-2 w-3 text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] leading-4 text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <IconInfo className="h-[15px] w-[15px] text-[#a4a4a3]" />
      </div>
      <input
        aria-label="Personal Access Token"
        readOnly
        defaultValue="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-2 h-9 w-full border border-[#a5adad] bg-[#272822] px-[19px] font-primary-bold text-[11.5px] text-[#737470]"
      />

      <div className="mt-[11px] flex items-center gap-2">
        <span className="font-primary-bold text-[11.5px] leading-[14px] text-[#a3a3a2]">
          Design URL
        </span>
        <IconInfo className="h-[15px] w-[15px] text-[#a3a3a2]" />
      </div>
      <input
        aria-label="Design URL"
        readOnly
        defaultValue="https://www.figma.com/file/:"
        className="mt-2 h-9 w-full border-2 border-[#929291] bg-[#272822] px-5 font-primary-bold text-[10.5px] text-[#71726e]"
      />

      <div className="mt-[22px] ml-6 flex gap-[17px]">
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <span className="mt-[46px] font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
