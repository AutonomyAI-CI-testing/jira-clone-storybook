import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELDS: FieldProps[] = [
  {
    id: "personal-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

const ACTIONS = ["Awesome", "Prepare"];

const Field = ({ id, label, placeholder }: FieldProps) => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-sm text-font-subtle">
        {label}
      </label>
      <FiInfo className="text-base text-icon-subtle" aria-hidden />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-2 w-full rounded border border-border bg-background-input px-4 py-4 font-primary text-sm text-font placeholder:text-font-subtlest"
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface p-6 font-primary text-font"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <FiSettings className="shrink-0 text-2xl text-icon-subtle" aria-hidden />
    </div>

    <div className="mt-4 flex items-center gap-2 text-font-subtlest">
      <FiChevronUp className="shrink-0 text-2xl" aria-hidden />
      <span className="font-primary-light text-base">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-32">
      <div className="flex items-center gap-2">
        <FiChevronUp className="text-2xl" aria-hidden />
        <h2 className="font-primary-black text-lg">Add New Design</h2>
      </div>

      <div className="mt-10 space-y-5">
        {FIELDS.map((field) => (
          <Field key={field.id} {...field} />
        ))}
      </div>

      <div className="mt-6 flex gap-8">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            className="rounded bg-background-danger-bold px-6 py-3 font-primary text-base text-font-inverse hover:bg-background-danger-bold-hovered active:bg-background-danger-bold-pressed"
          >
            {action}
          </button>
        ))}
      </div>
    </div>

    <h2 className="mt-32 font-primary-black text-lg">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
