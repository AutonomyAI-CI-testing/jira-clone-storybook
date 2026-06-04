// Button styles for primary action buttons
const BUTTON_STYLES =
  "flex-1 rounded bg-[#d97008] px-6 py-3 text-center font-primary text-font-inverse transition-colors hover:bg-[#b65c02] active:bg-[#974f0c]";

// Helper component for form field with label and info icon
const FormField = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}): JSX.Element => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <label className="text-lg text-font">{label}</label>
      <div className="flex h-6 w-6 items-center justify-center rounded-full border border-font-subtle text-xs text-font-subtle">
        ℹ
      </div>
    </div>
    {children}
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen bg-elevation-surface-sunken p-8">
      <div className="mx-auto max-w-2xl space-y-8">
        {/* Page header with settings icon */}
        <div className="flex items-center justify-between">
          <h1 className="font-primary-bold text-3xl text-font">
            UI magician Agent
          </h1>
          <div className="text-2xl text-font-subtle">⚙️</div>
        </div>

        {/* Collapsible section showing workflow description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-lg text-font-subtle">
            <span>⌃</span>
            <span>From entire frame to a singl...</span>
          </div>
        </div>

        {/* Add New Design Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-lg">⌃</span>
            <h2 className="font-primary-bold text-2xl text-font">
              Add New Design
            </h2>
          </div>

          {/* Personal Access Token field for Figma authentication */}
          <FormField label="Personal Access Token">
            <input
              type="password"
              placeholder="figd_xxxxxxxxxxxxxx"
              className="w-full border border-border-bold bg-elevation-surface-sunken px-4 py-3 text-font placeholder-font-subtle focus-visible:outline-none"
            />
          </FormField>

          {/* Design URL field for linking Figma design file */}
          <FormField label="Design URL">
            <input
              type="text"
              placeholder="https://www.figma.com/file/:"
              className="w-full border border-border-bold bg-elevation-surface-sunken px-4 py-3 text-font placeholder-font-subtle focus-visible:outline-none"
            />
          </FormField>

          {/* Primary action buttons for form submission */}
          <div className="flex gap-4 pt-4">
            <button className={BUTTON_STYLES}>Awesome</button>
            <button className={BUTTON_STYLES}>Prepare</button>
          </div>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="space-y-4">
          <h3 className="font-primary-bold text-2xl text-font">
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};
