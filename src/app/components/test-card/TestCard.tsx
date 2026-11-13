import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const ACTIONS = ["Awesome", "Prepare"] as const;

const ACTION_STYLE =
  "rounded border border-[var(--Orange600)] bg-[var(--Orange700)] px-6 py-3 font-primary text-[var(--DarkNeutral1100)]";

const FIELD_STYLE =
  "mt-3 w-full rounded border border-[var(--DarkNeutral400)] bg-[var(--DarkNeutral100)] px-4 py-3 text-sm placeholder:text-[var(--DarkNeutral700)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="min-h-[1016px] w-[508px] bg-[var(--DarkNeutral-100)] px-6 py-6 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
      <HiOutlineCog aria-hidden size={22} />
    </div>

    <div className="mt-4 flex items-center gap-2 text-[var(--DarkNeutral700)]">
      <HiChevronUp aria-hidden size={20} className="shrink-0" />
      <span className="truncate text-sm">From entire frame to a singl...</span>
    </div>

    <div className="mt-24">
      <SectionHeading>Add New Design</SectionHeading>
    </div>

    <div className="mt-8">
      <Field
        id="test-card-personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-8 flex justify-center gap-4">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={ACTION_STYLE}>
          {action}
        </button>
      ))}
    </div>

    <div className="mt-16">
      <SectionHeading>Recent Breakdowns</SectionHeading>
    </div>
  </div>
);

const SectionHeading = ({ children }: SectionHeadingProps): JSX.Element => (
  <div className="flex items-center gap-2">
    <HiChevronUp aria-hidden size={22} className="shrink-0" />
    <h2 className="font-primary-black text-2xl">{children}</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div>
    <div className="flex items-center justify-between">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <HiOutlineInformationCircle
        aria-hidden
        size={18}
        className="text-[var(--DarkNeutral700)]"
      />
    </div>
    <input id={id} placeholder={placeholder} className={FIELD_STYLE} />
  </div>
);

interface SectionHeadingProps {
  children: React.ReactNode;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
