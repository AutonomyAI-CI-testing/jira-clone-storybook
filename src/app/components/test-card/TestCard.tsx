import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { BiChevronUp } from 'react-icons/bi';
import { AiOutlineInfoCircle } from 'react-icons/ai';

const COLORS = {
  CARD_BG: "#2a2a2a",
  ACCENT: "#c1611f",
  INPUT_BG: "#1e1e1e",
  INPUT_BORDER: "#555",
  TEXT_MUTED: "#ccc",
  TEXT_PLACEHOLDER: "#999",
} as const;

interface TextInputProps {
  id: string;
  label: string;
  placeholder: string;
}

/**
 * A styled input field with a label and info icon.
 * Extracted to reduce repetition in the main TestCard component.
 */
const TextInput = ({ id, label, placeholder }: TextInputProps) => (
  <div className="mb-4 last:mb-6">
    <div className="flex items-center mb-2">
      <label htmlFor={id} className="text-sm mr-2" style={{ color: COLORS.TEXT_MUTED }}>
        {label}
      </label>
      <AiOutlineInfoCircle className="text-sm" style={{ color: COLORS.TEXT_MUTED }} />
    </div>
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="w-full rounded border px-3 py-2 text-sm"
      style={{
        backgroundColor: COLORS.INPUT_BG,
        borderColor: COLORS.INPUT_BORDER,
        color: COLORS.TEXT_PLACEHOLDER,
      }}
    />
  </div>
);

/**
 * TestCard component mimics a complex UI panel for testing purposes.
 * It uses specific hex colors to match a target design where semantic tokens aren't available.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-6 rounded-lg w-full max-w-sm"
      style={{ backgroundColor: COLORS.CARD_BG }}
    >
      {/* Header section with title and settings icon */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-bold text-lg">UI magician Agent</h2>
        <IoSettingsOutline className="text-white text-xl" />
      </div>

      {/* Collapsed/Status row with accent color */}
      <div className="flex items-center mb-6">
        <BiChevronUp className="text-xl mr-2" style={{ color: COLORS.ACCENT }} />
        <p className="text-sm" style={{ color: COLORS.ACCENT }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Main section heading */}
      <div className="flex items-center mb-3">
        <BiChevronUp className="text-white text-xl mr-2" />
        <h3 className="text-white font-bold text-md">Add New Design</h3>
      </div>

      <TextInput
        id="accessToken"
        label="Personal Access Token"
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
      />

      <TextInput
        id="designUrl"
        label="Design URL"
        placeholder="https://www.figma.com/file/:"
      />

      {/* Primary action buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          className="flex-1 rounded-lg py-3 text-white font-semibold"
          style={{ backgroundColor: COLORS.ACCENT }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 text-white font-semibold"
          style={{ backgroundColor: COLORS.ACCENT }}
        >
          Prepare
        </button>
      </div>

      {/* Footer section for historical data */}
      <div>
        <h3 className="text-white font-bold text-md">Recent Breakdowns</h3>
      </div>
    </div>
  );
};
