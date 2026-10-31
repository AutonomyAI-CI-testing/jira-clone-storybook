import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * Static replica of the "UI magician Agent" Figma panel.
 *
 * Presentational and self-contained: no props, no state, no event handlers.
 * Colours come from the raw palette ramps declared in `styles/app.css` rather
 * than the semantic tokens, because no semantic token expresses a dark surface
 * with an orange accent.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral100)] px-10 py-10 font-primary"
  >
    {/* Title row */}
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-primary-bold text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <span aria-hidden="true" className="text-[var(--DarkNeutral1100)]">
        <FiSettings size={22} />
      </span>
    </div>

    {/* Collapsed summary */}
    <div className="mt-4 flex items-center gap-3 text-[var(--Neutral500)]">
      <span aria-hidden="true">
        <FiChevronUp size={18} />
      </span>
      <span className="text-base">From entire frame to a singl...</span>
    </div>

    {/* Add New Design */}
    <div className="mt-44 flex items-center gap-3">
      <span aria-hidden="true" className="text-[var(--DarkNeutral1100)]">
        <FiChevronUp size={22} />
      </span>
      <h2 className="text-2xl font-primary-bold text-[var(--DarkNeutral1100)]">
        Add New Design
      </h2>
    </div>

    <Field
      id="testElem-token"
      label="Personal Access Token"
      placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      className="mt-16"
    />
    <Field
      id="testElem-url"
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      className="mt-12"
    />

    {/* Actions */}
    <div className="mt-14 flex justify-center gap-9">
      <PanelButton>Awesome</PanelButton>
      <PanelButton>Prepare</PanelButton>
    </div>

    {/* Recent Breakdowns */}
    <h2 className="mt-24 text-2xl font-primary-bold text-[var(--DarkNeutral1100)]">
      Recent Breakdowns
    </h2>
  </div>
);

interface FieldProps {
  id: string;
  label: string;
  placeholder: string;
  className?: string;
}

const Field = ({
  id,
  label,
  placeholder,
  className,
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-5">
      <label htmlFor={id} className="text-base text-[var(--DarkNeutral900)]">
        {label}
      </label>
      <span aria-hidden="true" className="text-[var(--DarkNeutral900)]">
        <FiInfo size={18} />
      </span>
    </div>
    <input
      id={id}
      name={id}
      type="text"
      placeholder={placeholder}
      className="mt-6 h-16 w-full rounded border border-[var(--DarkNeutral500)] bg-[var(--DarkNeutral200)] px-8 text-lg text-[var(--DarkNeutral1100)] placeholder:text-[var(--Neutral500)]"
    />
  </div>
);

interface PanelButtonProps {
  children: React.ReactNode;
}

const PanelButton = ({ children }: PanelButtonProps): JSX.Element => (
  <button
    type="button"
    className="h-[70px] w-[170px] rounded-md bg-[var(--Orange800)] text-xl text-[var(--Orange300)] hover:bg-[var(--Orange700)] active:bg-[var(--Orange900)]"
  >
    {children}
  </button>
);
