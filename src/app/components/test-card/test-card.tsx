import type { JSX } from "react";

/**
 * Reusable SVG icon for collapsible sections (chevron pointing down).
 * Represents a section that can be expanded or collapsed.
 */
const ChevronIcon = ({ className = "text-gray-400" }: { className?: string }): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <polyline points="5 8 8 11 11 8" />
  </svg>
);

/**
 * Reusable SVG icon for help/info indicators (question mark in circle).
 * Used to provide additional context or hints for form fields.
 */
const InfoIcon = ({ className = "text-gray-500" }: { className?: string }): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="8" cy="8" r="6.5" />
    <line x1="8" y1="5.5" x2="8" y2="8" />
    <circle cx="8" cy="10.5" r="0.5" fill="currentColor" />
  </svg>
);

/**
 * Reusable component for form field with label, help icon, and text input.
 * Both fields are read-only, designed to display Figma integration details.
 */
const FormField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-gray-500 text-xs font-semibold">{label}</label>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="border-gray-600 bg-gray-900 text-gray-600 placeholder-gray-600 w-full border px-3 py-2 text-xs font-semibold"
      readOnly
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 bg-black p-5">
      {/* Header with title and settings icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-gray-400 text-sm font-semibold">
          UI magician Agent
        </h1>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="10" cy="10" r="8" />
          <circle cx="10" cy="10" r="3" />
          <circle cx="10" cy="4" r="1" />
          <circle cx="16" cy="10" r="1" />
          <circle cx="10" cy="16" r="1" />
          <circle cx="4" cy="10" r="1" />
        </svg>
      </div>

      {/* Collapsible sections */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronIcon />
        <span className="text-gray-500 text-xs font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      <div className="mb-8 flex items-center gap-2">
        <ChevronIcon />
        <span className="text-gray-400 text-sm font-semibold">
          Add New Design
        </span>
      </div>

      {/* Form section */}
      <div className="mb-8 space-y-4">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />
        <FormField label="Design URL" placeholder="https://www.figma.com/file/:" />
      </div>

      {/* Action buttons */}
      <div className="mb-8 flex gap-4">
        <button className="bg-orange-700 text-orange-200 hover:bg-orange-800 flex-1 rounded py-2 text-xs font-semibold">
          Awesome
        </button>
        <button className="bg-orange-700 text-orange-200 hover:bg-orange-800 flex-1 rounded py-2 text-xs font-semibold">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div>
        <h2 className="text-gray-400 text-sm font-semibold">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-gray-400 text-xs">© AutonomyAI</p>
      </div>
    </div>
  );
};
