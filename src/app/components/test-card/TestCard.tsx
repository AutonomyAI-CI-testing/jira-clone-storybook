
import React from 'react';
import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

/**
 * TestCard component
 * A self-contained smoke test component that visually replicates a UI panel design.
 * Primarily used to verify rendering and layout in isolation.
 */
export const TestCard: React.FC = () => {
  // UI color palette as defined in the requirement spec
  const COLORS = {
    background: '#141411',
    textPrimary: '#cdcdcc',
    textSecondary: '#8e8e8d',
    divider: '#555554',
    buttonBg: '#863e1f',
  };

  return (
    <div 
      id="testElem" 
      className="p-6 min-h-screen" 
      style={{ backgroundColor: COLORS.background, color: COLORS.textPrimary }}
    >
      {/* 1. Header row */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg" style={{ color: COLORS.textPrimary }}>
          UI magician Agent
        </h1>
        <FiSettings className="text-xl" style={{ color: COLORS.textPrimary }} />
      </div>

      {/* 2. Subtitle row */}
      <div className="flex items-center mt-4">
        <FiChevronUp className="text-lg mr-2" style={{ color: COLORS.textSecondary }} />
        <p style={{ color: COLORS.textSecondary }}>From entire frame to a singl...</p>
      </div>

      {/* 3. Spacer - intentional large gap */}
      <div className="mt-12" />

      {/* 4. Section header: Add New Design */}
      <div className="flex items-center mt-6">
        <FiChevronUp className="text-lg mr-2" style={{ color: COLORS.textPrimary }} />
        <h2 className="font-bold text-xl" style={{ color: COLORS.textPrimary }}>
          Add New Design
        </h2>
      </div>

      {/* 5. Personal Access Token input */}
      <div className="mt-8">
        <label 
          htmlFor="pat" 
          className="flex items-center text-sm mb-3" 
          style={{ color: COLORS.textSecondary }}
        >
          Personal Access Token 
          <FiInfo className="ml-2" style={{ color: COLORS.textPrimary }} />
        </label>
        <input
          id="pat"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-3 rounded-none focus:outline-none focus:border-blue-500 placeholder:text-[#555554]"
          style={{ 
            backgroundColor: COLORS.background, 
            border: `1px solid ${COLORS.divider}`, 
            color: COLORS.textSecondary,
          }}
          readOnly // Static display component per requirements
        />
      </div>

      {/* 6. Design URL input */}
      <div className="mt-6">
        <label 
          htmlFor="designUrl" 
          className="flex items-center text-sm mb-3" 
          style={{ color: COLORS.textSecondary }}
        >
          Design URL 
          <FiInfo className="ml-2" style={{ color: COLORS.textPrimary }} />
        </label>
        <input
          id="designUrl"
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-3 rounded-none focus:outline-none focus:border-blue-500 placeholder:text-[#555554]"
          style={{ 
            backgroundColor: COLORS.background, 
            border: `1px solid ${COLORS.divider}`, 
            color: COLORS.textSecondary 
          }}
          readOnly // Static display component per requirements
        />
      </div>

      {/* 7. Button row */}
      <div className="flex gap-6 mt-10">
        <button
          className="flex-1 px-6 py-4 rounded-md font-bold focus:outline-none"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.textPrimary }}
        >
          Awesome
        </button>
        <button
          className="flex-1 px-6 py-4 rounded-md font-bold focus:outline-none"
          style={{ backgroundColor: COLORS.buttonBg, color: COLORS.textPrimary }}
        >
          Prepare
        </button>
      </div>

      {/* 8. Footer - Recent Breakdowns */}
      <div className="mt-12">
        <h3 className="font-bold text-xl" style={{ color: COLORS.textPrimary }}>
          Recent Breakdowns
        </h3>
      </div>
    </div>
  );
};
