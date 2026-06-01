// SVG icons used throughout the component
const SettingsIcon = () => (
  <svg
    className="h-4 w-4 text-[#b2b2b1]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    className="h-4 w-4 text-[#b0b0b0]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    className="h-4 w-4 text-[#b5b5b5]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// Reusable text input field component with label
interface TextInputFieldProps {
  label: string;
  placeholder: string;
}

const TextInputField = ({ label, placeholder }: TextInputFieldProps) => (
  <div>
    <label className="mb-1 block text-xs text-[#a4a4a3]">{label}</label>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded border border-[#333] bg-[#1a1a1a] px-2 py-1.5 text-xs text-[#737470] placeholder-[#737470] focus:border-[#444] focus:outline-none"
    />
  </div>
);

// Reusable action button component
interface ActionButtonProps {
  label: string;
}

const ActionButton = ({ label }: ActionButtonProps) => (
  <button className="flex-1 rounded bg-[#c86b2f] px-3 py-2 font-primary-bold text-xs text-[#8c8078] transition-colors hover:bg-[#d97a3f]">
    {label}
  </button>
);

export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="w-[254px] bg-black p-4 font-primary-bold text-sm"
    >
      {/* Header with agent name and settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xs text-[#b5b5b5]">UI magician Agent</h1>
        <SettingsIcon />
      </div>

      {/* Collapsible section showing a previous task; currently collapsed */}
      <div className="mb-4 flex items-center justify-between border-b border-[#333] py-2">
        <span className="text-xs text-[#b0b0b0]">
          From entire frame to a singl...
        </span>
        <ChevronRightIcon />
      </div>

      {/* Expandable section for adding new design; currently collapsed */}
      <div className="mb-4 flex items-center justify-between border-b border-[#333] py-2">
        <span className="text-xs text-[#b5b5b5]">Add New Design</span>
        <ChevronDownIcon />
      </div>

      {/* Input Fields for GitHub token and Figma design URL */}
      <div className="mb-4 space-y-3">
        <TextInputField
          label="Personal Access Token"
          placeholder="Paste your GitHub token..."
        />
        <TextInputField
          label="Design URL"
          placeholder="Paste your Figma design file URL..."
        />
      </div>

      {/* Action Buttons for user interaction */}
      <div className="mb-4 flex gap-2">
        <ActionButton label="Awesome" />
        <ActionButton label="Prepare" />
      </div>

      {/* Recent Breakdowns Section */}
      <div className="border-t border-[#333] pt-3">
        <p className="text-xs text-[#8b9291]">Recent Breakdowns</p>
      </div>
    </div>
  );
};
