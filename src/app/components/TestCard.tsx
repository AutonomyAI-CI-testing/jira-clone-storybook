const FIELD_CLASS =
  "mt-4 w-full rounded-md border border-[#8c8c8c] bg-[#1c1c1c] px-4 py-4 font-primary text-lg text-[#e6e6e6] placeholder:text-[#7a7a7a]";

const BUTTON_CLASS =
  "w-[170px] rounded-md bg-[#a3420f] px-4 py-4 font-primary text-lg text-[#d9a679]";

const ChevronUpIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const GearIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#0d0d0d] px-[42px] py-10 font-primary text-[#e6e6e6]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl">UI magician Agent</h1>
        <GearIcon />
      </div>

      <div className="mt-5 flex items-center gap-3 text-[#9e9e9e]">
        <ChevronUpIcon />
        <span className="truncate text-lg">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[170px] flex items-center gap-3">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-xl">Add New Design</h2>
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <label htmlFor="testElem-token" className="text-lg text-[#d0d0d0]">
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="testElem-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={FIELD_CLASS}
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-3">
          <label htmlFor="testElem-url" className="text-lg text-[#d0d0d0]">
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="testElem-url"
          type="text"
          placeholder="https://www.figma.com/file/"
          className={FIELD_CLASS}
        />
      </div>

      <div className="mt-12 flex gap-9">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-bold text-xl">Recent Breakdowns</h2>
    </div>
  );
};
