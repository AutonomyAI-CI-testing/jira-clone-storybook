const ChevronUp = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5L5 1L9 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    width="15"
    height="15"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="7.25" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M8 7.25v4.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="8" cy="4.75" r="0.85" fill="currentColor" />
  </svg>
);

const LABELS = ["Awesome", "Prepare"];

const FIELD_CLASS =
  "mt-3 h-9 w-full border border-[#a5adad] bg-[#272822] px-5 text-2xs outline-none";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pt-5 pb-[62px] font-primary"
  >
    <div className="flex items-start justify-between">
      <h1 className="text-xs font-primary-bold text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <span className="text-[#b5b5b5]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-[18px] flex items-center gap-2 pl-1 text-[#8b9291]">
      <ChevronUp />
      <span className="truncate text-2xs">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2 pl-1.5 text-[#b2b2b1]">
      <ChevronUp />
      <h2 className="text-xs font-primary-bold">Add New Design</h2>
    </div>

    <div className="mt-7 flex items-center gap-4 text-[#a4a4a3]">
      <label htmlFor="testcard-token" className="text-2xs">
        Personal Access Token
      </label>
      <InfoIcon />
    </div>
    <input
      id="testcard-token"
      readOnly
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      className={`${FIELD_CLASS} text-[#737470] placeholder:text-[#737470]`}
    />

    <div className="mt-[11px] flex items-center gap-4 text-[#a3a3a2]">
      <label htmlFor="testcard-url" className="text-2xs">
        Design URL
      </label>
      <InfoIcon />
    </div>
    <input
      id="testcard-url"
      readOnly
      placeholder="https://www.figma.com/file/"
      className={`${FIELD_CLASS} text-[#71726e] placeholder:text-[#71726e]`}
    />

    <div className="mt-[22px] flex justify-end gap-[17px]">
      {LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-2xs text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[47px] text-xs font-primary-bold text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);
