import React from "react";

// Icon component for settings gear
const SettingsIcon = (): JSX.Element => (
  <svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-label="Settings"
  >
    <path
      d="M7 10C8.10457 10 9 9.10457 9 8C9 6.89543 8.10457 6 7 6C5.89543 6 5 6.89543 5 8C5 9.10457 5.89543 10 7 10Z"
      stroke="#b5b5b5"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M11.5 8C11.5 8.3 11.5 8.6 11.4 8.9L13 10.1L12 12L10.1 11.3C9.7 11.6 9.3 11.9 8.9 12.1L8.5 14H5.5L5.1 12.1C4.7 11.9 4.3 11.6 3.9 11.3L2 12L1 10.1L2.6 8.9C2.5 8.6 2.5 8.3 2.5 8C2.5 7.7 2.5 7.4 2.6 7.1L1 5.9L2 4L3.9 4.7C4.3 4.4 4.7 4.1 5.1 3.9L5.5 2H8.5L8.9 3.9C9.3 4.1 9.7 4.4 10.1 4.7L12 4L13 5.9L11.4 7.1C11.5 7.4 11.5 7.7 11.5 8Z"
      stroke="#b5b5b5"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

// Icon component for chevron up (small variant)
const ChevronUpSmall = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-hidden="true"
  >
    <path
      d="M1 4L4 1L7 4"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Icon component for chevron up (medium variant)
const ChevronUpMedium = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="12"
    height="8"
    viewBox="0 0 12 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-hidden="true"
  >
    <path
      d="M2 7L6 3L10 7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Icon component for info circle
const InfoIcon = ({ color }: { color: string }): JSX.Element => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-shrink-0"
    aria-label="Information"
  >
    <circle
      cx="7.5"
      cy="7.5"
      r="6.5"
      stroke={color}
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M7.5 6.5V10.5M7.5 4.5H7.505"
      stroke={color}
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

// Reusable form field component with label and info icon
interface FormFieldProps {
  label: string;
  labelColor: string;
  iconColor: string;
  children: React.ReactNode;
}

const FormField = ({
  label,
  labelColor,
  iconColor,
  children,
}: FormFieldProps): JSX.Element => (
  <div className="mb-6">
    <div className="mb-2 flex items-center gap-2">
      <label
        className="text-[11.5px] leading-[13.92px]"
        style={{ color: labelColor }}
      >
        {label}
      </label>
      <InfoIcon color={iconColor} />
    </div>
    {children}
  </div>
);

export const TestCard = (): JSX.Element => {
  return (
    <div className="font-sans w-[254px] bg-[#1a1a17] px-5 py-5 font-semibold">
      {/* Header with agent title and settings access */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-[13.5px] leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsed subtitle showing truncated description */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpSmall color="#8b9291" />
        <p className="text-[11.5px] leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Expandable section header for adding new design */}
      <div className="mb-6 flex items-center gap-2">
        <ChevronUpMedium color="#b2b2b1" />
        <h2 className="text-[13.5px] leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Figma token input field with placeholder showing expected format */}
      <FormField
        label="Personal Access Token"
        labelColor="#a4a4a3"
        iconColor="#a4a4a3"
      >
        <div className="h-[36px] w-[211px] rounded border border-[#a5adad] bg-[#272822] px-3 py-2.5">
          <p className="text-[11.5px] leading-[13.92px] text-[#737470]">
            figd_xxxxxxxxxxxxxxxxxx
          </p>
        </div>
      </FormField>

      {/* Figma design URL input with partial URL placeholder */}
      <FormField label="Design URL" labelColor="#a3a3a2" iconColor="#a3a3a2">
        <div className="h-[37px] w-[211px] rounded border-2 border-[#929291] bg-[#272822] px-3 py-2.5">
          <p className="text-[10.5px] leading-[12.71px] text-[#71726e]">
            https://www.figma.com/file/:
          </p>
        </div>
      </FormField>

      {/* Primary action buttons for workflow control */}
      <div className="mb-8 flex gap-4">
        <button className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]">
          Awesome
        </button>
        <button className="flex h-[37px] w-[85px] items-center justify-center rounded bg-[#843a17] text-[11.5px] leading-[13.92px] text-[#8c8078]">
          Prepare
        </button>
      </div>

      {/* Section header for previously processed designs */}
      <div>
        <h2 className="text-[13.5px] leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </h2>
      </div>

      {/* Footer with copyright notice */}
      <div className="border-gray-300 mt-3 border-t pt-3 text-center">
        <p className="text-gray-400 text-[11.5px]">© AutonomyAI</p>
      </div>
    </div>
  );
};
