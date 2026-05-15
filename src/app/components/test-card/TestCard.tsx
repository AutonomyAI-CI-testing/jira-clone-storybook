/**
 * Settings icon - 9 dots arranged in a grid pattern
 */
const SettingsIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-[#b5b5b5]"
    aria-label="Settings"
  >
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <circle cx="12" cy="5" r="2" fill="currentColor" />
    <circle cx="12" cy="19" r="2" fill="currentColor" />
    <circle cx="5" cy="12" r="2" fill="currentColor" />
    <circle cx="19" cy="12" r="2" fill="currentColor" />
    <circle cx="7" cy="7" r="1.5" fill="currentColor" />
    <circle cx="17" cy="7" r="1.5" fill="currentColor" />
    <circle cx="7" cy="17" r="1.5" fill="currentColor" />
    <circle cx="17" cy="17" r="1.5" fill="currentColor" />
  </svg>
);

/**
 * Chevron up icon for collapsible sections
 */
const ChevronUpIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="text-[#b5b5b5]"
    aria-hidden="true"
  >
    <path
      d="M4 10L8 6L12 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Info icon for help tooltips
 */
const InfoIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    className="text-[#b5b5b5]"
    aria-label="Help"
  >
    <circle
      cx="10"
      cy="10"
      r="8"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M10 14V10M10 6H10.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * Reusable form field with label and optional info icon
 */
const FormField = ({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) => (
  <div className="mb-5">
    <div className="mb-2 flex items-center gap-2">
      <label className="text-base text-[#b5b5b5]">{label}</label>
      <InfoIcon />
    </div>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded border border-[#3a3a35] bg-[#272822] px-4 py-3 text-[#6b6b65] placeholder-[#6b6b65] outline-none focus:border-[#4a4a45]"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[508px] rounded bg-[#1e1e1a] px-10 py-8 font-sans">
      {/* Header: Title + Settings Icon */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-normal text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible subtitle - large bottom margin creates visual separation */}
      <div className="mb-32 flex items-center gap-3">
        <ChevronUpIcon />
        <span className="text-base text-[#b5b5b5]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section header */}
      <div className="mb-10 flex items-center gap-3">
        <ChevronUpIcon />
        <h2 className="text-xl font-normal text-[#b5b5b5]">Add New Design</h2>
      </div>

      {/* Form inputs for Figma integration */}
      <FormField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <div className="mb-10">
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action Buttons - same styling for both to maintain visual consistency */}
      <div className="mb-20 flex gap-4">
        <button className="flex-1 rounded bg-[#8b4513] px-6 py-3 text-base font-medium text-white hover:bg-[#9a5423]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#8b4513] px-6 py-3 text-base font-medium text-white hover:bg-[#9a5423]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <h2 className="text-xl font-normal text-[#b5b5b5]">Recent Breakdowns</h2>

      {/* Footer with copyright */}
      <div className="mt-8 border-t border-gray-300 pt-3 text-center">
        <p className="text-sm text-[#b5b5b5]">© AutonomyAI</p>
      </div>
    </div>
  );
};

