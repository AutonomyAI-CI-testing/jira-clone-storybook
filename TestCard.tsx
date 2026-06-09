import React from 'react';

const TestCard: React.FC = () => {
  // Color constants for consistency and easier maintenance
  const COLORS = {
    background: '#1E1E1E',
    inputBackground: '#2D2D2D',
    primaryButton: '#C2552A',
  };

  return (
    <div
      id="testElem"
      className="p-4 w-80 space-y-4 font-sans text-white"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">UI magician Agent</h1>
        <button
          type="button"
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Settings"
        >
          ⚙️
        </button>
      </div>

      {/* Breadcrumb/Status Row */}
      <div className="flex items-center text-sm text-gray-400">
        <span className="mr-1" aria-hidden="true">
          ▲
        </span>
        <span>From entire frame to a singl...</span>
      </div>

      {/* Main Configuration Form */}
      <div className="space-y-3">
        <div className="flex items-center text-base font-semibold text-gray-200">
          <span className="mr-1" aria-hidden="true">
            ▲
          </span>
          <span>Add New Design</span>
        </div>

        {/* Input fields for Figma integration */}
        <div>
          <label htmlFor="token" className="block text-sm font-medium text-gray-400 mb-1">
            Personal Access Token{' '}
            <span
              title="Enter your Figma Personal Access Token"
              className="inline-flex items-center justify-center w-4 h-4 text-xs font-semibold rounded-full bg-gray-600 text-white cursor-help"
            >
              i
            </span>
          </label>
          <input
            type="password"
            id="token"
            placeholder="figd_xxxxxxxxxxxxxxxx"
            className="w-full p-2 border border-gray-600 rounded text-sm placeholder-gray-500 outline-none focus:border-blue-500"
            style={{ backgroundColor: COLORS.inputBackground }}
          />
        </div>

        <div>
          <label htmlFor="designUrl" className="block text-sm font-medium text-gray-400 mb-1">
            Design URL{' '}
            <span
              title="The URL of the Figma design you want to import"
              className="inline-flex items-center justify-center w-4 h-4 text-xs font-semibold rounded-full bg-gray-600 text-white cursor-help"
            >
              i
            </span>
          </label>
          <input
            type="url"
            id="designUrl"
            placeholder="https://www.figma.com/file/"
            className="w-full p-2 border border-gray-600 rounded text-sm placeholder-gray-500 outline-none focus:border-blue-500"
            style={{ backgroundColor: COLORS.inputBackground }}
          />
        </div>
      </div>

      {/* Action Area */}
      <div className="flex space-x-2 pt-2">
        <button
          type="button"
          className="flex-1 py-2 px-4 rounded font-medium hover:opacity-90 active:scale-[0.98] transition-all"
          style={{ backgroundColor: COLORS.primaryButton }}
        >
          Awesome
        </button>
        <button
          type="button"
          className="flex-1 py-2 px-4 rounded font-medium hover:opacity-90 active:scale-[0.98] transition-all"
          style={{ backgroundColor: COLORS.primaryButton }}
        >
          Prepare
        </button>
      </div>

      {/* Footer / Secondary Content */}
      <div className="pt-2 border-t border-gray-700">
        <h2 className="text-base font-semibold text-gray-200">Recent Breakdowns</h2>
      </div>
    </div>
  );
};

export default TestCard;

