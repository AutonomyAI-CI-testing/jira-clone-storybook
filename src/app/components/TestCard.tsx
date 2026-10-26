import cx from "classix";

const ACTIONS = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#1e1e1e] p-5 font-primary-light"
  >
    {/* Header */}
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-sm leading-4 text-[#b5b5b5]">
        UI magician Agent
      </span>
      <GearIcon className="h-4 w-3.5 text-[#b5b5b5]" />
    </div>

    {/* Collapsed summary */}
    <div className="mt-[18px] flex items-center gap-2">
      <ChevronUpIcon className="h-[5px] w-2 text-[#8b9291]" />
      <span className="text-xs text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section head */}
    <div className="mt-[75px] flex items-center gap-2">
      <ChevronUpIcon className="h-2 w-3 text-[#b2b2b1]" />
      <span className="font-primary-bold text-sm leading-4 text-[#b2b2b1]">
        Add New Design
      </span>
    </div>

    {/* Fields */}
    <div className="mt-7 flex flex-col gap-[11px]">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        textClassName="text-xs text-[#737470]"
        inputClassName="h-9 border border-[#a5adad]"
      />
      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        textClassName="text-2xs text-[#71726e]"
        inputClassName="h-[37px] border-2 border-[#929291]"
      />
    </div>

    {/* Actions */}
    <div className="mt-[22px] flex gap-[17px] pl-6">
      {ACTIONS.map((label) => (
        <button
          key={label}
          type="button"
          className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17]"
        >
          <span className="text-xs text-[#8c8078]">{label}</span>
        </button>
      ))}
    </div>

    {/* Recent Breakdowns */}
    <span className="mt-[46px] font-primary-bold text-sm leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </span>
  </div>
);

const Field = ({
  label,
  placeholder,
  textClassName,
  inputClassName,
}: FieldProps): JSX.Element => (
  <div className="flex flex-col">
    <div className="flex items-center gap-3">
      <span className="text-xs text-[#a4a4a3]">{label}</span>
      <InfoIcon className="h-[15px] w-[15px] text-[#a4a4a3]" />
    </div>
    <input
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "mt-2.5 w-[211px] bg-[#272822] px-5 outline-none placeholder:text-current",
        textClassName,
        inputClassName
      )}
    />
  </div>
);

const GearIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 14 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className={className}
  >
    <path d="M5.05 4.63A2.25 2.25 0 0 1 8.95 4.63A2.25 2.25 0 0 1 10.9 8A2.25 2.25 0 0 1 8.95 11.38A2.25 2.25 0 0 1 5.05 11.38A2.25 2.25 0 0 1 3.1 8A2.25 2.25 0 0 1 5.05 4.63Z" />
    <circle cx="7" cy="8" r="2.4" />
  </svg>
);

const ChevronUpIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M1.5 6.5 6 2l4.5 4.5" />
  </svg>
);

const InfoIcon = ({ className = "" }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.5" />
    <path d="M7.5 7v3.2" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="7.5" cy="5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
  textClassName: string;
  inputClassName: string;
}

interface IconProps {
  className?: string;
}
