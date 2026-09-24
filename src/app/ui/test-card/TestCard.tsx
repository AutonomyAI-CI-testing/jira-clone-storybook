const inputBaseClass =
  "mt-2 w-full bg-[#272822] px-3 py-2 font-semibold outline-none";

const actionButtonClass =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]";

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 10.5 8 5.5l5 5" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className={className}
  >
    <circle cx="8" cy="8" r="6.5" />
    <path d="M8 7.5v3.5" strokeLinecap="round" />
    <circle cx="8" cy="5" r="0.75" fill="currentColor" stroke="none" />
  </svg>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex min-h-[508px] w-[254px] flex-col bg-black px-5 py-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] font-semibold text-[#b5b5b5]">
        UI magician Agent
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4 text-[#b5b5b5]"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
      </svg>
    </div>

    <div className="mt-2 flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3 text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold text-[#8b9291]">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-[64px]" />

    <div className="flex items-center gap-2">
      <ChevronUpIcon className="h-3 w-4 text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <span className="text-[11.5px] font-semibold text-[#a4a4a3]">
        Personal Access Token
      </span>
      <InfoIcon className="h-[15px] w-[15px] text-[#a4a4a3]" />
    </div>
    <input
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className={`${inputBaseClass} border border-[#a5adad] text-[11.5px] text-[#737470] placeholder:text-[#737470]`}
    />

    <div className="mt-4 flex items-center gap-2">
      <span className="text-[11.5px] font-semibold text-[#a3a3a2]">
        Design URL
      </span>
      <InfoIcon className="h-[15px] w-[15px] text-[#a3a3a2]" />
    </div>
    <input
      readOnly
      placeholder="https://www.figma.com/file/"
      className={`${inputBaseClass} border-2 border-[#929291] text-[10.5px] text-[#71726e] placeholder:text-[#71726e]`}
    />

    <div className="mt-5 flex items-center gap-4 pl-6">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <span className="mt-auto pt-16 text-[13.5px] font-semibold text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);
