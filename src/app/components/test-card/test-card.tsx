// SVG icons used throughout the component
const DotsMenuIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="text-gray-500"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="bg-black p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-gray-400 text-base font-semibold">
          UI magician Agent
        </h1>
        <button className="text-gray-500 hover:text-gray-400">
          <DotsMenuIcon />
        </button>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <ChevronDownIcon />
        <p className="text-gray-500 text-xs">From entire frame to a singl...</p>
      </div>

      <div className="mb-6 flex items-center gap-2">
        <ChevronDownIcon />
        <h2 className="text-gray-400 text-sm font-semibold">Add New Design</h2>
      </div>

      <div className="space-y-4">
        <FormInputField
          label="Personal Access Token"
          type="password"
          placeholder="Paste your personal access token"
        />
        <FormInputField
          label="Design URL"
          type="text"
          placeholder="https://figma.com/file/..."
        />
      </div>

      <div className="mt-6 flex gap-3">
        <button className="border-gray-700 bg-gray-800 text-gray-300 hover:bg-gray-700 flex-1 border px-4 py-2 text-xs font-semibold">
          Awesome
        </button>
        <button className="bg-gray-700 text-gray-300 hover:bg-gray-600 flex-1 px-4 py-2 text-xs font-semibold">
          Prepare
        </button>
      </div>

      <div className="mt-8 flex items-center gap-2">
        <ChevronDownIcon />
        <h3 className="text-gray-400 text-sm font-semibold">
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};

interface FormInputFieldProps {
  label: string;
  type: "text" | "password";
  placeholder: string;
}

/**
 * Reusable form input field component with label and info icon.
 * Extracts common input styling and layout to reduce code duplication.
 */
const FormInputField = ({ label, type, placeholder }: FormInputFieldProps) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label className="text-gray-500 text-xs font-semibold">{label}</label>
      <button className="text-gray-600 hover:text-gray-500">
        <InfoIcon />
      </button>
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="border-gray-700 text-gray-300 placeholder-gray-600 focus:border-gray-500 w-full border bg-black px-3 py-2 text-xs focus:outline-none"
    />
  </div>
);
