const IconChevronUp = ({ className }: IconProps): JSX.Element => (
  <svg
    className={className}
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
    <polyline points="6 15 12 9 18 15" />
  </svg>
);

const IconInfo = ({ className }: IconProps): JSX.Element => (
  <svg
    className={className}
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="11" x2="12" y2="17" strokeLinecap="round" />
    <circle cx="12" cy="7.5" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const IconGear = ({ className }: IconProps): JSX.Element => (
  <svg
    className={className}
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1c1c1c] px-[38px] pb-[72px] pt-[44px] font-primary-light text-[#d5d5d5]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-2xl text-[#d5d5d5]">
        UI magician Agent
      </h2>
      <button
        type="button"
        aria-label="Settings"
        className="text-[#d5d5d5] hover:text-[#ffffff]"
      >
        <IconGear />
      </button>
    </div>

    <div className="mt-[56px] flex items-center gap-[16px]">
      <IconChevronUp className="shrink-0 text-[#9a9a9a]" />
      <span className="truncate text-lg text-[#9a9a9a]">
        From entire frame to a single component
      </span>
    </div>

    <div className="mt-[170px] flex items-center gap-[16px]">
      <IconChevronUp className="shrink-0 text-[#e0e0e0]" />
      <h3 className="font-primary-bold text-2xl text-[#e0e0e0]">
        Add New Design
      </h3>
    </div>

    <div className="mt-[56px] flex flex-col gap-[18px]">
      <div className="flex items-center gap-[16px]">
        <label htmlFor="test-card-token" className="text-lg text-[#b5b5b5]">
          Personal Access Token
        </label>
        <IconInfo className="text-[#b5b5b5]" />
      </div>
      <input
        id="test-card-token"
        defaultValue="figd_xxxxxxxxxxxxxxxxxx"
        className="h-[68px] w-full rounded-[2px] border border-[#6a6a6a] bg-transparent px-10 text-lg text-[#8f8f8f] outline-none"
      />
    </div>

    <div className="mt-[40px] flex flex-col gap-[18px]">
      <div className="flex items-center gap-[16px]">
        <label htmlFor="test-card-url" className="text-lg text-[#b5b5b5]">
          Design URL
        </label>
        <IconInfo className="text-[#b5b5b5]" />
      </div>
      <input
        id="test-card-url"
        defaultValue="https://www.figma.com/file/"
        className="h-[68px] w-full rounded-[2px] border border-[#6a6a6a] bg-transparent px-10 text-lg text-[#8f8f8f] outline-none"
      />
    </div>

    <div className="mt-[44px] flex justify-center gap-[32px]">
      <button
        type="button"
        className="h-[80px] w-[168px] rounded-lg bg-[#a34d27] text-xl text-[#9c8271]"
      >
        Awesome
      </button>
      <button
        type="button"
        className="h-[80px] w-[174px] rounded-lg bg-[#a34d27] text-xl text-[#9c8271]"
      >
        Prepare
      </button>
    </div>

    <h3 className="mt-[72px] font-primary-bold text-2xl text-[#d8d8d8]">
      Recent Breakdowns
    </h3>
  </div>
);

interface IconProps {
  className?: string;
}
