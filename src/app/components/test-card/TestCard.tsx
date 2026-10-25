import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const ACTIONS = ["Awesome", "Prepare"] as const;

const FIELDS: TestFieldProps[] = [
  {
    id: "testElem-access-token",
    label: "Personal Access Token",
    placeholder: "figd_xxxxxxxxxxxxxxxxxxx",
  },
  {
    id: "testElem-design-url",
    label: "Design URL",
    placeholder: "https://www.figma.com/file/",
  },
];

/**
 * Static replica of the "UI magician Agent" panel from the Figma frame.
 * Self-contained smoke test: no props, no state, no interactivity.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] rounded-md bg-elevation-surface p-5 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <button
        type="button"
        aria-label="Settings"
        className="rounded p-1 text-font-subtle hover:bg-background-neutral-hovered active:bg-background-neutral-pressed"
      >
        <FiSettings className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>

    <div className="mt-8 flex items-center gap-3">
      <FiChevronUp
        className="h-5 w-5 shrink-0 text-font-subtle"
        aria-hidden="true"
      />
      <span className="text-lg text-font-subtle">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-20 flex items-center gap-3">
      <FiChevronUp className="h-7 w-7 shrink-0 text-font-subtle" aria-hidden="true" />
      <h3 className="font-primary-black text-2xl">Add New Design</h3>
    </div>

    <div className="mt-8 space-y-6">
      {FIELDS.map((field) => (
        <TestField key={field.id} {...field} />
      ))}
    </div>

    <div className="mt-10 flex gap-6">
      {ACTIONS.map((action) => (
        <button
          key={action}
          type="button"
          className="flex-1 rounded bg-[color:var(--Orange800)] py-3 text-lg hover:bg-[color:var(--Orange700)] active:bg-[color:var(--Orange900)]"
        >
          {action}
        </button>
      ))}
    </div>

    <h3 className="mt-16 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);

const TestField = ({ id, label, placeholder }: TestFieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <FiInfo className="h-5 w-5 text-font-subtle" aria-hidden="true" />
    </div>
    <input
      id={id}
      name={id}
      readOnly
      placeholder={placeholder}
      className="mt-3 w-full rounded border border-border-bold bg-transparent px-3 py-3 text-lg placeholder:text-font-subtlest"
    />
  </div>
);

interface TestFieldProps {
  id: string;
  label: string;
  placeholder: string;
}
