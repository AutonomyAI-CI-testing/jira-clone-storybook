

/**
 * Chevron/Arrow Icon component for collapsible sections
 */
const ChevronIcon = (): JSX.Element => (
  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
  </svg>
);

/**
 * Info Icon component for labels
 */
const InfoIcon = (): JSX.Element => (
  <svg className="w-3 h-3 inline-block ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  className?: string;
}

/**
 * Reusable input field with label and info icon
 */
const InputField = ({ label, id, type, placeholder, className = "" }: InputFieldProps): JSX.Element => (
  <div className={className}>
    <label htmlFor={id} className="block text-xs font-medium text-gray-400 mb-1">
      {label}
      <InfoIcon />
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className="w-full px-3 py-2 bg-zinc-800 border border-gray-600 rounded-md text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    />
  </div>
);

/**
 * TestCard component for UI magician Agent interface
 */
const TestCard = (): JSX.Element => {
  return (
    <div className="p-4 bg-zinc-900 text-gray-300 w-64 mx-auto rounded-lg shadow-lg">
      {/* Top Title Row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-white">UI magician Agent</h2>
        {/* Settings/Gear Icon */}
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
      </div>

      {/* Primary Section */}
      <div className="flex items-center mb-4">
        <ChevronIcon />
        <span className="text-sm text-gray-400 truncate">From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <ChevronIcon />
          <h3 className="text-md font-semibold text-white">Add New Design</h3>
        </div>

        <InputField
          label="Personal Access Token"
          id="accessToken"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxxxxx"
          className="mb-3"
        />

        <InputField
          label="Design URL"
          id="designUrl"
          type="url"
          placeholder="https://www.figma.com/file/"
          className="mb-4"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between gap-2 mb-4">
        <button className="flex-1 py-2 px-4 bg-amber-700 hover:bg-amber-600 text-white font-semibold rounded-md transition duration-200">
          Awesome
        </button>
        <button className="flex-1 py-2 px-4 bg-amber-700 hover:bg-amber-600 text-white font-semibold rounded-md transition duration-200">
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <h3 className="text-sm font-semibold text-white">Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;

