const fieldClass =
  "w-full rounded border border-[#4a4a4a] bg-[#2b2b2b] px-4 py-4 font-primary text-sm text-[#e8e8e8] outline-none placeholder:text-[#8c8c8c]";

const actionClass =
  "w-[170px] cursor-pointer rounded bg-[#a3431f] px-4 py-4 font-primary-bold text-sm text-[#d5d5d5]";

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height="20"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="20"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const SettingsIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
    viewBox="0 0 24 24"
    width="24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    className="shrink-0"
    fill="none"
    height="18"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
    viewBox="0 0 24 24"
    width="18"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <circle cx="12" cy="7.75" fill="currentColor" r="0.75" stroke="none" />
  </svg>
);

const FieldLabel = ({ children }: { children: string }) => (
  <span className="flex items-center gap-2 font-primary-bold text-[15px] text-[#dcdcdc]">
    {children}
    <InfoIcon />
  </span>
);

export const TestCard = () => (
  <div
    className="w-[508px] bg-[#1c1c1c] px-10 py-8 font-primary text-[#e8e8e8]"
    id="testElem"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-[22px] leading-7 text-white">
        UI magician Agent
      </h1>
      <button
        aria-label="Open settings"
        className="cursor-pointer text-[#c9c9c9]"
        type="button"
      >
        <SettingsIcon />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3 text-[#9a9a9a]">
      <ChevronUpIcon />
      <span className="truncate text-base">From entire frame to a singl...</span>
    </div>

    <div className="mt-20 flex items-center gap-3 text-white">
      <ChevronUpIcon />
      <h2 className="font-primary-black text-[22px] leading-7">
        Add New Design
      </h2>
    </div>

    <div className="mt-8">
      <FieldLabel>Personal Access Token</FieldLabel>
      <input
        className={`${fieldClass} mt-3`}
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        type="text"
      />
    </div>

    <div className="mt-5">
      <FieldLabel>Design URL</FieldLabel>
      <input
        className={`${fieldClass} mt-3`}
        placeholder="https://www.figma.com/file/"
        type="text"
      />
    </div>

    <div className="mt-8 flex gap-9 pl-12">
      <button className={actionClass} type="button">
        Awesome
      </button>
      <button className={actionClass} type="button">
        Prepare
      </button>
    </div>

    <h2 className="mt-16 font-primary-black text-[22px] leading-7 text-white">
      Recent Breakdowns
    </h2>
  </div>
);
