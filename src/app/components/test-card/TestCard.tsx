const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.6h.01" />
  </svg>
);

const inputClass =
  "w-full border border-[#7a7a7a] bg-[#2b2b2b] px-4 py-4 text-[18px] text-[#cfcfcf] placeholder:text-[#8c8c8c] outline-none";

const buttonClass =
  "rounded-md bg-[#9c3d10] px-10 py-4 text-[18px] text-[#c9bdb5] outline-none";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-10 py-10 font-primary-light text-[#cfcfcf]"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-black text-[22px] text-[#e3e3e3]">
          UI magician Agent
        </span>
        <span className="text-[#d0d0d0]">
          <GearIcon />
        </span>
      </div>

      <div className="mt-8 flex items-center gap-3 text-[18px] text-[#9b9b9b]">
        <ChevronUpIcon />
        <span className="truncate">From entire frame to a singl...</span>
      </div>

      <div className="mt-20 flex items-center gap-3">
        <span className="text-[#e3e3e3]">
          <ChevronUpIcon />
        </span>
        <span className="font-primary-black text-[24px] text-[#e3e3e3]">
          Add New Design
        </span>
      </div>

      <div className="mt-14">
        <div className="flex items-center gap-5">
          <span className="text-[18px] text-[#cfcfcf]">Personal Access Token</span>
          <span className="text-[#b9b9b9]">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className={`mt-3 ${inputClass}`}
        />
      </div>

      <div className="mt-6">
        <div className="flex items-center gap-5">
          <span className="text-[18px] text-[#cfcfcf]">Design URL</span>
          <span className="text-[#b9b9b9]">
            <InfoIcon />
          </span>
        </div>
        <input
          type="text"
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className={`mt-3 ${inputClass}`}
        />
      </div>

      <div className="mt-10 flex justify-center gap-8">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-20 font-primary-black text-[22px] text-[#e3e3e3]">
        Recent Breakdowns
      </div>
    </div>
  );
};
