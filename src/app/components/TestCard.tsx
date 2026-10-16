export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[#131313] px-[42px] py-10 font-primary"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-xl text-[#E3E3E3]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-9 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="min-w-0 truncate font-primary text-base text-[#9E9E9E]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="h-[140px]" aria-hidden="true" />

      <div className="flex items-center gap-3">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-xl text-[#E3E3E3]">
          Add New Design
        </h2>
      </div>

      <div className="mt-9">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-token"
            className="font-primary text-base text-[#9E9E9E]"
          >
            Personal Access Token
          </label>
          <InfoIcon />
        </div>
        <input
          id="test-card-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
          className="mt-3 h-[72px] w-full rounded-[2px] border border-[#8A8A8A] bg-[#1C1C1C] px-6 font-primary text-base text-[#E3E3E3] outline-none placeholder:text-[#9E9E9E]"
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-2">
          <label
            htmlFor="test-card-url"
            className="font-primary text-base text-[#9E9E9E]"
          >
            Design URL
          </label>
          <InfoIcon />
        </div>
        <input
          id="test-card-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="mt-3 h-[72px] w-full rounded-[2px] border border-[#8A8A8A] bg-[#1C1C1C] px-6 font-primary text-base text-[#E3E3E3] outline-none placeholder:text-[#9E9E9E]"
        />
      </div>

      <div className="mt-9 flex gap-4">
        <button
          type="button"
          className="h-[72px] flex-1 rounded-md bg-[#A83E1C] font-primary text-lg text-[#C0A090]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[72px] flex-1 rounded-md bg-[#A83E1C] font-primary text-lg text-[#C0A090]"
        >
          Prepare
        </button>
      </div>

      <div className="h-[130px]" aria-hidden="true" />

      <h2 className="font-primary-bold text-xl text-[#E3E3E3]">
        Recent Breakdowns
      </h2>
    </div>
  );
};

const GearIcon = () => (
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
    focusable="false"
    className="shrink-0 text-[#E3E3E3]"
  >
    <circle cx="12" cy="12" r="3.25" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className="shrink-0 text-[#E3E3E3]"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    className="shrink-0 text-[#E3E3E3]"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);
