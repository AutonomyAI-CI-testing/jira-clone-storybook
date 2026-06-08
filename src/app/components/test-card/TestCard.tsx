// Reusable chevron icon component for collapsible sections
const ChevronIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mr-1 h-3 w-3 text-[#8c8078]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
  </svg>
);

// Reusable info icon component for input labels
const InfoIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-500 hover:text-gray-400 ml-1 h-3 w-3 cursor-pointer"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Reusable wand icon component for the header
const WandIcon = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="text-gray-400 h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M11.49 3.17c-.36-.45-.96-.65-1.57-.65s-1.21.2-1.57.65c-.6.75-.48 2.37.28 3.12 1.35 1.35 2.11 2.38 2.11 3.52v.03c0 .88-.3 1.74-.84 2.45-.63.85-1.55 1.83-2.5 2.62a7.35 7.35 0 01-1.4.92 7.02 7.02 0 01-1.07.41V20l1.9-1.55c.19-.15.4-.2.6-.2s.4.05.6.2l1.9 1.55v-.91a10.02 10.02 0 001.07-.41 7.35 7.35 0 001.4-.92c.95-.79 1.87-1.77 2.5-2.62.54-.71.84-1.57.84-2.45v-.03c0-1.14.76-2.17 2.11-3.52.76-.75.88-2.37.28-3.12zm.28.25c.18-.21.46-.3.73-.3.28 0 .56.09.73.3.38.47.3 1.15-.09 1.54-.42.42-1.03.54-1.5.34a.97.97 0 01-.27-.24c-.38-.38-.47-1.06-.09-1.54zm-.73 7.82V9.61c0-1.2.78-2.22 2.13-3.05.5-.31.85-.7.98-1.1.2-.62-.05-1.25-.66-1.45-.4-.13-.77-.07-1.07.12-.46.28-.9-.12-1.05-.62a1.5 1.5 0 00-2.44 0c-.15.5-.59.9-.99.62-.3-.19-.67-.25-1.07-.12-.61.2-.86.83-.66 1.45.13.4.48.79.98 1.1 1.35.83 2.13 1.85 2.13 3.05z"
      clipRule="evenodd"
    />
  </svg>
);

// Reusable input field component for token and URL inputs
interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField = ({ label, placeholder }: InputFieldProps): JSX.Element => (
  <div className="mb-4">
    <label className="mb-1 flex items-center text-xs text-[#a4a4a3]">
      {label}
      <InfoIcon />
    </label>
    <input
      type="text"
      placeholder={placeholder}
      className="focus:border-blue-500 w-full rounded-md border border-[#4a4a4a] bg-[#333333] p-2 text-sm placeholder-[#737470] focus:outline-none"
    />
  </div>
);

// Reusable button component for action buttons
interface ActionButtonProps {
  label: string;
}

const ActionButton = ({ label }: ActionButtonProps): JSX.Element => (
  <button className="flex-1 rounded-lg bg-[#8B4A2E] py-2 text-sm font-medium text-[#8c8078] hover:opacity-90 focus:outline-none">
    {label}
  </button>
);

// Main TestCard component
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="font-sans bg-[#2a2a2a] p-4 text-[#b5b5b5]">
      {/* Header with title and wand icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-bold text-[#b5b5b5]">UI magician Agent</h1>
        <WandIcon />
      </div>

      {/* Subtitle describing the component's purpose */}
      <div className="mb-6 flex items-center text-[#8b9291]">
        <ChevronIcon />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer for visual separation */}
      <div className="h-8"></div>

      {/* "Add New Design" section header with chevron */}
      <div className="mb-4 flex items-center text-[#a3a3a2]">
        <ChevronIcon />
        <h2 className="text-sm font-bold">Add New Design</h2>
      </div>

      {/* Input fields for Figma credentials */}
      <InputField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />
      <div className="mb-6">
        <InputField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action buttons */}
      <div className="mb-8 flex justify-around gap-4">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent Breakdowns section header */}
      <div>
        <h2 className="text-sm text-[#b0b0b0]">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
