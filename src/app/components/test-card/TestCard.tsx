interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  marginBottom?: string;
}

// Shared form field component to reduce duplication
const FormField = ({ id, label, placeholder, marginBottom = 'mb-4' }: FormFieldProps) => (
  <div className={marginBottom}>
    <label htmlFor={id} className="block text-gray-400 text-sm font-bold mb-2 flex items-center">
      {label} <span className="ml-1 text-xs">ⓘ</span>
    </label>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-700 border-gray-600"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="dark bg-zinc-900 min-h-screen p-4 text-white">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">UI magician Agent</h1>
        <span className="text-xl">⚙</span>
      </div>

      {/* Secondary Row */}
      <div className="flex items-center text-amber-500 mb-4">
        <span className="mr-2">⬆</span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-4"></div>

      {/* Add New Design Section */}
      <div className="mb-4">
        <h2 className="text-lg font-bold flex items-center">
          <span className="mr-2">⬆</span>
          Add New Design
        </h2>
      </div>

      {/* Form Fields */}
      <FormField
        id="accessToken"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <FormField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/"
        marginBottom="mb-6"
      />

      {/* Action Buttons */}
      <div className="flex justify-start space-x-4 mb-8">
        <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">
          Awesome
        </button>
        <button className="bg-orange-700 hover:bg-orange-800 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline">
          Prepare
        </button>
      </div>

      {/* Footer Section */}
      <div>
        <h2 className="text-lg font-bold">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
