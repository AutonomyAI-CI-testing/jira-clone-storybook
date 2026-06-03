// TestCard: A preview/prototype component for the UI magician agent interface
// This component displays a dark-themed form for entering Figma design credentials
// and submitting design files for processing
export const TestCard = (): JSX.Element => {
  return (
    <div id="testElem" className="min-h-screen bg-[#2a2a2a] p-6">
      <div className="mx-auto max-w-2xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-primary text-gray-100">
            UI magician Agent
          </h1>
          <button className="text-gray-400 hover:text-gray-300" aria-label="Settings">⚙️</button>
        </div>

        {/* Collapsible Section 1 */}
        <div className="space-y-3 border-b border-gray-700 pb-4">
          <button 
            className="flex items-center gap-2 text-gray-300 hover:text-gray-200"
            aria-label="Toggle collapsible section"
          >
            <span className="text-lg" aria-hidden="true">⋀</span>
            <span className="text-sm">From entire frame to a singl...</span>
          </button>
        </div>

        {/* Add New Design Section */}
        <div className="space-y-4">
          <button 
            className="flex items-center gap-2 text-gray-300 hover:text-gray-200"
            aria-label="Toggle Add New Design section"
          >
            <span className="text-lg" aria-hidden="true">⋀</span>
            <span className="text-lg font-primary">Add New Design</span>
          </button>

          {/* Form */}
          <div className="space-y-5">
            {/* Personal Access Token Field */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label htmlFor="token" className="text-gray-300">
                  Personal Access Token
                </label>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-300"
                  aria-label="Information about Personal Access Token"
                >
                  ℹ️
                </button>
              </div>
              <input
                id="token"
                type="text"
                placeholder="figd_xxxxxxxxxxxxxxxxxxxxxx"
                className="w-full border border-gray-600 bg-[#3a3a3a] px-4 py-2 text-gray-300 placeholder-gray-500 hover:border-gray-500 focus:border-gray-400 focus:outline-none"
                aria-describedby="token-help"
              />
            </div>

            {/* Design URL Field */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <label htmlFor="url" className="text-gray-300">
                  Design URL
                </label>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-300"
                  aria-label="Information about Design URL"
                >
                  ℹ️
                </button>
              </div>
              <input
                id="url"
                type="text"
                placeholder="https://www.figma.com/file/:"
                className="w-full border border-gray-600 bg-[#3a3a3a] px-4 py-2 text-gray-300 placeholder-gray-500 hover:border-gray-500 focus:border-gray-400 focus:outline-none"
                aria-describedby="url-help"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-2">
            <button className="flex-1 rounded bg-orange-700 py-2 px-4 font-primary text-gray-200 hover:bg-orange-600 active:bg-orange-800">
              Awesome
            </button>
            <button className="flex-1 rounded bg-orange-700 py-2 px-4 font-primary text-gray-200 hover:bg-orange-600 active:bg-orange-800">
              Prepare
            </button>
          </div>
        </div>

        {/* Recent Breakdowns Section */}
        <div className="border-t border-gray-700 pt-6">
          <h2 className="text-lg font-primary text-gray-300">
            Recent Breakdowns
          </h2>
        </div>
      </div>
    </div>
  );
};
