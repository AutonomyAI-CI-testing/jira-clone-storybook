import cx from "classix";

const TEXT_GREY = "text-[#b5b5b5]";
const ICON_GREY = "text-[#cfcfcf]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pb-[60px] pt-5 font-[Inter,ui-sans-serif,system-ui,sans-serif] text-[11.5px] font-semibold leading-[13.92px]"
  >
    <div className="flex items-start justify-between">
      <h1 className={cx("text-[13.5px] leading-[16.34px]", TEXT_GREY)}>
        UI magician Agent
      </h1>
      <GearIcon className={cx("mr-1", TEXT_GREY)} />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px]">
      <ChevronUp className={cx("h-[5px] w-2", TEXT_GREY)} />
      <span className="text-[#8b9291]">From entire frame to a singl...</span>
    </div>

    <div className="mt-[82px] flex items-center gap-[5px] pl-[6px]">
      <ChevronUp className={cx("h-2 w-3", TEXT_GREY)} />
      <h2 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
        Add New Design
      </h2>
    </div>

    <div className="mt-[28px]">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
        inputClassName="border border-[#a5adad] placeholder:text-[#737470]"
      />
    </div>

    <div className="mt-3">
      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        inputClassName="border-2 border-[#929291] placeholder:text-[#71726e]"
      />
    </div>

    <div className="mt-[22px] flex justify-center gap-[17px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-[46px] text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ label, placeholder, inputClassName }: FieldProps) => (
  <div>
    <div className="mb-3 flex items-center gap-[22px]">
      <span className="text-[#a4a4a3]">{label}</span>
      <InfoIcon className={ICON_GREY} />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "h-9 w-[211px] bg-[#272822] px-[18px] text-[11.5px] font-semibold outline-none",
        inputClassName
      )}
    />
  </div>
);

const ActionButton = ({ children }: { children: string }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold text-[#8c8078]"
  >
    {children}
  </button>
);

const ChevronUp = ({ className }: IconProps) => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M1 7L6 1.5L11 7" />
  </svg>
);

const GearIcon = ({ className }: IconProps) => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7" cy="8" r="2.9" strokeWidth="1.2" />
    <circle cx="7" cy="8" r="5.5" strokeWidth="1.6" strokeDasharray="1.5 2.4" />
  </svg>
);

const InfoIcon = ({ className }: IconProps) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    aria-hidden="true"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.4" strokeWidth="1.4" />
    <path d="M7.5 6.8V11" strokeWidth="1.4" />
    <circle cx="7.5" cy="4.4" r="0.85" fill="currentColor" stroke="none" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
  inputClassName: string;
}

interface IconProps {
  className?: string;
}
