const GearIcon = (): JSX.Element => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e6e6e6"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 2.5l1.8 1.1 2-.4 1 1.8 1.9.8-.2 2 .9 1.7-.9 1.7.2 2-1.9.8-1 1.8-2-.4L12 21.5l-1.8-1.1-2 .4-1-1.8-1.9-.8.2-2L4.6 14l.9-1.7-.2-2 1.9-.8 1-1.8 2 .4L12 2.5z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ muted = false }: { muted?: boolean }): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke={muted ? "#9e9e9e" : "#e6e6e6"}
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 15l7-7 7 7" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#e6e6e6"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.6v.1" />
  </svg>
);

const inputClasses =
  "w-full border border-[#8a8a8a] bg-[#232323] px-4 py-4 text-[19px] " +
  "text-[#e6e6e6] placeholder:text-[#6f6f6f] focus:outline-none";

const buttonClasses =
  "flex-1 rounded-lg bg-[#9e3d15] py-5 text-[22px] font-medium text-[#e08a5a]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-[#1a1a1a] px-10 py-9"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[26px] font-semibold text-[#d9d9d9]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-11 flex items-center gap-2">
        <ChevronUpIcon muted />
        <span className="truncate text-[20px] text-[#8a8a8a]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-40 flex items-center gap-2">
        <ChevronUpIcon />
        <h2 className="text-[26px] font-semibold text-white">Add New Design</h2>
      </div>

      <div className="mt-14">
        <div className="mb-6 flex items-center gap-2">
          <span className="text-[19px] text-[#c9c9c9]">
            Personal Access Token
          </span>
          <InfoIcon />
        </div>
        <input
          className={inputClasses}
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-8">
        <div className="mb-6 flex items-center gap-2">
          <span className="text-[19px] text-[#c9c9c9]">Design URL</span>
          <InfoIcon />
        </div>
        <input className={inputClasses} placeholder="https://www.figma.com/file/" />
      </div>

      <div className="mt-11 flex gap-6">
        <button type="button" className={buttonClasses}>
          Awesome
        </button>
        <button type="button" className={buttonClasses}>
          Prepare
        </button>
      </div>

      <div className="mt-24">
        <h2 className="text-[26px] font-semibold text-white">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
