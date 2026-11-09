import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";
import cx from "classix";

/**
 * A self-contained reproduction of the "UI magician Agent" panel from the
 * attached Figma frame (254x508). It is a smoke test of the design-to-component
 * path: it accepts no props, holds no state and is not rendered by any route.
 */
export const TestCard = (): JSX.Element => (
  <div id="testElem" className="w-[254px] bg-black font-primary">
    {/* The frame's 9px band across the top of the panel */}
    <div className="h-[9px] bg-[var(--DarkNeutral-100)]" />

    <div className="flex flex-col px-5 pb-[62px] pt-[11px]">
      <div className="flex items-start justify-between">
        <h1 className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
          UI magician Agent
        </h1>
        <FaCog
          size={16}
          aria-hidden="true"
          className="text-[color:var(--Neutral400)]"
        />
      </div>

      <div className="mt-[18px] flex items-center gap-3">
        <FaChevronUp
          size={10}
          aria-hidden="true"
          className="text-[color:var(--Neutral500)]"
        />
        <span className="text-2xs font-primary-bold text-[color:var(--Neutral500)]">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mt-[75px] flex items-center gap-3">
        <FaChevronUp
          size={12}
          aria-hidden="true"
          className="text-[color:var(--Neutral400)]"
        />
        <h2 className="text-xs font-primary-bold text-[color:var(--Neutral400)]">
          Add New Design
        </h2>
      </div>

      <div className="mt-[28px] flex flex-col">
        <Field
          id="test-card-access-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
      </div>

      <div className="mt-3 flex flex-col">
        <Field
          id="test-card-design-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          borderWidth={2}
        />
      </div>

      <div className="mt-[22px] flex gap-4 pl-6">
        {ACTION_LABELS.map((label) => (
          <button
            key={label}
            type="button"
            className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[var(--Orange800)] text-2xs font-primary-bold text-[color:var(--Neutral600)]"
          >
            {label}
          </button>
        ))}
      </div>

      <h2 className="mt-[47px] text-xs font-primary-bold text-[color:var(--Neutral400)]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);

const ACTION_LABELS = ["Awesome", "Prepare"];

const Field = ({
  id,
  label,
  placeholder,
  borderWidth = 1,
}: FieldProps): JSX.Element => (
  <div className="flex flex-col">
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="text-2xs font-primary-bold text-[color:var(--DarkNeutral800)]"
      >
        {label}
      </label>
      <FaInfoCircle
        size={15}
        aria-hidden="true"
        className="text-[color:var(--Neutral400)]"
      />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={cx(
        "mt-3 w-full border-[color:var(--DarkNeutral800)] bg-[var(--DarkNeutral200)] px-4 text-2xs font-primary-bold text-[color:var(--Neutral700)] placeholder:text-[color:var(--Neutral700)]",
        borderWidth === 2 ? "border-2 py-2" : "border py-[9px]"
      )}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  borderWidth?: 1 | 2;
}
