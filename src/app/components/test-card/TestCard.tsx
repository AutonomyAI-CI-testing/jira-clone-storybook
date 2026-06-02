/**
 * TestCard Component
 *
 * A form-based UI component for the "UI magician Agent" feature.
 * Displays a design submission interface with token/URL inputs and recent breakdowns.
 */

// SVG icon paths for consistent reuse across the component
const SETTINGS_ICON_PATH =
  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z";
const SETTINGS_ICON_CENTER =
  "M15 12a3 3 0 11-6 0 3 3 0 016 0z";
const CHEVRON_ICON_PATH =
  "M19 14l-7 7m0 0l-7-7m7 7V3";

// Form field component for consistent styling across token and URL inputs
const FormField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-sm font-medium text-slate-300">{label}</label>
      {/* Help icon for additional information */}
      <button className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-500 text-xs text-slate-400 hover:bg-slate-700">
        i
      </button>
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-slate-600 bg-slate-700 px-4 py-3 text-slate-300 placeholder-slate-500 focus:border-slate-500 focus:outline-none"
    />
  </div>
);

export const TestCard = () => {
  return (
    <div id="testElem" className="min-h-screen bg-slate-900 p-8">
      <div className="mx-auto max-w-2xl rounded-lg bg-slate-800 p-6">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between border-b border-slate-700 pb-6">
          <h1 className="text-2xl font-bold text-slate-100">
            UI magician Agent
          </h1>
          {/* Settings button - navigation to preferences or configuration */}
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-600 text-slate-400 hover:bg-slate-700" aria-label="Settings">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={SETTINGS_ICON_PATH}
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={SETTINGS_ICON_CENTER}
              />
            </svg>
          </button>
        </div>

        {/* Collapsible section for additional features or documentation */}
        <div className="mb-8 border-b border-slate-700 pb-6">
          <button className="flex items-center gap-3 text-slate-400 hover:text-slate-300">
            <svg
              className="h-5 w-5 rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="Expand section"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={CHEVRON_ICON_PATH}
              />
            </svg>
            <span className="text-sm">From entire frame to a singl...</span>
          </button>
        </div>

        {/* Add New Design Section - form for submitting design URLs and tokens */}
        <div className="mb-8">
          <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold text-slate-100">
            <svg
              className="h-5 w-5 rotate-180 transform text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="Add new design section"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={CHEVRON_ICON_PATH}
              />
            </svg>
            Add New Design
          </h2>

          {/* Form Fields */}
          <div className="space-y-6">
            <FormField
              label="Personal Access Token"
              placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
            />
            <FormField
              label="Design URL"
              placeholder="https://www.figma.com/file/:"
            />
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="flex-1 rounded bg-amber-700 px-6 py-3 font-medium text-slate-100 hover:bg-amber-600 active:bg-amber-800">
              Awesome
            </button>
            <button className="flex-1 rounded bg-amber-700 px-6 py-3 font-medium text-slate-100 hover:bg-amber-600 active:bg-amber-800">
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="border-t border-slate-700 pt-6">
          <h3 className="text-lg font-semibold text-slate-100">
            Recent Breakdowns
          </h3>
        </div>
      </div>
    </div>
  );
};
