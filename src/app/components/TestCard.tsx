const INPUT_BASE = "w-full bg-[#272822]";

const labelRow = (
  label: string,
  labelClassName: string,
  iconClassName: string
): JSX.Element => (
  <div className="flex items-center gap-5">
    <span
      className={`font-primary-bold text-[11.5px] leading-[13.92px] ${labelClassName}`}
    >
      {label}
    </span>
    <svg
      aria-hidden="true"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className={iconClassName}
    >
      <circle cx="7.5" cy="7.5" r="6.75" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M7.5 6.75V11"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="7.5" cy="4.6" r="0.9" fill="currentColor" />
    </svg>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[#1a1a1a] px-5 pb-[62px] pt-5"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h2>
      <svg
        aria-hidden="true"
        width="14"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-[#b0b0b0]"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <svg
        aria-hidden="true"
        width="8"
        height="5"
        viewBox="0 0 8 5"
        fill="none"
        className="text-[#6cc0a0]"
      >
        <path
          d="M1 4L4 1L7 4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-primary-bold text-[11.5px] leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-[5px] pl-[6px]">
      <svg
        aria-hidden="true"
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill="none"
        className="text-[#6cc0a0]"
      >
        <path
          d="M1 6.5L6 1.5L11 6.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h3 className="font-primary-bold text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h3>
    </div>

    <div className="mt-[28px]">
      {labelRow("Personal Access Token", "text-[#a4a4a3]", "text-[#d5d5d5]")}
      <input
        type="text"
        readOnly
        aria-label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        className={`${INPUT_BASE} mt-3 h-[36px] border border-[#a5adad] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] placeholder:text-[#737470]`}
      />
    </div>

    <div className="mt-3">
      {labelRow("Design URL", "text-[#a3a3a2]", "text-[#d5d5d5]")}
      <input
        type="text"
        readOnly
        aria-label="Design URL"
        placeholder="https://www.figma.com/file/"
        className={`${INPUT_BASE} mt-3 h-[37px] border-2 border-[#929291] px-5 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder:text-[#71726e]`}
      />
    </div>

    <div className="mt-[22px] flex gap-[17px] pl-6">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[46px] font-primary-bold text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
