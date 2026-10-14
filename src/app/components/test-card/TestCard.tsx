import cx from "classix";
import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings4Line,
} from "react-icons/ri";

const actionButtonStyle = cx(
  "cursor-pointer rounded-md bg-[var(--Orange800)] px-6 py-3",
  "font-primary-bold text-sm text-[var(--DarkNeutral1000)]"
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-screen max-w-[508px] bg-[var(--DarkNeutral-100)] px-10 py-10 text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-[var(--DarkNeutral1100)]"
      >
        <RiSettings4Line size={28} aria-hidden />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2 text-[var(--DarkNeutral800)]">
      <RiArrowUpSLine size={22} aria-hidden />
      <span className="text-sm">From entire frame to a singl...</span>
    </div>

    <SectionHeading className="mt-24">Add New Design</SectionHeading>

    <div className="mt-8 flex flex-col gap-6">
      <Field
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex justify-end gap-4">
      <button type="button" className={actionButtonStyle}>
        Awesome
      </button>
      <button type="button" className={actionButtonStyle}>
        Prepare
      </button>
    </div>

    <SectionHeading className="mt-24">Recent Breakdowns</SectionHeading>
  </div>
);

const SectionHeading = ({
  children,
  className,
}: SectionHeadingProps): JSX.Element => (
  <h2 className={cx("flex items-center gap-2 font-primary-bold", className)}>
    <RiArrowUpSLine size={24} aria-hidden />
    {children}
  </h2>
);

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-4">
      <label htmlFor={id} className="font-primary-bold text-sm">
        {label}
      </label>
      <RiInformationLine
        size={18}
        aria-hidden
        className="text-[var(--DarkNeutral900)]"
      />
    </div>
    <input
      id={id}
      placeholder={placeholder}
      className={cx(
        "mt-2 w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral0)] px-4 py-3",
        "text-sm text-[var(--DarkNeutral1100)] outline-none placeholder:text-[var(--DarkNeutral700)]"
      )}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
