import { ReactNode } from "react";
import cx from "classix";

const ICON_CLASS = "text-[#d4d4d4]";
const HEADING_CLASS = "text-[13.5px] font-semibold leading-[16.34px]";
const LABEL_CLASS = "text-[11.5px] font-semibold leading-[13.92px] text-[#a4a4a3]";
const INPUT_CLASS = "w-full bg-[#272822] pl-[19px] text-[11.5px] font-semibold";

const GearIcon = () => (
  <svg width="14" height="16" viewBox="0 0 14 16" fill="none" aria-hidden="true">
    <g stroke="currentColor" strokeWidth="1.3">
      <circle cx="7" cy="8" r="2.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <line
          key={angle}
          x1="7"
          y1="1.8"
          x2="7"
          y2="3.8"
          transform={`rotate(${angle} 7 8)`}
        />
      ))}
    </g>
  </svg>
);

const ChevronUp = ({ width, height }: { width: number; height: number }) => (
  <svg width={width} height={height} viewBox="0 0 12 8" fill="none" aria-hidden="true">
    <path
      d="M1 6.5 6 1.5l5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
    <circle cx="7.5" cy="7.5" r="6.6" stroke="currentColor" strokeWidth="1.4" />
    <circle cx="7.5" cy="4.7" r="0.85" fill="currentColor" />
    <rect x="6.7" y="6.5" width="1.6" height="4.4" rx="0.8" fill="currentColor" />
  </svg>
);

const Field = ({
  className,
  label,
  placeholder,
  inputClassName,
  placeholderClassName,
}: FieldProps) => (
  <div className={cx("flex flex-col gap-3", className)}>
    <div className={cx("flex items-center gap-2", ICON_CLASS)}>
      <span className={LABEL_CLASS}>{label}</span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={cx(INPUT_CLASS, placeholderClassName, inputClassName)}
    />
  </div>
);

const ActionButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[#843a17] text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="h-[508px] w-[254px] overflow-auto bg-[#000000] px-5 py-5 font-[family-name:Inter,sans-serif]"
  >
    <div className="flex items-start justify-between">
      <span className={cx(HEADING_CLASS, "text-[#b5b5b5]")}>UI magician Agent</span>
      <span className={ICON_CLASS}>
        <GearIcon />
      </span>
    </div>

    <div className={cx("mt-[18px] flex items-center gap-[9px] pl-[3px]", ICON_CLASS)}>
      <ChevronUp width={8} height={5} />
      <span className="text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
        From entire frame to a singl...
      </span>
    </div>

    <div className={cx("mt-[77px] flex items-center gap-[5px] pl-[6px]", ICON_CLASS)}>
      <ChevronUp width={12} height={8} />
      <span className={cx(HEADING_CLASS, "text-[#b2b2b1]")}>Add New Design</span>
    </div>

    <Field
      className="mt-[28px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      inputClassName="h-9 border border-[#a5adad]"
      placeholderClassName="placeholder:text-[11.5px] placeholder:text-[#737470]"
    />
    <Field
      className="mt-[11px]"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      inputClassName="h-[37px] border-2 border-[#929291]"
      placeholderClassName="placeholder:text-[10.5px] placeholder:text-[#71726e]"
    />

    <div className="mt-[22px] flex gap-[17px] pl-[24px]">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className={cx("mt-[46px]", HEADING_CLASS, "text-[#b0b0b0]")}>
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  className?: string;
  label: string;
  placeholder: string;
  inputClassName: string;
  placeholderClassName: string;
}
