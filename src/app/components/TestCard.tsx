import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const FIELDS: FieldProps[] = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

function Field({ id, label, placeholder }: FieldProps): JSX.Element {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <label
          htmlFor={id}
          className="font-primary text-sm text-[color:var(--DarkNeutral1000)]"
        >
          {label}
        </label>
        <HiOutlineInformationCircle
          aria-hidden
          size={18}
          className="text-[color:var(--DarkNeutral800)]"
        />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="h-11 w-full rounded border border-[color:var(--DarkNeutral500)] bg-[color:var(--DarkNeutral200)] px-3 font-primary-light text-sm text-[color:var(--DarkNeutral1000)] placeholder:text-[color:var(--DarkNeutral700)]"
      />
    </div>
  );
}

export function TestCard(): JSX.Element {
  return (
    <div
      id="testElem"
      className="flex w-[508px] flex-col bg-[color:var(--DarkNeutral-100)] p-6 font-primary text-[color:var(--DarkNeutral1000)]"
    >
      <div className="flex items-center justify-between">
        <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
        <HiOutlineCog
          aria-hidden
          size={24}
          className="text-[color:var(--DarkNeutral900)]"
        />
      </div>

      <div className="mt-3 flex items-center gap-2">
        <HiChevronUp
          aria-hidden
          size={18}
          className="text-[color:var(--DarkNeutral800)]"
        />
        <span className="max-w-[280px] truncate font-primary-light text-sm text-[color:var(--DarkNeutral700)]">
          From entire frame to a single component
        </span>
      </div>

      <div className="mt-16 flex items-center gap-2">
        <HiChevronUp
          aria-hidden
          size={24}
          className="text-[color:var(--DarkNeutral1100)]"
        />
        <h3 className="font-primary-bold text-2xl">Add New Design</h3>
      </div>

      <div className="mt-8 flex flex-col gap-5">
        {FIELDS.map((field) => (
          <Field key={field.id} {...field} />
        ))}
      </div>

      <div className="mt-8 flex gap-4">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="rounded bg-[color:var(--Orange800)] px-6 py-3 font-primary text-base text-white"
          >
            {action}
          </button>
        ))}
      </div>

      <h3 className="mt-16 font-primary-bold text-xl text-[color:var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h3>
    </div>
  );
}
