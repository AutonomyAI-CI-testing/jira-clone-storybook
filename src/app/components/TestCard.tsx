const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1e1e1e] px-10 pb-16 pt-6 text-[#f0f0f0]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-[#f0f0f0]">UI magician Agent</h1>
      <span className="text-[#b0b0b0]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-5 flex items-center gap-3 text-[#e0e0e0]">
      <ChevronUpIcon />
      <span className="truncate text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-2">
      <ChevronUpIcon />
      <h2 className="text-lg font-bold text-[#f0f0f0]">Add New Design</h2>
    </div>

    <div className="mt-9">
      <div className="flex items-center gap-3 text-[#d0d0d0]">
        <span className="text-base">Personal Access Token</span>
        <InfoIcon />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className="mt-3 w-full rounded border border-[#5a5a5a] bg-[#2a2a2a] px-4 py-4 text-sm text-[#9a9a9a] outline-none placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-5">
      <div className="flex items-center gap-3 text-[#d0d0d0]">
        <span className="text-base">Design URL</span>
        <InfoIcon />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/"
        className="mt-3 w-full rounded border border-[#5a5a5a] bg-[#2a2a2a] px-4 py-4 text-sm text-[#9a9a9a] outline-none placeholder:text-[#8a8a8a]"
      />
    </div>

    <div className="mt-8 flex gap-9 pl-12">
      <button
        type="button"
        className="w-[170px] rounded-lg bg-[#a8451e] px-6 py-4 text-base text-[#d8d8d8]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="w-[170px] rounded-lg bg-[#a8451e] px-6 py-4 text-base text-[#d8d8d8]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-[70px] text-lg font-bold text-[#f0f0f0]">
      Recent Breakdowns
    </h2>
  </div>
);
