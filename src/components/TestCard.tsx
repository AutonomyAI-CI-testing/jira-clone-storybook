import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi';

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: '#1e1e1e', color: '#ffffff', minHeight: '100vh' }}
      className="p-5 flex flex-col gap-4 max-w-sm"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">UI magician Agent</span>
        <FiSettings size={22} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2" style={{ color: '#c07a45' }}>
        <FiChevronUp size={16} />
        <span className="text-sm">From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={18} />
        <span className="text-lg font-bold">Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Personal Access Token</span>
          <FiInfo size={14} style={{ color: '#9ca3af' }} />
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            backgroundColor: '#2a2a2a',
            borderColor: '#4b4b4b',
            color: '#9ca3af',
          }}
          className="w-full border rounded px-3 py-2 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">Design URL</span>
          <FiInfo size={14} style={{ color: '#9ca3af' }} />
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            backgroundColor: '#2a2a2a',
            borderColor: '#4b4b4b',
            color: '#9ca3af',
          }}
          className="w-full border rounded px-3 py-2 text-sm outline-none"
          readOnly
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button
          style={{ backgroundColor: '#b05c1e', color: '#f0d0b0' }}
          className="flex-1 py-3 rounded-xl font-semibold text-sm"
        >
          Awesome
        </button>
        <button
          style={{ backgroundColor: '#b05c1e', color: '#f0d0b0' }}
          className="flex-1 py-3 rounded-xl font-semibold text-sm"
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-lg font-bold">Recent Breakdowns</span>
      </div>
    </div>
  );
}

export default TestCard;
