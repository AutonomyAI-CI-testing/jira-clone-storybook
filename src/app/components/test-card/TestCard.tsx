import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

const FIELD_CLASSES =
  "rounded border border-border-bold bg-background-input p-3 text-font placeholder:text-font-subtlest";

const ACTION_CLASSES =
  "rounded bg-[color:var(--Orange800)] px-8 py-2 text-font-inverse hover:bg-[color:var(--Orange700)] active:bg-[color:var(--Orange900)]";

const ACTION_LABELS = ["Awesome", "Prepare"];

const InfoIcon = (): JSX.Element => (
  <span aria-hidden="true" className="flex text-font-subtle">
    <FiInfo size={16} />
  </span>
);

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary-light text-sm text-font-subtle">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      id={id}
      readOnly
      placeholder={placeholder}
      className={FIELD_CLASSES}
    />
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col gap-6 rounded-md bg-elevation-surface p-6 text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-black text-xl">UI magician Agent</h1>
      <button
        type="button"
        aria-label="Settings"
        className="rounded-full p-1 text-font-subtle hover:bg-background-neutral hover:text-font"
      >
        <FiSettings size={20} />
      </button>
    </div>

    <div className="flex items-center gap-2 text-font-subtlest">
      <FiChevronUp size={16} />
      <span className="font-primary-light text-sm">
        From entire frame to a singl…
      </span>
    </div>

    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <FiChevronUp size={20} />
        <h2 className="font-primary-black text-2xl">Add New Design</h2>
      </div>

      <Field
        id="test-card-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="flex gap-4">
        {ACTION_LABELS.map((label) => (
          <button key={label} type="button" className={ACTION_CLASSES}>
            {label}
          </button>
        ))}
      </div>
    </div>

    <h2 className="font-primary-black text-2xl">Recent Breakdowns</h2>
  </div>
);
