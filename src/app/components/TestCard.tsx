export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#000000] px-5 pb-6 pt-5 font-primary font-semibold text-[13.5px] leading-[16.34px] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] text-[#b5b5b5]">UI magician Agent</h1>
        <svg
          width={14}
          height={16}
          viewBox="0 0 24 24"
          aria-hidden="true"
          fill="currentColor"
          className="shrink-0 text-[#b5b5b5]"
        >
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
        </svg>
      </div>

      <div className="mt-4 flex items-center gap-[9px]">
        <svg
          width={8}
          height={5}
          viewBox="0 0 8 6"
          aria-hidden="true"
          fill="none"
          className="shrink-0 text-[#8b9291]"
        >
          <path
            d="M1 4.5 4 1.5 7 4.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      <div className="mt-[72px] flex items-center gap-[10px]">
        <svg
          width={12}
          height={8}
          viewBox="0 0 12 9"
          aria-hidden="true"
          fill="none"
          className="shrink-0 text-[#b2b2b1]"
        >
          <path
            d="M1 7 6 2l5 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-[13.5px] text-[#b2b2b1]">Add New Design</h2>
      </div>

      <div className="mt-7 flex items-center gap-[10px]">
        <span className="text-[11.5px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <svg
          width={15}
          height={15}
          viewBox="0 0 15 15"
          aria-hidden="true"
          className="shrink-0 text-[#a4a4a3]"
        >
          <circle
            cx="7.5"
            cy="7.5"
            r="6.75"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="7.5" cy="4.4" r="0.85" fill="currentColor" />
          <rect
            x="6.7"
            y="6.4"
            width="1.6"
            height="4.6"
            rx="0.8"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="mt-[11px] flex h-9 w-[211px] items-center border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </div>

      <div className="mt-[11px] flex items-center gap-[10px]">
        <span className="text-[11.5px] text-[#a3a3a2]">Design URL</span>
        <svg
          width={15}
          height={15}
          viewBox="0 0 15 15"
          aria-hidden="true"
          className="shrink-0 text-[#a3a3a2]"
        >
          <circle
            cx="7.5"
            cy="7.5"
            r="6.75"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="7.5" cy="4.4" r="0.85" fill="currentColor" />
          <rect
            x="6.7"
            y="6.4"
            width="1.6"
            height="4.6"
            rx="0.8"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="mt-[11px] flex h-[37px] w-[211px] items-center border-2 border-[#929291] bg-[#272822] px-[19px] text-[11.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/:
      </div>

      <div className="mt-[22px] flex gap-[17px] pl-6">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[47px] text-[13.5px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
