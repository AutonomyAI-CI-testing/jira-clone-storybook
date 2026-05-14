import { FiSettings, FiChevronUp, FiInfo } from "react-icons/fi";

// Theme colors extracted for clarity and maintainability
const COLORS = {
  background: "#2a2a24",
  text: {
    primary: "#d8d8d0",
    secondary: "#e0e0d8",
    muted: "#a8a8a0",
    label: "#b8b8b0",
    footer: "#a8a8a0",
  },
  input: {
    background: "#1e1e1a",
    border: "#3a3a30",
    text: "#a8a8a0",
    placeholder: "#68685c",
  },
  button: {
    background: "#b5651d",
    hover: "#c06a1a",
    active: "#a5591a",
    text: "#f0f0e8",
  },
} as const;

interface CollapsibleHeaderProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Reusable collapsible section header with chevron indicator.
 * Chevron direction (up) suggests the section can be collapsed.
 */
const CollapsibleHeader = ({
  children,
  className = "",
}: CollapsibleHeaderProps) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <FiChevronUp className="h-5 w-5" />
    {children}
  </div>
);

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  className?: string;
}

/**
 * Consistent form field with label, info icon, and styled input.
 * Info icon placement indicates additional help is available for this field.
 */
const FormField = ({
  id,
  label,
  placeholder,
  type = "text",
  className = "",
}: FormFieldProps) => (
  <div className={className}>
    <label
      htmlFor={id}
      className="mb-2 flex items-center gap-2 text-sm"
      style={{ color: COLORS.text.label }}
    >
      {label}
      <FiInfo className="h-4 w-4" />
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full rounded border px-4 py-3 focus:outline-none"
      style={{
        backgroundColor: COLORS.input.background,
        borderColor: COLORS.input.border,
        color: COLORS.input.text,
      }}
    />
  </div>
);

interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * Primary action button with consistent styling.
 * Equal flex-1 ensures both buttons have the same width for visual balance.
 */
const ActionButton = ({ children, onClick }: ActionButtonProps) => (
  <button
    type="button"
    onClick={onClick}
    className="flex-1 rounded-lg px-6 py-3 font-primary-bold"
    style={{
      backgroundColor: COLORS.button.background,
      color: COLORS.button.text,
    }}
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div
      className="mx-auto w-full max-w-[480px] rounded-lg p-8"
      style={{
        backgroundColor: COLORS.background,
        color: COLORS.text.secondary,
      }}
    >
      {/* Header with settings control */}
      <header className="mb-6 flex items-center justify-between">
        <h1
          className="font-primary-bold text-xl"
          style={{ color: COLORS.text.primary }}
        >
          UI magician Agent
        </h1>
        <button
          type="button"
          className="flex items-center justify-center hover:text-white"
          style={{ color: COLORS.text.primary }}
          aria-label="Settings"
        >
          <FiSettings className="h-6 w-6" />
        </button>
      </header>

      {/* Collapsible subtitle - truncated text indicates expandable content */}
      <div className="mb-12" style={{ color: COLORS.text.muted }}>
        <CollapsibleHeader className="text-sm">
          <span>From entire frame to a singl...</span>
        </CollapsibleHeader>
      </div>

      {/* Main section header */}
      <div className="mb-8" style={{ color: COLORS.text.primary }}>
        <CollapsibleHeader>
          <h2 className="font-primary-bold text-lg">Add New Design</h2>
        </CollapsibleHeader>
      </div>

      {/* Form fields for design configuration */}
      <FormField
        id="personal-access-token"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        className="mb-6"
      />

      <FormField
        id="design-url"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        className="mb-8"
      />

      {/* Primary action buttons */}
      <div className="mb-12 flex gap-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent activity section */}
      <section>
        <h3
          className="font-primary-bold text-lg"
          style={{ color: COLORS.text.primary }}
        >
          Recent Breakdowns
        </h3>
      </section>

      {/* Footer with copyright */}
      <footer
        className="border-gray-300 mt-8 border-t pt-3 text-center text-sm"
        style={{ color: COLORS.text.footer }}
      >
        © AutonomyAI
      </footer>
    </div>
  );
};
