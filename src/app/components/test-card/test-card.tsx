// SVG icon for three-dot menu
const MenuIcon = (): JSX.Element => (
  <svg
    className="h-4 w-4 text-gray-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

// SVG icon for info tooltip
const InfoIcon = (): JSX.Element => (
  <svg className="h-3 w-3 text-gray-600" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" />
    <text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">
      i
    </text>
  </svg>
);

// SVG icon for collapsed accordion state (right-pointing chevron)
const ChevronRightIcon = (): JSX.Element => (
  <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24">
    <polyline points="9 18 15 12 9 6" stroke="currentColor" />
  </svg>
);

// SVG icon for expanded accordion state (down-pointing chevron)
const ChevronDownIcon = (): JSX.Element => (
  <svg className="h-4 w-4 text-gray-500" viewBox="0 0 24 24">
    <polyline points="6 9 12 15 18 9" stroke="currentColor" />
  </svg>
);

// Form input field with label and optional info tooltip
interface FormFieldProps {
  label: string;
  placeholder: string;
}

const FormField = ({ label, placeholder }: FormFieldProps): JSX.Element => (
  <div className="space-y-1">
    <div className="flex items-center gap-1">
      <label className="text-xs text-gray-500">{label}</label>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border border-gray-700 bg-gray-900 px-2 py-1.5 text-xs text-gray-600 placeholder-gray-600 focus:border-gray-500 focus:outline-none"
    />
  </div>
);

// Action button for form submission
interface ActionButtonProps {
  label: string;
}

const ActionButton = ({ label }: ActionButtonProps): JSX.Element => (
  <button className="flex-1 bg-amber-900 px-3 py-1.5 text-xs font-semibold text-gray-300 hover:bg-amber-800">
    {label}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-black p-6 text-sm font-semibold">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-base font-semibold text-gray-400">
            UI magician Agent
          </h1>
          <MenuIcon />
        </div>

        {/* First Accordion - Collapsed */}
        <div className="space-y-2 border-t border-gray-800 pt-4">
          <div className="flex cursor-pointer items-center gap-2">
            <ChevronRightIcon />
            <span className="text-gray-400">
              From entire frame to a singl...
            </span>
          </div>
        </div>

        {/* Second Accordion - Expanded */}
        <div className="space-y-3 border-t border-gray-800 pt-4">
          <div className="flex cursor-pointer items-center gap-2">
            <ChevronDownIcon />
            <span className="text-gray-400">Add New Design</span>
          </div>

          {/* Form Section */}
          <div className="space-y-3 bg-gray-950 p-3">
            <FormField
              label="Personal Access Token"
              placeholder="figd_xxxxxxxxxxxxxxxxxx"
            />
            <FormField
              label="Design URL"
              placeholder="https://www.figma.com/file/:"
            />

            {/* Action Buttons */}
            <div className="flex gap-2 pt-2">
              <ActionButton label="Awesome" />
              <ActionButton label="Prepare" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-4">
          <h2 className="text-xs font-semibold text-gray-500">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};
