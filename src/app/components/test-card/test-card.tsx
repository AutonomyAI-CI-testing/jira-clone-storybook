import { useState } from "react";
import cx from "classix";

/**
 * Info icon SVG component - used for tooltip indicators
 */
const InfoIcon = (): JSX.Element => (
  <svg
    className="h-3.5 w-3.5 text-font-subtlest"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12">
      i
    </text>
  </svg>
);

/**
 * Settings/spinner icon SVG component - used for the header
 */
const SettingsIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-font-subtle"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3" fill="currentColor" />
    <path d="M12 3v2m0 14v2M21 12h-2M5 12H3" strokeWidth="1.5" />
    <path
      d="M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M19.07 19.07l-1.41-1.41M6.34 6.34L4.93 4.93"
      strokeWidth="1.5"
    />
  </svg>
);

/**
 * Collapse/expand toggle button component
 */
interface CollapsibleButtonProps {
  label: string;
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const CollapsibleButton = ({
  label,
  isOpen,
  onClick,
  className = "",
}: CollapsibleButtonProps): JSX.Element => (
  <button
    onClick={onClick}
    className={cx(
      "flex items-center gap-3",
      "focus-visible:outline focus-visible:outline-2",
      className
    )}
  >
    {/* Chevron rotates based on open state */}
    <span
      className={cx(
        "inline-block transition-transform duration-200",
        !isOpen && "rotate-180"
      )}
    >
      ▲
    </span>
    <span>{label}</span>
  </button>
);

/**
 * Form field with label and optional info icon
 */
interface FormFieldProps {
  label: string;
  placeholder: string;
  showInfo?: boolean;
}

const FormField = ({
  label,
  placeholder,
  showInfo = true,
}: FormFieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-xs font-semibold text-font-subtle">{label}</label>
      {showInfo && <InfoIcon />}
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-border-input bg-background-input px-3 py-2 text-xs text-font-subtlest placeholder-font-subtlest focus-visible:border-border-focused focus-visible:outline-none"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [isFirstSectionOpen, setIsFirstSectionOpen] = useState(false);
  const [isAddNewDesignOpen, setIsAddNewDesignOpen] = useState(true);

  return (
    <div className="w-full max-w-xs bg-black p-5 text-xs font-semibold">
      {/* Header with title and status icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-sm text-font">UI magician Agent</h1>
        <SettingsIcon />
      </div>

      {/* First collapsible section - currently empty content */}
      <div className="mb-8 border-b border-border pb-6">
        <CollapsibleButton
          label="From entire frame to a singl..."
          isOpen={isFirstSectionOpen}
          onClick={() => setIsFirstSectionOpen(!isFirstSectionOpen)}
          className="text-xs text-font-subtlest hover:text-font-subtle"
        />
        {isFirstSectionOpen && (
          <div className="mt-4 text-xs text-font-subtlest" />
        )}
      </div>

      {/* Add New Design form - collapsible section */}
      <div className="mb-6">
        <CollapsibleButton
          label="Add New Design"
          isOpen={isAddNewDesignOpen}
          onClick={() => setIsAddNewDesignOpen(!isAddNewDesignOpen)}
          className="mb-4 text-sm font-semibold text-font hover:text-font-subtle"
        />

        {isAddNewDesignOpen && (
          <div className="space-y-4">
            <FormField
              label="Personal Access Token"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
            />
            <FormField
              label="Design URL"
              placeholder="https://www.figma.com/file/:"
            />

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <button className="flex-1 rounded-md bg-background-warning-bold px-4 py-2.5 text-xs font-semibold text-font-inverse hover:bg-background-warning-bold-hovered focus-visible:outline focus-visible:outline-2">
                Awesome
              </button>
              <button className="flex-1 rounded-md bg-background-warning-bold px-4 py-2.5 text-xs font-semibold text-font-inverse hover:bg-background-warning-bold-hovered focus-visible:outline focus-visible:outline-2">
                Prepare
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Recent breakdowns section - placeholder for future content */}
      <div className="mt-8 pt-6">
        <h2 className="text-sm font-semibold text-font">Recent Breakdowns</h2>
      </div>

      {/* Copyright notice */}
      <div className="border-gray-300 mt-8 border-t pt-3 text-center">
        <p className="text-xs text-font-subtlest">© AutonomyAI</p>
      </div>
    </div>
  );
};
