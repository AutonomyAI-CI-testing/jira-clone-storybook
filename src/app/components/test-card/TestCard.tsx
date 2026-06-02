import { useState } from "react";

/**
 * ChevronIcon - Reusable chevron SVG that rotates to indicate expand/collapse state.
 * Used in collapsible section headers to provide visual feedback.
 */
const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    className={`h-4 w-4 text-font-subtle transition-transform ${
      isExpanded ? "rotate-90" : ""
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

/**
 * SettingsIcon - Icon for the settings button in the header.
 */
const SettingsIcon = () => (
  <svg
    className="h-5 w-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

/**
 * FormInputField - Reusable input component with label for the design form.
 */
interface FormInputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
}

const FormInputField = ({
  label,
  placeholder,
  type = "text",
}: FormInputFieldProps) => (
  <div>
    <label className="mb-2 block text-xs text-font-subtle">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded border border-border-input bg-background-input px-3 py-2 text-xs text-font placeholder-font-subtlest focus:outline-none focus:ring-1 focus:ring-border-focused"
    />
  </div>
);

/**
 * CollapsibleSectionHeader - Header for collapsible sections.
 * Shows the section title and a chevron icon that rotates based on expanded state.
 */
interface CollapsibleSectionHeaderProps {
  title: string;
  isExpanded: boolean;
  onClick: () => void;
  isBold?: boolean;
}

const CollapsibleSectionHeader = ({
  title,
  isExpanded,
  onClick,
  isBold = false,
}: CollapsibleSectionHeaderProps) => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-full items-center justify-between py-3 text-left"
  >
    <span className={`text-xs text-font-subtle ${isBold ? "font-primary-bold" : ""}`}>
      {title}
    </span>
    <ChevronIcon isExpanded={isExpanded} />
  </button>
);

/**
 * CollapsibleSection - Container for collapsible content.
 * Renders a header button and conditionally displays children when expanded.
 */
interface CollapsibleSectionProps {
  sectionId: string;
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
  hasBorderBottom?: boolean;
  headerBold?: boolean;
}

const CollapsibleSection = ({
  sectionId,
  title,
  isExpanded,
  onToggle,
  children,
  hasBorderBottom = false,
  headerBold = false,
}: CollapsibleSectionProps) => (
  <div className={hasBorderBottom ? "mb-4 border-b border-border-input" : "mb-4"}>
    <CollapsibleSectionHeader
      title={title}
      isExpanded={isExpanded}
      onClick={onToggle}
      isBold={headerBold}
    />
    {isExpanded && children && (
      <div className="space-y-4 pb-4">{children}</div>
    )}
  </div>
);

/**
 * ActionButtonsRow - Renders a row of action buttons for the design form.
 */
const ActionButtonsRow = () => (
  <div className="flex gap-3 pt-2">
    <button
      type="button"
      className="flex-1 rounded bg-orange-700 px-4 py-2 text-xs font-primary-bold text-font-subtlest hover:bg-orange-800 active:bg-orange-900"
    >
      Awesome
    </button>
    <button
      type="button"
      className="flex-1 rounded bg-orange-700 px-4 py-2 text-xs font-primary-bold text-font-subtlest hover:bg-orange-800 active:bg-orange-900"
    >
      Prepare
    </button>
  </div>
);

export const TestCard = (): JSX.Element => {
  // Track which section is expanded; "addDesign" is expanded by default
  const [expandedSection, setExpandedSection] = useState<string | null>(
    "addDesign"
  );

  // Toggle a section open/closed, or close if already open
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div id="testElem" className="min-h-screen bg-black p-6">
      <div className="mx-auto max-w-md rounded-md bg-elevation-surface-sunken p-6">
        {/* Header with title and settings button */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-sm font-primary-bold text-font-subtlest">
            UI magician Agent
          </h1>
          <button
            type="button"
            className="text-font-subtlest hover:text-font-subtle"
            aria-label="Settings"
          >
            <SettingsIcon />
          </button>
        </div>

        {/* First collapsible section with border separator below */}
        <CollapsibleSection
          sectionId="collapsible"
          title="From entire frame to a singl..."
          isExpanded={expandedSection === "collapsible"}
          onToggle={() => toggleSection("collapsible")}
          hasBorderBottom
        >
          <div className="text-xs text-font-subtlest">Additional details here</div>
        </CollapsibleSection>

        {/* Add New Design section with form inputs */}
        <CollapsibleSection
          sectionId="addDesign"
          title="Add New Design"
          isExpanded={expandedSection === "addDesign"}
          onToggle={() => toggleSection("addDesign")}
          headerBold
        >
          <FormInputField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />
          <FormInputField
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
          />
          <ActionButtonsRow />
        </CollapsibleSection>

        {/* Recent Breakdowns section (not expandable) */}
        <div className="border-t border-border-input pt-4">
          <h2 className="text-xs font-primary-bold text-font-subtle">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};
