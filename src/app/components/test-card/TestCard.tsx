import { useState } from "react";
import cx from "classix";

/**
 * Info button SVG that displays an "i" inside a circle.
 * Used for tooltips throughout the card.
 */
const InfoIcon = ({ ariaLabel }: { ariaLabel: string }) => (
  <button
    type="button"
    className="text-font-subtlest transition-colors hover:text-font-subtle"
    aria-label={ariaLabel}
  >
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="5" fill="currentColor" />
      <text
        x="6"
        y="7.5"
        textAnchor="middle"
        fontSize="7"
        fill="white"
        className="font-bold"
      >
        i
      </text>
    </svg>
  </button>
);

/**
 * Collapsible chevron icon that rotates when expanded.
 * Indicates section state visually.
 */
const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cx("transition-transform", isExpanded && "rotate-90")}
  >
    <path
      d="M4 2l5 4-5 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Settings/gear icon for the header settings button.
 */
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M8 1v2M8 13v2M1 8h2m11 0h2"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M3.5 3.5l1.4 1.4M11.1 11.1l1.4 1.4M3.5 12.5l1.4-1.4M11.1 4.9l1.4-1.4"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Form field component for token/URL inputs.
 * Includes label, info icon, and input element.
 */
const FormField = ({
  label,
  inputType,
  placeholder,
  infoAriaLabel,
}: {
  label: string;
  inputType: string;
  placeholder: string;
  infoAriaLabel: string;
}) => (
  <div>
    <div className="mb-1 flex items-center gap-1">
      <label className="text-xs text-font-subtle">{label}</label>
      <InfoIcon ariaLabel={infoAriaLabel} />
    </div>
    <input
      type={inputType}
      placeholder={placeholder}
      className="w-full rounded border border-border-input bg-background-input px-2 py-1.5 text-xs text-font placeholder:text-xs placeholder:text-font-subtlest focus:border-border-focused focus:outline-none"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isFrameExpanded, setIsFrameExpanded] = useState(true);
  const [isDesignExpanded, setIsDesignExpanded] = useState(true);

  return (
    <div className="w-full max-w-md rounded-lg bg-elevation-surface p-4 text-font">
      {/* Header with agent title and settings button */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-primary text-sm font-semibold text-font">
          UI magician Agent
        </h2>
        <button
          type="button"
          className="text-font-subtlest transition-colors hover:text-font-subtle"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Frame expansion section - displays a collapsible item */}
      <div className="mb-4">
        <button
          type="button"
          onClick={() => setIsFrameExpanded(!isFrameExpanded)}
          className="flex w-full items-center gap-2 py-2 text-left text-font-subtlest transition-colors hover:text-font-subtle"
        >
          <ChevronIcon isExpanded={isFrameExpanded} />
          <span className="text-xs">From entire frame to a singl...</span>
        </button>
      </div>

      {/* Add New Design section with form fields and action buttons */}
      <div className="mb-4">
        <button
          type="button"
          onClick={() => setIsDesignExpanded(!isDesignExpanded)}
          className="flex w-full items-center gap-2 py-2 text-left transition-colors hover:text-font-subtle"
        >
          <ChevronIcon isExpanded={isDesignExpanded} />
          <span className="font-primary text-xs font-semibold text-font">
            Add New Design
          </span>
        </button>

        {/* Collapsible form fields for design submission */}
        {isDesignExpanded && (
          <div className="mt-3 space-y-3">
            <FormField
              label="Personal Access Token"
              inputType="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
              infoAriaLabel="Info about Personal Access Token"
            />
            <FormField
              label="Design URL"
              inputType="url"
              placeholder="https://www.figma.com/file/:"
              infoAriaLabel="Info about Design URL"
            />

            {/* Action buttons for design submission */}
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                className="bg-Orange700 text-Orange100 hover:bg-Orange800 active:bg-Orange900 flex-1 rounded px-3 py-1.5 text-xs font-semibold transition-colors"
              >
                Awesome
              </button>
              <button
                type="button"
                className="bg-Orange700 text-Orange100 hover:bg-Orange800 active:bg-Orange900 flex-1 rounded px-3 py-1.5 text-xs font-semibold transition-colors"
              >
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent breakdowns section header */}
      <div className="border-t border-border pt-4">
        <h3 className="font-primary text-xs font-semibold text-font-subtle">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer with copyright */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-xs text-font-subtlest">© AutonomyAI</p>
      </div>
    </div>
  );
};
