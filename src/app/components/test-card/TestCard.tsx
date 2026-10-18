import cx from "classix";

const ChevronUp = ({
  width,
  height,
  strokeWidth = 1.6,
}: ChevronUpProps) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <path
      d={`M1 ${height - 1}L${width / 2} 1L${width - 1} ${height - 1}`}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GearIcon = () => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width={15}
    height={15}
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0"
  >
    <circle cx="7.5" cy="7.5" r="6.9" stroke="currentColor" />
    <circle cx="7.5" cy="4.4" r="0.8" fill="currentColor" />
    <path d="M7.5 6.7v4.3" stroke="currentColor" strokeLinecap="round" />
  </svg>
);

const Field = ({
  label,
  placeholder,
  labelClassName,
  inputClassName,
  placeholderClassName,
}: FieldProps) => (
  <div>
    <div className="flex items-center gap-4">
      <span
        className={cx(
          "text-[11.5px] font-semibold leading-[13.92px]",
          labelClassName
        )}
      >
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "mt-3 h-9 w-full bg-[#272822] pl-[19px] text-[11.5px] font-semibold outline-none",
        inputClassName,
        placeholderClassName
      )}
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-black px-5 pb-16 pt-5 font-[Inter,sans-serif] text-[#b5b5b5]"
  >
    <div className="flex items-center justify-between">
      <h1 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
        UI magician Agent
      </h1>
      <span className="text-[#b5b5b5]">
        <GearIcon />
      </span>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <span className="text-[#8b9291]">
        <ChevronUp width={8} height={5} strokeWidth={1.4} />
      </span>
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <span className="text-[#b2b2b1]">
        <ChevronUp width={12} height={8} strokeWidth={2} />
      </span>
      <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-3">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
        labelClassName="text-[#a4a4a3]"
        inputClassName="border border-[#a5adad]"
        placeholderClassName="placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-3">
      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        labelClassName="text-[#a3a3a2]"
        inputClassName="border-2 border-[#929291]"
        placeholderClassName="placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-5 flex justify-end gap-4">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-12 text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface ChevronUpProps {
  width: number;
  height: number;
  strokeWidth?: number;
}

interface FieldProps {
  label: string;
  placeholder: string;
  labelClassName: string;
  inputClassName: string;
  placeholderClassName: string;
}
