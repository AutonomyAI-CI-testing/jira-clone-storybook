import type { ReactNode } from "react";
import cx from "classix";
import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const ROW_STYLES: Record<RowVariant, { icon: string; label: string }> = {
  summary: {
    icon: "h-4 w-4 text-[color:var(--DarkNeutral700)]",
    label:
      "min-w-0 truncate font-primary text-sm text-[color:var(--DarkNeutral700)]",
  },
  heading: {
    icon: "h-5 w-5 text-[color:var(--DarkNeutral1000)]",
    label: "font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]",
  },
};

const SectionRow = ({ variant, children, className = "" }: SectionRowProps) => (
  <button
    type="button"
    className={cx("flex w-full items-center gap-3 text-left", className)}
  >
    <FiChevronUp
      aria-hidden
      className={cx("shrink-0", ROW_STYLES[variant].icon)}
    />
    <span className={ROW_STYLES[variant].label}>{children}</span>
  </button>
);

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label
        htmlFor={id}
        className="font-primary text-sm text-[color:var(--DarkNeutral1000)]"
      >
        {label}
      </label>
      <FiInfo
        aria-hidden
        className="h-4 w-4 shrink-0 text-[color:var(--DarkNeutral700)]"
      />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral250)] px-4 py-3.5 font-primary text-sm text-[color:var(--DarkNeutral1100)] placeholder:text-[color:var(--DarkNeutral600)]"
    />
  </div>
);

const ActionButton = ({ children }: ActionButtonProps) => (
  <button
    type="button"
    className="rounded bg-[var(--Orange800)] px-8 py-5 font-primary text-sm text-[color:var(--DarkNeutral1100)]"
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col bg-[var(--DarkNeutral100)] px-10 py-10 font-primary"
  >
    <header className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-lg text-[color:var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="shrink-0 text-[color:var(--DarkNeutral1000)]"
      >
        <FiSettings aria-hidden className="h-5 w-5" />
      </button>
    </header>

    <SectionRow variant="summary" className="mt-8">
      From entire frame to a single component in one pass, with every layer kept
    </SectionRow>

    <SectionRow variant="heading" className="mt-40">
      Add New Design
    </SectionRow>

    <div className="mt-16 flex flex-col gap-12">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-16 flex gap-8">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-24 font-primary-bold text-lg text-[color:var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

type RowVariant = "summary" | "heading";

interface SectionRowProps {
  variant: RowVariant;
  className?: string;
  children: ReactNode;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  children: ReactNode;
}
