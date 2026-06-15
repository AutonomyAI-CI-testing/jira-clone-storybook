import { IoSettingsOutline, IoChevronUp } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';

// Design values matching Figma specification
const COLORS = {
  background: '#2a2a2a',
  inputBackground: '#1e1e1e',
  inputBorder: '#444',
  inputText: '#888',
  inputPlaceholder: '#555',
  buttonBrown: '#b5522a',
  buttonHoverBrown: '#9e4724',
  mutedTan: '#c8946a',
};

export const TestCard = (): JSX.Element => {
  return (
    <div 
      id="testElem" 
      className="p-5 rounded-xl w-full max-w-xs text-white"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header Row: Component Title and Settings */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-bold text-white text-lg">UI magician Agent</h2>
        <IoSettingsOutline className="text-white opacity-70" />
      </div>

      {/* Collapsed Status Row */}
      <div 
        className="flex items-center gap-2 text-sm mb-6"
        style={{ color: COLORS.mutedTan }}
      >
        <IoChevronUp />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Collapsible Section Header: Add New Design */}
      <div className="flex items-center gap-2 font-bold text-white text-base mb-4">
        <IoChevronUp />
        <span>Add New Design</span>
      </div>

      {/* Form Field: Personal Access Token */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 text-white text-sm mb-1.5">
          <label htmlFor="figma-token">Personal Access Token</label>
          <AiOutlineInfoCircle className="text-white opacity-50" />
        </div>
        <input
          id="figma-token"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full border rounded-md px-3 py-2 text-sm outline-none"
          style={{ 
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorder,
            color: COLORS.inputText
          }}
        />
      </div>

      {/* Form Field: Design URL */}
      <div className="mb-4">
        <div className="flex items-center gap-1.5 text-white text-sm mb-1.5">
          <label htmlFor="design-url">Design URL</label>
          <AiOutlineInfoCircle className="text-white opacity-50" />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full border rounded-md px-3 py-2 text-sm outline-none"
          style={{ 
            backgroundColor: COLORS.inputBackground,
            borderColor: COLORS.inputBorder,
            color: COLORS.inputText
          }}
        />
      </div>

      {/* Primary Actions */}
      <div className="flex gap-3">
        <button 
          className="flex-1 text-white rounded-lg py-3 text-sm font-semibold transition-colors"
          style={{ backgroundColor: COLORS.buttonBrown }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonHoverBrown)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonBrown)}
        >
          Awesome
        </button>
        <button 
          className="flex-1 text-white rounded-lg py-3 text-sm font-semibold transition-colors"
          style={{ backgroundColor: COLORS.buttonBrown }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonHoverBrown)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.buttonBrown)}
        >
          Prepare
        </button>
      </div>

      {/* Footer Section: Recent Activity Overview */}
      <h3 className="font-bold text-white text-base mt-6">
        Recent Breakdowns
      </h3>
    </div>
  );
};