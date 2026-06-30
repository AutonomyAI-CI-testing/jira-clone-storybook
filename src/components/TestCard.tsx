import { FiSettings, FiChevronUp, FiInfo } from 'react-icons/fi'

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: '#2a2a2a', color: '#d4d4d4', minHeight: '100vh' }}
      className="p-6 flex flex-col gap-6 w-full max-w-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold" style={{ color: '#e8e8e8' }}>
          UI magician Agent
        </span>
        <FiSettings size={22} style={{ color: '#b5b5b5' }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <FiChevronUp size={16} style={{ color: '#8b9291' }} />
        <span className="text-sm" style={{ color: '#8b9291' }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Add New Design section */}
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex items-center gap-2">
          <FiChevronUp size={18} style={{ color: '#e8e8e8' }} />
          <span className="text-lg font-bold" style={{ color: '#e8e8e8' }}>
            Add New Design
          </span>
        </div>

        {/* Personal Access Token */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: '#a4a4a3' }}>
              Personal Access Token
            </span>
            <FiInfo size={14} style={{ color: '#a4a4a3' }} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            className="w-full rounded px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: '#1e1e1e',
              border: '1px solid #444',
              color: '#d4d4d4',
            }}
          />
        </div>

        {/* Design URL */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: '#a4a4a3' }}>
              Design URL
            </span>
            <FiInfo size={14} style={{ color: '#a4a4a3' }} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            className="w-full rounded px-3 py-2 text-sm outline-none"
            style={{
              backgroundColor: '#1e1e1e',
              border: '1px solid #6b6b6b',
              color: '#d4d4d4',
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button
            className="flex-1 py-3 rounded-lg font-semibold text-white"
            style={{ backgroundColor: '#7a4030' }}
          >
            Awesome
          </button>
          <button
            className="flex-1 py-3 rounded-lg font-semibold text-white"
            style={{ backgroundColor: '#7a4030' }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div className="mt-4">
        <span className="text-lg font-bold" style={{ color: '#e8e8e8' }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  )
}

export default TestCard
