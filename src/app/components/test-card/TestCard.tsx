import cx from "classix";
import { IoInformationCircleOutline, IoSettingsOutline } from "react-icons/io5";
import { RiArrowUpSLine } from "react-icons/ri";

const headingClass =
  "text-[13.5px] font-primary-bold text-[var(--DarkNeutral900)]";

const actionClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] font-primary-bold text-[var(--DarkNeutral800)]";

const fieldClass =
  "mt-[12px] w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral250)] px-[19px] text-[var(--DarkNeutral600)] placeholder:text-[var(--DarkNeutral600)]";

const actions = ["Awesome", "Prepare"];

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
}

const Field = ({
  label,
  placeholder,
  className,
  inputClassName,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-[6px]">
      <span className="text-[11.5px] text-[var(--DarkNeutral800)]">
        {label}
      </span>
      <IoInformationCircleOutline
        size={15}
        className="text-[var(--DarkNeutral800)]"
        aria-hidden="true"
      />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={cx(fieldClass, inputClassName)}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[508px] w-[254px] bg-[var(--DarkNeutral0)] px-5 pt-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <span className={headingClass}>UI magician Agent</span>
      <IoSettingsOutline
        size={16}
        className="text-[var(--DarkNeutral900)]"
        aria-hidden="true"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <RiArrowUpSLine
        size={16}
        className="text-[var(--DarkNeutral700)]"
        aria-hidden="true"
      />
      <span className="text-[11.5px] text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[72px] flex items-center gap-2">
      <RiArrowUpSLine
        size={16}
        className="text-[var(--DarkNeutral900)]"
        aria-hidden="true"
      />
      <span className={headingClass}>Add New Design</span>
    </div>

    <Field
      className="mt-[26px]"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      inputClassName="h-[36px] text-[11.5px]"
    />
    <Field
      className="mt-[11px]"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      inputClassName="h-[37px] text-[10.5px]"
    />

    <div className="mt-[22px] flex items-center gap-[17px] pl-6">
      {actions.map((label) => (
        <button key={label} type="button" className={actionClass}>
          {label}
        </button>
      ))}
    </div>

    <h2 className={cx("mt-[47px]", headingClass)}>Recent Breakdowns</h2>
  </div>
);
