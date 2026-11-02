import cx from "classix";

/**
 * Smoke-test reproduction of the "UI magician Agent" Figma frame.
 * Self-contained: no props, no state, static markup only.
 *
 * The frame is a fixed dark panel with orange actions, so it names the raw
 * palette values declared on :root in `src/app/styles/app.css` rather than the
 * theme-agnostic semantic tokens (which would resolve blue-on-white under the
 * app's light theme).
 */

const iconProps = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const ChevronUpIcon = () => (
  <svg {...iconProps} className="h-5 w-5 shrink-0">
    <path d="M6 15l6-6 6 6" />
  </svg>
);

const InfoIcon = () => (
  <svg {...iconProps} className="h-5 w-5 shrink-0">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
);

const GearIcon = () => (
  <svg {...iconProps} className="h-5 w-5">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

interface FieldProps {
  label: string;
  placeholder: string;
  className?: string;
}

const Field = ({ label, placeholder, className }: FieldProps) => (
  <label className={cx("flex flex-col", className)}>
    <span className="flex items-center gap-3 font-primary text-base text-[var(--DarkNeutral1000)]">
      {label}
      <InfoIcon />
    </span>
    <input
      type="text"
      placeholder={placeholder}
      className="mt-4 w-full rounded-none border border-[var(--Neutral500)] bg-[var(--DarkNeutral250)] p-3.5 font-primary text-base text-[var(--DarkNeutral1000)] placeholder:text-[var(--Neutral500)]"
    />
  </label>
);

const SectionHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h2
    className={cx(
      "flex items-center gap-3 font-primary text-lg text-[var(--DarkNeutral1100)]",
      className
    )}
  >
    <ChevronUpIcon />
    {children}
  </h2>
);

const PanelButton = ({ children }: { children: React.ReactNode }) => (
  <button
    type="button"
    className="w-[170px] rounded-lg bg-[var(--Orange800)] py-3.5 font-primary-bold text-lg text-[var(--DarkNeutral1000)] hover:bg-[var(--Orange700)]"
  >
    {children}
  </button>
);

export const TestCard = () => (
  <div
    id="testElem"
    className="flex w-[508px] flex-col bg-[var(--DarkNeutral100)] text-[var(--DarkNeutral1000)]"
  >
    <div className="flex items-center justify-between bg-[var(--DarkNeutral0)] px-8 py-5">
      <h1 className="font-primary-bold text-lg text-[var(--DarkNeutral1100)]">
        UI magician Agent
      </h1>
      <button type="button" aria-label="Open settings">
        <GearIcon />
      </button>
    </div>

    <div className="flex flex-col px-8 pb-10 pt-6">
      <p className="flex items-center gap-3 font-primary-light text-base text-[var(--DarkNeutral900)]">
        <ChevronUpIcon />
        From entire frame to a singl...
      </p>

      <SectionHeading className="mt-24">Add New Design</SectionHeading>

      <Field
        className="mt-10"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxxx"
      />
      <Field
        className="mt-8"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
      />

      <div className="mt-10 flex justify-center gap-10">
        <PanelButton>Awesome</PanelButton>
        <PanelButton>Prepare</PanelButton>
      </div>

      <h2 className="mt-24 font-primary-bold text-lg text-[var(--DarkNeutral1100)]">
        Recent Breakdowns
      </h2>
    </div>
  </div>
);
