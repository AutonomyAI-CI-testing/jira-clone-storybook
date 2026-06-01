// Input field styles for consistent form styling
const INPUT_CLASS =
  "w-full px-3 py-3 bg-background-input text-font-subtle border border-border-input rounded text-sm focus-visible:outline-border-brand";

// Button styles for action buttons
const ACTION_BUTTON_CLASS =
  "flex-1 px-4 py-3 bg-background-neutral-bold text-font rounded font-primary hover:bg-background-neutral-bold-hovered active:bg-background-neutral-bold-pressed transition-colors";

/**
 * FormField component renders a labeled input with optional info icon.
 * Used for consistent form input styling across the card.
 */
const FormField = ({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="font-primary text-sm text-font-subtle">{label}</label>
      <span className="text-sm text-icon-subtle">ℹ️</span>
    </div>
    <input type={type} placeholder={placeholder} className={INPUT_CLASS} />
  </div>
);

/**
 * HeaderSection displays the card title with a settings icon.
 */
const HeaderSection = (): JSX.Element => (
  <div className="mb-6 flex items-center justify-between">
    <h1 className="font-primary-bold text-lg text-font">UI magician Agent</h1>
    <span className="text-xl text-font-subtlest">⚙️</span>
  </div>
);

/**
 * CollapsibleSection renders a collapsible section with truncated text.
 */
const CollapsibleSection = (): JSX.Element => (
  <div className="mb-6 flex items-center gap-2">
    <span className="text-font-subtlest">▼</span>
    <span className="text-sm text-font-subtle">
      From entire frame to a singl...
    </span>
  </div>
);

/**
 * DesignSection displays the "Add New Design" section with a chevron icon.
 */
const DesignSection = (): JSX.Element => (
  <div className="mb-6 flex items-center justify-between border-b border-border py-3">
    <span className="font-primary text-sm text-font">Add New Design</span>
    <span className="text-font-subtlest">▶</span>
  </div>
);

/**
 * ActionButtons renders the action button pair at the bottom of the card.
 */
const ActionButtons = (): JSX.Element => (
  <div className="mb-6 flex gap-3">
    <button className={ACTION_BUTTON_CLASS}>Awesome</button>
    <button className={ACTION_BUTTON_CLASS}>Prepare</button>
  </div>
);

/**
 * FooterSection displays the "Recent Breakdowns" footer text.
 */
const FooterSection = (): JSX.Element => (
  <div className="border-t border-border pt-4">
    <span className="text-xs text-font-subtlest">Recent Breakdowns</span>
  </div>
);

export const TestCard = (): JSX.Element => (
  <div id="testElem" className="rounded-lg bg-elevation-surface p-6">
    <HeaderSection />
    <CollapsibleSection />
    <DesignSection />

    {/* Form section with token and URL inputs */}
    <div className="mb-6 space-y-4">
      <FormField label="Personal Access Token" placeholder="Enter your token" />
      <FormField label="Design URL" placeholder="https://figma.com/..." />
    </div>

    <ActionButtons />
    <FooterSection />
  </div>
);
