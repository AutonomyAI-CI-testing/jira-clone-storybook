// Icons used throughout the component - extracted for clarity and reuse
const SettingsGearIcon = () => (
  <svg
    width="20"
    height="22"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 10C5.9 10 5 9.1 5 8C5 6.9 5.9 6 7 6C8.1 6 9 6.9 9 8C9 9.1 8.1 10 7 10ZM13 8C13 7.4 13 6.8 13 6.2L11.5 5.5C11.3 5 11 4.6 10.6 4.2L10.7 2.5C10.1 2.2 9.4 2 8.7 1.9L7.5 3C7 3 6.5 3 6 3L4.8 1.9C4.1 2 3.4 2.2 2.8 2.5L2.9 4.2C2.5 4.6 2.2 5 2 5.5L0.5 6.2C0.5 6.8 0.5 7.4 0.5 8C0.5 8.6 0.5 9.2 0.5 9.8L2 10.5C2.2 11 2.5 11.4 2.9 11.8L2.8 13.5C3.4 13.8 4.1 14 4.8 14.1L6 13C6.5 13 7 13 7.5 13L8.7 14.1C9.4 14 10.1 13.8 10.7 13.5L10.6 11.8C11 11.4 11.3 11 11.5 10.5L13 9.8C13 9.2 13 8.6 13 8Z"
      fill="#b5b5b5"
    />
  </svg>
);

const ChevronUpIcon = ({ fill }: { fill: string }) => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 0L7.5 4.5H0.5L4 0Z" fill={fill} />
  </svg>
);

const ChevronUpIconLarge = ({ fill }: { fill: string }) => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 0L11 7H1L6 0Z" fill={fill} />
  </svg>
);

const InfoCircleIcon = ({ color }: { color: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke={color} strokeWidth="1" fill="none" />
    <text
      x="7.5"
      y="11"
      fontSize="10"
      fontWeight="600"
      fill={color}
      textAnchor="middle"
    >
      i
    </text>
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="flex min-h-[540px] w-[460px] flex-col gap-4 rounded bg-[#1C1D17] p-8 font-['Inter']">
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between">
        <h1 className="text-[15px] font-semibold leading-[18px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsGearIcon />
      </div>

      {/* Truncated subtitle showing most recent activity */}
      <div className="flex items-center gap-2">
        <ChevronUpIcon fill="#8b9291" />
        <p className="truncate text-[17px] font-semibold leading-[20px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacer pushes the form to the bottom portion */}
      <div className="flex-1" />

      {/* Section heading for the add design form */}
      <div className="flex items-center gap-3">
        <ChevronUpIconLarge fill="#b2b2b1" />
        <h2 className="text-[20px] font-semibold leading-[24px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token input field */}
      <div className="mt-5 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-[13px] font-semibold leading-[16px] text-[#a4a4a3]">
            Personal Access Token
          </label>
          <InfoCircleIcon color="#a4a4a3" />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="h-[44px] w-full rounded border border-[#a5adad] bg-[#2f302a] px-4 text-[13px] font-semibold leading-[16px] text-[#737470] placeholder:text-[#737470] focus:outline-none"
        />
      </div>

      {/* Design URL input field */}
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label className="text-[13px] font-semibold leading-[16px] text-[#a3a3a2]">
            Design URL
          </label>
          <InfoCircleIcon color="#a3a3a2" />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="h-[44px] w-full rounded border-2 border-[#929291] bg-[#2f302a] px-4 text-[13px] font-semibold leading-[16px] text-[#71726e] placeholder:text-[#71726e] focus:outline-none"
        />
      </div>

      {/* Action buttons for submission */}
      <div className="mt-6 flex gap-8">
        <button className="flex h-[58px] w-[160px] items-center justify-center rounded-lg bg-[#843a17] text-[14px] font-semibold leading-[17px] text-[#8c8078]">
          Awesome
        </button>
        <button className="flex h-[58px] w-[160px] items-center justify-center rounded-lg bg-[#843a17] text-[14px] font-semibold leading-[17px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section header for historical data */}
      <h3 className="mt-8 text-[20px] font-semibold leading-[24px] text-[#b0b0b0]">
        Recent Breakdowns
      </h3>

      {/* Footer with copyright notice */}
      <div className="mt-auto border-t border-gray-300 pt-3 text-center">
        <p className="text-sm text-gray-400">© AutonomyAI</p>
      </div>
    </div>
  );
};
