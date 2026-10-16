const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[26px] w-[26px] shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[20px] w-[20px] shrink-0"
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[20px] w-[20px] shrink-0"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1c1c1c] px-[38px] pb-10 pt-9 text-[#e8e8e8]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[21px] font-bold">UI magician Agent</h1>
        <GearIcon />
      </div>

      <div className="mt-[34px] flex items-center gap-3 text-[17px] text-[#9a9a9a]">
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-[92px] flex items-center gap-3">
        <ChevronUpIcon />
        <h2 className="text-[26px] font-bold">Add New Design</h2>
      </div>

      <div className="mt-8">
        <label
          htmlFor="testElem-token"
          className="flex items-center gap-3 text-[17px]"
        >
          Personal Access Token
          <InfoIcon />
        </label>
        <input
          id="testElem-token"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
          className="mt-2.5 h-[66px] w-full rounded border border-[#6f6f6f] bg-[#2b2b2b] px-[30px] text-[17px] text-[#e8e8e8] placeholder:text-[#8f8f8f]"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="testElem-url"
          className="flex items-center gap-3 text-[17px]"
        >
          Design URL
          <InfoIcon />
        </label>
        <input
          id="testElem-url"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="mt-2.5 h-[66px] w-full rounded border border-[#6f6f6f] bg-[#2b2b2b] px-[30px] text-[17px] text-[#e8e8e8] placeholder:text-[#8f8f8f]"
        />
      </div>

      <div className="ml-[48px] mt-12 flex gap-9">
        <button
          type="button"
          className="h-[76px] w-[166px] rounded-lg bg-[#9c3d15] text-[21px] text-[#d08a68]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[76px] w-[166px] rounded-lg bg-[#9c3d15] text-[21px] text-[#d08a68]"
        >
          Prepare
        </button>
      </div>

      <h2 className="mt-[100px] text-[22px] font-bold">Recent Breakdowns</h2>
    </div>
  );
};
