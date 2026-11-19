import { FiChevronUp, FiInfo, FiSettings } from "react-icons/fi";

/**
 * TestCard — a static rendering of the "UI magician Agent" panel from the Figma frame.
 *
 * Self-contained: it takes no props and holds no state, and nothing on it is wired up.
 * Colours are the ramp tokens declared on `:root` in `src/app/styles/app.css`, so the
 * panel keeps its own dark look whichever app theme is active.
 */
export const TestCard = (): JSX.Element => (
  <div
    id="testElem"
    className="w-[508px] bg-[var(--DarkNeutral0)] px-[42px] py-[40px] font-primary"
  >
    <div className="flex items-center justify-between">
      <h1 className="font-primary-bold text-xl text-[var(--DarkNeutral1000)]">
        UI magician Agent
      </h1>
      <button
        type="button"
        aria-label="Settings"
        className="flex items-center justify-center rounded p-1 text-[var(--DarkNeutral900)]"
      >
        <FiSettings size={26} aria-hidden="true" />
      </button>
    </div>

    <div className="mt-10 flex items-center gap-3">
      <Chevron className="text-[var(--DarkNeutral800)]" />
      <p className="truncate font-primary text-base text-[var(--DarkNeutral800)]">
        From entire frame to a singl...
      </p>
    </div>

    <div className="mt-[150px] flex items-center gap-3">
      <Chevron className="text-[var(--DarkNeutral1000)]" size={22} />
      <h2 className="font-primary-bold text-xl text-[var(--DarkNeutral1000)]">
        Add New Design
      </h2>
    </div>

    <Field label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxxxx" />

    <Field
      label="Design URL"
      placeholder="https://www.figma.com/file/"
      strong
      className="mt-10"
    />

    <div className="mt-14 flex gap-8">
      <ActionButton>Awesome</ActionButton>
      <ActionButton>Prepare</ActionButton>
    </div>

    <h2 className="mt-[70px] font-primary-bold text-xl text-[var(--DarkNeutral1000)]">
      Recent Breakdowns
    </h2>
  </div>
);

const Chevron = ({ size = 20, className }: ChevronProps): JSX.Element => (
  <FiChevronUp
    size={size}
    aria-hidden="true"
    className={`shrink-0 ${className}`}
  />
);

const Field = ({
  label,
  placeholder,
  strong = false,
  className = "mt-12",
}: FieldProps): JSX.Element => (
  <div className={className}>
    <div className="flex items-center gap-3">
      <span className="font-primary text-base text-[var(--DarkNeutral1000)]">
        {label}
      </span>
      <FiInfo
        size={18}
        aria-hidden="true"
        className="shrink-0 text-[var(--DarkNeutral1000)]"
      />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={`mt-7 h-[56px] w-full rounded-[6px] bg-[var(--DarkNeutral200)] px-6 font-primary text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--DarkNeutral700)] ${
        strong
          ? "border-2 border-[var(--DarkNeutral800)]"
          : "border border-[var(--DarkNeutral600)]"
      }`}
    />
  </div>
);

const ActionButton = ({ children }: { children: string }): JSX.Element => (
  <button
    type="button"
    className="h-[52px] flex-1 rounded-[8px] bg-[var(--Orange800)] font-primary-bold text-lg text-[var(--DarkNeutral900)]"
  >
    {children}
  </button>
);

interface ChevronProps {
  size?: number;
  className?: string;
}

interface FieldProps {
  label: string;
  placeholder: string;
  strong?: boolean;
  className?: string;
}
