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
    className="shrink-0 text-[#e8e8e8]"
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = (): JSX.Element => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#e8e8e8]"
    aria-hidden="true"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="shrink-0 text-[#e8e8e8]"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const fieldClassName =
  "w-full rounded border border-[#6b6b6b] bg-[#2a2a2a] px-4 py-4 font-primary text-[18px] text-[#8a8a8a] placeholder:text-[#8a8a8a] outline-none";

const buttonClassName =
  "min-w-[168px] rounded-md bg-[#a8481e] px-8 py-4 font-primary text-[19px] text-[#f0e6df]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-full max-w-[508px] flex-col rounded-t-2xl bg-[#1e1e1e] px-10 py-10"
    >
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-primary-bold text-[26px] text-[#f2f2f2]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-4 flex min-w-0 items-center gap-3">
        <ChevronUpIcon />
        <span className="truncate font-primary text-[18px] text-[#a8a8a8]">
          From entire frame to a singl…
        </span>
      </div>

      <div className="h-40" />

      <div className="flex items-center gap-3">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-[26px] text-[#f2f2f2]">
          Add New Design
        </h2>
      </div>

      <div className="mt-10 flex items-center gap-3">
        <span className="font-primary text-[18px] text-[#e8e8e8]">
          Personal Access Token
        </span>
        <InfoIcon />
      </div>
      <input
        readOnly
        type="text"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        className={`mt-3 ${fieldClassName}`}
      />

      <div className="mt-6 flex items-center gap-3">
        <span className="font-primary text-[18px] text-[#e8e8e8]">
          Design URL
        </span>
        <InfoIcon />
      </div>
      <input
        readOnly
        type="text"
        placeholder="https://www.figma.com/file/"
        className={`mt-3 ${fieldClassName}`}
      />

      <div className="mt-8 flex gap-8">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      <div className="h-28" />

      <h2 className="font-primary-bold text-[22px] text-[#a8a8a8]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
