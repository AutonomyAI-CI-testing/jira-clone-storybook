import {
  HiChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const FIELDS = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file:",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

const actionButtonClassName =
  "w-[170px] rounded-md bg-[var(--Orange800)] px-6 py-4 text-[15px] text-[var(--Red400)] hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]";

const fieldInputClassName =
  "mt-3 w-full rounded border border-[var(--DarkNeutral500)] bg-transparent px-4 py-4 text-[15px] text-[var(--DarkNeutral1100)] placeholder:text-[var(--DarkNeutral700)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] px-10 py-10 font-primary text-[var(--DarkNeutral1100)]"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-bold text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[var(--DarkNeutral1100)]"
      >
        <HiOutlineCog size={24} />
      </button>
    </div>

    <div className="mt-6 flex items-center gap-3 text-[var(--DarkNeutral700)]">
      <HiChevronUp size={20} className="shrink-0" />
      <span className="truncate text-sm">From entire frame to a single</span>
    </div>

    <div className="mt-24 flex items-center gap-3">
      <HiChevronUp size={22} className="shrink-0" />
      <h3 className="font-primary-bold text-xl">Add New Design</h3>
    </div>

    <div className="mt-20 space-y-12">
      {FIELDS.map((field) => (
        <div key={field.id}>
          <div className="flex items-center gap-2">
            <label htmlFor={field.id} className="text-[15px]">
              {field.label}
            </label>
            <HiOutlineInformationCircle
              size={18}
              className="shrink-0 text-[var(--DarkNeutral700)]"
            />
          </div>
          <input
            id={field.id}
            name={field.id}
            type="text"
            placeholder={field.placeholder}
            className={fieldInputClassName}
          />
        </div>
      ))}
    </div>

    <div className="mt-12 flex gap-9">
      {ACTIONS.map((action) => (
        <button key={action} type="button" className={actionButtonClassName}>
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h3>
  </div>
);
