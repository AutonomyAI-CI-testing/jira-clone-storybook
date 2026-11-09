import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const LABEL_CLASS =
  "font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]";

const INPUT_CLASS =
  "w-full border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 font-primary-bold text-2xs text-[color:var(--Neutral700)] outline-none placeholder:text-[color:var(--Neutral700)]";

const BUTTON_CLASS =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]";

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
    <div className="flex items-center gap-2">
      <span className={LABEL_CLASS}>{label}</span>
      <FaInfoCircle size={15} className="text-[color:var(--DarkNeutral800)]" />
    </div>
    <input
      readOnly
      placeholder={placeholder}
      className={cx(INPUT_CLASS, inputClassName)}
    />
  </div>
);

/**
 * A prop-less rendering of the cropped Figma frame: the "UI magician Agent"
 * panel with its two token fields, action buttons and section heading.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="min-h-[508px] w-[254px] bg-black font-primary">
    <div className="h-[9px] w-full bg-[var(--DarkNeutral-100)]" />

    <div className="px-5 pb-6">
      <div className="mt-[11px] flex items-center justify-between">
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          UI magician Agent
        </span>
        <FaCog size={14} className="text-[color:var(--Neutral400)]" />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FaChevronUp size={9} className="text-[color:var(--Neutral500)]" />
        <span className="font-primary-bold text-2xs text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[77px] flex items-center gap-2">
        <FaChevronUp size={12} className="text-[color:var(--Neutral400)]" />
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <Field
        className="mt-[28px]"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        inputClassName="mt-[12px] h-[36px] border"
      />

      <Field
        className="mt-[11px]"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        inputClassName="mt-[11px] h-[37px] border-2"
      />

      <div className="mt-[22px] flex justify-end gap-[17px]">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <p className="mt-[44px] font-primary-bold text-xs text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </p>
    </div>
  </div>
);
