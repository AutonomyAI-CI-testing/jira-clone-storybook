import React from 'react';
import { RiSettings3Line, RiArrowUpSLine } from 'react-icons/ri';
import { AiOutlineInfoCircle } from 'react-icons/ai';

export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="p-4" style={{ backgroundColor: '#282420', width: '254px' }}>
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-sm" style={{ color: '#b5b5b5', fontSize: '13.5px' }}>
          UI magician Agent
        </span>
        <RiSettings3Line className="text-gray-400" />
      </div>

      {/* Subtitle Row */}
      <div className="flex items-center mb-6">
        <RiArrowUpSLine className="text-gray-400 text-lg mr-1" style={{ color: '#8b9291' }} />
        <span className="text-sm font-semibold" style={{ color: '#8b9291', fontSize: '11.5px' }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center mb-4">
        <RiArrowUpSLine className="text-gray-400 text-lg mr-1" style={{ color: '#b2b2b1' }} />
        <span className="font-semibold" style={{ color: '#b2b2b1', fontSize: '13.5px' }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token Field */}
      <div className="mb-4">
        <div className="flex items-center mb-1">
          <label htmlFor="pat" className="text-xs font-semibold mr-2" style={{ color: '#a4a4a3', fontSize: '11.5px' }}>
            Personal Access Token
          </label>
          <AiOutlineInfoCircle className="text-gray-400" />
        </div>
        <input
          type="text"
          id="pat"
          placeholder="figd_xxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded-md text-sm"
          style={{
            backgroundColor: '#272822',
            border: '1px solid #a5adad',
            color: '#737470',
            fontSize: '11.5px',
          }}
        />
      </div>

      {/* Design URL Field */}
      <div className="mb-6">
        <div className="flex items-center mb-1">
          <label htmlFor="designUrl" className="text-xs font-semibold mr-2" style={{ color: '#a3a3a2', fontSize: '11.5px' }}>
            Design URL
          </label>
          <AiOutlineInfoCircle className="text-gray-400" />
        </div>
        <input
          type="text"
          id="designUrl"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded-md text-sm"
          style={{
            backgroundColor: '#272822',
            border: '2px solid #929291',
            color: '#71726e',
            fontSize: '11.5px',
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className="px-4 py-2 rounded-md font-semibold text-sm"
          style={{ backgroundColor: '#843a17', color: '#8c8078', fontSize: '11.5px' }}
        >
          Awesome
        </button>
        <button
          className="px-4 py-2 rounded-md font-semibold text-sm"
          style={{ backgroundColor: '#843a17', color: '#8c8078', fontSize: '11.5px' }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="font-semibold" style={{ color: '#b0b0b0', fontSize: '13.5px' }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
};
