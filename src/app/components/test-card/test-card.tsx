// Small circular info icon used throughout the form
const InfoIcon = (): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    className="text-gray-500 h-3.5 w-3.5"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="0.8" />
    <text x="7.5" y="10" textAnchor="middle" className="fill-current text-xs">
      i
    </text>
  </svg>
);

// Chevron icon used for collapsible sections
const ChevronIcon = ({ className }: { className: string }): JSX.Element => (
  <svg width="8" height="5" viewBox="0 0 8 5" fill="none" className={className}>
    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Menu dots icon in header
const MenuDotsIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    className="text-gray-400 h-4 w-4"
  >
    <circle cx="7" cy="8" r="1.5" fill="currentColor" />
    <circle cx="7" cy="3" r="0.8" fill="currentColor" />
    <circle cx="10" cy="5.5" r="0.8" fill="currentColor" />
    <circle cx="10" cy="10.5" r="0.8" fill="currentColor" />
    <circle cx="7" cy="13" r="0.8" fill="currentColor" />
    <circle cx="4" cy="10.5" r="0.8" fill="currentColor" />
    <circle cx="4" cy="5.5" r="0.8" fill="currentColor" />
  </svg>
);

// Shared button className for action buttons
const ACTION_BUTTON_CLASS =
  "flex-1 rounded bg-orange-800 px-4 py-2 text-center text-xs font-semibold text-gray-500 hover:bg-orange-700 active:bg-orange-900";

// Input field with label and optional info icon
const FormInput = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}): JSX.Element => (
  <div>
    <div className="mb-3 flex items-center gap-2">
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
    <div className="w-[254px] bg-black p-5">
      {/* Header Section */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-gray-400 text-sm font-semibold">
          UI magician Agent
        </h1>
        <MenuDotsIcon />
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronIcon className="text-gray-500 h-1.5 w-2" />
        <span className="text-gray-500 text-xs font-semibold">
          From entire frame to a singl...
        </span>
      </div>

      {/* Form Section - Add New Design */}
      <div className="mb-6">
        <div className="mb-6 flex items-center gap-2">
          <ChevronIcon className="text-gray-400 h-1.5 w-2" />
          <h2 className="text-gray-400 text-sm font-semibold">
            Add New Design
          </h2>
        </div>

        {/* Personal Access Token Input */}
        <div className="mb-6">
          <FormInput
            label="Personal Access Token"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
          />
        </div>

        {/* Design URL Input */}
        <FormInput
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action Buttons */}
      <div className="mb-8 flex gap-4">
        <button className={ACTION_BUTTON_CLASS}>Awesome</button>
        <button className={ACTION_BUTTON_CLASS}>Prepare</button>
      </div>

      {/* Footer */}
      <div>
        <h3 className="text-gray-400 text-sm font-semibold">
          Recent Breakdowns
        </h3>
      </div>

      {/* Copyright Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-gray-400 text-xs">© AutonomyAI</p>
      </div>
    </div>
  );
};
