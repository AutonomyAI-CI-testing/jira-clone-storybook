export default function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: '#1e1e1e', color: '#e0e0e0', minHeight: '100vh' }}
      className="p-5 flex flex-col"
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-lg" style={{ color: '#ffffff' }}>
          UI magician Agent
        </span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#aaaaaa" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.3-6.7-1.4 1.4M5.7 18.3l-1.4 1.4M5.7 5.7l1.4 1.4M18.3 18.3l1.4 1.4" />
        </svg>
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2 mb-8">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5741c" strokeWidth="2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
        <span style={{ color: '#b5741c' }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="flex items-center gap-2 mb-4">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
        <span className="font-bold text-lg" style={{ color: '#ffffff' }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: '#cccccc' }}>Personal Access Token</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaaaaa" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="8" strokeLinecap="round" strokeWidth="2" />
          <line x1="12" y1="12" x2="12" y2="16" />
        </svg>
      </div>
      <input
        className="w-full border rounded p-2 mb-4"
        style={{ backgroundColor: '#2a2a2a', borderColor: '#555555', color: '#888888' }}
        placeholder="figd_xxxxxxxxxxxxxxxxxx"
        readOnly
      />

      {/* Design URL */}
      <div className="flex items-center gap-2 mb-2">
        <span style={{ color: '#cccccc' }}>Design URL</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaaaaa" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="8" strokeLinecap="round" strokeWidth="2" />
          <line x1="12" y1="12" x2="12" y2="16" />
        </svg>
      </div>
      <input
        className="w-full border rounded p-2 mb-6"
        style={{ backgroundColor: '#2a2a2a', borderColor: '#555555', color: '#888888' }}
        placeholder="https://www.figma.com/file/:"
        readOnly
      />

      {/* Buttons */}
      <div className="flex gap-4 mb-8">
        <button
          className="flex-1 rounded-lg py-3 font-bold"
          style={{ backgroundColor: '#b5541c', color: '#ffffff' }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded-lg py-3 font-bold"
          style={{ backgroundColor: '#9a4718', color: '#ffffff' }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="font-bold text-lg" style={{ color: '#ffffff' }}>
        Recent Breakdowns
      </div>
    </div>
  );
}
