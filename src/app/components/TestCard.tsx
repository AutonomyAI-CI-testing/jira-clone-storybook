import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const BUTTON_LABELS = ["Awesome", "Prepare"] as const;

const Field = ({ label, placeholder, className }: FieldProps) => (
  <div className={cx("flex flex-col", className)}>
    <div className="flex items-center gap-2">
      <span className="font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]">
        {label}
      </span>
      <FaInfoCircle
        aria-hidden="true"
        size={14}
        className="text-[color:var(--DarkNeutral800)]"
      />
    </div>
    <input
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className="mt-3 h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-2 font-primary-bold text-2xs text-[color:var(--Neutral700)] outline-none placeholder:text-[color:var(--Neutral700)]"
    />
  </div>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[55px] pt-5 font-primary"
  >
    <div className="flex items-center justify-between">
      <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
        UI magician Agent
      </span>
      <FaCog
        aria-hidden="true"
        size={16}
        className="text-[color:var(--Neutral400)]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FaChevronUp
        aria-hidden="true"
        size={10}
        className="text-[color:var(--Neutral500)]"
      />
      <span className="font-primary-bold text-2xs text-[color:var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[77px] flex items-center gap-2">
      <FaChevronUp
        aria-hidden="true"
        size={12}
        className="text-[color:var(--Neutral400)]"
      />
      <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    <Field
      className="mt-7"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />

    <Field
      className="mt-3"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
    />

    <div className="mt-[22px] flex gap-[17px] pl-6">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]"
        >
          {label}
        </button>
      ))}
    </div>

    <span className="mt-[47px] font-primary-bold text-xs text-[color:var(--Neutral400)]">
      Recent Breakdowns
    </span>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}
