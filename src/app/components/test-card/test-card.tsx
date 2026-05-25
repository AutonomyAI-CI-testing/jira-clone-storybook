import React, { useState } from "react";

/**
 * Settings/menu icon with three vertical dots
 */
const SettingsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b5b5b5]"
  >
    <circle cx="8" cy="8" r="1.5" stroke="currentColor" strokeWidth="1" />
    <circle cx="8" cy="4" r="1.5" stroke="currentColor" strokeWidth="1" />
    <circle cx="8" cy="12" r="1.5" stroke="currentColor" strokeWidth="1" />
    <path d="M8 8L8 8" stroke="currentColor" strokeWidth="1" />
  </svg>
);

/**
 * Chevron icon pointing up (collapsed state)
 */
const ChevronUpIcon = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#8b9291]"
  >
    <path d="M1 4L4 1L7 4" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

/**
 * Chevron icon pointing down (expanded state)
 */
const ChevronDownIcon = () => (
  <svg
    width="8"
    height="5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-[#b2b2b1]"
  >
    <path d="M1 1L4 4L7 1" stroke="currentColor" strokeWidth="1" fill="none" />
  </svg>
);

/**
 * Information icon
 */
const InfoIcon = ({ color }: { color: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={color}
  >
    <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1" />
    <text x="7.5" y="10" textAnchor="middle" fontSize="8" fill="currentColor">
      i
    </text>
  </svg>
);

/**
 * Reusable input field component with label and info icon
 */
interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  iconColor?: string;
  textSize?: string;
}

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  iconColor = "text-[#a4a4a3]",
  textSize = "text-[11.5px]",
}: InputFieldProps) => (
  <div className="mb-6">
    <div className="mb-3 flex items-center gap-2">
      <label
        className={`font-inter ${textSize} font-semibold leading-[13.92px] text-[#a4a4a3]`}
      >
        {label}
      </label>
      <InfoIcon color={iconColor} />
    </div>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="font-inter w-full border border-[#4a4a4a] bg-[#1a1a1a] px-3 py-2 text-[11.5px] font-semibold leading-[13.92px] text-[#737470] placeholder-[#737470] focus:border-[#6a6a6a] focus:outline-none"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  const [personalAccessToken, setPersonalAccessToken] = useState("");
  const [designUrl, setDesignUrl] = useState("");

  return (
    <div className="w-full max-w-[254px] bg-black p-5">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-inter text-[13.5px] font-semibold leading-[16.34px] text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <SettingsIcon />
      </div>

      {/* Collapsible Section 1 */}
      <div className="mb-12 flex items-center gap-2">
        <ChevronUpIcon />
        <p className="font-inter text-[11.5px] font-semibold leading-[13.92px] text-[#8b9291]">
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="mb-8 flex items-center gap-2">
        <ChevronDownIcon />
        <h2 className="font-inter text-[13.5px] font-semibold leading-[16.34px] text-[#b2b2b1]">
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Field */}
      <InputField
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        value={personalAccessToken}
        onChange={(e) => setPersonalAccessToken(e.target.value)}
      />

      {/* Design URL Field */}
      <InputField
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        value={designUrl}
        onChange={(e) => setDesignUrl(e.target.value)}
      />

      {/* Action Buttons */}
      <div className="mb-8 flex gap-4">
        <button className="font-inter flex-1 rounded bg-[#843a17] px-3 py-2 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078] transition-colors hover:bg-[#9a4520]">
          Awesome
        </button>
        <button className="font-inter flex-1 rounded bg-[#843a17] px-3 py-2 text-[11.5px] font-semibold leading-[13.92px] text-[#8c8078] transition-colors hover:bg-[#9a4520]">
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="mb-8">
        <h3 className="font-inter text-[13.5px] font-semibold leading-[16.34px] text-[#b0b0b0]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-gray-300 border-t pt-3 text-center">
        <p className="font-inter text-[11.5px] leading-[13.92px] text-[#a3a3a2]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};
