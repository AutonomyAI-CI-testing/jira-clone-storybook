import cx from "classix";
import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const BUTTON_LABELS = ["Awesome", "Prepare"];

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  /** Push the info icon to the far edge of the row instead of next to the label. */
  iconAtEnd?: boolean;
  /** The design draws the second field's outline one step heavier than the first. */
  borderClassName: string;
}

const Field = ({
  id,
  label,
  placeholder,
  iconAtEnd = false,
  borderClassName,
}: FieldProps) => (
  <>
    <div className={cx("flex items-center gap-2", iconAtEnd && "justify-between")}>
      <label
        htmlFor={id}
        className="text-2xs font-primary-bold text-[color:var(--DarkNeutral800)]"
      >
        {label}
      </label>
      <FaInfoCircle
        aria-hidden="true"
        size={15}
        className="shrink-0 text-[color:var(--DarkNeutral800)]"
      />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={cx(
        "mt-3 h-9 w-full rounded bg-[var(--DarkNeutral200)] px-[19px] text-2xs text-[color:var(--Neutral700)] outline-none placeholder:text-[color:var(--Neutral700)]",
        borderClassName
      )}
    />
  </>
);

/**
 * Static reproduction of the "UI magician Agent" Figma frame.
 *
 * Self-contained on purpose: no props, no state, no data, and nothing imports
 * it. It exists to check that a design can be turned into a component in this
 * codebase, so the bar is "it renders", not fidelity.
 */
export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[254px] flex-col bg-black px-5 pb-[62px] pt-5 font-primary"
  >
    <div className="flex items-start justify-between gap-4">
      <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
        UI magician Agent
      </span>
      <FaCog
        aria-hidden="true"
        size={16}
        className="shrink-0 text-[color:var(--Neutral400)]"
      />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FaChevronUp
        aria-hidden="true"
        size={9}
        className="shrink-0 text-[color:var(--Neutral500)]"
      />
      <span className="text-2xs font-primary-bold text-[color:var(--Neutral500)]">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-2">
      <FaChevronUp
        aria-hidden="true"
        size={12}
        className="shrink-0 text-[color:var(--Neutral400)]"
      />
      <span className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
        Add New Design
      </span>
    </div>

    <div className="mt-7">
      <Field
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        iconAtEnd
        borderClassName="border border-[color:var(--DarkNeutral800)]"
      />
    </div>

    <div className="mt-[11px]">
      <Field
        id="test-card-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderClassName="border-2 border-[color:var(--DarkNeutral800)]"
      />
    </div>

    <div className="mt-[22px] flex justify-center gap-4">
      {BUTTON_LABELS.map((label) => (
        <button
          key={label}
          type="button"
          className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Neutral400)]"
        >
          {label}
        </button>
      ))}
    </div>

    <h2 className="mt-[47px] text-xs font-primary-bold text-[color:var(--Neutral400)]">
      Recent Breakdowns
    </h2>
  </div>
);
