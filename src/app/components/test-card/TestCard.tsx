/**
 * Smoke-test component built from a Figma frame ("UI magician Agent" panel).
 * Self-contained on purpose: no props, no state, no behaviour. It is not wired
 * into any route or screen.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[508px] w-[254px] bg-[#0d0d0d] p-5 font-primary text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-[14px] fill-current"
          aria-hidden="true"
        >
          <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.01-1.58ZM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2Z" />
        </svg>
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <svg
          viewBox="0 0 8 5"
          className="h-[5px] w-2 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M1 4 4 1l3 3" />
        </svg>
        <span className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <svg
          viewBox="0 0 12 8"
          className="h-2 w-3 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M1 7 6 1l5 6" />
        </svg>
        <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      <div className="mt-7">
        <div className="flex items-center gap-6">
          <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <svg
            viewBox="0 0 15 15"
            className="h-[15px] w-[15px] shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.1}
            aria-hidden="true"
          >
            <circle cx="7.5" cy="7.5" r="6.5" />
            <path d="M7.5 6.9v3.5" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.85" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <div className="mt-2.5 flex h-[39px] items-center border border-[#a5adad] bg-[#272822] px-[21px]">
          <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      <div className="mt-2.5">
        <div className="flex items-center gap-6">
          <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
            Design URL
          </span>
          <svg
            viewBox="0 0 15 15"
            className="h-[15px] w-[15px] shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.1}
            aria-hidden="true"
          >
            <circle cx="7.5" cy="7.5" r="6.5" />
            <path d="M7.5 6.9v3.5" strokeLinecap="round" />
            <circle cx="7.5" cy="4.5" r="0.85" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <div className="mt-2.5 flex h-[41px] items-center border-2 border-[#929291] bg-[#272822] px-5">
          <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-[17px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
