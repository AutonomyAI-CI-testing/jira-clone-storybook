import { useState } from "react";
import cx from "classix";
import { MdSettings, MdExpandLess, MdInfoOutline } from "react-icons/md";

// Reusable component for form input field with label and info icon
const FormField = ({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) => (
  <div>
    <div className="mb-3 flex items-center gap-2">
      <label className="text-neutral-400 text-xs font-semibold">{label}</label>
      <MdInfoOutline className="text-neutral-500 h-4 w-4" />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="border-neutral-600 bg-neutral-900 text-neutral-300 placeholder-neutral-600 focus:border-neutral-500 w-full border px-4 py-3 text-xs transition-colors focus:outline-none"
    />
  </div>
);

// Reusable component for collapsible section header
const CollapsibleHeader = ({
  label,
  isCollapsed,
  onClick,
  variant = "primary",
}: {
  label: string;
  isCollapsed: boolean;
  onClick: () => void;
  variant?: "primary" | "secondary";
}) => {
  const baseClasses =
    "flex items-center gap-2 text-left font-semibold transition-colors";
  const variantClasses =
    variant === "primary"
      ? "text-neutral-500 text-xs hover:text-neutral-400"
      : "text-neutral-400 text-sm hover:text-neutral-300";

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      <MdExpandLess
        className={cx(
          "h-5 w-5 transition-transform",
          isCollapsed && "rotate-180"
        )}
      />
      <span>{label}</span>
    </button>
  );
};

export const TestCard = () => {
  // Track collapsed state for the first section (e.g., expanded task description)
  const [isFirstSectionCollapsed, setIsFirstSectionCollapsed] = useState(true);
  // Track collapsed state for the "Add New Design" form section
  const [isAddNewDesignCollapsed, setIsAddNewDesignCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="mx-auto max-w-md rounded bg-black">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-neutral-400 text-sm font-semibold">
            UI magician Agent
          </h1>
          <MdSettings className="text-neutral-500 h-5 w-5" />
        </div>

        {/* Collapsible Section 1 - Shows a task or feature description when expanded */}
        <div className="mb-8">
          <CollapsibleHeader
            label="From entire frame to a singl..."
            isCollapsed={isFirstSectionCollapsed}
            onClick={() => setIsFirstSectionCollapsed(!isFirstSectionCollapsed)}
            variant="primary"
          />
        </div>

        {/* Add New Design Section - Form for importing a design from Figma */}
        <div className="mb-8">
          <CollapsibleHeader
            label="Add New Design"
            isCollapsed={isAddNewDesignCollapsed}
            onClick={() => setIsAddNewDesignCollapsed(!isAddNewDesignCollapsed)}
            variant="secondary"
          />

          {!isAddNewDesignCollapsed && (
            <div className="space-y-6">
              <FormField
                label="Personal Access Token"
                type="password"
                placeholder="figd_xxxxxxxxxxxxxxxxxx"
              />
              <FormField
                label="Design URL"
                type="text"
                placeholder="https://www.figma.com/file/:"
              />

              {/* Action buttons for form submission */}
              <div className="flex gap-4 pt-4">
                <button className="bg-orange-700 text-neutral-300 hover:bg-orange-600 active:bg-orange-800 flex-1 px-6 py-3 text-xs font-semibold transition-colors">
                  Awesome
                </button>
                <button className="bg-orange-700 text-neutral-300 hover:bg-orange-600 active:bg-orange-800 flex-1 px-6 py-3 text-xs font-semibold transition-colors">
                  Prepare
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Recent Breakdowns Section - Shows list of recent system failures or errors */}
        <div className="border-neutral-800 border-t pt-8">
          <h2 className="text-neutral-400 text-sm font-semibold">
            Recent Breakdowns
          </h2>
        </div>

        {/* Footer */}
        <div className="border-gray-300 border-t pt-3 text-center">
          <p className="text-neutral-400 text-xs">© AutonomyAI</p>
        </div>
      </div>
    </div>
  );
};
