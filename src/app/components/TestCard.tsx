const ChevronUp = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 12 8" className={className} fill="none" aria-hidden="true">
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 15 15" className={className} fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 6.9v3.6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.5" r="0.8" fill="currentColor" />
  </svg>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <svg viewBox="0 0 14 16" className={className} fill="none" aria-hidden="true">
    <circle cx="7" cy="8" r="3.1" stroke="currentColor" strokeWidth="1.3" />
    <circle
      cx="7"
      cy="8"
      r="5.6"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeDasharray="1.76 2.64"
    />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#0d0d0d] p-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <GearIcon className="h-4 w-3.5 shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUp className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="min-w-0 truncate font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-1.5">
      <ChevronUp className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-[28px] flex items-center gap-5">
      <label
        htmlFor="testElem-access-token"
        className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
      >
        Personal Access Token
      </label>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      id="testElem-access-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] pl-[18px] font-primary-bold text-[11.5px] text-[#737470] placeholder:text-[#737470]"
    />

    <div className="mt-[11px] flex items-center gap-5">
      <label
        htmlFor="testElem-design-url"
        className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
      >
        Design URL
      </label>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]" />
    </div>
    <input
      id="testElem-design-url"
      readOnly
      placeholder="https://www.figma.com/file/:"
      className="mt-[11px] h-9 w-full border-2 border-[#929291] bg-[#272822] pl-[18px] font-primary-bold text-[10.5px] text-[#71726e] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] ml-[24px] flex gap-[17px]">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface IconProps {
  className?: string;
}
