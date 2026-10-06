const buttonClassName =
  "h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold text-[#c8c8c8]";

const inputClassName =
  "mt-2 h-9 w-full rounded-[2px] bg-[#272822] px-3 font-[ui-monospace,monospace] text-[11.5px] text-[#b5b5b5] focus:outline-none";

const GearIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ size = 14 }: { size?: number }): JSX.Element => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 15 12 9 18 15" />
  </svg>
);

const InfoCircleIcon = (): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 8h.01" />
  </svg>
);

const FieldLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: string;
}): JSX.Element => (
  <div className="flex items-center gap-1.5 text-[#a4a4a3]">
    <label htmlFor={htmlFor} className="text-[11.5px] font-semibold">
      {children}
    </label>
    <InfoCircleIcon />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] p-5 font-[Inter,sans-serif] text-[#b5b5b5]"
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="mt-3 flex items-center gap-2 border-b border-[#1c1c1c] pb-3 text-[#8b9291]">
        <ChevronUpIcon />
        <span className="truncate text-[11.5px] font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[90px]">
        <div className="flex items-center gap-2 text-[#b2b2b1]">
          <ChevronUpIcon />
          <h2 className="text-[13.5px] font-semibold">Add New Design</h2>
        </div>

        <div className="mt-6">
          <FieldLabel htmlFor="personal-access-token">
            Personal Access Token
          </FieldLabel>
          <input
            id="personal-access-token"
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
            className={`${inputClassName} border border-[#a5adad] placeholder:text-[#737470]`}
          />
        </div>

        <div className="mt-4">
          <FieldLabel htmlFor="design-url">Design URL</FieldLabel>
          <input
            id="design-url"
            type="text"
            placeholder="https://www.figma.com/file/"
            className={`${inputClassName} border-2 border-[#929291] placeholder:text-[#71726e]`}
          />
        </div>

        <div className="mt-7 flex gap-[17px]">
          <button type="button" className={buttonClassName}>
            Awesome
          </button>
          <button type="button" className={buttonClassName}>
            Prepare
          </button>
        </div>
      </div>

      <h2 className="mt-[70px] text-[13.5px] font-semibold text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  );
};
