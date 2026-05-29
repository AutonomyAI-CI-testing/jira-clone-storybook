// Info icon used throughout the form for help indicators
const InfoIcon = (): JSX.Element => (
  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-border text-xs text-font-subtlest">
    i
  </span>
);

// Reusable form field label with optional info icon
const FormFieldLabel = ({ label }: { label: string }): JSX.Element => (
  <div className="mb-2 flex items-center gap-1">
    <label className="text-sm font-primary text-font-subtle">{label}</label>
    <InfoIcon />
  </div>
);

// Read-only input field for displaying form values
const ReadOnlyInput = ({
  type,
  value,
}: {
  type: string;
  value: string;
}): JSX.Element => (
  <input
    type={type}
    value={value}
    readOnly
    className="w-full rounded border border-border bg-background-input px-3 py-2 text-sm text-font placeholder-font-subtlest focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-brand"
  />
);

// Collapsible section header with expand/collapse indicator
const CollapsibleHeader = ({
  isExpanded,
  title,
}: {
  isExpanded: boolean;
  title: string;
}): JSX.Element => (
  <div className="mb-2 flex items-center gap-1">
    <span className="text-sm">{isExpanded ? "▼" : "▶"}</span>
    <span className="text-sm font-primary text-font-subtle">{title}</span>
  </div>
);

// Action button with warning/primary style
const ActionButton = ({ label }: { label: string }): JSX.Element => (
  <button className="rounded bg-background-warning-bold px-4 py-2 text-sm font-primary-bold text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed">
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="w-full max-w-2xl rounded-lg bg-elevation-surface p-6 text-font shadow-lg"
    >
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
        <h1 className="text-xl font-primary-bold text-font">
          UI magician Agent
        </h1>
        <button className="flex h-8 w-8 items-center justify-center rounded bg-background-neutral text-font hover:bg-background-neutral-hovered">
          ⚙️
        </button>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-4 border-b border-border pb-4">
        <button className="flex w-full items-center gap-2 py-2 text-left text-font hover:text-font-brand">
          <CollapsibleHeader isExpanded={true} title="From entire frame to a singl..." />
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-6 border-b border-border pb-6">
        <button className="mb-4 flex w-full items-center gap-2 py-2 text-left">
          <span className="text-sm">▶</span>
          <span className="font-primary-bold text-font">Add New Design</span>
        </button>

        {/* Form Fields */}
        <div className="space-y-4 pl-6">
          {/* Personal Access Token Field */}
          <div>
            <FormFieldLabel label="Personal Access Token" />
            <ReadOnlyInput type="password" value="figd_xxxxxxxxxxxxxxxxx" />
          </div>

          {/* Design URL Field */}
          <div>
            <FormFieldLabel label="Design URL" />
            <ReadOnlyInput type="text" value="https://www.figma.com/file/:" />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mb-6 flex gap-3">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent Breakdowns Section */}
      <div className="pt-4 border-t border-border">
        <h2 className="text-sm font-primary-bold text-font">
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
