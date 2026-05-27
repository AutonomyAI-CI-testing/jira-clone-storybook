import cx from "classix";

// Input field with label and optional info button
interface LabeledInputProps {
  label: string;
  type: "text" | "password";
  placeholder: string;
  marginBottom?: string;
}

const LabeledInput = ({
  label,
  type,
  placeholder,
  marginBottom = "mb-4",
}: LabeledInputProps): JSX.Element => {
  const inputClasses = cx(
    "w-full rounded border border-border bg-background-input px-3 py-2",
    "text-xs text-font-subtle placeholder-font-subtlest",
    "focus-visible:bg-background-input-hovered focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-border-focused",
    "dark:border-[var(--DarkNeutral400)] dark:bg-[var(--DarkNeutral200)] dark:text-[var(--DarkNeutral900)] dark:placeholder-[var(--DarkNeutral600)] dark:focus-visible:bg-[var(--DarkNeutral250)] dark:focus-visible:ring-[var(--Blue400)]"
  );

  return (
    <div className={marginBottom}>
      <div className="mb-2 flex items-center gap-2">
        <label className="text-xs font-semibold text-font-subtlest dark:text-[var(--DarkNeutral700)]">
          {label}
        </label>
        <button
          type="button"
          className="flex h-4 w-4 items-center justify-center rounded-full border border-border text-xs text-icon-subtle hover:bg-background-neutral dark:border-[var(--DarkNeutral400)] dark:text-[var(--DarkNeutral700)] dark:hover:bg-[var(--DarkNeutral300)]"
          aria-label={`${label} info`}
        >
          ⓘ
        </button>
      </div>
      <input type={type} placeholder={placeholder} className={inputClasses} />
    </div>
  );
};

// Action button with brown color scheme
interface ActionButtonProps {
  label: string;
  color: "primary" | "secondary";
}

const ActionButton = ({ label, color }: ActionButtonProps): JSX.Element => {
  const colorClasses =
    color === "primary"
      ? "bg-[#8B5A3C] hover:bg-[#7A4F33] active:bg-[#9A6B48]"
      : "bg-[#9A6B48] hover:bg-[#8B5A3C] active:bg-[#AB7C59]";

  return (
    <button
      type="button"
      className={cx(
        "flex-1 rounded py-2 text-xs font-semibold",
        "text-font-inverse",
        colorClasses
      )}
    >
      {label}
    </button>
  );
};

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] rounded-lg bg-elevation-surface-sunken p-5 dark:bg-[var(--DarkNeutral0)]">
      {/* Header with title and settings button */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm font-semibold text-font-subtle dark:text-[var(--DarkNeutral800)]">
          UI magician Agent
        </h1>
        <button
          type="button"
          className="flex h-5 w-5 items-center justify-center rounded bg-background-neutral text-xs text-icon-subtle hover:bg-background-neutral-hovered dark:bg-[var(--DarkNeutral300)] dark:text-[var(--DarkNeutral700)]"
          aria-label="Settings"
        >
          ⚙
        </button>
      </div>

      {/* Collapsible task item */}
      <div className="mb-6">
        <button
          type="button"
          className="flex w-full items-center justify-between py-2 text-left"
          aria-label="Toggle task details"
        >
          <span className="text-xs font-semibold text-font-subtlest dark:text-[var(--DarkNeutral700)]">
            From entire frame to a singl...
          </span>
          <span className="text-xs text-font-subtlest dark:text-[var(--DarkNeutral700)]">
            ▲
          </span>
        </button>
      </div>

      {/* Section header for adding new design */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xs font-semibold text-font-subtle dark:text-[var(--DarkNeutral800)]">
          Add New Design
        </h2>
        <span className="text-xs text-font-subtlest dark:text-[var(--DarkNeutral700)]">
          ▶
        </span>
      </div>

      {/* Input fields for token and design URL */}
      <LabeledInput
        label="Personal Access Token"
        type="password"
        placeholder="Enter your token..."
      />
      <LabeledInput
        label="Design URL"
        type="text"
        placeholder="https://figma.com/..."
        marginBottom="mb-6"
      />

      {/* Action buttons with brown tones */}
      <div className="mb-6 flex gap-2">
        <ActionButton label="Awesome" color="primary" />
        <ActionButton label="Prepare" color="secondary" />
      </div>

      {/* Recent Breakdowns section */}
      <div className="border-t border-border pt-4 dark:border-[var(--DarkNeutral400)]">
        <p className="text-xs font-semibold text-font-subtlest dark:text-[var(--DarkNeutral700)]">
          Recent Breakdowns
        </p>
      </div>

      {/* Copyright footer */}
      <div className="border-gray-300 border-t pt-3 dark:border-[var(--DarkNeutral400)]">
        <p className="text-center text-xs font-semibold text-font-subtlest dark:text-[var(--DarkNeutral700)]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
