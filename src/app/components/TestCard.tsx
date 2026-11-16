const iconClassName = "h-5 w-5 shrink-0 text-[#c8c8c8]";

const ChevronUp = (): JSX.Element => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={iconClassName}
    aria-hidden="true"
  >
    <path d="M5 12.5 10 7.5l5 5" />
  </svg>
);

const InfoCircle = (): JSX.Element => (
  <svg
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className={iconClassName}
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="8" />
    <path d="M10 9.5v4.5" strokeLinecap="round" />
    <circle cx="10" cy="6.4" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const Gear = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    className="h-6 w-6 text-[#c8c8c8]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="7.6" />
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.6 12h2.6M17.37 17.37l1.84 1.84M12 19.6v2.6M6.63 17.37l-1.84 1.84M4.4 12H1.8M6.63 6.63 4.79 4.79M12 4.4V1.8M17.37 6.63l1.84-1.84" />
  </svg>
);

const inputClassName =
  "mt-4 h-[70px] w-full rounded-sm border border-[#b8b8b8] bg-[#2b2b2b] px-4 text-base text-[#d4d4d4] placeholder:text-[#6e6e6e] focus-visible:outline-none";

const buttonClassName =
  "h-[72px] w-[170px] rounded-lg bg-[#a94a24] text-lg text-[#b8b8b8]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[508px] bg-[#1e1e1e] px-10 py-6 font-primary text-[#d4d4d4]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <button type="button" aria-label="Settings">
          <Gear />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <ChevronUp />
        <span className="truncate text-base text-[#9a9a9a]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[140px] flex items-center gap-3">
        <ChevronUp />
        <h3 className="font-primary-bold text-xl">Add New Design</h3>
      </div>

      <div className="mt-14 flex items-center gap-3">
        <span className="text-base text-[#a8a8a8]">Personal Access Token</span>
        <InfoCircle />
      </div>
      <input
        readOnly
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        className={inputClassName}
      />

      <div className="mt-6 flex items-center gap-3">
        <span className="text-base text-[#a8a8a8]">Design URL</span>
        <InfoCircle />
      </div>
      <input
        readOnly
        placeholder="https://www.figma.com/file/"
        className={inputClassName}
      />

      <div className="mt-10 flex gap-[34px]">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      <h3 className="mt-16 text-xl text-[#9a9a9a]">Recent Breakdowns</h3>
    </div>
  );
};
