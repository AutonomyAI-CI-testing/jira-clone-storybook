// Icon components extracted for reusability and clarity
const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronUpIcon = ({
  className,
  size = "18",
}: {
  className?: string;
  size?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M18 15L12 9L6 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 16V12M12 8H12.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Form field with label and info icon, used for both token and URL inputs
const FormField = ({
  label,
  placeholder,
  borderClassName,
}: {
  label: string;
  placeholder: string;
  borderClassName: string;
}) => (
  <div className="flex flex-col gap-3">
    <label className="flex items-center gap-1.5 text-[16px] text-[#a4a4a3]">
      <span>{label}</span>
      <InfoIcon className="text-[#a4a4a3]" />
    </label>
    <input
      type="text"
      readOnly
      placeholder={placeholder}
      className={`w-full ${borderClassName} bg-[#272822] px-4 py-3.5 text-[13px] font-semibold text-[#737470] placeholder:text-[#737470]`}
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex w-[460px] flex-col gap-8 bg-[#1C1D17] p-8 font-semibold text-[#b5b5b5]">
      {/* Header with settings icon */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[24px]">UI magician Agent</h1>
        <SettingsIcon className="text-[#b5b5b5]" />
      </div>

      {/* Collapsible subtitle section */}
      <div className="mb-2 flex items-center gap-2 pl-2 text-[18px] text-[#8b9291]">
        <ChevronUpIcon className="text-[#8b9291]" size="18" />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Spacing for visual separation */}
      <div className="h-16" />

      {/* Collapsible section for adding new design */}
      <div className="mb-6 flex items-center gap-2 text-[24px] text-[#b2b2b1]">
        <ChevronUpIcon className="text-[#b2b2b1]" size="20" />
        <span>Add New Design</span>
      </div>

      {/* Figma personal access token input */}
      <div className="mb-6">
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          borderClassName="border border-[#a5adad]"
        />
      </div>

      {/* Figma design URL input with thicker border to emphasize required field */}
      <div className="mb-8">
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          borderClassName="border-2 border-[#929291]"
        />
      </div>

      {/* Action buttons for workflow */}
      <div className="mb-12 flex gap-5">
        <button className="w-[100px] rounded bg-[#843A17] px-5 py-3 text-[16px] text-[#8c8078]">
          Awesome
        </button>
        <button className="w-[100px] rounded bg-[#843A17] px-5 py-3 text-[16px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section heading for history */}
      <h2 className="text-[20px] text-[#b0b0b0]">Recent Breakdowns</h2>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p>© AutonomyAI</p>
      </div>
    </div>
  );
};
