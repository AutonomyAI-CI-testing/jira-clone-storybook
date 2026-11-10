import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static rendering of the "UI magician Agent" Figma frame.
 * Self-contained: no props, no state, no behaviour.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral100)] px-5 py-5 font-primary text-[color:var(--DarkNeutral900)]"
  >
    <div className="flex items-start justify-between">
      <span className="font-primary-bold text-[13.5px] leading-4">
        UI magician Agent
      </span>
      <FiSettings
        size={16}
        className="text-[color:var(--DarkNeutral800)]"
        aria-hidden="true"
      />
    </div>

    <DisclosureRow className="mt-[18px]">
      <span className="truncate text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral700)]">
        From entire frame to a single component
      </span>
    </DisclosureRow>

    <DisclosureRow className="mt-[60px]">
      <span className="font-primary-bold text-[13.5px] leading-4">
        Add New Design
      </span>
    </DisclosureRow>

    <Field
      id="test-card-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      borderClassName="border border-[color:var(--DarkNeutral800)]"
    />

    <Field
      id="test-card-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      borderClassName="border-2 border-[color:var(--DarkNeutral800)]"
    />

    <div className="mt-5 flex justify-center gap-4">
      {["Awesome", "Prepare"].map((label) => (
        <button
          key={label}
          type="button"
          className="h-9 w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] text-[color:var(--DarkNeutral700)]"
        >
          {label}
        </button>
      ))}
    </div>

    <div className="mt-12 font-primary-bold text-[13.5px] leading-4">
      Recent Breakdowns
    </div>
  </div>
);

const DisclosureRow = ({
  children,
  className,
}: DisclosureRowProps): JSX.Element => (
  <div className={cx("flex items-center gap-2", className)}>
    <FiChevronUp
      size={14}
      className="shrink-0 text-[color:var(--DarkNeutral900)]"
      aria-hidden="true"
    />
    {children}
  </div>
);

const Field = ({
  id,
  label,
  placeholder,
  borderClassName,
}: FieldProps): JSX.Element => (
  <div>
    <div className="mt-3 flex items-center gap-2">
      <label
        htmlFor={id}
        className="text-[11.5px] leading-[14px] text-[color:var(--DarkNeutral800)]"
      >
        {label}
      </label>
      <FiInfo
        size={15}
        className="text-[color:var(--DarkNeutral800)]"
        aria-hidden="true"
      />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={cx(
        "mt-3 h-9 w-full bg-[var(--DarkNeutral200)] px-[19px] font-primary-light text-[11.5px] text-[color:var(--DarkNeutral800)] placeholder:text-[color:var(--DarkNeutral600)]",
        borderClassName
      )}
    />
  </div>
);

interface DisclosureRowProps {
  children: React.ReactNode;
  className?: string;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  borderClassName: string;
}
