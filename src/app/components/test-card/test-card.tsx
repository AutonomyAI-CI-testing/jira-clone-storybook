import { useState } from "react";

// Text labels and placeholders used throughout the component
const LABELS = {
  uiMagician: "UI magician Agent",
  fromFrame: "From entire frame to a singl...",
  addNewDesign: "Add New Design",
  personalAccessToken: "Personal Access Token",
  designUrl: "Design URL",
  tokenPlaceholder: "figd_xxxxxxxxxxxxxxxxxx",
  urlPlaceholder: "https://www.figma.com/file/:",
  awesome: "Awesome",
  prepare: "Prepare",
  recentBreakdowns: "Recent Breakdowns",
};

type SectionKey = "frameSection" | "designSection";

/**
 * CollapsibleSectionButton renders a button with an expandable/collapsible indicator.
 * Used to display section headers that can be toggled open/closed.
 */
interface CollapsibleSectionButtonProps {
  isExpanded: boolean;
  label: string;
  onClick: () => void;
}

const CollapsibleSectionButton = ({
  isExpanded,
  label,
  onClick,
}: CollapsibleSectionButtonProps) => (
  <button
    onClick={onClick}
    className="mb-4 flex w-full items-center justify-between text-left"
  >
    <span className="flex items-center gap-2">
      <span className="text-[#b5b5b5]">
        {isExpanded ? "▼" : "▶"}
      </span>
      <span className="text-sm font-semibold text-[#b5b5b5]">
        {label}
      </span>
    </span>
  </button>
);

/**
 * FormField renders a labeled input field with consistent styling and helper text.
 */
interface FormFieldProps {
  label: string;
  type: "text" | "password";
  placeholder: string;
}

const FormField = ({ label, type, placeholder }: FormFieldProps) => (
  <div className="space-y-1">
    <label className="flex items-center gap-1 text-xs font-semibold text-[#a3a3a2]">
      {label}
      <span className="text-[#8b8b8b]">(i)</span>
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded bg-[#1a1a1a] px-3 py-2 text-xs text-[#71726e] placeholder-[#5a5a57] outline-none"
    />
  </div>
);

/**
 * ActionButton renders a styled action button with hover effects.
 */
interface ActionButtonProps {
  children: string;
  onClick?: () => void;
}

const ActionButton = ({ children, onClick }: ActionButtonProps) => (
  <button
    onClick={onClick}
    className="flex-1 rounded bg-[#a0522d] px-3 py-2 text-xs font-semibold text-[#8c8078] transition hover:bg-[#b0623d]"
  >
    {children}
  </button>
);

/**
 * TestCard component displays a UI magician agent interface with collapsible sections,
 * form inputs for Figma credentials, and action buttons.
 */
export const TestCard = (): JSX.Element => {
  const [expandedSections, setExpandedSections] = useState<
    Record<SectionKey, boolean>
  >({
    frameSection: false,
    designSection: false,
  });

  const toggleSection = (section: SectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div id="testElem">
      <div className="w-64 rounded bg-black p-5">
        {/* Header with title and menu button */}
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-sm font-semibold text-[#b5b5b5]">
            {LABELS.uiMagician}
          </h1>
          <button
            className="text-[#b5b5b5] hover:text-[#c5c5c5]"
            aria-label="Menu"
          >
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M11.49 3.08c-.38-.45-.96-.72-1.49-.72s-1.11.27-1.49.72a2.5 2.5 0 0 0-.3 3.45 2.496 2.496 0 0 0 3.58 0 2.5 2.5 0 0 0-.3-3.45zm.72 8.86c.44.44.44 1.16 0 1.6-.44.44-1.16.44-1.6 0-.44-.44-.44-1.16 0-1.6.44-.44 1.16-.44 1.6 0zm-1.95 4.8c-.38.45-.96.72-1.49.72s-1.11-.27-1.49-.72a2.5 2.5 0 0 0-.3-3.45 2.496 2.496 0 0 0 3.58 0 2.5 2.5 0 0 0-.3 3.45z" />
            </svg>
          </button>
        </div>

        {/* Collapsible sections for frame and design workflows */}
        <CollapsibleSectionButton
          isExpanded={expandedSections.frameSection}
          label={LABELS.fromFrame}
          onClick={() => toggleSection("frameSection")}
        />
        <CollapsibleSectionButton
          isExpanded={expandedSections.designSection}
          label={LABELS.addNewDesign}
          onClick={() => toggleSection("designSection")}
        />

        {/* Form Section */}
        <div className="space-y-4">
          {/* Figma authentication and design file inputs */}
          <FormField
            label={LABELS.personalAccessToken}
            type="password"
            placeholder={LABELS.tokenPlaceholder}
          />
          <FormField
            label={LABELS.designUrl}
            type="text"
            placeholder={LABELS.urlPlaceholder}
          />

          {/* Action buttons for form submission */}
          <div className="flex gap-2 pt-2">
            <ActionButton>{LABELS.awesome}</ActionButton>
            <ActionButton>{LABELS.prepare}</ActionButton>
          </div>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="mt-6 border-t border-[#333333] pt-4">
          <h3 className="text-xs font-semibold text-[#8b9291]">
            {LABELS.recentBreakdowns}
          </h3>
        </div>
      </div>
    </div>
  );
};
