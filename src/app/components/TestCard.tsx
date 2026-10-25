import cx from "classix";

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-[#0a0a0a] px-5 pb-[62px] pt-5 font-[Inter,system-ui,sans-serif] antialiased"
    >
      <div className="flex items-start justify-between">
        <h2 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <SettingsIcon />
      </div>

      <div className="mt-[18px] flex items-center gap-2 pl-[3px]">
        <ChevronUp width={8} height={5} />
        <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-2 pl-[6px]">
        <ChevronUp width={12} height={8} />
        <h3 className="text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h3>
      </div>

      <Field
        className="mt-8"
        label="Personal Access Token"
        value="figd_xxxxxxxxxxxxxxxxxx"
        boxClassName="h-[36px] border border-[#a5adad]"
        valueClassName="text-[11.5px]"
      />

      <Field
        className="mt-3"
        label="Design URL"
        value="https://www.figma.com/file/:"
        boxClassName="h-[37px] border-2 border-[#929291]"
        valueClassName="text-[10.5px]"
      />

      <div className="mt-6 flex gap-[17px] pl-6">
        <CardButton>Awesome</CardButton>
        <CardButton>Prepare</CardButton>
      </div>

      <h3 className="mt-12 text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>
    </div>
  );
};

const Field = ({
  label,
  value,
  className,
  boxClassName,
  valueClassName,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <div
      className={cx(
        "mt-3 flex w-[211px] items-center bg-[#272822] px-[19px]",
        boxClassName
      )}
    >
      <span className={cx("truncate", valueClassName)}>{value}</span>
    </div>
  </div>
);

const CardButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
  >
    {children}
  </button>
);

const SettingsIcon = () => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#9a9a9a]"
  >
    <circle cx="7" cy="8" r="2" stroke="currentColor" strokeWidth="1.2" />
    <circle
      cx="7"
      cy="8"
      r="5"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeDasharray="2 2"
    />
  </svg>
);

const ChevronUp = ({ width, height }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#8b9291]"
  >
    <path
      d="M1 6.5L6 1.5L11 6.5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    aria-hidden="true"
    className="shrink-0 text-[#a4a4a3]"
  >
    <circle cx="7.5" cy="7.5" r="6.4" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7.5 6.7V11"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="7.5" cy="4.5" r="0.8" fill="currentColor" />
  </svg>
);

interface FieldProps {
  label: string;
  value: string;
  className: string;
  boxClassName: string;
  valueClassName: string;
}

interface IconProps {
  width: number;
  height: number;
}
