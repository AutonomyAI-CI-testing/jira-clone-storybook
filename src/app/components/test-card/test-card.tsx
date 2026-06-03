/**
 * Sub-component for form input fields with labels.
 * Used for consistent styling and layout of text inputs.
 */
const FormInput = ({
  id,
  label,
  placeholder,
}: {
  id: string;
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div className="flex flex-col">
    <label htmlFor={id} className="mb-2 text-sm text-font-subtle">
      {label}
    </label>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="rounded-md border border-border-input bg-background-input p-2 text-sm text-font placeholder:text-font-subtlest focus:outline-2 focus:outline-offset-0 focus:outline-border-brand"
    />
  </div>
);

/**
 * Sub-component for action buttons with styling.
 * Supports primary (brand) and secondary (warning) button styles.
 */
const ActionButton = ({
  label,
  variant = "primary",
}: {
  label: string;
  variant?: "primary" | "secondary";
}): JSX.Element => {
  const baseClasses =
    "flex-1 rounded-md px-4 py-2 font-primary text-font-inverse active:";
  const variantClasses =
    variant === "primary"
      ? "bg-background-brand-bold hover:bg-background-brand-bold-hovered active:bg-background-brand-bold-pressed"
      : "bg-background-warning-bold hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed";

  return <button className={`${baseClasses}${variantClasses}`}>{label}</button>;
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen w-full flex-col bg-elevation-surface-sunken p-6"
    >
      {/* Header with title and settings button */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-primary-bold text-2xl text-font-inverse">
          UI magician Agent
        </h1>
        <button className="flex h-10 w-10 items-center justify-center rounded-md bg-background-neutral-bold text-font-inverse hover:bg-background-neutral-bold-hovered">
          ⚙️
        </button>
      </div>

      {/* Collapsible section for design frame metadata */}
      <div className="mb-6 rounded-md bg-elevation-surface-raised p-4">
        <button className="flex w-full items-center justify-between text-left text-font-subtle">
          <span className="font-primary">From entire frame to a singl...</span>
          <span>▼</span>
        </button>
      </div>

      {/* Section header for form content */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-primary text-lg text-font-subtle">
          Add New Design
        </h2>
        <span className="text-font-subtlest">›</span>
      </div>

      {/* Form for design configuration with token and URL inputs */}
      <div className="mb-6 space-y-4">
        <FormInput
          id="pat"
          label="Personal Access Token"
          placeholder="Enter token..."
        />
        <FormInput
          id="url"
          label="Design URL"
          placeholder="Paste design URL..."
        />
      </div>

      {/* Primary action buttons: Awesome (primary) and Prepare (secondary) */}
      <div className="mb-8 flex gap-4">
        <ActionButton label="Awesome" variant="primary" />
        <ActionButton label="Prepare" variant="secondary" />
      </div>

      {/* Recent breakdowns section header */}
      <div>
        <h3 className="text-sm text-font-subtle">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
