import { FaChevronUp, FaCog } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";

const FIELD_CLASSES =
  "mt-2 w-full rounded-md bg-background-input p-3 font-primary-light text-sm text-font outline-2 outline-border placeholder:text-font-subtlest";

const ACTION_BUTTON_CLASSES =
  "rounded bg-background-danger-bold px-6 py-3 font-primary text-sm text-font-inverse hover:bg-background-danger-bold-hovered active:bg-background-danger-bold-pressed";

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-4 first:mt-0">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-sm text-font-subtle">
        {label}
      </label>
      <FiInfo className="shrink-0 text-font-subtle" size={14} />
    </div>
    <input id={id} className={FIELD_CLASSES} placeholder={placeholder} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-[420px] bg-elevation-surface p-6 font-primary-light text-font"
    >
      <div className="flex items-center justify-between">
        <h1 className="font-primary-bold text-lg">UI magician Agent</h1>
        <button
          type="button"
          aria-label="Settings"
          className="rounded p-1 text-icon-subtle hover:bg-background-neutral hover:text-icon"
        >
          <FaCog size={20} />
        </button>
      </div>

      <p className="mt-5 flex min-w-0 items-center gap-2 text-xs text-font-subtle">
        <FaChevronUp className="shrink-0" size={12} />
        <span className="truncate">From entire frame to a single component</span>
      </p>

      <h2 className="mt-16 flex items-center gap-2 font-primary-bold text-xl">
        <FaChevronUp className="shrink-0" size={14} />
        Add New Design
      </h2>

      <div className="mt-6">
        <Field
          id="testElem-token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxxx"
        />
        <Field
          id="testElem-url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      <div className="mt-8 flex gap-4">
        <button type="button" className={ACTION_BUTTON_CLASSES}>
          Awesome
        </button>
        <button type="button" className={ACTION_BUTTON_CLASSES}>
          Prepare
        </button>
      </div>

      <h2 className="mt-16 font-primary-bold text-xl text-font-subtle">
        Recent Breakdowns
      </h2>
    </div>
  );
};

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}
