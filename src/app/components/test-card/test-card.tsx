import { useState } from "react";

type SectionType = "collapse" | "add-new";

interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  ariaLabel: string;
}

// Reusable form field component to reduce duplication
const FormField = ({ label, type, placeholder, ariaLabel }: FormFieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-gray-400 text-xs font-bold">{label}</label>
      <button className="text-gray-600 hover:text-gray-400" aria-label={ariaLabel}>
        ℹ️
      </button>
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="border-gray-700 bg-gray-900 text-gray-600 placeholder-gray-600 focus:border-gray-500 w-full border px-3 py-2 text-xs focus:outline-none"
    />
  </div>
);

interface SectionToggleButtonProps {
  isExpanded: boolean;
  onClick: () => void;
  className: string;
  label: string;
}

// Reusable section toggle button with visual indicator
const SectionToggleButton = ({ isExpanded, onClick, className, label }: SectionToggleButtonProps): JSX.Element => (
  <button onClick={onClick} className={`${className} flex items-center gap-2`}>
    <span>{isExpanded ? "▼" : "▲"}</span>
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  const [expandedSection, setExpandedSection] = useState<SectionType | null>("collapse");

  // Toggle section expansion state — if clicked section is already expanded, collapse it
  const toggleSection = (section: SectionType): void => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div id="testElem" className="text-gray-400 w-full max-w-sm bg-black p-6">
      {/* Header with title and settings button */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-gray-200 text-sm font-bold">UI magician Agent</h1>
        <button className="text-gray-500 hover:text-gray-300" aria-label="Settings">
          ⚙️
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="mb-8">
        <SectionToggleButton
          isExpanded={expandedSection === "collapse"}
          onClick={() => toggleSection("collapse")}
          className="text-gray-600 hover:text-gray-400 mb-3 text-xs font-bold"
          label="From entire frame to a singl..."
        />
        {expandedSection === "collapse" && (
          <div className="bg-gray-900 text-gray-500 rounded p-4 text-xs">
            Content would expand here
          </div>
        )}
      </div>

      {/* Add New Design Section */}
      <div className="mb-8">
        <SectionToggleButton
          isExpanded={expandedSection === "add-new"}
          onClick={() => toggleSection("add-new")}
          className="text-gray-300 hover:text-gray-100 mb-4 text-sm font-bold"
          label="Add New Design"
        />

        {expandedSection === "add-new" && (
          <div className="space-y-4">
            <FormField
              label="Personal Access Token"
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              ariaLabel="Personal Access Token info"
            />
            <FormField
              label="Design URL"
              type="text"
              placeholder="https://www.figma.com/file/:"
              ariaLabel="Design URL info"
            />

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="bg-amber-800 text-gray-400 hover:bg-amber-700 flex-1 rounded px-4 py-2 text-xs font-bold">
                Awesome
              </button>
              <button className="bg-amber-800 text-gray-400 hover:bg-amber-700 flex-1 rounded px-4 py-2 text-xs font-bold">
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns Footer */}
      <div className="text-gray-300 text-sm font-bold">Recent Breakdowns</div>
    </div>
  );
};
