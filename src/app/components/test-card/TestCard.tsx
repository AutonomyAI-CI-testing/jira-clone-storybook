const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 12 8" fill="none" className={className} aria-hidden="true">
    <path
      d="M1 7L6 2L11 7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 15 15" fill="none" className={className} aria-hidden="true">
    <circle
      cx="7.5"
      cy="7.5"
      r="6.75"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <path
      d="M7.5 6.6V10.6"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.85" fill="currentColor" />
  </svg>
);

const GearIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
    <path
      d="M8 1.6l.9 1.55a5.1 5.1 0 0 1 1.2.5l1.72-.53 1.06 1.83-1.1 1.42c.14.38.22.79.22 1.21s-.08.83-.22 1.21l1.1 1.42-1.06 1.83-1.72-.53a5.1 5.1 0 0 1-1.2.5L8 14.4l-.9-1.55a5.1 5.1 0 0 1-1.2-.5l-1.72.53-1.06-1.83 1.1-1.42A5.06 5.06 0 0 1 4 8c0-.42.08-.83.22-1.21L3.12 5.37l1.06-1.83 1.72.53a5.1 5.1 0 0 1 1.2-.5L8 1.6z"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinejoin="round"
    />
    <circle cx="8" cy="8" r="1.9" stroke="currentColor" strokeWidth="1.1" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 pb-5 pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-[16px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon className="h-4 w-[14px] shrink-0 text-[#b5b5b5]" />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px]">
      <ChevronUpIcon className="h-[5px] w-2 shrink-0 text-[#8b9291]" />
      <span className="text-[11.5px] leading-[14px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[9px]">
      <ChevronUpIcon className="h-2 w-3 shrink-0 text-[#b2b2b1]" />
      <span className="text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-7 flex items-center gap-2">
      <span className="text-[11.5px] leading-[14px] text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      aria-label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-3 h-9 w-full rounded-none border border-[#a5adad] bg-[#272822] px-5 text-[11.5px] leading-[14px] text-[#737470] outline-none placeholder:text-[#737470]"
    />

    <div className="mt-3 flex items-center gap-2">
      <span className="text-[11.5px] leading-[14px] text-[#a3a3a2]">
        Design URL
      </span>
      <InfoIcon className="h-[15px] w-[15px] shrink-0 text-[#a3a3a2]" />
    </div>
    <input
      readOnly
      aria-label="Design URL"
      placeholder="https://www.figma.com/file/:"
      className="mt-3 h-[37px] w-full rounded-none border-2 border-[#929291] bg-[#272822] px-5 text-[10.5px] leading-[13px] text-[#71726e] outline-none placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-4 pl-6">
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
      >
        Prepare
      </button>
    </div>

    <span className="mt-12 text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
