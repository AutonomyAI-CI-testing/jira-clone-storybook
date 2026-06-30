
import React from 'react';

/**
 * Colors derived from Figma design specs.
 * Using constants to ensure consistency and maintainability.
 */
const COLORS = {
  panelBg: '#272822',
  inputBg: '#1e1e1c',
  buttonBg: '#843a17',
  iconMuted: '#6b6b6b',
  textTitle: '#b5b5b5',
  textMuted: '#8b9291',
  textHeader: '#b2b2b1',
  textLabel: '#a4a4a3',
  textButton: '#8c8078',
  textRecent: '#b0b0b0',
  borderToken: '#a5adad',
  borderUrl: '#929291',
  placeholderToken: '#737470',
  placeholderUrl: '#71726e',
};

const IconSettings = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: COLORS.iconMuted }}
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0-.33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const IconChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: COLORS.iconMuted }}
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const IconInfo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ color: COLORS.iconMuted }}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  borderColor: string;
  borderWidth?: string;
  placeholderColor: string;
}

const InputField = ({ id, label, placeholder, borderColor, borderWidth = '1px', placeholderColor }: InputFieldProps) => (
  <div className="mt-4">
    <div className="flex items-center gap-2 mb-2">
      <label htmlFor={id} className="text-[11.5px] font-semibold" style={{ color: COLORS.textLabel }}>
        {label}
      </label>
      <IconInfo />
    </div>
    <input
      type="text"
      id={id}
      placeholder={placeholder}
      className="w-full px-3 py-2 rounded-none text-[12px] focus:outline-none"
      style={{
        backgroundColor: COLORS.inputBg,
        borderColor: borderColor,
        borderWidth: borderWidth,
        color: COLORS.textTitle,
      }}
    />
  </div>
);

/**
 * TestCard is a smoke test component that renders a dark-themed UI panel
 * matching a specific Figma design. It is non-interactive.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-6"
      style={{
        backgroundColor: COLORS.panelBg,
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold" style={{ color: COLORS.textTitle }}>
          UI magician Agent
        </span>
        <IconSettings />
      </div>

      {/* Description Row */}
      <div className="flex items-center gap-2 mt-4">
        <IconChevronUp />
        <span className="text-[11.5px] font-semibold" style={{ color: COLORS.textMuted }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section Header */}
      <div className="flex items-center gap-2 mt-6">
        <IconChevronUp />
        <span className="text-[13.5px] font-semibold" style={{ color: COLORS.textHeader }}>
          Add New Design
        </span>
      </div>

      {/* Fields */}
      <InputField
        id="pat"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        borderColor={COLORS.borderToken}
        placeholderColor={COLORS.placeholderToken}
      />
      <InputField
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
        borderColor={COLORS.borderUrl}
        borderWidth="2px"
        placeholderColor={COLORS.placeholderUrl}
      />

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center mt-6">
        {['Awesome', 'Prepare'].map((label) => (
          <button
            key={label}
            className="font-semibold text-[11.5px] rounded-md px-8 py-3 transition-opacity hover:opacity-90"
            style={{
              backgroundColor: COLORS.buttonBg,
              color: COLORS.textButton,
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Recent Activity Footer */}
      <h3 className="text-[13.5px] font-semibold mt-8" style={{ color: COLORS.textRecent }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};

