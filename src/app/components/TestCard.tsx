import React from 'react';
import { IoSettingsOutline, IoInformationCircleOutline, IoChevronUp } from 'react-icons/io5';

const TestCard: React.FC = () => {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: '#282523', color: '#d9d9d9', fontFamily: 'sans-serif', padding: '32px 24px' }}
    >
      {/* Header */}
      <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
        <h2 className="text-3xl font-medium" style={{ color: '#d9d9d9' }}>UI magician Agent</h2>
        <IoSettingsOutline style={{ color: '#d9d9d9', fontSize: '28px' }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center text-lg" style={{ color: '#9b9b9b', marginBottom: '48px' }}>
        <IoChevronUp style={{ fontSize: '20px', marginRight: '8px' }} />
        <span>From entire frame to a singl...</span>
      </div>

      {/* Add New Design Section */}
      <div>
        <h3 className="flex items-center text-2xl" style={{ color: '#d9d9d9', fontWeight: 600, marginBottom: '24px' }}>
          <IoChevronUp style={{ fontSize: '20px', marginRight: '8px' }} />
          Add New Design
        </h3>

        {/* Personal Access Token Input */}
        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="pat"
            className="flex items-center text-base"
            style={{ color: '#9b9b9b', marginBottom: '8px' }}
          >
            Personal Access Token
            <IoInformationCircleOutline style={{ marginLeft: '8px', color: '#9b9b9b', fontSize: '18px' }} />
          </label>
          <input
            type="text"
            id="pat"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full"
            style={{
              outline: 'none',
              backgroundColor: 'transparent',
              border: '1px solid #666',
              borderRadius: '4px',
              padding: '12px',
              color: '#9b9b9b',
              fontSize: '16px',
            }}
          />
        </div>

        {/* Design URL Input */}
        <div style={{ marginBottom: '32px' }}>
          <label
            htmlFor="design-url"
            className="flex items-center text-base"
            style={{ color: '#9b9b9b', marginBottom: '8px' }}
          >
            Design URL
            <IoInformationCircleOutline style={{ marginLeft: '8px', color: '#9b9b9b', fontSize: '18px' }} />
          </label>
          <input
            type="text"
            id="design-url"
            placeholder="https://www.figma.com/file/:"
            className="w-full"
            style={{
              outline: 'none',
              backgroundColor: 'transparent',
              border: '1px solid #666',
              borderRadius: '4px',
              padding: '12px',
              color: '#9b9b9b',
              fontSize: '16px',
            }}
          />
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '16px', marginBottom: '48px' }}>
          <button
            style={{
              flex: 1,
              backgroundColor: '#8d4020',
              color: '#ffffff',
              fontSize: '18px',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              borderRadius: '8px',
              padding: '14px 24px',
            }}
          >
            Awesome
          </button>
          <button
            style={{
              flex: 1,
              backgroundColor: '#8d4020',
              color: '#ffffff',
              fontSize: '18px',
              fontWeight: 500,
              border: 'none',
              cursor: 'pointer',
              borderRadius: '8px',
              padding: '14px 24px',
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns Section */}
      <div>
        <h3 style={{ color: '#d9d9d9', fontSize: '22px', fontWeight: 600 }}>Recent Breakdowns</h3>
      </div>
    </div>
  );
};

export default TestCard;
