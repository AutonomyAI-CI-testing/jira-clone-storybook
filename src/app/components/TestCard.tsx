import cx from "classix";
import type { ReactNode } from "react";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const heading =
  "text-[13.5px] font-primary-bold leading-[16.34px] text-[var(--DarkNeutral900)]";
const microLabel = "text-[11.5px] font-primary-bold leading-[13.92px]";

export const TestCard = () => (
  <div
    id="testElem"
    className="w-[254px] bg-[var(--DarkNeutral100)] px-5 py-5 font-primary"
  >
    <div className="flex items-start justify-between">
      <h2 className={heading}>UI magician Agent</h2>
      <FiSettings size={16} className="text-[var(--DarkNeutral800)]" />
    </div>

    <div className="mt-[18px] flex items-center gap-2">
      <FiChevronUp size={8} className="text-[var(--DarkNeutral700)]" />
      <span
        className={cx(microLabel, "text-[var(--DarkNeutral700)]")}
      >
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-[75px] flex items-center gap-2">
      <FiChevronUp size={12} className="text-[var(--DarkNeutral900)]" />
      <h3 className={heading}>Add New Design</h3>
    </div>

    <Field
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
      className="mt-7"
    />
    <Field
      label="Design URL"
      placeholder="https://www.figma.com/file/:"
      emphasised
      className="mt-3"
    />

    <div className="mt-[22px] flex gap-4 pl-6">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h3 className={cx(heading, "mt-12")}>Recent Breakdowns</h3>
  </div>
);

interface FieldProps {
  label: string;
  placeholder: string;
  emphasised?: boolean;
  className?: string;
}

const Field = ({
  label,
  placeholder,
  emphasised = false,
  className,
}: FieldProps) => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <span className={cx(microLabel, "text-[var(--DarkNeutral800)]")}>
        {label}
      </span>
      <FiInfo size={15} className="text-[var(--DarkNeutral800)]" />
    </div>
    <input
      readOnly
      placeholder={placeholder}
      className={cx(
        "mt-3 h-[36px] w-full bg-[var(--DarkNeutral200)] px-5 text-[11.5px] font-primary-bold text-[var(--DarkNeutral600)] placeholder:text-[var(--DarkNeutral600)]",
        emphasised
          ? "border-2 border-[var(--DarkNeutral800)]"
          : "border border-[var(--DarkNeutral800)]",
      )}
    />
  </div>
);

const PanelButton = ({ children }: { children: ReactNode }) => (
  <button
    type="button"
    className="h-[37px] w-[85px] rounded bg-[var(--Orange800)] text-[11.5px] font-primary-bold text-[var(--DarkNeutral700)]"
  >
    {children}
  </button>
);
