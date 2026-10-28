const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

const GearIcon = (): JSX.Element => (
  <svg {...iconProps} className="h-[26px] w-[26px]">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg {...iconProps} className="h-[22px] w-[22px]">
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg {...iconProps} aria-hidden="true" className="h-[26px] w-[26px]">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const fieldInputClass =
  "mt-4 h-[62px] w-full border border-[#6b6b6b] bg-[#262626] px-5 font-primary text-[18px] text-[#8f8f8f] placeholder:text-[#8f8f8f]";

const actionButtonClass =
  "h-[66px] w-[170px] bg-[#a83d18] font-primary text-[20px] text-[#f5ece7]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1a1a1a] px-10 py-10 font-primary text-[#f2f2f2]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[24px] leading-none">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Settings" className="cursor-pointer">
        <GearIcon />
      </button>
    </div>

    <div className="mt-9 flex items-center gap-4">
      <ChevronUpIcon />
      <span className="truncate text-[18px] text-[#d7d7d7]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[110px] flex items-center gap-4">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-[24px] leading-none">
        Add New Design
      </h2>
    </div>

    <div className="mt-10">
      <div className="flex items-center gap-4">
        <label htmlFor="test-elem-token" className="text-[20px]">
          Personal Access Token
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-elem-token"
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
        className={fieldInputClass}
      />
    </div>

    <div className="mt-4">
      <div className="flex items-center gap-4">
        <label htmlFor="test-elem-url" className="text-[20px]">
          Design URL
        </label>
        <InfoIcon />
      </div>
      <input
        id="test-elem-url"
        type="text"
        placeholder="https://www.figma.com/file/"
        className={fieldInputClass}
      />
    </div>

    <div className="mt-12 flex gap-9 pl-[52px]">
      <button type="button" className={actionButtonClass}>
        Awesome
      </button>
      <button type="button" className={actionButtonClass}>
        Prepare
      </button>
    </div>

    <h2 className="mt-[120px] font-primary-bold text-[22px] leading-none">
      Recent Breakdowns
    </h2>
  </div>
);
