export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#0d0d0d] px-5 pt-5 pb-[62px] font-sans"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <button
        type="button"
        aria-label="Open settings"
        className="flex h-4 w-3.5 items-center justify-center text-[#b5b5b5]"
      >
        <SettingsIcon className="h-4 w-3.5" />
      </button>
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 text-[#8b9291]" />
      <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#8b9291]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUpIcon className="h-2 w-3 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16.34px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-5">
      <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#a4a4a3]">
        Personal Access Token
      </span>
      <span
        role="img"
        aria-label="About the personal access token"
        className="flex items-center text-[#a4a4a3]"
      >
        <InfoIcon className="h-[15px] w-[15px]" />
      </span>
    </div>

    <div className="mt-3 flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] pl-[19px]">
      <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxx
      </span>
    </div>

    <div className="mt-3 flex items-center gap-5">
      <span className="text-[11.5px] leading-[13.92px] font-semibold text-[#a3a3a2]">
        Design URL
      </span>
      <span
        role="img"
        aria-label="About the design URL"
        className="flex items-center text-[#a3a3a2]"
      >
        <InfoIcon className="h-[15px] w-[15px]" />
      </span>
    </div>

    <div className="mt-3 flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] pl-5">
      <span className="text-[10.5px] leading-[12.71px] font-semibold text-[#71726e]">
        https://www.figma.com/file/:
      </span>
    </div>

    <div className="mt-[22px] flex justify-end gap-[15px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[13.92px] font-semibold text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] text-[13.5px] leading-[16.34px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const ChevronUpIcon = ({
  className,
}: {
  className?: string;
}): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
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

const SettingsIcon = ({
  className,
}: {
  className?: string;
}): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }): JSX.Element => (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" />
    <circle cx="7.5" cy="4.4" r="0.9" fill="currentColor" />
    <path
      d="M7.5 6.9v3.7"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);
