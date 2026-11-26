import type { ReactNode } from "react";
import cx from "classix";

/**
 * Smoke-test component: a static reproduction of a Figma settings panel.
 * Self-contained and presentational only — no props, no state, no handlers.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-black px-5 pt-5 pb-[62px] font-primary text-[#b5b5b5]"
  >
    {/* Title row */}
    <div className="flex items-start justify-between">
      <span className="text-[13.5px] leading-4">UI magician Agent</span>
      <GearIcon className="h-4 w-4" />
    </div>

    {/* Collapsed section */}
    <div className="mt-[18px] flex items-center gap-2 pl-[3px] text-[#8b9291]">
      <ChevronUpIcon className="h-2 w-2" />
      <span className="text-[11.5px] leading-[14px]">
        From entire frame to a singl...
      </span>
    </div>

    {/* Section header */}
    <div className="mt-[72px] flex items-center gap-[10px] pl-2 text-[#b2b2b1]">
      <ChevronUpIcon className="h-3 w-3" />
      <span className="text-[13.5px] leading-4">Add New Design</span>
    </div>

    <Field
      className="mt-[28px]"
      label="Personal Access Token"
      value="figd_xxxxxxxxxxxxxxxxxx"
      borderClassName="border border-[#a5adad]"
      valueClassName="text-[11.5px] text-[#737470]"
    />
    <Field
      className="mt-[11px]"
      label="Design URL"
      value="https://www.figma.com/file/:"
      borderClassName="border-2 border-[#929291]"
      valueClassName="text-[10.5px] text-[#71726e]"
    />

    {/* Buttons */}
    <div className="mt-[22px] flex gap-[17px] pl-6">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] leading-[14px] text-[#8c8078]"
        >
          {label}
        </button>
      ))}
    </div>

    {/* Section heading */}
    <h2 className="mt-11 font-primary-bold text-[13.5px] leading-4 text-[#b0b0b0]">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({
  label,
  value,
  className,
  borderClassName,
  valueClassName,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2 text-[#a4a4a3]">
      <span className="text-[11.5px] leading-[14px]">{label}</span>
      <InfoIcon className="h-[15px] w-[15px]" />
    </div>
    <div
      className={cx(
        "mt-3 flex h-9 items-center bg-[#272822] px-[19px]",
        borderClassName
      )}
    >
      <span className={cx("leading-[14px]", valueClassName)}>{value}</span>
    </div>
  </div>
);

const Icon = ({ className, children }: IconProps): JSX.Element => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cx("shrink-0", className)}
  >
    {children}
  </svg>
);

const GearIcon = ({ className }: IconProps): JSX.Element => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Icon>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <Icon className={className}>
    <path d="M18 15l-6-6-6 6" />
  </Icon>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <Icon className={className}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Icon>
);

interface IconProps {
  className?: string;
  children?: ReactNode;
}

interface FieldProps {
  label: string;
  value: string;
  className?: string;
  borderClassName: string;
  valueClassName: string;
}
