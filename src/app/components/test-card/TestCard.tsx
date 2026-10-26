interface IconProps {
  className?: string;
}

const GearIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
    <path
      d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.03 1.56V21a2 2 0 1 1-4 0v-.09A1.7 1.7 0 0 0 8.9 19.3a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.54 15a1.7 1.7 0 0 0-1.56-1.03H2.9a2 2 0 1 1 0-4h.09A1.7 1.7 0 0 0 4.54 8.9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 8.9 4.54h.08A1.7 1.7 0 0 0 10 2.98V2.9a2 2 0 1 1 4 0v.09a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87v.08A1.7 1.7 0 0 0 21.02 10h.08a2 2 0 1 1 0 4h-.09a1.7 1.7 0 0 0-1.56 1.03Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 12 8" fill="none" className={className} aria-hidden="true">
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M8 7.4v3.8"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <circle cx="8" cy="5" r="0.85" fill="currentColor" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-8 pt-5"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary text-[13.5px] leading-4 text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <GearIcon className="h-4 w-[14px] text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <p className="truncate font-primary text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a single component
      </p>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <h3 className="font-primary text-[13.5px] leading-4 text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    <div className="mt-[26px]">
      <div className="flex items-center gap-3">
        <span className="font-primary text-[11.5px] leading-[14px] text-[#a4a4a3]">
          Personal Access Token
        </span>
        <InfoIcon className="h-[15px] w-[15px] text-[#a4a4a3]" />
      </div>
      <div className="mt-2 flex h-[39px] w-full items-center border border-[#a5adad] bg-[#272822] px-5">
        <span className="font-primary text-[11.5px] leading-[14px] text-[#737470]">
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>
    </div>

    <div className="mt-[23px]">
      <div className="flex items-center gap-3">
        <span className="font-primary text-[11.5px] leading-[14px] text-[#a3a3a2]">
          Design URL
        </span>
        <InfoIcon className="h-[15px] w-[15px] text-[#a3a3a2]" />
      </div>
      <div className="mt-2 flex h-[41px] w-full items-center border-2 border-[#929291] bg-[#272822] px-5">
        <span className="font-primary text-[10.5px] leading-[13px] text-[#71726e]">
          https://www.figma.com/file/:
        </span>
      </div>
    </div>

    <div className="mt-[22px] flex gap-4">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-[42px] font-primary text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </h3>
  </div>
);
