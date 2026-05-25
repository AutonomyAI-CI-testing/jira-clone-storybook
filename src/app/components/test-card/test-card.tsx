import { useState } from "react";
import cx from "classix";

interface InputFieldProps {
  label: string;
  value: string;
}

const InputField = ({ label, value }: InputFieldProps): JSX.Element => (
  <div className="space-y-1">
    <div className="flex items-center gap-1">
      <label className="text-[11.5px] font-semibold text-[#71726e]">
        {label}
      </label>
      <InfoIcon />
    </div>
    <input
      type="text"
      defaultValue={value}
      className="w-full border border-[#737470] bg-black px-2 py-1.5 text-[10.5px] font-semibold text-[#b5b5b5] placeholder-[#5a5a58] outline-none"
    />
  </div>
);

export const TestCard = (): JSX.Element => {
  // Track whether the collapsible section is expanded or not
  // Defaults to collapsed (true) to minimize UI real estate
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className="w-[254px] space-y-4 bg-black p-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[13.5px] font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h2>
        <button className="text-[#b5b5b5] hover:text-[#d0d0d0]">
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible Section */}
      <div className="space-y-2">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex w-full items-center justify-between text-left"
        >
          <span className="text-[12px] font-semibold text-[#b0b0b0]">
            From entire frame to a singl...
          </span>
          {/* Chevron rotates 180° when section is expanded (isOpen) */}
          <ChevronIcon isOpen={!isCollapsed} />
        </button>
        {!isCollapsed && (
          <div className="text-[11px] text-[#a3a3a2]">
            Additional content would appear here
          </div>
        )}
      </div>

      {/* Add New Design Section — always expanded, not interactive */}
      <div className="flex items-center justify-between">
        <span className="text-[12px] font-semibold text-[#8b9291]">
          Add New Design
        </span>
        <ChevronIcon isOpen={true} />
      </div>

      {/* Input Fields */}
      <div className="space-y-3">
        <InputField
          label="Personal Access Token"
          value="figq_xxxxxxxxxxxxxxxxx"
        />
        <InputField label="Design URL" value="https://www.figma.com/file/:" />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns Section */}
      <div className="pt-2">
        <h3 className="text-[12px] font-semibold text-[#71726e]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-300 pt-3 text-center">
        <p className="text-[11.5px] font-semibold text-[#71726e]">
          © AutonomyAI
        </p>
      </div>
    </div>
  );
};

interface ActionButtonProps {
  children: React.ReactNode;
}

const ActionButton = ({ children }: ActionButtonProps): JSX.Element => (
  <button className="flex-1 bg-[#8B4513] px-3 py-1.5 text-[11.5px] font-semibold text-white transition-colors hover:bg-[#6d3410]">
    {children}
  </button>
);

// Inline SVG Icons

const SettingsIcon = (): JSX.Element => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="1.5" fill="currentColor" />
    <path
      d="M8 3.5V2M8 14v-1.5M12.5 8h1.5M2 8h1.5M11 11l1.06 1.06M3.94 3.94L5 5M5 11l-1.06 1.06M12.06 3.94L11 5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

const InfoIcon = (): JSX.Element => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="5.5" stroke="currentColor" strokeWidth="1" />
    <text
      x="6"
      y="8"
      textAnchor="middle"
      fontSize="8"
      fill="currentColor"
      fontWeight="bold"
    >
      i
    </text>
  </svg>
);

interface ChevronIconProps {
  isOpen: boolean;
}

const ChevronIcon = ({ isOpen }: ChevronIconProps): JSX.Element => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cx("transition-transform", isOpen && "rotate-180")}
  >
    <path
      d="M3.5 5.5L7 9L10.5 5.5"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      color="#8b9291"
    />
  </svg>
);
