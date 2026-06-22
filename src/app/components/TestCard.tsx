const COLORS = {
  bg: '#2a2a2a',
  inputBg: '#3a3a3a',
  inputBorder: '#555',
  primary: '#a0522d',
  primaryHover: '#b5522b',
  muted: '#c47a4a',
};

export const TestCard = (): JSX.Element => {
  return (
    <div
      id="testElem"
      className="p-4 rounded-lg text-white"
      style={{ backgroundColor: COLORS.bg }}
    >
      {/* Header: Title and Settings Icon */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">UI magician Agent</h2>
        <span className="text-gray-400 text-xl" aria-hidden="true">
          ⚙
        </span>
      </div>

      {/* Contextual Info Row */}
      <div className="flex items-center mb-4">
        <span className="text-sm mr-2" style={{ color: COLORS.muted }}>
          ^
        </span>
        <span className="text-sm" style={{ color: COLORS.muted }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Section Toggle */}
      <div className="flex items-center mb-4">
        <span className="text-white text-sm mr-2">^</span>
        <h3 className="text-white text-md font-bold">Add New Design</h3>
      </div>

      {/* Form Field: Personal Access Token */}
      <div className="mb-4">
        <label className="flex items-center text-sm mb-2">
          Personal Access Token{' '}
          <span className="ml-1 text-gray-500 text-xs" title="Information">
            ⓘ
          </span>
        </label>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full p-2 rounded border text-white placeholder-gray-400"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
          }}
        />
      </div>

      {/* Form Field: Design URL */}
      <div className="mb-6">
        <label className="flex items-center text-sm mb-2">
          Design URL{' '}
          <span className="ml-1 text-gray-500 text-xs" title="Information">
            ⓘ
          </span>
        </label>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          className="w-full p-2 rounded border text-white placeholder-gray-400"
          style={{
            backgroundColor: COLORS.inputBg,
            borderColor: COLORS.inputBorder,
          }}
        />
      </div>

      {/* Actions */}
      <div className="flex space-x-4 mb-6">
        <button
          className="flex-1 py-2 rounded text-white font-semibold transition-colors"
          style={{ backgroundColor: COLORS.primary }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = COLORS.primaryHover)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = COLORS.primary)
          }
        >
          Awesome
        </button>
        <button
          className="flex-1 py-2 rounded text-white font-semibold transition-colors"
          style={{ backgroundColor: COLORS.primary }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = COLORS.primaryHover)
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = COLORS.primary)
          }
        >
          Prepare
        </button>
      </div>

      {/* Footer Content */}
      <div className="text-sm text-gray-300">Recent Breakdowns</div>
    </div>
  );
};
