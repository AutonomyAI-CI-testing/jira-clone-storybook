export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#0d0d0d] px-5 pb-[59px] pt-5 font-primary text-[#b5b5b5]"
  >
    {/* Header */}
    <div className="flex h-4 items-center justify-between">
      <span className="text-[13.5px] leading-[16.34px]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    {/* Summary row */}
    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUpIcon className="h-[5px] w-2" />
      <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Add New Design band */}
    <div className="-mx-[18px] mt-[62px] flex h-[47px] items-center gap-[5px] bg-[#050505] px-[26px]">
      <ChevronUpIcon className="h-2 w-3" />
      <span className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Personal Access Token */}
    <div className="mt-3 flex h-[15px] items-center gap-3">
      <span className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon />
    </div>
    <div className="mt-[13px] flex h-9 w-full items-center border border-[#a5adad] bg-[#272822] px-[19px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#737470]">
        figd_xxxxxxxxxxxxxxxxxxxxxx
      </span>
    </div>

    {/* Design URL */}
    <div className="mt-[11px] flex h-[15px] items-center gap-[17px]">
      <span className="text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
        Design URL
      </span>
      <InfoIcon />
    </div>
    <div className="mt-[11px] flex h-[37px] w-full items-center border-2 border-[#929291] bg-[#272822] px-[19px]">
      <span className="text-[10.5px] leading-[12.71px] text-[#71726e]">
        https://www.figma.com/file/
      </span>
    </div>

    {/* Actions */}
    <div className="mt-[23px] flex gap-[17px] pl-[24px]">
      <ActionButton label="Awesome" />
      <ActionButton label="Prepare" />
    </div>

    {/* Recent Breakdowns */}
    <span className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button
    type="button"
    className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]"
  >
    {label}
  </button>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    className="shrink-0"
  >
    <circle cx="7" cy="8" r="5.4" />
    <circle cx="7" cy="8" r="2.2" />
    <path d="M7 1.1v1.5M7 13.4v1.5M0.6 8h1.5M11.9 8h1.5M2.5 3.5l1.1 1.1M10.4 11.4l1.1 1.1M11.5 3.5l-1.1 1.1M3.6 11.4l-1.1 1.1" />
  </svg>
);

const ChevronUpIcon = ({
  className,
}: {
  className?: string;
}): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1 7l5-5 5 5" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    focusable="false"
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.1"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.4" />
    <path d="M7.5 6.8v4.2" strokeLinecap="round" />
    <circle cx="7.5" cy="4.5" r="0.7" fill="currentColor" stroke="none" />
  </svg>
);
