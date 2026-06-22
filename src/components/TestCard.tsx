import React from 'react';
import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

// Brand colors not present in the standard Tailwind config
// These are used via inline styles because src/components is outside the Tailwind content scan scope
const COLORS = {
  BACKGROUND: '#2a2a2a',
  AMBER_MUTED: '#c97d4e',
  INPUT_BG: '#333',
  INPUT_BORDER: '#555',
  INPUT_TEXT: '#999',
  BUTTON_BG: '#a0522d',
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-4 max-w-sm mx-auto"
      style={{ background: COLORS.BACKGROUND, fontFamily: 'sans-serif' }}
    >
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-white font-bold text-xl">UI magician Agent</h1>
        <HiCog className="text-white text-xl" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center gap-1 mb-6">
        <HiChevronUp className="text-white" />
        <span style={{ color: COLORS.AMBER_MUTED }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section Header */}
      <div className="flex items-center gap-1 mb-4">
        <HiChevronUp className="text-white" />
        <h2 className="text-white font-bold text-lg">Add New Design</h2>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <label className="flex items-center gap-1 text-white text-sm mb-1">
          Personal Access Token <HiInformationCircle className="text-white" />
        </label>
        <input
          type="text"
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded"
          style={{
            background: COLORS.INPUT_BG,
            border: `1px solid ${COLORS.INPUT_BORDER}`,
            color: COLORS.INPUT_TEXT,
          }}
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <label className="flex items-center gap-1 text-white text-sm mb-1">
          Design URL <HiInformationCircle className="text-white" />
        </label>
        <input
          type="text"
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded"
          style={{
            background: COLORS.INPUT_BG,
            border: `1px solid ${COLORS.INPUT_BORDER}`,
            color: COLORS.INPUT_TEXT,
          }}
        />
      </div>

      {/* Button Row */}
      <div className="flex gap-3 mb-6">
        <button
          className="flex-1 p-2 rounded-lg"
          style={{ background: COLORS.BUTTON_BG, color: 'white' }}
        >
          Awesome
        </button>
        <button
          className="flex-1 p-2 rounded-lg"
          style={{ background: COLORS.BUTTON_BG, color: 'white' }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section Header */}
      <div>
        <h2 className="text-white font-bold text-lg">Recent Breakdowns</h2>
      </div>
    </div>
  );
};
