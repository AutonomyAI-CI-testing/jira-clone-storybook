const GEAR_PATH =
  "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z";

const GearIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="h-[30px] w-[30px] shrink-0 text-[#e3e3e3]"
  >
    <circle cx="12" cy="12" r="3.2" />
    <path d={GEAR_PATH} />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="m5 15 7-7 7 7" />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    aria-hidden="true"
    className="h-[26px] w-[26px] shrink-0 text-[#e3e3e3]"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16.5v-5" />
    <circle cx="12" cy="8" r="1.1" fill="currentColor" stroke="none" />
  </svg>
);

const Field = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div className="mt-10">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-[19px] text-[#c4c4c4]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 h-[58px] w-full rounded-[2px] border-2 border-[#6b6b6b] bg-[#2b2b2b] px-4 text-[17px] text-[#8f8f8f] outline-none placeholder:text-[#8f8f8f]"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[#1b1b1b] px-10 pt-10 pb-12 font-primary text-[#e3e3e3]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-[26px] leading-none text-[#e3e3e3]">
        UI magician Agent
      </h1>
      <GearIcon />
    </div>

    <div className="mt-9 flex items-center gap-3">
      <ChevronUpIcon className="h-[22px] w-[22px] shrink-0 text-[#d0d0d0]" />
      <span className="text-[19px] text-[#9c9c9c]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-40 flex items-center gap-3">
      <ChevronUpIcon className="h-[24px] w-[24px] shrink-0 text-[#e3e3e3]" />
      <h2 className="font-primary-bold text-[24px] leading-none text-[#e3e3e3]">
        Add New Design
      </h2>
    </div>

    <Field
      id="test-card-personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-12 flex items-center gap-9 pl-12">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[71px] w-[172px] rounded-[10px] bg-[#a0441a] text-[24px] text-[#b2a49b]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-bold text-[26px] leading-none text-[#c9c9c9]">
      Recent Breakdowns
    </h2>
  </div>
);

export default TestCard;
