import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const LABEL_CLASS =
  "font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]";

const INPUT_CLASS =
  "h-9 w-full border border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-3 font-primary text-2xs text-[color:var(--Neutral700)] outline-none placeholder:text-[color:var(--Neutral700)]";

const BUTTON_CLASS =
  "h-9 flex-1 rounded bg-[var(--Orange800)] font-primary-bold text-2xs text-[color:var(--Neutral600)]";

const Field = ({ label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <span className={cx("flex items-center gap-2", LABEL_CLASS)}>
      {label}
      <FaInfoCircle aria-hidden size={15} />
    </span>
    <input
      type="text"
      readOnly
      aria-label={label}
      placeholder={placeholder}
      className={INPUT_CLASS}
    />
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5"
    >
      <div className="flex items-center justify-between">
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          UI magician Agent
        </span>
        <FaCog
          aria-hidden
          size={15}
          className="text-[color:var(--Neutral400)]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-2">
        <FaChevronUp
          aria-hidden
          size={10}
          className="text-[color:var(--Neutral500)]"
        />
        <span className="font-primary-bold text-2xs text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-2">
        <FaChevronUp
          aria-hidden
          size={12}
          className="text-[color:var(--Neutral400)]"
        />
        <span className="font-primary-bold text-xs text-[color:var(--Neutral400)]">
          Add New Design
        </span>
      </div>

      <div className="mt-7">
        <Field
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-[11px]">
        <Field label="Design URL" placeholder="https://www.figma.com/file/:" />
      </div>

      <div className="mt-[23px] flex gap-4">
        <button type="button" className={BUTTON_CLASS}>
          Awesome
        </button>
        <button type="button" className={BUTTON_CLASS}>
          Prepare
        </button>
      </div>

      <span className="mt-12 font-primary-bold text-xs text-[color:var(--DarkNeutral800)]">
        Recent Breakdowns
      </span>
    </div>
  );
};
