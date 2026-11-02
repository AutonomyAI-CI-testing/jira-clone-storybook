import cx from "classix";

const chevronUp = (
  <svg viewBox="0 0 12 8" fill="none" aria-hidden="true" className="h-full w-full">
    <path
      d="M1 7 6 2l5 5"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const infoIcon = (
  <svg
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 6.8v4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.4" r="0.85" fill="currentColor" />
  </svg>
);

const gearIcon = (
  <svg
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="h-4 w-3.5 shrink-0"
  >
    <circle cx="7" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M10.4 8h2M7 4.6V2.6M3.6 8h-2M7 11.4v2M9.4 5.6l1.42-1.42M4.6 5.6 3.18 4.18M4.6 10.4l-1.42 1.42M9.4 10.4l1.42 1.42"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const fields = [
  {
    label: "Personal Access Token",
    value: "figd_xxxxxxxxxxxxxxxxxx",
    boxClassName: "h-[36px] border border-[#a5adad]",
    valueClassName: "text-[11.5px] text-[#737470]",
  },
  {
    label: "Design URL",
    value: "https://www.figma.com/file/:",
    boxClassName: "h-[37px] border-2 border-[#929291]",
    valueClassName: "text-[10.5px] text-[#71726e]",
  },
];

const actionLabels = ["Awesome", "Prepare"];

const actionButtonClassName =
  "flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] font-primary-bold text-[11.5px] text-[#8c8078]";

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-[#1c1c1c] px-5 py-5 font-primary text-[11.5px] leading-[14px] text-[#b5b5b5]"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-[16px]">
        UI magician Agent
      </span>
      <span className="text-[#b5b5b5]">{gearIcon}</span>
    </div>

    <div className="mt-[18px] flex items-center gap-3">
      <span className="flex h-[5px] w-[8px] shrink-0 items-center text-[#8b9291]">
        {chevronUp}
      </span>
      <span className="truncate text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-3">
      <span className="flex h-[8px] w-[12px] shrink-0 items-center text-[#b2b2b1]">
        {chevronUp}
      </span>
      <span className="font-primary-bold text-[13.5px] leading-[16px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <div className="mt-[28px] flex flex-col gap-[11px]">
      {fields.map((field) => (
        <div key={field.label}>
          <div className="flex items-center gap-2 text-[#a4a4a3]">
            <span className="font-primary-bold">{field.label}</span>
            {infoIcon}
          </div>
          <div
            className={cx(
              "mt-3 flex items-center bg-[#272822] px-4",
              field.boxClassName
            )}
          >
            <span className={field.valueClassName}>{field.value}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-[21px] flex gap-[17px] pl-6">
      {actionLabels.map((label) => (
        <button key={label} type="button" className={actionButtonClassName}>
          {label}
        </button>
      ))}
    </div>

    <div className="mt-[47px] font-primary-bold text-[13.5px] leading-[16px] text-[#b0b0b0]">
      Recent Breakdowns
    </div>
  </div>
);
