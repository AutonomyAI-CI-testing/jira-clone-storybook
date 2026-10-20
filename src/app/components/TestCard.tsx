import {
  RiArrowUpSLine,
  RiInformationLine,
  RiSettings3Line,
} from "react-icons/ri";

const fields = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const actions = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-10 pb-24 pt-10 font-primary text-base text-[var(--DarkNeutral900)]"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Open settings"
        className="text-[var(--DarkNeutral1100)] hover:text-[var(--DarkNeutral1000)]"
      >
        <RiSettings3Line size={26} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-12 flex items-center gap-3">
      <RiArrowUpSLine size={24} aria-hidden="true" />
      <span>From entire frame to a singl...</span>
    </div>

    <h2 className="mt-40 flex items-center gap-3 font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
      <RiArrowUpSLine size={24} aria-hidden="true" />
      Add New Design
    </h2>

    {fields.map(({ id, label, placeholder }) => (
      <div key={id}>
        <div className="mt-12 flex items-center gap-3 text-[var(--DarkNeutral1000)]">
          <label htmlFor={id}>{label}</label>
          <RiInformationLine size={22} aria-hidden="true" />
        </div>
        <input
          id={id}
          placeholder={placeholder}
          className="mt-4 w-full rounded-md border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-4 py-4 text-[var(--DarkNeutral1000)] outline-none placeholder:text-[var(--DarkNeutral600)]"
        />
      </div>
    ))}

    <div className="mt-10 flex justify-center gap-9">
      {actions.map((action) => (
        <button
          key={action}
          type="button"
          className="w-[168px] rounded bg-[var(--Orange800)] py-5 text-lg text-[var(--DarkNeutral700)] hover:bg-[var(--Orange900)] active:bg-[var(--Orange1000)]"
        >
          {action}
        </button>
      ))}
    </div>

    <h2 className="mt-24 font-primary-bold text-xl text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);
