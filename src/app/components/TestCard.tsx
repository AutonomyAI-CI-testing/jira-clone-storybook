import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS = [
  {
    id: "testcard-personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testcard-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-light text-sm text-font">
        {label}
      </label>
      <FiInfo className="text-icon-subtle" aria-hidden />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded bg-elevation-surface-raised px-4 py-3 font-primary-light text-sm text-font outline outline-2 outline-border-bold placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex min-h-screen w-full max-w-[508px] flex-col bg-elevation-surface-sunken p-5 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-black text-xl text-font">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded p-1 text-icon-subtle hover:text-icon"
      >
        <FiSettings size={24} />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp className="shrink-0 text-icon-subtle" aria-hidden />
      <span className="truncate font-primary-light text-sm text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <section className="mt-[7.5rem] flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <FiChevronUp className="shrink-0 text-font" aria-hidden />
        <h2 className="font-primary-black text-xl text-font">Add New Design</h2>
      </div>

      {FIELDS.map((field) => (
        <Field key={field.id} {...field} />
      ))}

      <div className="flex gap-4">
        {ACTIONS.map((label) => (
          <button
            key={label}
            type="button"
            className="rounded-lg bg-[var(--Orange700)] px-6 py-3 font-primary-light text-base text-font-subtle"
          >
            {label}
          </button>
        ))}
      </div>
    </section>

    <h2 className="mt-24 font-primary-black text-xl text-font">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
