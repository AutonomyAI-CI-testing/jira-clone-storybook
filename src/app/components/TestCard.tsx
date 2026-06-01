import cx from "classix";

/**
 * Reusable info icon button component.
 * Consistent styling for contextual help buttons across the form.
 */
const InfoIconButton = (): JSX.Element => (
  <button
    type="button"
    className="text-gray-600 hover:text-gray-500"
    aria-label="Info"
  >
    <svg
      className="h-3.5 w-3.5"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      />
    </svg>
  </button>
);

/**
 * Reusable form field component to avoid style duplication.
 * Applies consistent dark theme input styling across the form.
 */
const FormInput = ({
  placeholder,
  type = "text",
}: {
  placeholder: string;
  type?: string;
}): JSX.Element => (
  <input
    type={type}
    placeholder={placeholder}
    className={cx(
      "w-full rounded border bg-gray-900 px-3 py-2 text-xs text-gray-400 placeholder-gray-600",
      "border-gray-700 focus:border-gray-600 focus:outline-none"
    )}
  />
);

/**
 * TestCard Component - Smoke Test
 * A self-contained form interface for adding Figma designs.
 * Dark theme with collapsible sections, input fields, and action buttons.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex min-h-screen items-center justify-center bg-black"
    >
      <div className="w-64 rounded bg-black px-4 py-6">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-sm font-semibold text-gray-400">
            UI magician Agent
          </h1>
          <button
            type="button"
            className="text-gray-500 hover:text-gray-400"
            aria-label="Settings"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M10.5 1.5H9.5V.5h1v1zM10.5 19.5H9.5v-1h1v1zM1.5 10.5V9.5H.5v1h1zM19.5 10.5v-1h1v1h-1zM3.77 3.77L3.08 3.08l.707-.707.69.69zM16.23 16.23l-.707.707-.69-.69.707-.707zM3.08 16.23l.69.69-.707.707-.69-.69.707-.707zM16.23 3.77l.707-.707.69.69-.707.707-.69-.69z" />
            </svg>
          </button>
        </div>

        {/* Collapsible Section */}
        <div className="mb-6 space-y-3">
          <button
            type="button"
            className="flex w-full items-center justify-between text-left"
          >
            <span className="text-xs font-semibold text-gray-500">
              From entire frame to a singl...
            </span>
            <span className="text-gray-600">▼</span>
          </button>
        </div>

        {/* Add New Design Section */}
        <div className="mb-6 flex items-center justify-between border-t border-gray-700 py-3">
          <span className="text-xs font-semibold text-gray-500">
            Add New Design
          </span>
          <span className="text-gray-600">›</span>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Personal Access Token Field */}
          <div>
            <div className="mb-2 flex items-center gap-1">
              <label className="text-xs font-semibold text-gray-500">
                Personal Access Token
              </label>
                 <InfoIconButton />
            </div>
            <FormInput placeholder="Enter your token" />
          </div>

          {/* Design URL Field */}
          <div>
            <div className="mb-2 flex items-center gap-1">
              <label className="text-xs font-semibold text-gray-500">
                Design URL
              </label>
              <InfoIconButton />
            </div>
            <FormInput placeholder="Enter design URL" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-2">
          <button
            type="button"
            className={cx(
              "flex-1 rounded border border-gray-700 px-3 py-2 text-xs font-semibold",
              "bg-gray-900 text-gray-500 hover:bg-gray-800"
            )}
          >
            Awesome
          </button>
          <button
            type="button"
            className={cx(
              "flex-1 rounded px-3 py-2 text-xs font-semibold",
              "bg-yellow-700 text-gray-900 hover:bg-yellow-600"
            )}
          >
            Prepare
          </button>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <h3 className="text-xs font-semibold text-gray-500">
            Recent Breakdowns
          </h3>
          <p className="mt-2 text-xs text-gray-600">
            No recent breakdowns yet
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
