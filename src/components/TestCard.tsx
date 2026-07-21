import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: '#2a2a2a', color: '#fff' }}
      className="p-5 rounded-lg w-80 font-sans"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xl font-bold">UI magician Agent</span>
        <FiSettings size={22} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-1 mb-8" style={{ color: '#b85c38' }}>
        <FiChevronUp size={16} />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Add New Design */}
      <div className="flex items-center gap-2 mb-4">
        <FiChevronUp size={18} />
        <span className="text-lg font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="mb-3">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-sm font-medium">Personal Access Token</span>
          <FiInfo size={14} style={{ color: '#888' }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{ backgroundColor: '#1e1e1e', color: '#aaa', border: '1px solid #444' }}
        />
      </div>

      {/* Design URL */}
      <div className="mb-5">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-sm font-medium">Design URL</span>
          <FiInfo size={14} style={{ color: '#888' }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          className="w-full rounded px-3 py-2 text-sm outline-none"
          style={{ backgroundColor: '#1e1e1e', color: '#aaa', border: '1px solid #444' }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mb-8">
        <button
          className="flex-1 py-2 rounded-full font-semibold text-white"
          style={{ backgroundColor: '#b85c38' }}
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 rounded-full font-semibold text-white"
          style={{ backgroundColor: '#b85c38' }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div>
        <span className="text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export default TestCard;
