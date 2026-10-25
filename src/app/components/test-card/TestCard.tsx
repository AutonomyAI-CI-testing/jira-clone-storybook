import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

const ACTION_BUTTON_CLASS =
  "rounded-md bg-[var(--Orange800)] px-6 py-3 font-primary text-base text-font";

const INPUT_CLASS =
  "mt-2 w-full rounded-md border border-border bg-background-input p-3 font-primary-light text-sm text-font placeholder:text-font-subtlest";

const Field = ({
  id,
  label,
  placeholder,
  className = "",
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="font-primary text-sm text-font-subtle">
        {label}
      </label>
      <FaInfoCircle
        aria-hidden
        className="shrink-0 text-icon-subtle"
        size={14}
      />
    </div>
    <input
      id={id}
      type="text"
      readOnly
      placeholder={placeholder}
      className={INPUT_CLASS}
    />
  </div>
);

export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[440px] bg-elevation-surface-sunken p-6 text-font"
  >
    <div className="flex items-start justify-between">
      <h2 className="font-primary-black text-xl">UI magician Agent</h2>
      <FaCog aria-hidden className="mt-1 shrink-0 text-icon-subtle" size={18} />
    </div>

    <div className="mt-6 flex items-center gap-2 text-font-subtle">
      <FaChevronUp aria-hidden className="shrink-0" size={12} />
      <span className="font-primary-light text-sm">
        From entire frame to a singl…
      </span>
    </div>

    <div className="mt-10 flex items-center gap-2">
      <FaChevronUp aria-hidden className="shrink-0" size={16} />
      <h3 className="font-primary-black text-2xl">Add New Design</h3>
    </div>

    <Field
      id="test-card-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-6"
    />

    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-5"
    />

    <div className="mt-6 flex gap-4">
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Awesome
      </button>
      <button type="button" className={ACTION_BUTTON_CLASS}>
        Prepare
      </button>
    </div>

    <h3 className="mt-10 font-primary-black text-2xl">Recent Breakdowns</h3>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}
