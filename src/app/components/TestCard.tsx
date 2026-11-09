import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const actionButtonClass =
  "h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]";

interface FieldProps {
  label: string;
  placeholder: string;
  /** The frame draws the first field's edge at 1px and the second at 2px. */
  thickBorder?: boolean;
}

const Field = ({ label, placeholder, thickBorder = false }: FieldProps) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]">
        {label}
      </span>
      <FaInfoCircle size={15} className="text-[color:var(--DarkNeutral800)]" />
    </div>

    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={cx(
        "h-9 w-full rounded bg-[var(--DarkNeutral200)] px-3 font-primary-bold text-2xs text-[color:var(--Neutral400)] placeholder:text-[color:var(--Neutral700)]",
        thickBorder
          ? "border-2 border-[color:var(--DarkNeutral800)]"
          : "border border-[color:var(--DarkNeutral800)]"
      )}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="flex min-h-[508px] w-[254px] flex-col bg-black">
    <div className="h-[9px] w-full bg-[var(--DarkNeutral0)]" />

    <div className="flex flex-col px-5 pb-8 pt-3">
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          UI magician Agent
        </span>
        <FaCog size={15} className="text-[color:var(--Neutral400)]" />
      </div>

      <div className="mt-4 flex items-center gap-3">
        <FaChevronUp size={12} className="text-[color:var(--Neutral500)]" />
        <span className="font-primary-bold text-2xs text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[76px] flex items-center gap-3">
        <FaChevronUp size={12} className="text-[color:var(--Neutral400)]" />
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <div className="mt-7 flex flex-col gap-4">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <Field
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          thickBorder
        />
      </div>

      <div className="mt-6 flex gap-4 pl-6">
        <button type="button" className={actionButtonClass}>
          Awesome
        </button>
        <button type="button" className={actionButtonClass}>
          Prepare
        </button>
      </div>

      <span className="mt-12 font-primary-bold text-xs text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </span>
    </div>
  </div>
);
