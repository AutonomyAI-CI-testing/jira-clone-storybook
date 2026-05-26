import { useState } from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

/**
 * InputField: Reusable form field with label, info button, and input.
 * Used for Personal Access Token and Design URL fields.
 */
const InputField = ({
  label,
  type,
  placeholder,
}: InputFieldProps): JSX.Element => (
  <div>
    <div className="mb-2 flex items-center gap-1">
      <label className="text-gray-400 text-xs font-semibold">{label}</label>
      <button
        className="text-gray-500 flex h-3 w-3 items-center justify-center"
        aria-label="Info"
      >
        <span className="text-sm">ⓘ</span>
      </button>
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="border-gray-700 bg-gray-900 text-gray-600 placeholder-gray-600 w-full border px-3 py-2 text-xs font-semibold focus:outline-none"
    />
  </div>
);

// Action button styles for the form submission buttons
const ACTION_BUTTON_CLASS =
  "flex-1 rounded bg-orange-700 py-2 text-sm font-semibold text-gray-500 hover:bg-orange-800";

const TestCard = (): JSX.Element => {
  const [isFirstCollapsed, setIsFirstCollapsed] = useState<boolean>(true);
  const [isSecondCollapsed, setIsSecondCollapsed] = useState<boolean>(false);

  return (
    <div className="min-h-screen w-64 bg-black p-5">
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between">
        <h1 className="text-gray-300 text-sm font-bold">UI magician Agent</h1>
        <button
          className="text-gray-400 flex h-4 w-4 items-center justify-center"
          aria-label="Settings"
        >
          {/* Settings/gear icon using Unicode */}
          <span className="text-lg">⚙</span>
        </button>
      </div>

      {/* Collapsible section 1: "From entire frame to a singl..." */}
      <div className="mt-8">
        <button
          onClick={() => setIsFirstCollapsed(!isFirstCollapsed)}
          className="text-gray-500 flex items-center gap-2"
        >
          {/* Chevron icon - both states show same character as visual indicator */}
          <span className="text-xs">{isFirstCollapsed ? "^" : "^"}</span>
          <span className="text-xs font-semibold">
            From entire frame to a singl...
          </span>
        </button>
      </div>

      {/* Collapsible section 2: "Add New Design" */}
      <div className="mt-10">
        <button
          onClick={() => setIsSecondCollapsed(!isSecondCollapsed)}
          className="text-gray-400 flex items-center gap-2"
        >
          {/* Chevron icon - both states show same character as visual indicator */}
          <span className="text-xs">{isSecondCollapsed ? "^" : "^"}</span>
          <span className="text-sm font-semibold">Add New Design</span>
        </button>

        {/* Content when expanded */}
        {!isSecondCollapsed && (
          <div className="mt-6 space-y-4">
            <InputField
              label="Personal Access Token"
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
            />
            <InputField
              label="Design URL"
              type="text"
              placeholder="https://www.figma.com/file/:"
            />

            {/* Action buttons */}
            <div className="flex gap-3 pt-2">
              <button className={ACTION_BUTTON_CLASS}>Awesome</button>
              <button className={ACTION_BUTTON_CLASS}>Prepare</button>
            </div>
          </div>
        )}
      </div>

      {/* Recent Breakdowns section */}
      <div className="mt-12">
        <h2 className="text-gray-300 text-sm font-semibold">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer section */}
      <div className="border-gray-300 text-gray-400 border-t pt-3 text-center text-xs">
        © AutonomyAI
      </div>
    </div>
  );
};

export { TestCard };
export default TestCard;
