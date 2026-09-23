import cx from "classix";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 py-5 font-[Inter,sans-serif]"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon />
    </div>

    <div className="mt-5 flex items-center gap-2">
      <ChevronUpIcon className="text-[#8b9291]" />
      <span className="truncate text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <ChevronUpIcon className="text-[#b2b2b1]" />
      <span className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      className="mt-2.5"
      label="Design URL"
      value="https://www.figma.com/file/:"
      boxClassName="h-[41px] border-2 border-[#929291] px-5"
      valueClassName="text-[10.5px] leading-[12.71px] text-[#71726e]"
    />

    <div className="mt-5 flex justify-center gap-[17px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-11 text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({
  className,
  label,
  value,
  boxClassName,
  valueClassName,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-5">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <div
      className={cx(
        "mt-2 flex h-[39px] w-full items-center bg-[#272822] px-[19px]",
        boxClassName
      )}
    >
      <input
        readOnly
        aria-label={label}
        value={value}
        className={cx(
          "w-full bg-transparent text-[11.5px] font-semibold leading-[13.92px] text-[#737470] outline-none",
          valueClassName
        )}
      />
    </div>
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

const GearIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="h-4 w-4 shrink-0 text-[#b5b5b5]"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("h-2 w-3 shrink-0", className)}
  >
    <path d="M1 6.5 6 1.5l5 5" />
  </svg>
);

const InfoIcon = () => (
  <svg
    aria-hidden="true"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    className="h-[15px] w-[15px] shrink-0 text-[#8b9291]"
  >
    <circle cx="8" cy="8" r="7" />
    <path d="M8 7.25v3.75" strokeLinecap="round" />
    <path d="M8 4.75v.5" strokeLinecap="round" />
  </svg>
);

interface FieldProps {
  className?: string;
  label: string;
  value: string;
  boxClassName?: string;
  valueClassName?: string;
}

export default TestCard;
