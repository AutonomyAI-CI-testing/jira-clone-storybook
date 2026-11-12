import cx from "classix";

const iconBaseClass = "shrink-0";

const ChevronUpIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={cx(iconBaseClass, "h-[22px] w-[22px]")}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 15.5 12 8.5l7 7" />
  </svg>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={cx(iconBaseClass, "h-[30px] w-[30px]")}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={cx(iconBaseClass, "h-[26px] w-[26px] text-[#cfcfcf]")}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5.5" />
    <circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const labelRowClass = "flex items-center gap-[16px] text-[17px] text-[#cfcfcf]";

const fieldClass =
  "h-[70px] w-full rounded border border-[#7a7a7a] bg-[#1f1f1f] px-[34px] text-[17px] text-[#d9d9d9] placeholder:text-[#8c8c8c]";

const buttonClass =
  "h-[76px] w-[170px] rounded-md bg-[#9a3f1a] text-[17px] text-[#d0c8c4]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[508px] bg-[#1b1b1b] px-[40px] pt-[40px] pb-[40px] font-primary text-[#d9d9d9]"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-[26px] leading-[1.2]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="mt-[2px] cursor-pointer text-[#d9d9d9]"
      >
        <GearIcon />
      </button>
    </div>

    <div className="mt-[40px] flex items-center gap-[12px] text-[#8c8c8c]">
      <ChevronUpIcon />
      <span className="truncate text-[15px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[150px] flex items-center gap-[14px] text-[#cfcfcf]">
      <ChevronUpIcon />
      <h2 className="font-primary-bold text-[24px] leading-[1.2]">
        Add New Design
      </h2>
    </div>

    <div className={cx(labelRowClass, "mt-[60px]")}>
      <label htmlFor="test-card-personal-access-token">
        Personal Access Token
      </label>
      <InfoIcon />
    </div>
    <input
      id="test-card-personal-access-token"
      type="text"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      className={cx(fieldClass, "mt-[25px]")}
    />

    <div className={cx(labelRowClass, "mt-[35px]")}>
      <label htmlFor="test-card-design-url">Design URL</label>
      <InfoIcon />
    </div>
    <input
      id="test-card-design-url"
      type="text"
      placeholder="https://www.figma.com/file/"
      className={cx(fieldClass, "mt-[20px]")}
    />

    <div className="mt-[50px] flex gap-[35px] pl-[48px]">
      {["Awesome", "Prepare"].map((label) => (
        <button key={label} type="button" className={buttonClass}>
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[60px] font-primary-bold text-[24px] leading-[1.2] text-[#cfcfcf]">
      Recent Breakdowns
    </h2>
  </div>
);
