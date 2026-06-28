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
  buttonHoverBg: '#8B4513',
  buttonText: '#8c8078',
  recentBreakdowns: '#b0b0b0',
} as const;

/**
 * TestCard component
 * A self-contained smoke test component that renders a dark-themed UI card
 * matching the Figma design. Used to validate the component rendering pipeline.
 */
export const TestCard = () => {
  return (
    <div
      id="testElem"
      className="p-8 text-white font-sans"
      style={{ backgroundColor: COLORS.bg, width: 480 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold" style={{ color: COLORS.header }}>
          UI magician Agent
        </h1>
        <button type="button" aria-label="Settings" className="hover:opacity-80 transition-opacity">
          <FiSettings size={22} style={{ color: COLORS.header }} />
        </button>
      </div>

      {/* Subtitle */}
      <div className="flex items-center mb-16">
        <FiChevronUp className="mr-2" size={16} style={{ color: COLORS.subtitle }} />
        <p className="text-sm" style={{ color: COLORS.subtitle }}>
          From entire frame to a singl...
        </p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-8">
        <FiChevronUp className="mr-2" size={16} style={{ color: COLORS.sectionTitle }} />
        <h2 className="text-xl font-bold" style={{ color: COLORS.sectionTitle }}>
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token */}
      <div className="mb-6">
        <label
          htmlFor="pat"
          className="flex items-center text-sm font-bold mb-3"
          style={{ color: COLORS.label }}
        >
          Personal Access Token
          <FiInfo className="ml-2" size={14} style={{ color: COLORS.label }} />
        </label>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full py-3 px-3 rounded border focus:outline-none focus:border-blue-500"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
            color: COLORS.placeholder,
            borderWidth: 1,
          }}
        />
      </div>

      {/* Design URL */}
      <div className="mb-10">
        <label
          htmlFor="designUrl"
          className="flex items-center text-sm font-bold mb-3"
          style={{ color: COLORS.label }}
        >
          Design URL
          <FiInfo className="ml-2" size={14} style={{ color: COLORS.label }} />
        </label>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full py-3 px-3 rounded border focus:outline-none focus:border-blue-500"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
            color: COLORS.placeholder,
            borderWidth: 1,
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-6 mb-14">
        <button
          type="button"
          className="flex-1 py-3 px-4 font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 py-3 px-4 font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.buttonText }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <h2 className="text-xl font-bold" style={{ color: COLORS.recentBreakdowns }}>
          Recent Breakdowns
        </h2>
      </div>
    </div>
  );
};
