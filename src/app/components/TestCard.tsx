const ChevronUp = ({ width }: { width: number }): JSX.Element => (
  <svg
    width={width}
    height={(width * 2) / 3}
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const GearIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="7.5" cy="7.5" r="7" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 6.6v4"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.7" r="0.8" fill="currentColor" />
  </svg>
);

const Field = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2 text-[#a4a4a3]">
      <span className="text-[11.5px] leading-[13.92px]">{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      aria-label={label}
      className="h-[36px] w-full border border-[#a5adad] bg-[#272822] px-[19px] text-[11.5px] leading-[13.92px] text-[#737470] outline-none placeholder:text-[#737470]"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-screen justify-center bg-[#000000] p-6 font-primary"
  >
    <div className="flex w-[254px] flex-col gap-[18px]">
      <div className="flex items-center justify-between text-[#b5b5b5]">
        <h1 className="text-[13.5px] font-primary-bold leading-[16.34px]">
          UI magician Agent
        </h1>
        <GearIcon />
      </div>

      <div className="flex items-center gap-2 text-[#8b9291]">
        <ChevronUp width={8} />
        <span className="text-[11.5px] leading-[13.92px]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="flex items-center gap-2 pt-[70px] text-[#b2b2b1]">
        <ChevronUp width={12} />
        <h2 className="text-[13.5px] font-primary-bold leading-[16.34px]">
          Add New Design
        </h2>
      </div>

      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <Field label="Design URL" placeholder="https://www.figma.com/file/" />

      <div className="flex gap-[17px] pt-[22px]">
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Awesome
        </button>
        <button
          type="button"
          className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] font-primary-bold text-[11.5px] leading-[13.92px] text-[#8c8078]"
        >
          Prepare
        </button>
      </div>

      <h2 className="pt-[50px] text-[13.5px] font-primary-bold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);
