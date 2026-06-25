import { AiOutlineSetting, AiOutlineInfoCircle } from 'react-icons/ai';
import { BiChevronUp } from 'react-icons/bi';

export function TestCard() {
  return (
    <div id="testElem" className="p-4 flex flex-col gap-4 max-w-sm mx-auto" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold" style={{ color: '#b5b5b5' }}>UI magician Agent</h2>
        <AiOutlineSetting style={{ color: '#9ca3af' }} />
      </div>

      {/* Subtitle */}
      <div className="flex items-center gap-2">
        <BiChevronUp style={{ color: '#9ca3af' }} />
        <p className="text-sm" style={{ color: '#8b9291' }}>From entire frame to a singl...</p>
      </div>

      <div className="h-4" />

      {/* Add New Design Section */}
      <div className="flex items-center gap-2">
        <BiChevronUp className="text-white" />
        <h3 className="text-base font-semibold" style={{ color: '#b2b2b1' }}>Add New Design</h3>
      </div>

      {/* Personal Access Token Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm flex items-center gap-2" style={{ color: '#a4a4a3' }}>
          Personal Access Token
          <AiOutlineInfoCircle style={{ color: '#9ca3af' }} />
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full rounded border px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1"
          style={{ backgroundColor: '#3a3a3a', borderColor: '#555' }}
        />
      </div>

      {/* Design URL Input */}
      <div className="flex flex-col gap-2">
        <label className="text-sm flex items-center gap-2" style={{ color: '#a4a4a3' }}>
          Design URL
          <AiOutlineInfoCircle style={{ color: '#9ca3af' }} />
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full rounded border px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1"
          style={{ backgroundColor: '#3a3a3a', borderColor: '#555' }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-2">
        <button
          className="flex-1 rounded px-4 py-2 text-sm font-semibold text-white"
          style={{ backgroundColor: '#b85c2c' }}
        >
          Awesome
        </button>
        <button
          className="flex-1 rounded px-4 py-2 text-sm font-semibold text-white"
          style={{ backgroundColor: '#b85c2c' }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h3 className="text-base font-semibold mt-4" style={{ color: '#b2b2b1' }}>Recent Breakdowns</h3>
    </div>
  );
}
