import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

// The frame's button fill has no matching design token in this repo (the closest is
// --Orange800, a visibly different shade), so this one value is a literal taken from the design.
const ACTION_BUTTON_CLASS =
  "flex-1 rounded-lg bg-[#a34a2b] px-8 py-4 text-lg text-[#b9b9b9] hover:opacity-90";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[400px] flex-col gap-6 rounded-md bg-elevation-surface p-6 text-font"
  >
    <div className="flex items-center justify-between">
      <h3 className="font-primary-bold text-xl">UI magician Agent</h3>
      <button
        type="button"
        aria-label="Open settings"
        className="rounded p-1 text-font-subtle hover:bg-background-neutral"
      >
        <FiSettings size={20} />
      </button>
    </div>

    <div className="flex items-center gap-2 text-font-subtle">
      <FiChevronUp size={16} className="shrink-0" />
      <span className="truncate font-primary-light text-sm">
        From entire frame to a single design
      </span>
    </div>

    <div className="flex items-center gap-2">
      <FiChevronUp size={20} className="shrink-0" />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <Field
      id="personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="flex gap-4">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h2 className="font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-light text-sm">
        {label}
      </label>
      <FiInfo size={16} className="shrink-0 text-font-subtle" aria-hidden />
    </div>
    <input
      id={id}
      name={id}
      placeholder={placeholder}
      className="w-full rounded-md border border-border-bold bg-background-input p-3 text-font placeholder:text-font-subtle"
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
