const chevronUp = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#b0b0b0]"
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const infoIcon = (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    className="shrink-0 text-[#a4a4a3]"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" />
    <path d="M7.5 7v4" stroke="currentColor" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.9" fill="currentColor" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#0b0b0b] font-primary"
    >
      <div className="h-[9px] w-full shrink-0 bg-[#333333]" />

      <div className="flex flex-1 flex-col px-5 pb-5 pt-3">
        <div className="flex items-center justify-between">
          <span className="font-primary-bold text-xs text-[#b5b5b5]">
            UI magician Agent
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 text-[#b5b5b5]"
            aria-hidden="true"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>

        <div className="mt-4 flex items-center gap-2">
          {chevronUp}
          <span className="truncate text-2xs text-[#8b9291]">
            From entire frame to a singl...
          </span>
        </div>

        <div className="mt-[72px] flex items-center gap-2">
          {chevronUp}
          <span className="font-primary-bold text-xs text-[#b2b2b1]">
            Add New Design
          </span>
        </div>

        <div className="mt-7 flex items-center gap-2">
          <span className="text-2xs text-[#a4a4a3]">
            Personal Access Token
          </span>
          {infoIcon}
        </div>
        <input
          readOnly
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          aria-label="Personal Access Token"
          className="mt-2 h-[39px] w-full border border-[#a5adad] bg-[#272822] px-3 text-2xs text-[#737470] placeholder:text-[#737470]"
        />

        <div className="mt-3 flex items-center gap-2">
          <span className="text-2xs text-[#a4a4a3]">Design URL</span>
          {infoIcon}
        </div>
        <input
          readOnly
          type="text"
          placeholder="https://www.figma.com/file/:"
          aria-label="Design URL"
          className="mt-2 h-[37px] w-full border-2 border-[#929291] bg-[#272822] px-3 text-2xs text-[#71726e] placeholder:text-[#71726e]"
        />

        <div className="mt-5 flex justify-center gap-4">
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
          >
            Awesome
          </button>
          <button
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] text-2xs text-[#8c8078]"
          >
            Prepare
          </button>
        </div>

        <span className="mt-11 font-primary-bold text-xs text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
