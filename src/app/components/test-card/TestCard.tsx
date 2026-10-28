const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="26"
    height="26"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2.1 2.1M16.9 16.9L19 19M19 5l-2.1 2.1M7.1 16.9L5 19" />
  </svg>
);

const ChevronUpIcon = ({ size = 22 }: { size?: number }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 15.5l7-7 7 7" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.6v.4" />
  </svg>
);

const FieldLabel = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}): JSX.Element => (
  <div className="flex items-center gap-3">
    <label htmlFor={htmlFor} className="text-[17px] text-[#b3b3b3]">
      {children}
    </label>
    <span className="text-[#b3b3b3]">
      <InfoIcon />
    </span>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1a1a1a] px-10 py-8 font-primary text-[#f2f2f2]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-[22px] text-[#f2f2f2]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="text-[#f2f2f2] hover:text-[#b3b3b3]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-[#f2f2f2]">
      <ChevronUpIcon />
      <span className="truncate text-[17px] text-[#b3b3b3]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="h-[180px]" />

    <div className="flex items-center gap-3">
      <ChevronUpIcon size={26} />
      <span className="font-primary-bold text-[22px] text-[#e8e8e8]">
        Add New Design
      </span>
    </div>

    <div className="mt-8">
      <FieldLabel htmlFor="personal-access-token">
        Personal Access Token
      </FieldLabel>
      <input
        id="personal-access-token"
        name="personalAccessToken"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxxx"
        className="mt-4 h-[70px] w-full rounded-md border border-[#7a7a7a] bg-[#232323] px-6 text-[17px] text-[#d9d2cd] placeholder:text-[#9e9e9e]"
      />
    </div>

    <div className="mt-8">
      <FieldLabel htmlFor="design-url">Design URL</FieldLabel>
      <input
        id="design-url"
        name="designUrl"
        placeholder="https://www.figma.com/file/"
        className="mt-4 h-[70px] w-full rounded-md border border-[#7a7a7a] bg-[#232323] px-6 text-[17px] text-[#d9d2cd] placeholder:text-[#9e9e9e]"
      />
    </div>

    <div className="mt-16 flex items-center justify-center gap-9">
      <button
        type="button"
        className="h-[65px] w-[168px] rounded-md bg-[#a83d10] text-[17px] text-[#d9d2cd] hover:bg-[#93350e]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[65px] w-[168px] rounded-md bg-[#a83d10] text-[17px] text-[#d9d2cd] hover:bg-[#93350e]"
      >
        Prepare
      </button>
    </div>

    <h2 className="mt-24 font-primary-bold text-[20px] text-[#e8e8e8]">
      Recent Breakdowns
    </h2>
  </div>
);
