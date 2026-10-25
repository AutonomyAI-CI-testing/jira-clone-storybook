import cx from "classix";

const GearIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-4 w-[14px] shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    aria-hidden="true"
    className={cx("shrink-0", className)}
    viewBox="0 0 10 6"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.6"
  >
    <path d="M1 5 5 1l4 4" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <path d="M7.5 6.9v3.3" strokeLinecap="round" />
    <circle cx="7.5" cy="4.6" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const FIELDS = [
  {
    id: "testcard-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
    inputClassName: "border border-[#a5adad] text-[11.5px]",
  },
  {
    id: "testcard-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/:",
    inputClassName: "border-2 border-[#929291] text-[10.5px]",
  },
];

const BUTTONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-[508px] w-[254px] flex-col bg-[#000000] px-5 pb-5 pt-5 font-primary"
    >
      <div className="flex items-start justify-between">
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <GearIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-[9px]">
        <ChevronUpIcon className="h-[5px] w-2 text-[#8b9291]" />
        <span className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-[9px]">
        <ChevronUpIcon className="h-2 w-3 text-[#b2b2b1]" />
        <span className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {FIELDS.map((field) => (
        <div key={field.id} className="mt-[28px]">
          <label
            htmlFor={field.id}
            className="flex items-center gap-4 text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
          >
            {field.label}
            <InfoIcon />
          </label>
          <input
            id={field.id}
            type="text"
            placeholder={field.placeholder}
            className={cx(
              "mt-3 h-9 w-full bg-[#272822] px-[19px] text-[#737470] outline-none placeholder:text-[#737470]",
              field.inputClassName
            )}
          />
        </div>
      ))}

      <div className="mt-[22px] flex gap-[17px] pl-6">
        {BUTTONS.map((label) => (
          <button
            key={label}
            type="button"
            className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
          >
            {label}
          </button>
        ))}
      </div>

      <p className="mt-[47px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </p>
    </div>
  );
};
