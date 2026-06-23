
export const TestCard = () => {
  return (
    <div id="testElem" style={{ backgroundColor: '#222222' }} className="p-6 text-[#e0e0e0] flex flex-col gap-4 w-full max-w-md mx-auto rounded-lg">
      {/* Header Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <span className="text-xl">⚙</span>
      </div>

      {/* Chevron + Muted Subtitle */}
      <div style={{ color: '#b08060' }} className="flex items-center gap-2 text-sm">
        <span>∧</span>
        <p>From entire frame to a singl...</p>
      </div>

      {/* Spacer */}
      <div className="h-4"></div>

      {/* Section Heading: Add New Design */}
      <div className="flex items-center gap-2">
        <span className="text-base">∧</span>
        <h3 className="font-bold" style={{ color: 'white' }}>Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="pat-input" className="text-[#a4a4a3]">Personal Access Token</label>
          <span className="text-xs" style={{ color: '#a4a4a3' }}>ⓘ</span>
        </div>
        <input
          id="pat-input"
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{ backgroundColor: '#2a2a2a', borderColor: '#555', color: '#e0e0e0' }}
          className="p-2 rounded-md border text-sm focus:outline-none focus:ring-1 focus:border-blue-500"
        />
      </div>

      {/* Design URL Input */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <label htmlFor="url-input" className="text-[#a4a4a3]">Design URL</label>
          <span className="text-xs" style={{ color: '#a4a4a3' }}>ⓘ</span>
        </div>
        <input
          id="url-input"
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{ backgroundColor: '#2a2a2a', borderColor: '#555', color: '#e0e0e0' }}
          className="p-2 rounded-md border text-sm focus:outline-none focus:ring-1 focus:border-blue-500"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-2 justify-start">
        <button
          style={{ backgroundColor: '#9c4a1a', color: 'white' }}
          className="px-6 py-2 rounded-lg font-semibold text-sm"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: '#9c4a1a', color: 'white' }}
          className="px-6 py-2 rounded-lg font-semibold text-sm"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns Heading */}
      <h3 className="font-bold mt-4" style={{ color: '#b5b5b5' }}>Recent Breakdowns</h3>
    </div>
  );
};
