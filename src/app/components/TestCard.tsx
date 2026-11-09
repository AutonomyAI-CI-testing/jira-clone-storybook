import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const labelClass =
  "flex items-center gap-2 text-2xs font-primary-bold text-[color:var(--DarkNeutral800)]";

const inputClass =
  "h-9 w-full rounded border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-5 text-2xs font-primary-bold text-[color:var(--Neutral700)] outline-none placeholder:text-[color:var(--Neutral700)]";

const buttonClass =
  "h-9 w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Neutral600)]";

const Field = ({
  id,
  label,
  placeholder,
  className,
  inputClassName,
}: FieldProps) => (
  <>
    <label htmlFor={id} className={cx(labelClass, className)}>
      {label}
      <FaInfoCircle
        size={15}
        aria-hidden="true"
        className="shrink-0 text-[color:var(--Neutral500)]"
      />
    </label>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className={cx(inputClass, inputClassName)}
    />
  </>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
  inputClassName?: string;
}

/**
 * Static reproduction of a cropped Figma frame — the "UI magician Agent" panel.
 * Deliberately prop-less and self-contained; spacing, colour and type are
 * approximations of the design, not a pixel match.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-black font-primary">
    <div className="h-[9px] w-full bg-[var(--DarkNeutral-100)]" />

    <div className="flex flex-col px-5 pt-[11px] pb-[62px]">
      <div className="flex items-center justify-between">
        <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
          UI magician Agent
        </span>
        <FaCog
          size={14}
          aria-hidden="true"
          className="text-[color:var(--Neutral400)]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-3">
        <FaChevronUp
          size={8}
          aria-hidden="true"
          className="shrink-0 text-[color:var(--Neutral500)]"
        />
        <span className="truncate text-2xs font-primary-bold text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-2">
        <FaChevronUp
          size={12}
          aria-hidden="true"
          className="shrink-0 text-[color:var(--Neutral400)]"
        />
        <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mt-[28px]"
        inputClassName="mt-3 border"
      />

      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mt-[9px]"
        inputClassName="mt-[9px] border-2"
      />

      <div className="mt-[23px] flex gap-[17px] pl-6">
        <button type="button" className={buttonClass}>
          Awesome
        </button>
        <button type="button" className={buttonClass}>
          Prepare
        </button>
      </div>

      <span className="mt-[47px] text-xs font-primary-bold text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
