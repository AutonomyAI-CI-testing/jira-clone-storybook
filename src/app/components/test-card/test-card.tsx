// Icon button used in header and form fields for info/action icons
const IconButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    className="flex items-center justify-center rounded-full border border-[#737470] text-[#737470] hover:border-[#8b9291] hover:text-[#8b9291]"
    {...props}
  />
);

// Form input field with label and optional info button
interface FormInputProps {
  label: string;
  placeholder: string;
  value: string;
}

const FormInput = ({ label, placeholder, value }: FormInputProps) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <label className="text-sm font-bold text-[#b5b5b5]">{label}</label>
      <IconButton>
        <span className="text-[9px] leading-none">i</span>
      </IconButton>
    </div>
    <input
      type="text"
      placeholder={placeholder}
      className="w-full border-[1px] border-[#5a5a5a] bg-black px-3 py-3 text-sm font-semibold text-[#737470] placeholder-[#737470] focus-visible:border-[#8b9291] focus-visible:outline-none"
      value={value}
      readOnly
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-full max-w-sm bg-black p-6 text-white">
      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <h1 className="text-base font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <IconButton className="h-6 w-6">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
          >
            {/* Atom icon with orbital rings */}
            <circle cx="12" cy="12" r="2" />
            <ellipse cx="12" cy="12" rx="6" ry="3" />
            <ellipse cx="12" cy="12" rx="6" ry="3" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="6" ry="3" transform="rotate(120 12 12)" />
          </svg>
        </IconButton>
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-12 space-y-2">
        <button className="flex w-full items-center justify-between text-xs font-semibold text-[#8b9291]">
          <span>From entire frame to a singl...</span>
          <span className="text-[#8b9291]">^</span>
        </button>
      </div>

      {/* Add New Design Section */}
      <div className="mb-12 space-y-5">
        <button className="flex w-full items-center justify-between text-base font-bold text-[#b2b2b1]">
          <span>Add New Design</span>
          <span className="text-[#b2b2b1]">^</span>
        </button>

        {/* Form inputs for design configuration */}
        <FormInput
          label="Personal Access Token"
          placeholder="fiqd_xxxxxxxxxxxxxxxxx"
          value="fiqd_xxxxxxxxxxxxxxxxx"
        />
        <FormInput
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          value="https://www.figma.com/file/:"
        />

        {/* Action Buttons */}
        <div className="flex gap-4 pt-5">
          <button className="flex-1 rounded-md bg-[#c77e4a] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#d18d54] active:bg-[#b86f3d]">
            Awesome
          </button>
          <button className="flex-1 rounded-md bg-[#c77e4a] px-6 py-3 text-center text-sm font-bold text-white hover:bg-[#d18d54] active:bg-[#b86f3d]">
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Footer */}
      <div className="pt-12 text-base font-bold text-[#b5b5b5]">
        Recent Breakdowns
      </div>

      {/* Copyright Footer */}
      <div className="mt-6 border-t border-gray-300 pt-3 text-center text-xs text-[#b5b5b5]">
        © AutonomyAI
      </div>
    </div>
  );
};
