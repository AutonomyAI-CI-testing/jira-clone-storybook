import { FaChevronUp, FaCog, FaInfoCircle } from "react-icons/fa";

/**
 * Static reproduction of the "UI magician Agent" panel from the Figma frame.
 * Self-contained smoke test: no props, no state, nothing wired up.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="flex w-full max-w-[508px] flex-col bg-elevation-surface px-10 py-10 font-primary text-font"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <FaCog aria-hidden className="shrink-0 text-icon" size={28} />
    </div>

    <div className="mt-9 flex items-center gap-3">
      <FaChevronUp aria-hidden className="shrink-0 text-icon" size={18} />
      <span className="truncate font-primary-light text-lg text-font-subtle">
        From entire frame to a singl...
      </span>
    </div>

    <div className="mb-8 mt-40 flex items-center gap-3">
      <FaChevronUp aria-hidden className="shrink-0 text-icon" size={22} />
      <h2 className="font-primary-bold text-2xl">Add New Design</h2>
    </div>

    <Field
      id="test-card-personal-access-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxx"
    />
    <Field
      id="test-card-design-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
    />

    <div className="mt-14 flex flex-wrap justify-center gap-6">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-20 font-primary-bold text-2xl">Recent Breakdowns</h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
}

const Field = ({ id, label, placeholder }: FieldProps): JSX.Element => (
  <div className="mt-8">
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <FaInfoCircle aria-hidden className="shrink-0 text-icon" size={18} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="mt-6 h-[67px] w-full rounded-md border border-border-bold bg-background-input px-4 font-primary-light text-lg text-font placeholder:text-font-subtlest hover:bg-background-input-hovered"
    />
  </div>
);

interface ActionButtonProps {
  children: string;
}

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[70px] w-[168px] rounded-md bg-[var(--Orange800)] font-primary-bold text-lg text-white transition-colors duration-200 hover:bg-[var(--Orange700)]"
  >
    {children}
  </button>
);
