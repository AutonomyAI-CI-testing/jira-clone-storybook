import { useState } from "react";

/**
 * Chevron/arrow SVG icon component - used for collapsible section headers.
 * Rotates based on the expanded state via className.
 */
const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`flex-shrink-0 transition-transform ${
      isExpanded ? "rotate-180" : "rotate-0"
    }`}
  >
    <path d="M7 3L13 9H1L7 3Z" fill="#b5b5b5" />
  </svg>
);

/**
 * Settings/gear SVG icon component - used in the header.
 */
const SettingsIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
      fill="currentColor"
    />
    <path
      d="M8.5 1.5C8.77614 1.5 9 1.27614 9 1V0.5C9 0.223858 8.77614 0 8.5 0C8.22386 0 8 0.223858 8 0.5V1C8 1.27614 8.22386 1.5 8.5 1.5Z"
      fill="currentColor"
    />
    <path
      d="M8.5 14.5C8.77614 14.5 9 14.7239 9 15V15.5C9 15.7761 8.77614 16 8.5 16C8.22386 16 8 15.7761 8 15.5V15C8 14.7239 8.22386 14.5 8.5 14.5Z"
      fill="currentColor"
    />
    <path
      d="M14.5 8.5C14.7761 8.5 15 8.27614 15 8C15 7.72386 14.7761 7.5 14.5 7.5H14C13.7239 7.5 13.5 7.72386 13.5 8C13.5 8.27614 13.7239 8.5 14 8.5H14.5Z"
      fill="currentColor"
    />
    <path
      d="M1.5 8.5C1.77614 8.5 2 8.27614 2 8C2 7.72386 1.77614 7.5 1.5 7.5H1C0.723858 7.5 0.5 7.72386 0.5 8C0.5 8.27614 0.723858 8.5 1 8.5H1.5Z"
      fill="currentColor"
    />
    <path
      d="M12.4749 3.52513C12.6655 3.3346 12.6655 3.0178 12.4749 2.82727C12.2844 2.63675 11.9676 2.63675 11.7771 2.82727L11.384 3.22038C11.1935 3.41091 11.1935 3.72771 11.384 3.91823C11.5745 4.10876 11.8913 4.10876 12.0819 3.91823L12.4749 3.52513Z"
      fill="currentColor"
    />
    <path
      d="M4.21715 11.7544C4.40767 11.5639 4.40767 11.2471 4.21715 11.0566C4.02662 10.8661 3.70982 10.8661 3.5193 11.0566L3.12619 11.4497C2.93567 11.6402 2.93567 11.957 3.12619 12.1475C3.31672 12.3381 3.63352 12.3381 3.82404 12.1475L4.21715 11.7544Z"
      fill="currentColor"
    />
    <path
      d="M3.52513 3.52513C3.71565 3.3346 3.71565 3.0178 3.52513 2.82727C3.3346 2.63675 3.0178 2.63675 2.82727 2.82727L2.43417 3.22038C2.24364 3.41091 2.24364 3.72771 2.43417 3.91823C2.62469 4.10876 2.94149 4.10876 3.13202 3.91823L3.52513 3.52513Z"
      fill="currentColor"
    />
    <path
      d="M11.7544 11.7544C11.9449 11.5639 11.9449 11.2471 11.7544 11.0566C11.5639 10.8661 11.2471 10.8661 11.0566 11.0566L10.6634 11.4497C10.4729 11.6402 10.4729 11.957 10.6634 12.1475C10.8539 12.3381 11.1707 12.3381 11.3613 12.1475L11.7544 11.7544Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Info icon component - appears next to form labels to indicate additional information.
 */
const InfoIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6" cy="6" r="5.5" stroke="currentColor" />
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

/**
 * Form field wrapper component for consistent input styling.
 */
const FormField = ({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  type?: "text" | "password";
  placeholder: string;
}) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      <label htmlFor={id} className="text-base font-semibold text-[#a3a3a2]">
        {label}
      </label>
      <button
        className="flex h-5 w-5 items-center justify-center text-[#a3a3a2] hover:text-[#b5b5b5] focus:outline-none"
        aria-label="Info"
      >
        <InfoIcon />
      </button>
    </div>
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full rounded border border-[#666] bg-transparent px-4 py-3 text-sm text-[#737470] placeholder-[#737470] focus:border-[#888] focus:outline-none"
    />
  </div>
);

export const TestCard = () => {
  const [expandedSection1, setExpandedSection1] = useState(true);
  const [expandedSection2, setExpandedSection2] = useState(true);

  return (
    <div className="w-64 space-y-7 rounded-md bg-black p-5">
      {/* Header with title and settings icon */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#b5b5b5]">
          UI magician Agent
        </h1>
        <button
          className="flex h-8 w-8 items-center justify-center text-[#b5b5b5] hover:text-[#ffffff] focus:outline-none"
          aria-label="Settings"
        >
          <SettingsIcon />
        </button>
      </div>

      {/* Collapsible Section 1 */}
      <button
        onClick={() => setExpandedSection1(!expandedSection1)}
        className="flex w-full items-center gap-2 text-left focus:outline-none"
      >
        <ChevronIcon isExpanded={expandedSection1} />
        <span className="text-sm font-semibold text-[#b5b5b5]">
          From entire frame to a singl...
        </span>
      </button>

      {expandedSection1 && (
        <div className="py-2">{/* Content can go here */}</div>
      )}

      {/* Section Header: Add New Design */}
      <button
        onClick={() => setExpandedSection2(!expandedSection2)}
        className="flex w-full items-center gap-2 text-left focus:outline-none"
      >
        <ChevronIcon isExpanded={expandedSection2} />
        <h2 className="text-xl font-semibold text-[#b5b5b5]">Add New Design</h2>
      </button>

      {expandedSection2 && (
        <>
          {/* Form Fields */}
          <div className="space-y-6">
            <FormField
              id="token"
              label="Personal Access Token"
              type="password"
              placeholder="figd_xxxxxxxxxxxxxxxxx"
            />
            <FormField
              id="url"
              label="Design URL"
              type="text"
              placeholder="https://www.figma.com/file/:"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 pt-4">
            <button className="flex-1 rounded bg-[#8c5a3c] px-4 py-3 text-center text-sm font-semibold text-[#c9b8ac] transition-colors hover:bg-[#9e6947] focus:outline-none">
              Awesome
            </button>
            <button className="flex-1 rounded bg-[#8c5a3c] px-4 py-3 text-center text-sm font-semibold text-[#c9b8ac] transition-colors hover:bg-[#9e6947] focus:outline-none">
              Prepare
            </button>
          </div>
        </>
      )}

      {/* Footer Section */}
      <div className="border-t border-[#666] pt-6">
        <h3 className="text-xl font-semibold text-[#b5b5b5]">
          Recent Breakdowns
        </h3>
      </div>

      {/* Copyright Footer */}
      <div className="border-gray-300 border-t pt-3 text-center text-sm text-[#b5b5b5]">
        © AutonomyAI
      </div>
    </div>
  );
};
