const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-[16px] w-[16px] shrink-0"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className={`h-[16px] w-[16px] shrink-0 ${className ?? ""}`}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
  </svg>
);

const InfoCircleIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    className="h-[16px] w-[16px] shrink-0"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-[Inter] text-[#b5b5b5]"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      {/* Collapsed summary row */}
      <div className="mt-3 flex items-center gap-2">
        <ChevronUpIcon className="text-[#8b9291]" />
        <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[60px]" />

      {/* Add New Design */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon className="text-[#b2b2b1]" />
        <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="mt-6">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoCircleIcon />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
          className="mt-2 h-[36px] w-full rounded-[2px] border border-[#a5adad] bg-[#272822] px-2 text-[11.5px] text-[#b5b5b5] placeholder:text-[#737470]"
        />
      </div>

      {/* Design URL */}
      <div className="mt-5">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
            Design URL
          </span>
          <InfoCircleIcon />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/"
          className="mt-2 h-[36px] w-full rounded-[2px] border-2 border-[#929291] bg-[#272822] px-2 text-[11.5px] text-[#b5b5b5] placeholder:text-[#71726e]"
        />
      </div>

      {/* Actions */}
      <div className="mt-7 flex gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[13.5px] font-semibold text-[#c8c8c8]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[13.5px] font-semibold text-[#c8c8c8]"
        >
          Prepare
        </button>
      </div>

      <div className="mt-[70px]" />

      {/* Recent Breakdowns */}
      <span className="text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </span>
    </div>
  );
};
