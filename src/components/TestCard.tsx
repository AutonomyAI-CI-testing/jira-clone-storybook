
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * Constants for the Figma-specific color scheme.
 * These are kept as hex values to match the design spec precisely.
 */
const COLORS = {
  bg: '#1c1c1a',
  header: '#b5b5b5',
  subtitle: '#8b9291',
  sectionTitle: '#b2b2b1',
  label: '#a3a3a2',
  placeholder: '#737470',
  inputBorder: '#3a3a38',
  inputBg: '#2a2a28',
  buttonBg: '#a0522d',
  buttonText: '#e8d5c8',
  recentBreakdowns: '#b0b0b0',
} as const;

/**
 * TestCard component
 * A self-contained smoke test component that renders a dark-themed UI card.
 * Used to validate the component rendering pipeline.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="p-4 text-white font-sans"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Header section with title and settings */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold" style={{ color: COLORS.header }}>
          UI magician Agent
        </h1>
        <button aria-label="Settings" className="hover:opacity-80 transition-opacity">
          <FiSettings className="text-xl" style={{ color: COLORS.header }} />
        </button>
      </div>

      {/* Subtitle with collapse/expand indicator */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="mr-2" style={{ color: COLORS.subtitle }} />
        <p className="text-sm" style={{ color: COLORS.subtitle }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Spacer to match logical grouping in design */}
      <div className="h-6" aria-hidden="true"></div>

      {/* Primary action section */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="mr-2" style={{ color: COLORS.sectionTitle }} />
        <h2 className="text-md font-bold" style={{ color: COLORS.sectionTitle }}>
          Add New Design
        </h2>
      </div>

      {/* Input Group: Personal Access Token */}
      <div className="mb-4">
        <label className="flex items-center text-sm mb-2" style={{ color: COLORS.label }}>
          Personal Access Token
          <button aria-label="Information about Personal Access Token" className="ml-2">
            <FiInfo style={{ color: COLORS.label }} />
          </button>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-lg border text-sm focus:outline-none focus:border-blue-500 transition-colors"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
            color: COLORS.placeholder,
          }}
        />
      </div>

      {/* Input Group: Design URL */}
      <div className="mb-6">
        <label className="flex items-center text-sm mb-2" style={{ color: COLORS.label }}>
          Design URL
          <button aria-label="Information about Design URL" className="ml-2">
            <FiInfo style={{ color: COLORS.label }} />
          </button>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-lg border text-sm focus:outline-none focus:border-blue-500 transition-colors"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
            color: COLORS.placeholder,
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mb-6">
        <button
          className="flex-1 py-3 px-6 rounded-lg font-semibold hover:brightness-110 active:brightness-95 transition-all"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-3 px-6 rounded-lg font-semibold hover:brightness-110 active:brightness-95 transition-all"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Footer section */}
      <div>
        <h2 className="text-md font-semibold" style={{ color: COLORS.recentBreakdowns }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};

