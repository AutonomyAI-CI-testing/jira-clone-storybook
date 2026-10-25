import cx from "classix";

/**
 * Smoke-test card: a static reproduction of the "UI magician Agent" Figma frame.
 * Self-contained — no props, no state, no data.
 */

const FIELDS = [
  {
    id: "test-card-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

const BUTTON_CLASS =
  "w-[170px] rounded-md bg-[var(--Orange800)] py-2.5 text-lg text-[var(--DarkNeutral1100)]";

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col rounded-md bg-[var(--DarkNeutral100)] px-10 py-8 font-primary text-[var(--DarkNeutral1100)]"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-black text-2xl">UI magician Agent</h1>
        <SettingsIcon className="h-6 w-6" />
      </div>

      <div className="mt-6">
        <SectionRow label="From entire frame to a single component" />
      </div>

      <div className="mt-16">
        <SectionRow label="Add New Design" emphasis />
      </div>

      <div className="mt-8 flex flex-col gap-5">
        {FIELDS.map((field) => (
          <Field key={field.id} {...field} />
        ))}
      </div>

      <div className="mt-12 flex justify-end gap-8">
        {ACTIONS.map((action) => (
          <button key={action} type="button" className={BUTTON_CLASS}>
            {action}
          </button>
        ))}
      </div>

      <h2 className="mt-20 font-primary-black text-xl">Recent Breakdowns</h2>
    </div>
  );
};

const SectionRow = ({
  label,
  emphasis = false,
}: SectionRowProps): JSX.Element => (
  <div className="flex items-center gap-3">
    <ChevronUpIcon className="h-5 w-5 shrink-0" />
    <span
      className={cx("min-w-0 truncate", emphasis && "font-primary-black text-xl")}
    >
      {label}
    </span>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-3">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <InfoIcon className="h-5 w-5" />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="h-[62px] rounded border border-[var(--DarkNeutral400)] bg-transparent px-5 text-base text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral800)]"
    />
  </div>
);

const SettingsIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const ChevronUpIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="m6 15 6-6 6 6" />
  </svg>
);

const InfoIcon = ({ className }: IconProps): JSX.Element => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

interface IconProps {
  className?: string;
}

interface SectionRowProps {
  label: string;
  emphasis?: boolean;
}

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
