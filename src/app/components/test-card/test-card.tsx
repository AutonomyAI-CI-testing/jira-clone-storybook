// Icon components for reusability and clarity
const SettingsIcon = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.6 1.5c.4 0 .7.3.8.7l.2 1.3c.5.2 1 .4 1.4.7l1.2-.6c.3-.2.8-.1 1 .2l.6 1c.2.3.1.8-.2 1l-1 .8c.1.5.1 1 0 1.4l1 .8c.3.2.4.7.2 1l-.6 1c-.2.3-.7.4-1 .2l-1.2-.6c-.4.3-.9.5-1.4.7l-.2 1.3c-.1.4-.4.7-.8.7h-1.2c-.4 0-.7-.3-.8-.7l-.2-1.3c-.5-.2-1-.4-1.4-.7l-1.2.6c-.3.2-.8.1-1-.2l-.6-1c-.2-.3-.1-.8.2-1l1-.8c-.1-.5-.1-1 0-1.4l-1-.8c-.3-.2-.4-.7-.2-1l.6-1c.2-.3.7-.4 1-.2l1.2.6c.4-.3.9-.5 1.4-.7l.2-1.3c.1-.4.4-.7.8-.7h1.2zM8 10a2 2 0 100-4 2 2 0 000 4z"
      fill="currentColor"
    />
  </svg>
);

const ChevronUpIcon = ({
  className,
  width = 8,
  height = 5,
}: {
  className?: string;
  width?: number;
  height?: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d={`M${width / 2} 0L0 ${height}h${width}L${width / 2} 0z`}
      fill="currentColor"
    />
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
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <path
      d="M7.5 10.5V7.5M7.5 4.5h.01"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * TestCard component displays a configuration card for the UI magician Agent.
 * It includes form inputs for Personal Access Token and Design URL, action buttons,
 * and a section for recent breakdowns. All colors, sizes, and text are intentional
 * design choices matching the target specification.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div className="flex w-[254px] flex-col gap-4 rounded bg-[#1C1D17] p-5">
      {/* Header - Agent title with settings icon */}
      <div className="flex items-center justify-between">
        <span className="font-primary text-[13.5px] font-semibold leading-[16px] text-[#b5b5b5]">
          UI magician Agent
        </span>
        <SettingsIcon className="text-[#b5b5b5]" />
      </div>

      {/* Description - Truncated text showing agent capability */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon width={8} height={5} className="text-[#8b9291]" />
        <span className="font-primary text-[11.5px] font-semibold leading-[14px] text-[#8b9291]">
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design - Action to add a new design configuration */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon width={12} height={8} className="text-[#b2b2b1]" />
        <span className="font-primary text-[13.5px] font-semibold leading-[16px] text-[#b2b2b1]">
          Add New Design
        </span>
      </div>

      {/* Personal Access Token - Input field with info icon */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-primary text-[11.5px] font-semibold leading-[14px] text-[#a4a4a3]">
            Personal Access Token
          </span>
          <InfoIcon className="text-[#a4a4a3]" />
        </div>
        <div className="rounded border border-[#a5adad] bg-[#272822] px-4 py-2">
          <span className="font-primary text-[11.5px] font-semibold leading-[14px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </span>
        </div>
      </div>

      {/* Design URL - Input field for Figma file URL with info icon */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="font-primary text-[11.5px] font-semibold leading-[14px] text-[#a3a3a2]">
            Design URL
          </span>
          <InfoIcon className="text-[#a3a3a2]" />
        </div>
        <div className="rounded border-2 border-[#929291] bg-[#272822] px-4 py-2">
          <span className="font-primary text-[10.5px] font-semibold leading-[13px] text-[#71726e]">
            https://www.figma.com/file/:
          </span>
        </div>
      </div>

      {/* Action Buttons - Primary CTAs for the card */}
      <div className="flex gap-2">
        <button className="flex h-[40px] w-[87px] items-center justify-center rounded bg-[#843A17]">
          <span className="font-primary text-[11.5px] font-semibold leading-[14px] text-[#8c8078]">
            Awesome
          </span>
        </button>
        <button className="flex h-[40px] w-[87px] items-center justify-center rounded bg-[#843A17]">
          <span className="font-primary text-[11.5px] font-semibold leading-[14px] text-[#8c8078]">
            Prepare
          </span>
        </button>
      </div>

      {/* Recent Breakdowns - Section header for breakdown history */}
      <div>
        <span className="font-primary text-[13.5px] font-semibold leading-[16px] text-[#b0b0b0]">
          Recent Breakdowns
        </span>
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <span className="font-primary text-[11.5px] font-semibold leading-[14px] text-[#b5b5b5]">
          © AutonomyAI
        </span>
      </div>
    </div>
  );
};
