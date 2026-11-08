import cx from "classix";
import { HiChevronUp } from "react-icons/hi";
import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";

const titleTextClass = "text-xs leading-4 text-font";
const metaTextClass = "text-2xs leading-[14px] text-font-subtle";
const hintTextClass = "text-2xs leading-[14px] text-font-subtlest";

const actionClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs leading-[14px] text-font";

const actions = ["Awesome", "Prepare"];

interface FieldProps {
  text: string;
  className: string;
}

const Field = ({ text, className }: FieldProps): JSX.Element => (
  <div
    className={cx(
      "flex w-[211px] items-center bg-elevation-surface-raised pl-[19px]",
      className
    )}
  >
    <span className={hintTextClass}>{text}</span>
  </div>
);

interface LabelRowProps {
  label: string;
  className: string;
}

const LabelRow = ({ label, className }: LabelRowProps): JSX.Element => (
  <div className={cx("flex items-center gap-5", className)}>
    <span className={metaTextClass}>{label}</span>
    <IoInformationCircleOutline size={15} className="text-font-subtle" />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[254px] bg-elevation-surface font-primary text-font"
  >
    <div className="h-[9px] w-full bg-[var(--DarkNeutral0)]" />

    <div className="px-5 pb-[61px] pt-[11px]">
      <div className="flex items-center justify-between">
        <span className={titleTextClass}>UI magician Agent</span>
        <IoSettingsOutline size={16} className="text-font" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <HiChevronUp size={12} className="text-font-subtlest" />
        <span className={hintTextClass}>From entire frame to a singl...</span>
      </div>

      <div className="mt-[77px] flex items-center gap-1.5">
        <HiChevronUp size={12} className="text-font" />
        <span className={titleTextClass}>Add New Design</span>
      </div>

      <LabelRow label="Personal Access Token" className="mt-[28px]" />
      <Field
        text="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[12px] h-9 border border-border-bold"
      />

      <LabelRow label="Design URL" className="mt-[11px]" />
      <Field
        text="https://www.figma.com/file/:"
        className="mt-[11px] h-[37px] border-2 border-border-bold"
      />

      <div className="mt-[22px] flex items-center justify-center gap-4">
        {actions.map((label) => (
          <button key={label} type="button" className={actionClass}>
            {label}
          </button>
        ))}
      </div>

      <div className="mt-[46px] text-xs leading-4 text-font">
        Recent Breakdowns
      </div>
    </div>
  </div>
);
