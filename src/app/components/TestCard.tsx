const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoCircleIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.75h.01" />
  </svg>
);

const GearIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const inputClassName =
  "mt-2 h-[44px] w-full rounded-[4px] border border-[#8A8A8A] bg-[#242424] px-3 text-[16px] text-[#C9C9C9] outline-none placeholder:text-[#8A8A8A]";

const buttonClassName =
  "h-[52px] flex-1 rounded-[8px] bg-[#A9431A] text-[16px] text-[#C9C9C9]";

export const TestCard = () => (
  <div id="testElem" className="w-[508px] bg-[#1A1A1A] px-6 py-8 text-[#D9D9D9]">
    <div className="flex items-center justify-between">
      <h1 className="text-[20px] font-bold">UI magician Agent</h1>
      <GearIcon className="h-6 w-6" />
    </div>

    <div className="mt-6 flex items-center gap-2 text-[16px] text-[#9A9A9A]">
      <ChevronUpIcon className="h-4 w-4 shrink-0" />
      <span className="truncate">From entire frame to a singl...</span>
    </div>

    <div className="h-[180px]" />

    <div className="flex items-center gap-2">
      <ChevronUpIcon className="h-5 w-5 shrink-0" />
      <h2 className="text-[24px] font-bold">Add New Design</h2>
    </div>

    <div className="mt-6 flex items-center gap-2">
      <label htmlFor="testElem-token" className="text-[16px] text-[#C9C9C9]">
        Personal Access Token
      </label>
      <InfoCircleIcon className="h-4 w-4 text-[#C9C9C9]" />
    </div>
    <input
      id="testElem-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      className={inputClassName}
    />

    <div className="mt-4 flex items-center gap-2">
      <label htmlFor="testElem-url" className="text-[16px] text-[#C9C9C9]">
        Design URL
      </label>
      <InfoCircleIcon className="h-4 w-4 text-[#C9C9C9]" />
    </div>
    <input
      id="testElem-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className={inputClassName}
    />

    <div className="mt-8 flex gap-4 px-4">
      <button type="button" className={buttonClassName}>
        Awesome
      </button>
      <button type="button" className={buttonClassName}>
        Prepare
      </button>
    </div>

    <h2 className="mt-12 text-[22px] font-bold">Recent Breakdowns</h2>
  </div>
);
