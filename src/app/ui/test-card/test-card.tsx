import { useState } from "react";
import { AiOutlineSetting, AiOutlineInfoCircle } from "react-icons/ai";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdKeyboardArrowRight,
} from "react-icons/md";

// Shared input field styling for consistent UX
const INPUT_STYLES =
  "w-full rounded-md border border-border-input bg-background-input px-3 py-2 text-font placeholder-text-font-subtlest hover:bg-background-input-hovered focus-visible:outline-border-focused";

// Shared button styling for action buttons
const ACTION_BUTTON_STYLES =
  "flex-1 rounded-md bg-background-warning-bold px-4 py-2 text-center text-font-inverse hover:bg-background-warning-bold-hovered active:bg-background-warning-bold-pressed";

// Collapsible section button renderer
const CollapsibleButton = ({
  isExpanded,
  label,
  onToggle,
}: {
  isExpanded: boolean;
  label: string;
  onToggle: () => void;
}): JSX.Element => (
  <button
    onClick={onToggle}
    className="flex w-full items-center justify-between py-4 text-left"
  >
    <span className="text-font-subtle">{label}</span>
    {isExpanded ? (
      <MdKeyboardArrowUp size={20} className="text-icon" />
    ) : (
      <MdKeyboardArrowDown size={20} className="text-icon" />
    )}
  </button>
);

// Form field with label and info icon
const FormField = ({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}): JSX.Element => (
  <div className="space-y-2">
    <label className="flex items-center gap-2 text-sm text-font-subtle">
      {label}
      <AiOutlineInfoCircle size={16} className="text-icon-subtle" />
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className={INPUT_STYLES}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isFrameExpanded, setIsFrameExpanded] = useState(true);
  const [isDesignExpanded, setIsDesignExpanded] = useState(true);

  return (
    <div
      id="testElem"
      className="min-h-screen bg-elevation-surface-sunken p-8"
    >
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-font">UI magician Agent</h1>
          <button
            aria-label="Settings"
            className="rounded-full p-2 hover:bg-background-neutral"
          >
            <AiOutlineSetting size={24} className="text-icon" />
          </button>
        </div>

        {/* Collapsible Frame Section */}
        <div className="border-t border-border">
          <CollapsibleButton
            isExpanded={isFrameExpanded}
            label="From entire frame to a singl..."
            onToggle={() => setIsFrameExpanded(!isFrameExpanded)}
          />
          {isFrameExpanded && (
            <div className="space-y-3 pb-4">
              <p className="text-sm text-font-subtlest">
                Collapsible section content
              </p>
            </div>
          )}
        </div>

        {/* Add New Design Section */}
        <div className="border-t border-border">
          <button
            onClick={() => setIsDesignExpanded(!isDesignExpanded)}
            className="flex w-full items-center justify-between py-4 text-left"
          >
            <span className="text-font">Add New Design</span>
            {isDesignExpanded ? (
              <MdKeyboardArrowUp size={20} className="text-icon" />
            ) : (
              <MdKeyboardArrowRight size={20} className="text-icon" />
            )}
          </button>

          {isDesignExpanded && (
            <div className="space-y-4 pb-4">
              {/* Form fields for design import configuration */}
              <FormField
                label="Personal Access Token"
                type="password"
                placeholder="Enter your personal access token"
              />
              <FormField
                label="Design URL"
                type="text"
                placeholder="Paste your design URL"
              />

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button className={ACTION_BUTTON_STYLES}>
                  Awesome
                </button>
                <button className={ACTION_BUTTON_STYLES}>
                  Prepare
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Recent Breakdowns Section */}
        <div className="border-t border-border pt-4">
          <h2 className="text-font">Recent Breakdowns</h2>
          <p className="mt-2 text-sm text-font-subtlest">No recent items</p>
        </div>
      </div>
    </div>
  );
};
