// Color palette for dark UI theme
const COLORS = {
  background: "#000000",
  inputBg: "#1d2125",
  border: "#454f59",
  text: "#8c9bab",
} as const;

const inputFieldStyles = {
  backgroundColor: COLORS.inputBg,
  borderColor: COLORS.border,
  color: COLORS.text,
} as const;

const buttonStyles = {
  backgroundColor: COLORS.inputBg,
  borderColor: COLORS.border,
  color: COLORS.text,
} as const;

interface LabeledInputProps {
  label: string;
  placeholder: string;
  type?: string;
}

/**
 * Reusable input field with label and info icon.
 * Maintains consistent styling across form inputs.
 */
const LabeledInput = ({
  label,
  placeholder,
  type = "text",
}: LabeledInputProps) => (
  <div>
    <div className="mb-2 flex items-center gap-1">
      <label className="text-xs font-semibold text-font-subtlest">
        {label}
      </label>
      <span className="text-xs text-font-subtlest">ⓘ</span>
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded border border-border bg-background-input px-3 py-2 text-xs text-font placeholder-font-subtlest focus:outline-none focus:ring-1 focus:ring-border-focused"
      style={inputFieldStyles}
    />
  </div>
);

interface CollapsibleSectionProps {
  title: string;
  isExpanded?: boolean;
}

/**
 * Collapsible section with title and expand/collapse indicator.
 * Used for grouping related content in the card.
 */
const CollapsibleSection = ({
  title,
  isExpanded = false,
}: CollapsibleSectionProps) => (
  <div className="mb-4 rounded border border-border p-3">
    <div className="flex items-center justify-between">
      <h2 className="text-xs font-semibold text-font-subtlest">{title}</h2>
      <span className="text-xs text-font-subtlest">
        {isExpanded ? "▼" : "▶"}
      </span>
    </div>
  </div>
);

interface ActionButtonProps {
  label: string;
}

/**
 * Action button with consistent styling and hover effects.
 * Used for form submission and secondary actions.
 */
const ActionButton = ({ label }: ActionButtonProps) => (
  <button
    className="flex-1 rounded border border-border px-3 py-2 text-xs font-semibold text-font-subtlest hover:bg-background-neutral"
    style={buttonStyles}
  >
    {label}
  </button>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="flex items-center justify-center bg-gradient-to-b from-black to-black p-8"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="w-full max-w-[254px] rounded-lg p-5 text-font-subtlest"
        style={{ backgroundColor: COLORS.background }}
      >
        {/* Header with title and settings icon */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-sm font-semibold text-font-subtlest">
            UI magician Agent
          </h1>
          <button className="flex h-6 w-6 items-center justify-center rounded hover:bg-background-neutral">
            ⚙️
          </button>
        </div>

        {/* Collapsible sections */}
        <CollapsibleSection
          title="From entire frame to a singl..."
          isExpanded={true}
        />
        <CollapsibleSection title="Add New Design" isExpanded={false} />

        {/* Input fields */}
        <div className="mb-3 space-y-3">
          <LabeledInput
            label="Personal Access Token"
            placeholder="Enter token"
          />
          <LabeledInput label="Design URL" placeholder="Paste URL" />
        </div>

        {/* Action buttons */}
        <div className="mb-4 flex gap-2">
          <ActionButton label="Awesome" />
          <ActionButton label="Prepare" />
        </div>

        {/* Recent Breakdowns footer */}
        <div className="border-t border-border pt-3">
          <h4 className="text-xs font-semibold text-font-subtlest">
            Recent Breakdowns
          </h4>
        </div>
      </div>
    </div>
  );
};
