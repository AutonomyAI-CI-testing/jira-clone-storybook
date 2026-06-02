import { forwardRef } from "react";

// Input field styling for consistent appearance across token and URL inputs
const INPUT_FIELD_CLASS =
  "w-full bg-gray-900 border border-gray-700 rounded px-3 py-2 text-xs text-gray-600 placeholder-gray-700 focus:outline-none focus:border-gray-500";

// Button styling for action buttons
const ACTION_BUTTON_CLASS =
  "flex-1 bg-amber-900 hover:bg-amber-800 text-gray-300 text-sm font-semibold py-2 rounded transition-colors";

// Helper component for form input fields with label and tooltip
const FormInputField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-xs font-semibold text-gray-500">{label}</label>
      <span className="cursor-help text-xs text-gray-500">ℹ️</span>
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className={INPUT_FIELD_CLASS}
    />
  </div>
);

// Helper component for collapsible section headers
const CollapsibleHeader = ({ title }: { title: string }) => (
  <div className="flex cursor-pointer items-center justify-between">
    <span className="text-sm font-semibold text-gray-400">{title}</span>
    <span className="text-xs text-gray-400">▼</span>
  </div>
);

export const TestCard = forwardRef<HTMLDivElement>((_props, forwardedRef) => {
  return (
    <div id="testElem" ref={forwardedRef} className="w-full bg-black p-6">
      <div className="mx-auto max-w-2xl space-y-5">
        {/* Header with title and settings button */}
        <div className="flex items-center justify-between border-b border-gray-700 pb-4">
          <h1 className="text-base font-semibold text-gray-300">
            UI magician Agent
          </h1>
          <button className="text-gray-400 hover:text-gray-200">⚙️</button>
        </div>

        {/* Collapsible design section */}
        <div className="rounded border border-gray-700 px-4 py-3">
          <CollapsibleHeader title="From entire frame to a singl..." />
        </div>

        {/* Add new design prompt */}
        <div className="flex cursor-pointer items-center justify-between border-b border-gray-700 pb-2">
          <CollapsibleHeader title="Add New Design" />
        </div>

        {/* Form inputs for design configuration */}
        <div className="mt-5 space-y-4">
          <FormInputField
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />
          <FormInputField
            label="Design URL"
            placeholder="https://www.figma.com/file/:"
          />
        </div>

        {/* Action buttons for design submission */}
        <div className="flex gap-3 pt-4">
          <button className={ACTION_BUTTON_CLASS}>Awesome</button>
          <button className={ACTION_BUTTON_CLASS}>Prepare</button>
        </div>

        {/* Section header for recent design breakdowns */}
        <div className="border-t border-gray-700 pt-4">
          <h2 className="text-sm font-semibold text-gray-400">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
});

TestCard.displayName = "TestCard";
