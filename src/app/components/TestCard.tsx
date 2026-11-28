import cx from "classix";

const ChevronUp = ({ size }: ChevronUpProps): JSX.Element => (
  <svg
    viewBox="0 0 12 8"
    fill="none"
    aria-hidden="true"
    preserveAspectRatio="none"
    className={size === "sm" ? "h-[5px] w-[8px]" : "h-[8px] w-[12px]"}
  >
    <path
      d="M1 7L6 2L11 7"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SettingsIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="h-4 w-4 shrink-0"
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    className="h-[15px] w-[15px] shrink-0"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 11v5.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="12" cy="7.4" r="1.3" fill="currentColor" />
  </svg>
);

const Field = ({
  className,
  label,
  labelClassName,
  value,
  valueClassName,
  boxClassName,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className={cx("flex h-[15px] items-center gap-5", labelClassName)}>
      <span className="text-[11.5px] font-semibold leading-[13.92px]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <div
      className={cx(
        "mt-[11px] flex items-center overflow-hidden pl-[18px]",
        boxClassName
      )}
    >
      <span className={cx("font-semibold", valueClassName)}>{value}</span>
    </div>
  </div>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded-[4px] bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * Self-contained: no props, no state, no data. Every value comes from the
 * frame's exported style guide, measured against the 254x508 frame at 1x.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex h-[508px] w-[254px] flex-col bg-[#000000] px-5 pt-5 font-[Inter,sans-serif]"
  >
    <div className="flex h-[16px] items-center justify-between text-[#b5b5b5]">
      <span className="text-[13.5px] font-semibold leading-[16.34px]">
        UI magician Agent
      </span>
      <SettingsIcon />
    </div>

    <div className="mt-[18px] flex items-center gap-[9px] pl-[3px] text-[#8b9291]">
      <ChevronUp size="sm" />
      <span className="text-[11.5px] font-semibold leading-[13.92px]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[62px] flex h-[47px] items-center gap-[5px] pl-[6px] text-[#b2b2b1]">
      <ChevronUp size="md" />
      <span className="text-[13.5px] font-semibold leading-[16.34px]">
        Add New Design
      </span>
    </div>

    <Field
      className="mt-[12px]"
      label="Personal Access Token"
      labelClassName="text-[#a4a4a3]"
      value="figd_xxxxxxxxxxxxxxxxxx"
      valueClassName="text-[11.5px] leading-[13.92px] text-[#737470]"
      boxClassName="h-[36px] border border-[#a5adad] bg-[#272822]"
    />

    <Field
      className="mt-[11px]"
      label="Design URL"
      labelClassName="text-[#a3a3a2]"
      value="https://www.figma.com/file/:"
      valueClassName="text-[10.5px] leading-[12.71px] text-[#71726e]"
      boxClassName="h-[37px] border-2 border-[#929291] bg-[#272822]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-[47px] text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

interface ChevronUpProps {
  size: "sm" | "md";
}

interface FieldProps {
  className: string;
  label: string;
  labelClassName: string;
  value: string;
  valueClassName: string;
  boxClassName: string;
}

interface ActionButtonProps {
  children: string;
}
