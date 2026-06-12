import React from 'react';
import { IoSettingsOutline, IoChevronUp, IoInformationCircleOutline } from 'react-icons/io5';

/**
 * Constants for theme-specific colors and styles to keep them consistent
 * while making the code more readable.
 */
const COLORS = {
  BACKGROUND: '#1a1a1a',
  INPUT_BG: '#2a2a2a',
  INPUT_BORDER: '#555',
  ACTION_BUTTON: '#a0522d',
  TEXT_ORANGE: '#c2713a',
} as const;

interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}

/**
 * Reusable field component to handle label layout and icon consistency
 */
const InputField = ({ id, label, placeholder, type = 'text' }: InputFieldProps) => (
  <div>
    <label htmlFor={id} className="flex items-center gap-2 text-sm font-medium mb-1">
      {label}
      <IoInformationCircleOutline className="text-white text-lg" />
    </label>
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`w-full p-2 rounded bg-[${COLORS.INPUT_BG}] border border-[${COLORS.INPUT_BORDER}] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-amber-600`}
    />
  </div>
);

interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const ActionButton = ({ children, onClick }: ActionButtonProps) => (
  <button
    onClick={onClick}
    className={`bg-[${COLORS.ACTION_BUTTON}] hover:brightness-110 active:brightness-95 transition-all text-white px-6 py-3 rounded-lg font-semibold`}
  >
    {children}
  </button>
);

export const TestCard = () => {
  return (
    <div id="testElem" className={`w-[390px] bg-[${COLORS.BACKGROUND}] p-4 text-white rounded-lg shadow-lg space-y-4`}>
      {/* Header row */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">UI magician Agent</h2>
        <IoSettingsOutline className="text-white text-2xl cursor-pointer hover:rotate-45 transition-transform" aria-label="Settings" />
      </div>

      {/* Collapsed section — Indicating a summary of the current scope */}
      <div className="flex items-center gap-2 mb-4">
        <IoChevronUp className={`text-[${COLORS.TEXT_ORANGE}] text-xl`} />
        <span className={`text-[${COLORS.TEXT_ORANGE}] truncate`}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2">
          <IoChevronUp className="text-white text-xl" />
          <h3 className="text-lg font-bold">Add New Design</h3>
        </div>

        <InputField
          id="token"
          label="Personal Access Token"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
        />

        <InputField
          id="designUrl"
          label="Design URL"
          placeholder="https://www.figma.com/file/:"
        />
      </div>

      {/* Action buttons */}
      <div className="flex gap-4 justify-center mb-4">
        <ActionButton>Awesome</ActionButton>
        <ActionButton>Prepare</ActionButton>
      </div>

      {/* Recent Breakdowns - List placeholder */}
      <div>
        <h3 className="text-lg font-bold">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
