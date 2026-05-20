import cx from "classix";

// Info icon SVG component used in form field labels
const InfoIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 15 15"
    fill="none"
    className="text-[#A4A4A3]"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M7.5 10.5V7.5M7.5 4.5H7.51"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Reusable form field component with label and info icon
interface FormFieldProps {
  label: string;
  placeholder: string;
  inputClassName: string;
}

const FormField = ({
  label,
  placeholder,
  inputClassName,
}: FormFieldProps) => (
  <div className="mb-7">
    <div className="mb-2 flex items-center gap-1">
      <span className="font-['Inter'] text-[14px] font-medium text-[#A4A4A3]">
        {label}
      </span>
      <InfoIcon />
    </div>
    <input
      type="text"
      placeholder={placeholder}
      readOnly
      className={inputClassName}
    />
  </div>
);

// Reusable action button component
interface ActionButtonProps {
  children: React.ReactNode;
}

const ActionButton = ({ children }: ActionButtonProps) => (
  <button
    type="button"
    className={cx(
      "flex h-[48px] w-[110px] cursor-pointer items-center justify-center rounded bg-[#843A17] px-4",
      "font-['Inter'] text-[13px] font-semibold text-[#8C8078]",
      "outline-none hover:opacity-90 transition-opacity"
    )}
  >
    {children}
  </button>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="w-[254px] overflow-hidden rounded-lg bg-[#1C1D17]">
      {/* Decorative gradient bar at top */}
      <div className="h-[9px] bg-gradient-to-r from-[#843A17] to-[#C85A20]" />

      {/* Card content */}
      <div className="p-6">
        {/* Header section */}
        <div className="mb-3 flex items-center justify-between">
          <span className="font-['Inter'] text-[20px] font-bold text-[#B2B2B1]">
            UI magician Agent
          </span>
          {/* Settings gear icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 14 14"
            fill="none"
            className="text-[#737470]"
          >
            <path
              d="M7 4.5C5.62 4.5 4.5 5.62 4.5 7C4.5 8.38 5.62 9.5 7 9.5C8.38 9.5 9.5 8.38 9.5 7C9.5 5.62 8.38 4.5 7 4.5ZM12.43 6.3L11.24 5.6C11.32 5.21 11.32 4.79 11.24 4.4L12.43 3.7C12.59 3.6 12.64 3.39 12.54 3.23L11.47 1.27C11.37 1.11 11.16 1.06 11 1.13L9.64 1.71C9.33 1.46 8.98 1.27 8.6 1.13L8.4 -0.25C8.37 -0.43 8.21 -0.55 8.03 -0.55H5.97C5.79 -0.55 5.63 -0.43 5.6 -0.25L5.4 1.13C5.02 1.27 4.67 1.46 4.36 1.71L2.99 1.13C2.84 1.06 2.63 1.11 2.53 1.27L1.46 3.23C1.36 3.39 1.41 3.6 1.57 3.7L2.76 4.4C2.68 4.79 2.68 5.21 2.76 5.6L1.57 6.3C1.41 6.4 1.36 6.61 1.46 6.77L2.53 8.73C2.63 8.89 2.84 8.94 3 8.87L4.36 8.29C4.67 8.54 5.02 8.73 5.4 8.87L5.6 10.25C5.63 10.43 5.79 10.55 5.97 10.55H8.03C8.21 10.55 8.37 10.43 8.4 10.25L8.6 8.87C8.98 8.73 9.33 8.54 9.64 8.29L11 8.87C11.16 8.94 11.37 8.89 11.47 8.73L12.54 6.77C12.64 6.61 12.59 6.4 12.43 6.3Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Subtitle with chevron */}
        <div className="mb-[90px] flex items-center gap-1.5">
          {/* Small chevron up */}
          <svg
            width="12"
            height="7"
            viewBox="0 0 8 5"
            fill="none"
            className="text-[#8B9291]"
          >
            <path
              d="M1 4L4 1L7 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-['Inter'] text-[13px] text-[#8B9291]">
            From entire frame to a singl...
          </span>
        </div>

        {/* Add New Design section */}
        <div className="mb-10 flex items-center gap-2">
          {/* Chevron up */}
          <svg
            width="18"
            height="12"
            viewBox="0 0 12 8"
            fill="none"
            className="text-[#B2B2B1]"
          >
            <path
              d="M2 7L6 3L10 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-['Inter'] text-[15px] font-semibold text-[#B2B2B1]">
            Add New Design
          </span>
        </div>

        {/* Form fields for token and URL */}
        <FormField
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          inputClassName={cx(
            "h-[56px] w-[211px] rounded border-[3px] border-[#929291] bg-[#272822] px-4",
            "font-['Inter'] text-[10.5px] text-[#737470] placeholder-[#737470]",
            "outline-none"
          )}
        />
        <FormField
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
          inputClassName={cx(
            "h-[56px] w-[211px] rounded border-[3px] border-[#A5ADAD] bg-[#272822] px-4",
            "font-['Inter'] text-[11.5px] text-[#71726E] placeholder-[#71726E]",
            "outline-none"
          )}
        />

        {/* Action buttons */}
        <div className="mb-10 flex gap-6">
          <ActionButton>Awesome</ActionButton>
          <ActionButton>Prepare</ActionButton>
        </div>

        {/* Recent Breakdowns section */}
        <div>
          <span className="font-['Inter'] text-[20px] font-semibold text-[#B0B0B0]">
            Recent Breakdowns
          </span>
        </div>

        {/* Footer section */}
        <div className="mt-3 border-t border-gray-300 pt-3 text-center">
          <span className="font-['Inter'] text-[12px] text-[#A4A4A3]">
            © AutonomyAI
          </span>
        </div>
      </div>
    </div>
  );
};
