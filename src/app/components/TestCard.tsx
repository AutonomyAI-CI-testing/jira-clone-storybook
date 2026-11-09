import cx from "classix";

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[22px] w-[22px] shrink-0"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 shrink-0"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5 shrink-0"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const fieldClass =
  "h-[68px] w-full rounded border border-[#7a7a7a] bg-[#262626] pl-9 text-[15px] text-[#e3e3e3] outline-none placeholder:text-[#8f8f8f]";

const buttonClass =
  "flex h-[68px] w-[170px] items-center justify-center rounded-lg bg-[#a04a17] text-[15px] text-[#cfcfcf]";

const labelClass = "text-[15px] text-[#b5b5b5]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col bg-[#1e1e1e] px-10 pt-11 pb-40 font-primary"
  >
    <div className="flex items-center justify-between text-[#e3e3e3]">
      <span className="font-primary-bold text-[18px]">UI magician Agent</span>
      <GearIcon />
    </div>

    <div className="mt-5 flex items-center gap-3 text-[#8f8f8f]">
      <ChevronUpIcon />
      <span className="text-[14px]">From entire frame to a singl...</span>
    </div>

    <div className="mt-40 flex items-center gap-3 text-[#d5d5d5]">
      <ChevronUpIcon />
      <span className="font-primary-bold text-[18px]">Add New Design</span>
    </div>

    <div className="mt-16 flex items-center gap-6 text-[#b5b5b5]">
      <label htmlFor="test-card-token" className={labelClass}>
        Personal Access Token
      </label>
      <InfoIcon />
    </div>
    <input
      id="test-card-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className={cx(fieldClass, "mt-5")}
    />

    <div className="mt-8 flex items-center gap-6 text-[#b5b5b5]">
      <label htmlFor="test-card-url" className={labelClass}>
        Design URL
      </label>
      <InfoIcon />
    </div>
    <input
      id="test-card-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className={cx(fieldClass, "mt-6")}
    />

    <div className="mt-12 flex gap-9 pl-12">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <span className="mt-16 font-primary-bold text-[18px] text-[#d5d5d5]">
      Recent Breakdowns
    </span>
  </div>
);
