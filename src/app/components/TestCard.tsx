const GearIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
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
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const FieldLabel = ({ children }: { children: string }) => (
  <div className="flex items-center gap-2 text-[#c9c9c9]">
    <span className="text-[17px]">{children}</span>
    <InfoIcon />
  </div>
);

const fieldClassName =
  "mt-3 h-[56px] w-full rounded-[4px] border-[1.5px] border-[#6b6b6b] bg-[#242424] px-4 text-[17px] text-[#9a9a9a] placeholder:text-[#9a9a9a]";

const buttonClassName =
  "h-[70px] w-[170px] rounded-[8px] bg-[#a8420f] font-primary-bold text-[20px] text-[#cbb4a8]";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="min-h-[1016px] w-[508px] bg-[#0d0d0d] px-10 py-8 font-primary text-white"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-[20px] leading-7">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-8 flex items-center gap-2 text-[#c9c9c9]">
        <ChevronUpIcon />
        <span className="text-[17px]">From entire frame to a singl...</span>
      </div>

      <div className="mt-32 flex items-center gap-2">
        <ChevronUpIcon />
        <h2 className="font-primary-bold text-[20px] leading-7">
          Add New Design
        </h2>
      </div>

      <div className="mt-8">
        <FieldLabel>Personal Access Token</FieldLabel>
        <input
          aria-label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className={fieldClassName}
        />
      </div>

      <div className="mt-6">
        <FieldLabel>Design URL</FieldLabel>
        <input
          aria-label="Design URL"
          placeholder="https://www.figma.com/file/"
          className={fieldClassName}
        />
      </div>

      <div className="mt-10 flex justify-end gap-9">
        <button type="button" className={buttonClassName}>
          Awesome
        </button>
        <button type="button" className={buttonClassName}>
          Prepare
        </button>
      </div>

      <h2 className="mt-24 font-primary-bold text-[20px] leading-7">
        Recent Breakdowns
      </h2>
    </div>
  );
};
