import cx from "classix";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { MdSettings } from "react-icons/md";
import { RiArrowUpSLine } from "react-icons/ri";

interface FieldProps {
  label: string;
  placeholder: string;
  placeholderClassName: string;
}

const Field = ({
  label,
  placeholder,
  placeholderClassName,
}: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <span className="text-[11.5px] leading-none text-[var(--DarkNeutral800)]">
        {label}
      </span>
      <HiOutlineInformationCircle
        size={14}
        className="text-[var(--DarkNeutral700)]"
      />
    </div>
    <div className="mt-3 flex h-9 w-full items-center border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-[19px]">
      <span className={cx("leading-none", placeholderClassName)}>
        {placeholder}
      </span>
    </div>
  </div>
);

const buttonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] text-[var(--DarkNeutral600)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral0)] px-5 pb-8 pt-5 font-primary-bold"
  >
    <div className="flex items-center justify-between">
      <span className="text-[13.5px] leading-none text-[var(--DarkNeutral900)]">
        UI magician Agent
      </span>
      <MdSettings size={16} className="text-[var(--DarkNeutral800)]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <RiArrowUpSLine size={12} className="text-[var(--DarkNeutral700)]" />
      <span className="truncate text-[11.5px] leading-none text-[var(--DarkNeutral700)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[79px] flex items-center gap-2">
      <RiArrowUpSLine size={14} className="text-[var(--DarkNeutral800)]" />
      <span className="text-[13.5px] leading-none text-[var(--DarkNeutral800)]">
        Add New Design
      </span>
    </div>

    <div className="mt-[30px]">
      <Field
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        placeholderClassName="text-[11.5px] text-[var(--DarkNeutral500)]"
      />
    </div>

    <div className="mt-[11px]">
      <Field
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        placeholderClassName="text-[10.5px] text-[var(--DarkNeutral500)]"
      />
    </div>

    <div className="mt-[22px] flex gap-[17px]">
      <button type="button" className={buttonClass}>
        Awesome
      </button>
      <button type="button" className={buttonClass}>
        Prepare
      </button>
    </div>

    <div className="mt-[47px] text-[13.5px] leading-none text-[var(--DarkNeutral900)]">
      Recent Breakdowns
    </div>
  </div>
);
