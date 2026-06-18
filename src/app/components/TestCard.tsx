import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { HiChevronUp } from 'react-icons/hi';

// Design constants from Figma spec
const COLORS = {
  cardBg: '#2a2a2a',
  surfaceText: '#e0e0e0',
  brandAmber: '#c4874a',
  brandOrange: '#b5451b',
  inputBg: '#333333',
  inputBorder: '#555555',
  white: '#ffffff',
} as const;

interface LabeledInputProps {
  label: string;
  placeholder: string;
}

/**
 * A styled input field with a label and info icon.
 * Used for Figma API tokens and file URLs.
 */
const LabeledInput = ({ label, placeholder }: LabeledInputProps) => (
  <div className="flex flex-col gap-1">
    <label
      className="flex items-center gap-1 text-sm font-medium"
      style={{ color: COLORS.surfaceText }}
    >
      {label} <AiOutlineInfoCircle className="h-4 w-4" />
    </label>
    <input
      placeholder={placeholder}
      className="rounded-md border px-3 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      style={{
        backgroundColor: COLORS.inputBg,
        borderColor: COLORS.inputBorder,
        color: COLORS.surfaceText,
      }}
    />
  </div>
);

/**
 * TestCard component reproducing the 'UI magician Agent' panel.
 * This is a presentational component used to verify design system fidelity.
 */
export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="flex flex-col w-[300px] gap-4 p-5 rounded-lg"
      style={{ backgroundColor: COLORS.cardBg, color: COLORS.surfaceText }}
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold" style={{ color: COLORS.surfaceText }}>
          UI magician Agent
        </span>
        <AiOutlineSetting className="h-6 w-6" />
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-1">
        <HiChevronUp className="h-5 w-5" />
        <span style={{ color: COLORS.brandAmber }}>From entire frame to a singl...</span>
      </div>

      <div className="h-4" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <HiChevronUp className="h-5 w-5" />
        <span className="text-lg font-bold" style={{ color: COLORS.surfaceText }}>
          Add New Design
        </span>
      </div>

      <LabeledInput label="Personal Access Token" placeholder="figd_xxxxxxxxxxxxxxxxxx" />
      <LabeledInput label="Design URL" placeholder="https://www.figma.com/file/:" />

      {/* Action buttons */}
      <div className="flex justify-between gap-3 pt-2">
        <button
          className="flex-1 rounded-lg px-6 py-3 font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.brandOrange, color: COLORS.white }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg px-6 py-3 font-medium transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.brandOrange, color: COLORS.white }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div>
        <span className="text-lg font-bold" style={{ color: COLORS.surfaceText }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
