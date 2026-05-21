import React from 'react';

export const TestCard: React.FC = () => {
  return (
    <div 
      className="w-80" 
      style={{ 
        fontFamily: 'Inter, sans-serif', 
        backgroundColor: '#1e1e1c', 
        padding: '24px 20px',
        borderRadius: '8px'
      }}
    >
      {/* Header: Title + Settings Icon */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-sm font-semibold" style={{ color: '#b5b5b5' }}>
          UI magician Agent
        </h1>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b5b5b5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m4.24 4.24l4.24 4.24M19.78 4.22l-4.24 4.24m-4.24 4.24l-4.24 4.24" />
        </svg>
      </div>

      {/* Collapsible Subtitle */}
      <div className="flex items-start gap-2 mb-8">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="#8b9291"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mt-0.5 flex-shrink-0"
        >
          <polyline points="4 10 8 6 12 10" />
        </svg>
        <span className="text-xs" style={{ color: '#8b9291' }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design Section */}
      <div className="flex items-center gap-2 mb-6">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="#b2b2b1"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex-shrink-0"
        >
          <polyline points="4 10 8 6 12 10" />
        </svg>
        <h2 className="text-sm font-semibold" style={{ color: '#b2b2b1' }}>
          Add New Design
        </h2>
      </div>

      {/* Personal Access Token Section */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium" style={{ color: '#a4a4a3' }}>
            Personal Access Token
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a4a4a3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <circle cx="12" cy="8" r="0.5" fill="#a4a4a3" />
          </svg>
        </div>
        <input
          type="text"
          className="w-full px-3 py-2 rounded"
          style={{ 
            backgroundColor: '#272822', 
            border: '1px solid #a5adad',
            color: '#737470',
            fontSize: '12px'
          }}
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
        />
      </div>

      {/* Design URL Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium" style={{ color: '#a3a3a2' }}>
            Design URL
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#a3a3a2"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <circle cx="12" cy="8" r="0.5" fill="#a3a3a2" />
          </svg>
        </div>
        <input
          type="text"
          className="w-full px-3 py-2 rounded"
          style={{ 
            backgroundColor: '#272822', 
            border: '2px solid #929291',
            color: '#71726e',
            fontSize: '11px'
          }}
          placeholder="https://www.figma.com/file/:"
          readOnly
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          className="flex-1 py-2.5 rounded font-semibold text-xs transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#843a17', color: '#d4b5a0' }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2.5 rounded font-semibold text-xs transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#843a17', color: '#d4b5a0' }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Section */}
      <h3 className="text-sm font-semibold" style={{ color: '#b0b0b0' }}>
        Recent Breakdowns
      </h3>
    </div>
  );
};
