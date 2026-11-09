import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Smoke-test component: a static reproduction of the attached Figma panel.
 * Self-contained — it takes no props and holds no state.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="dark w-[508px] bg-elevation-surface px-10 pb-40 pt-9 font-primary text-font"
  >
    <div className="flex items-start justify-between gap-4">
      <h1 className="font-primary-bold text-2xl">UI magician Agent</h1>
      <FiSettings aria-hidden="true" size={24} className="shrink-0" />
    </div>

    <div className="mt-7 flex items-center gap-3 text-font-subtle">
      <FiChevronUp aria-hidden="true" size={20} className="shrink-0" />
      <span className="min-w-0 flex-1 truncate text-base">
        From entire frame to a single design
      </span>
    </div>

    <div className="mt-16 flex items-center gap-3">
      <FiChevronUp aria-hidden="true" size={24} className="shrink-0" />
      <h2 className="font-primary-bold text-xl">Add New Design</h2>
    </div>

    <div className="mt-8">
      <LabeledField
        id="test-card-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
      />
    </div>

    <div className="mt-6">
      <LabeledField
        id="test-card-design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />
    </div>

    <div className="mt-10 flex gap-6">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    <h2 className="mt-16 font-primary-bold text-xl">Recent Breakdowns</h2>
  </div>
);

const LabeledField = ({
  id,
  label,
  placeholder,
}: LabeledFieldProps): JSX.Element => (
  <div>
    <div className="flex items-center gap-3">
      <label htmlFor={id} className="text-base">
        {label}
      </label>
      <FiInfo aria-hidden="true" size={18} className="shrink-0" />
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="mt-3 h-16 w-full rounded border border-border-bold bg-background-input px-6 text-base text-font placeholder:text-font-subtlest"
    />
  </div>
);

const PanelButton = ({ children }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-14 w-[130px] rounded-lg bg-[color:var(--Orange800)] font-primary-bold text-base text-[color:var(--DarkNeutral1000)]"
  >
    {children}
  </button>
);

interface LabeledFieldProps {
  id: string;
  label: string;
  placeholder: string;
}

interface PanelButtonProps {
  children: React.ReactNode;
}
