import cx from "classix";

// Icon components extracted for clarity and reusability
const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer"
    aria-label="Settings"
  >
    <path
      d="M13.5 8.5C13.5 8.7 13.4 8.9 13.3 9L12.1 10.9C12 11.1 11.8 11.2 11.5 11.2L10 11.7C9.9 11.8 9.7 12 9.6 12.1L9.4 13.6C9.4 13.9 9.2 14.1 9 14.2L6.7 15C6.5 15.1 6.2 15 6.1 14.8L5.3 13.5C5.1 13.4 4.9 13.4 4.7 13.3L3.3 13.9C3.1 14 2.8 13.9 2.7 13.7L1.3 11.8C1.2 11.6 1.2 11.3 1.3 11.1L2.2 9.9C2.2 9.7 2.2 9.6 2.2 9.4C2.2 9.2 2.2 9 2.2 8.9L1.3 7.6C1.2 7.4 1.2 7.2 1.3 7L2.7 5.1C2.8 4.9 3 4.8 3.3 4.9L4.7 5.4C4.9 5.3 5.1 5.2 5.3 5.1L5.6 3.6C5.6 3.3 5.8 3.1 6.1 3L8.4 2.2C8.6 2.1 8.9 2.2 9 2.4L9.8 3.7C10 3.8 10.2 3.8 10.4 3.9L11.8 3.3C12 3.2 12.3 3.3 12.4 3.5L13.8 5.4C13.9 5.6 13.9 5.9 13.8 6.1L12.9 7.3C12.9 7.5 12.9 7.6 12.9 7.8C12.9 8 12.9 8.2 12.9 8.3L13.8 9.6C13.9 9.7 14 9.9 13.9 10.1L13.5 8.5Z"
      fill="#8b9291"
    />
    <circle cx="7" cy="8" r="2.5" fill="#1C1D17" />
  </svg>
);

const ChevronUpSmall = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke="#8b9291"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronUpMedium = () => (
  <svg
    width="16"
    height="10"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2 7L6 2L10 7"
      stroke="#b2b2b1"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Information"
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="#8b9291" />
    <path
      d="M7.5 6.5V10.5M7.5 4.5H7.51"
      stroke="#8b9291"
      strokeLinecap="round"
    />
  </svg>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className={cx("flex w-[254px] flex-col bg-[#1C1D17] font-primary")}>
      {/* Subtle gradient bar adds visual polish to card top */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#2a2b24] via-[#3a3b32] to-[#2a2b24]" />

      <div className="flex flex-col gap-5 p-6">
        {/* Header with agent title and settings */}
        <div className="flex items-center justify-between">
          <h1 className="font-primary-bold text-[20px] text-[#b5b5b5]">
            UI magician Agent
          </h1>
          <SettingsIcon />
        </div>

        {/* Collapsible section indicator with truncated description */}
        <div className="flex items-center gap-1.5">
          <ChevronUpSmall />
          <p className="text-[11.5px] font-bold text-[#8b9291]">
            From entire frame to a singl...
          </p>
        </div>

        {/* Intentional vertical spacing between sections */}
        <div className="h-[60px]" />

        {/* Section header for adding new design */}
        <div className="flex items-center gap-2">
          <ChevronUpMedium />
          <h2 className="font-primary-bold text-[13.5px] text-[#b2b2b1]">
            Add New Design
          </h2>
        </div>

        {/* Form fields for Figma integration */}
        <div className="mt-3 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <label
                className="text-[13px] font-bold text-[#a3a3a2]"
                htmlFor="token"
              >
                Personal Access Token
              </label>
              <InfoIcon />
            </div>
            {/* Read-only display field showing masked token */}
            <div
              className="flex h-[48px] w-[211px] items-center rounded-sm border border-[#A5ADAD] bg-[#1e1f1a] px-3"
              id="token"
            >
              <span className="text-[10.5px] font-bold text-[#737470]">
                figd_xxxxxxxxxxxxxxxxxx
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <label
                className="text-[13px] font-bold text-[#a4a4a3]"
                htmlFor="url"
              >
                Design URL
              </label>
              <InfoIcon />
            </div>
            {/* Read-only display field showing placeholder URL */}
            <div
              className="flex h-[48px] w-[211px] items-center rounded-sm border-2 border-[#929291] bg-[#1e1f1a] px-3"
              id="url"
            >
              <span className="text-[10.5px] font-bold text-[#71726e]">
                https://www.figma.com/file/:
              </span>
            </div>
          </div>
        </div>

        {/* Primary action buttons */}
        <div className="mt-3 flex gap-2">
          <button
            className="flex h-[48px] w-[85px] items-center justify-center rounded-sm bg-[#843A17] text-[11.5px] font-bold text-[#8c8078]"
            type="button"
          >
            Awesome
          </button>
          <button
            className="flex h-[48px] w-[85px] items-center justify-center rounded-sm bg-[#843A17] text-[11.5px] font-bold text-[#8c8078]"
            type="button"
          >
            Prepare
          </button>
        </div>

        {/* Vertical spacing before next section */}
        <div className="h-[30px]" />

        {/* Recent Breakdowns section */}
        <h2 className="font-primary-bold text-[14px] text-[#b0b0b0]">
          Recent Breakdowns
        </h2>

        {/* Footer */}
        <div className="border-t border-gray-300 pt-3 text-center">
          <p className="text-[11px] text-[#b5b5b5]">© AutonomyAI</p>
        </div>
      </div>
    </div>
  );
};
