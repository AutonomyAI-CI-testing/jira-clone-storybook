// Icon components for reusability
const RobotIcon = () => (
  <svg
    width="18"
    height="20"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
  >
    <path
      d="M7 10C8.65685 10 10 8.65685 10 7C10 5.34315 8.65685 4 7 4C5.34315 4 4 5.34315 4 7C4 8.65685 5.34315 10 7 10Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M13 7C13 7 13 6 12 6L11.5 3.5C11.5 3.5 11 2 9.5 2H8.5C8.5 2 8.5 0 7 0C5.5 0 5.5 2 5.5 2H4.5C3 2 2.5 3.5 2.5 3.5L2 6C1 6 1 7 1 7C1 7 1 8 2 8L2.5 10.5C2.5 10.5 3 12 4.5 12H5.5C5.5 12 5.5 14 7 14C8.5 14 8.5 12 8.5 12H9.5C11 12 11.5 10.5 11.5 10.5L12 8C13 8 13 7 13 7Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

const ChevronUpIcon = ({ className }: { className?: string }) => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M1 4L4 1L7 4" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const InfoIcon = ({ className }: { className?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M7.5 4V8M7.5 11H7.51"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// Reusable form field component for labels with info icons
const FormFieldLabel = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => (
  <div className="flex items-center gap-1.5">
    <label className={`text-xs font-semibold ${className}`}>{label}</label>
    <InfoIcon className={className} />
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="font-sans flex h-[508px] w-64 flex-col rounded-lg bg-[#1a1a17] p-5">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <RobotIcon />
      </div>

      {/* Subtitle row */}
      <div className="mt-5 flex items-center gap-1.5">
        <ChevronUpIcon className="text-[#8b9291]" />
        <p className="text-xs text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design section */}
      <div className="mt-8 flex items-center gap-2">
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#b2b2b1]"
        >
          <path d="M1 7L6 2L11 7" stroke="currentColor" strokeWidth="2" />
        </svg>
        <h2 className="text-sm font-semibold text-[#b2b2b1]">Add New Design</h2>
      </div>

      {/* Personal Access Token field */}
      <div className="mt-5 flex flex-col gap-3">
        <FormFieldLabel
          label="Personal Access Token"
          className="text-[#a4a4a3]"
        />
        <div className="rounded border border-[#a5adad] bg-[#272822] px-3 py-2">
          <span className="text-xs text-[#737470]">
            figld_xxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL field */}
      <div className="mt-5 flex flex-col gap-3">
        <FormFieldLabel label="Design URL" className="text-[#a4a4a3]" />
        <div className="rounded border-2 border-[#929291] bg-[#272822] px-3 py-2">
          <span className="text-[10.5px] text-[#71726e]">
            https://www.figma.com/file/:...
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-6 flex gap-3">
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2 text-xs font-semibold text-[#8c8078]">
          Awesome
        </button>
        <button className="flex-1 rounded bg-[#843a17] px-4 py-2 text-xs font-semibold text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns section */}
      <div className="mt-6 flex flex-1 items-end">
        <h2 className="text-sm font-semibold text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="text-gray-400 text-xs">© AutonomyAI</p>
      </div>
    </div>
  );
};
