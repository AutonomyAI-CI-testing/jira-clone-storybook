import { useState } from "react";
import { MdExpandMore, MdSettings, MdInfo } from "react-icons/md";
import cx from "classix";

interface CollapsibleSectionProps {
  title: string;
  isExpanded: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

/**
 * Reusable collapsible section with expand/collapse icon animation.
 * The icon rotates 180° when collapsed to indicate state visually.
 */
const CollapsibleSection = ({
  title,
  isExpanded,
  onToggle,
  children,
}: CollapsibleSectionProps): JSX.Element => (
  <div className="rounded-lg border border-border bg-elevation-surface-sunken p-4">
    <button
      onClick={onToggle}
      className="flex w-full items-center gap-2 text-font-subtle hover:text-font"
    >
      <MdExpandMore
        size={20}
        className={cx("transition-transform", {
          "rotate-180": !isExpanded,
        })}
      />
      <span className="font-primary-bold text-sm">{title}</span>
    </button>
    {isExpanded && children}
  </div>
);

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  infoAriaLabel: string;
}

/**
 * Form input field with label and optional info button.
 * Applies consistent styling across password and URL inputs.
 */
const InputField = ({
  label,
  type,
  placeholder,
  infoAriaLabel,
}: InputFieldProps): JSX.Element => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 font-primary-bold text-xs text-font-subtle">
      {label}
      <button
        className="text-font-subtlest hover:text-font-subtle"
        aria-label={infoAriaLabel}
      >
        <MdInfo size={16} />
      </button>
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-md border border-border bg-background-input p-2.5 text-xs text-font placeholder-font-subtlest focus-visible:outline-2 focus-visible:outline-border-brand"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isFrameExpanded, setIsFrameExpanded] = useState(true);
  const [isDesignExpanded, setIsDesignExpanded] = useState(true);

  return (
    <div id="testElem" className="min-h-screen bg-black p-6">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Header with Settings */}
        <div className="flex items-center justify-between">
          <h1 className="font-primary-bold text-lg text-font-subtle">
            UI magician Agent
          </h1>
          <button
            className="p-1 text-font-subtle hover:text-font"
            aria-label="Settings"
          >
            <MdSettings size={20} />
          </button>
        </div>

        {/* Frame Configuration Section */}
        <CollapsibleSection
          title="From entire frame to a single..."
          isExpanded={isFrameExpanded}
          onToggle={() => setIsFrameExpanded(!isFrameExpanded)}
        >
          <div className="mt-3 pl-6 text-xs text-font-subtlest">
            <p>Collapsible section content</p>
          </div>
        </CollapsibleSection>

        {/* Design Configuration Section */}
        <CollapsibleSection
          title="Add New Design"
          isExpanded={isDesignExpanded}
          onToggle={() => setIsDesignExpanded(!isDesignExpanded)}
        >
          <div className="mt-4 space-y-4 pl-6">
            <InputField
              label="Personal Access Token"
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              infoAriaLabel="Info about Personal Access Token"
            />
            <InputField
              label="Design URL"
              type="url"
              placeholder="https://www.figma.com/file/:"
              infoAriaLabel="Info about Design URL"
            />
            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 rounded-md bg-background-warning-bold px-3 py-2 font-primary-bold text-xs text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed">
                Awesome
              </button>
              <button className="flex-1 rounded-md bg-background-warning-bold px-3 py-2 font-primary-bold text-xs text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed">
                Prepare
              </button>
            </div>
          </div>
        </CollapsibleSection>

        {/* Recent Activity Section */}
        <div className="border-t border-border pt-4">
          <p className="font-primary-bold text-xs text-font-subtlest">
            Recent Breakdowns
          </p>
        </div>
      </div>
    </div>
  );
};
