import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASSES =
  "w-full rounded border border-border-bold bg-[var(--DarkNeutral200)] px-3 py-2.5 font-primary text-2xs text-font placeholder:text-font-subtlest";

const ACTION_BUTTON_CLASSES =
  "flex w-[85px] cursor-pointer items-center justify-center rounded bg-[var(--Orange800)] py-2.5 font-primary-bold text-2xs text-[color:var(--DarkNeutral800)]";

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[254px] bg-black px-5 py-5 font-primary text-font"
  >
    <div className="flex items-start justify-between">
      <h1 className="font-primary-bold text-xs text-font">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="cursor-pointer text-icon-subtle"
      >
        <FiSettings size={16} />
      </button>
    </div>

    <div className="mt-4 flex items-center gap-2">
      <FiChevronUp size={12} className="shrink-0 text-icon-subtle" />
      <span className="truncate text-2xs text-font-subtlest">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mt-20 flex items-center gap-2">
      <FiChevronUp size={12} className="shrink-0 text-icon-subtle" />
      <h2 className="font-primary-bold text-xs text-font">Add New Design</h2>
    </div>

    <div className="mt-7 space-y-3">
      <Field
        id="testElem-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="testElem-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="ml-6 mt-6 flex items-center gap-4">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-12 font-primary-bold text-xs text-font">
      Recent Breakdowns
    </h2>
  </div>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-2xs text-font-subtle">
        {label}
      </label>
      <FiInfo size={14} className="shrink-0 text-icon-subtle" />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={FIELD_CLASSES}
    />
  </div>
);

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button type="button" className={ACTION_BUTTON_CLASSES}>
    {children}
  </button>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface ActionButtonProps {
  children: React.ReactNode;
}
