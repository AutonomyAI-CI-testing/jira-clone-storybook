import { useState, ReactNode } from "react";
import cx from "classix";

/**
 * CollapsibleSection: A reusable collapsible section component
 * Manages its own expanded/collapsed state and rotates the chevron icon
 */
interface CollapsibleSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children: ReactNode;
  chevronRotation?: "forward" | "backward";
}

const CollapsibleSection = ({
  title,
  isExpanded,
  onToggle,
  children,
  chevronRotation = "forward",
}: CollapsibleSectionProps) => {
  // Determine rotation direction: forward means down arrow rotates to right when collapsed
  const isRotated = chevronRotation === "forward" ? !isExpanded : isExpanded;

  return (
    <div className="mb-4 border-b border-border">
      <button
        onClick={onToggle}
        className="mb-2 flex w-full items-center gap-2 text-left font-primary-bold text-xs text-font-subtlest hover:text-font-subtle"
      >
        <span
          className={cx(
            "transition-transform",
            isRotated &&
              (chevronRotation === "forward" ? "rotate-90" : "-rotate-90")
          )}
        >
          ▼
        </span>
        <span>{title}</span>
      </button>
      {isExpanded && (
        <div className="mb-2 pb-2 text-xs text-font-subtlest">{children}</div>
      )}
    </div>
  );
};

/**
 * FormInput: A reusable input field component with label
 */
interface FormInputProps {
  label: string;
  type?: string;
  placeholder: string;
}

const FormInput = ({ label, type = "text", placeholder }: FormInputProps) => (
  <div className="mb-3">
    <label className="mb-1 block font-primary text-xs text-font-subtlest">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded border border-border bg-background-input px-2 py-1.5 font-primary text-xs text-font-subtlest placeholder-font-subtlest focus:border-border-brand focus:outline-none"
    />
  </div>
);

/**
 * AddNewDesignForm: Form section for adding a new design with token and URL inputs
 */
const AddNewDesignForm = () => (
  <div className="pb-2">
    <FormInput
      label="Personal Access Token"
      type="password"
      placeholder="••••••••••••••••"
    />
    <FormInput
      label="Design URL"
      type="text"
      placeholder="https://figma.com/..."
    />
    <div className="flex gap-2">
      <button className="flex-1 rounded bg-background-warning px-3 py-1.5 font-primary-bold text-xs text-font-subtle hover:bg-background-warning-hovered">
        Awesome
      </button>
      <button className="flex-1 rounded bg-background-warning px-3 py-1.5 font-primary-bold text-xs text-font-subtle hover:bg-background-warning-hovered">
        Prepare
      </button>
    </div>
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isAddNewDesignOpen, setIsAddNewDesignOpen] = useState<boolean>(true);

  return (
    <div
      id="testElem"
      className="flex items-center justify-center bg-elevation-surface-sunken p-8"
    >
      <div className="w-64 rounded-lg bg-elevation-surface p-5 text-font-subtlest">
        {/* Header with title and settings button */}
        <div className="mb-4 flex items-center justify-between">
          <h1 className="font-primary-bold text-sm text-font-subtle">
            UI magician Agent
          </h1>
          <button
            className="text-font-subtle hover:text-font"
            aria-label="Settings"
          >
            ⚙️
          </button>
        </div>

        {/* Collapsible section for design task details */}
        <CollapsibleSection
          title="From entire frame to a singl..."
          isExpanded={!isCollapsed}
          onToggle={() => setIsCollapsed(!isCollapsed)}
          chevronRotation="forward"
        >
          {/* Content placeholder for future expansion */}
        </CollapsibleSection>

        {/* Collapsible section for adding a new design */}
        <CollapsibleSection
          title="Add New Design"
          isExpanded={isAddNewDesignOpen}
          onToggle={() => setIsAddNewDesignOpen(!isAddNewDesignOpen)}
          chevronRotation="backward"
        >
          <AddNewDesignForm />
        </CollapsibleSection>

        {/* Recent Breakdowns section footer */}
        <div className="font-primary-bold text-xs text-font-subtle">
          Recent Breakdowns
        </div>
      </div>
    </div>
  );
};
