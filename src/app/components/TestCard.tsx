import {
  HiOutlineChevronUp,
  HiOutlineCog,
  HiOutlineInformationCircle,
} from "react-icons/hi";

const fields = [
  {
    id: "test-card-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "test-card-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const actions = ["Awesome", "Prepare"];

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-10 font-primary text-font"
  >
    <div className="flex items-center">
      <h2 className="text-lg font-primary-bold">UI magician Agent</h2>
      <HiOutlineCog
        role="img"
        aria-label="Settings"
        className="ml-auto text-xl text-icon-subtle"
      />
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtle">
      <HiOutlineChevronUp aria-hidden="true" className="shrink-0" />
      <span className="truncate text-sm">
        From entire frame to a single design
      </span>
    </div>

    <div className="mt-16 flex items-center gap-2">
      <HiOutlineChevronUp aria-hidden="true" />
      <h3 className="text-lg font-primary-bold">Add New Design</h3>
    </div>

    <div className="mt-10 flex flex-col gap-6">
      {fields.map((field) => (
        <div key={field.id} className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <label htmlFor={field.id} className="text-sm text-font-subtle">
              {field.label}
            </label>
            <HiOutlineInformationCircle
              role="img"
              aria-label={`About ${field.label}`}
              className="text-font-subtle"
            />
          </div>
          <input
            id={field.id}
            type="text"
            placeholder={field.placeholder}
            className="w-full rounded-md border border-border-bold bg-background-input p-3 text-font placeholder:text-font-subtlest"
          />
        </div>
      ))}
    </div>

    <div className="mt-12 flex gap-4">
      {actions.map((action) => (
        <button
          key={action}
          type="button"
          className="rounded bg-[var(--Orange800)] px-10 py-3 text-font hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]"
        >
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-24 text-lg font-primary-bold">Recent Breakdowns</h3>
  </div>
);
