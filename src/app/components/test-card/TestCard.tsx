
import React from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { FiChevronUp } from 'react-icons/fi';
import { AiOutlineInfoCircle } from 'react-icons/ai';


const COLORS = {
  bgCard: '#1e1e1e',
  bgInput: '#272822',
  primary: '#843a17', // Orange-brown accent
  textMain: '#b5b5b5',
  textMuted: '#8b9291',
  textLabel: '#a4a4a3',
  textPlaceholder: '#737470',
  borderToken: '#a5adad',
  borderUrl: '#929291',
} as const;

export const TestCard: React.FC = () => {
  return (
    <div id="testElem" className="p-6" style={{ backgroundColor: COLORS.bgCard }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold" style={{ color: COLORS.textMain }}>UI magician Agent</h2>
        <IoSettingsOutline className="text-white text-xl" />
      </div>

      {/* Subtitle */}
      <div className="flex items-center mb-6">
        <FiChevronUp className="mr-2" style={{ color: COLORS.textMuted }} />
        <p style={{ color: COLORS.textMuted }}>From entire frame to a singl...</p>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <FiChevronUp className="mr-2" style={{ color: COLORS.textMain }} />
        <h3 className="font-bold text-xl" style={{ color: COLORS.textMain }}>Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="pat" className="mr-2" style={{ color: COLORS.textLabel }}>
            Personal Access Token
          </label>
          <AiOutlineInfoCircle style={{ color: COLORS.textLabel }} />
        </div>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="rounded-sm p-3 w-full outline-none border focus:ring-2 focus:ring-[#843a17]"
          style={{ 
            backgroundColor: COLORS.bgInput,
            borderColor: COLORS.borderToken,
            color: COLORS.textPlaceholder,
          }}
        />
      </div>

      {/* Design URL Input */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <label htmlFor="design-url" className="mr-2" style={{ color: COLORS.textLabel }}>
            Design URL
          </label>
          <AiOutlineInfoCircle style={{ color: COLORS.textLabel }} />
        </div>
        <input
          id="design-url"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="border-2 rounded-sm p-3 w-full outline-none focus:ring-2 focus:ring-[#843a17]"
          style={{ 
            backgroundColor: COLORS.bgInput,
            borderColor: COLORS.borderUrl,
            color: COLORS.textPlaceholder,
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button 
          className="rounded-lg px-6 py-3 flex-1 transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.primary, color: '#8c8078' }}
        >
          Awesome
        </button>
        <button 
          className="rounded-lg px-6 py-3 flex-1 transition-opacity hover:opacity-90"
          style={{ backgroundColor: COLORS.primary, color: '#8c8078' }}
        >
          Prepare
        </button>
      </div>

      {/* Footer */}
      <div className="mt-8">
        <h3 className="font-bold text-xl" style={{ color: COLORS.textMain }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;

