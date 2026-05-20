/**
 * Icon components used in the TestCard
 * Extracted to reduce JSX nesting and improve readability
 */
const SettingsIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 15l7-7 7 7"
    />
  </svg>
);

const InfoIcon = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="More information"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

/**
 * FormField component for reusable input field structure
 * Reduces duplication between the two form inputs
 */
interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  labelClassName: string;
  inputClassName: string;
}

const FormField = ({
  id,
  label,
  placeholder,
  labelClassName,
  inputClassName,
}: FormFieldProps) => (
  <div>
    <div className="mb-2 flex items-center gap-2">
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      <InfoIcon className="h-5 w-5 text-[#9a9a9a]" />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className={inputClassName}
    />
  </div>
);

/**
 * TestCard component - UI for configuring Figma design imports
 * Features a dark-themed card with form inputs for authentication and URL entry
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="w-64 rounded bg-[#242420] p-6 font-sans font-semibold text-white">
      {/* Header with title and settings button */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon className="h-6 w-6 text-[#9a9a9a]" />
      </div>

      {/* Subtitle section - shows truncated description */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronUpIcon className="h-4 w-4 text-[#8b9291]" />
        <p className="truncate text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Section header for the form */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronUpIcon className="h-4 w-4 text-[#b2b2b1]" />
        <h2 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Figma personal access token input */}
      <div className="mb-4">
        <FormField
          id="token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          labelClassName="text-[11.5px] leading-[13.92px] text-[#a4a4a3]"
          inputClassName="h-[44px] w-full rounded border border-[#a5adad] bg-[#272822] px-4 py-3 text-[11.5px] leading-[13.92px] text-[#737470] placeholder-[#737470] outline-none"
        />
      </div>

      {/* Figma design URL input */}
      <div className="mb-7">
        <FormField
          id="url"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          labelClassName="text-[11.5px] leading-[13.92px] text-[#a3a3a2]"
          inputClassName="h-[44px] w-full rounded border border-[#929291] bg-[#272822] px-4 py-3 text-[10.5px] leading-[12.71px] text-[#71726e] placeholder-[#71726e] outline-none"
        />
      </div>

      {/* Action buttons for form submission */}
      <div className="mb-12 flex gap-4">
        <button className="h-[42px] w-[95px] rounded bg-[#843a17] text-[13px] leading-[15.73px] text-[#8c8078]">
          Awesome
        </button>
        <button className="h-[42px] w-[95px] rounded bg-[#843a17] text-[13px] leading-[15.73px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section for displaying recent breakdowns (content not yet implemented) */}
      <div>
        <h2 className="text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright notice */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11.5px] leading-[13.92px] text-[#a4a4a3]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
