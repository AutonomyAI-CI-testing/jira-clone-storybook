import cx from "classix";
import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const labelRowClass = "flex items-center gap-2";
const labelClass = "text-2xs font-primary-bold leading-[14px] text-font-subtle";
const fieldClass =
  "flex h-9 items-center border border-border-bold bg-background-input px-3";
const fieldTextClass = "text-2xs leading-[14px] text-font-subtlest";
const buttonClass =
  "h-9 w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold leading-[14px] text-font-subtle";

interface LabelRowProps {
  label: string;
  className?: string;
}

const LabelRow = ({ label, className }: LabelRowProps): JSX.Element => (
  <div className={cx(labelRowClass, className)}>
    <span className={labelClass}>{label}</span>
    <HiOutlineInformationCircle
      aria-hidden="true"
      className="text-font-subtlest"
      size={15}
    />
  </div>
);

interface FieldProps {
  value: string;
  className?: string;
}

const Field = ({ value, className }: FieldProps): JSX.Element => (
  <div className={cx(fieldClass, className)}>
    <span className={fieldTextClass}>{value}</span>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface pb-[62px] font-primary text-font"
  >
    <div className="h-[9px] w-full bg-elevation-surface-sunken" />

    <div className="flex flex-col px-5">
      <div className="mt-[11px] flex items-center justify-between">
        <span className="font-primary-bold text-xs leading-4">
          UI magician Agent
        </span>
        <HiOutlineCog aria-hidden="true" className="text-font" size={16} />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <HiChevronUp
          aria-hidden="true"
          className="text-font-subtlest"
          size={12}
        />
        <span className="font-primary-bold text-2xs leading-[14px] text-font-subtlest">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <HiChevronUp
          aria-hidden="true"
          className="text-font-subtlest"
          size={12}
        />
        <span className="font-primary-bold text-xs leading-4">
          Add New Design
        </span>
      </div>

      <LabelRow label="Personal Access Token" className="mt-[28px]" />
      <Field value="figd_xxxxxxxxxxxxxxxxxx" className="mt-[12px]" />

      <LabelRow label="Design URL" className="mt-[11px]" />
      <Field value="https://www.figma.com/file/:" className="mt-[11px]" />

      <div className="mt-[22px] flex justify-end gap-[17px]">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <div className="mt-[47px]">
        <span className="font-primary-bold text-xs leading-4">
          Recent Breakdowns
        </span>
      </div>
    </div>
  </div>
);
