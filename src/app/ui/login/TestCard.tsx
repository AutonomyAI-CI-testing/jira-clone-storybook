export function TestCard() {
  return (
    <div id="testElem" className="w-[254px] min-h-[508px] p-5 flex flex-col gap-4 font-['Inter']" style={{ backgroundColor: '#2b2b27' }}>
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span className="text-[13.5px] font-semibold leading-[16.34px]" style={{ color: '#b5b5b5' }}>
          UI magician Agent
        </span>
        {/* Gear icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="#8b9291">
          <path d="M5 0L10 7H0L5 0Z" />
        </svg>
        <span className="text-[11.5px] font-semibold leading-[13.92px]" style={{ color: '#8b9291' }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Add New Design section */}
      <div className="flex items-center gap-2">
        <svg width="10" height="7" viewBox="0 0 10 7" fill="#b2b2b1">
          <path d="M5 0L10 7H0L5 0Z" />
        </svg>
        <span className="text-[13.5px] font-semibold leading-[16.34px]" style={{ color: '#b2b2b1' }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] font-semibold leading-[13.92px]" style={{ color: '#a4a4a3' }}>
            Personal Access Token
          </span>
          {/* Info icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          readOnly
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          className="w-full px-3 py-2 text-[11.5px] font-semibold leading-[13.92px] outline-none"
          style={{
            backgroundColor: '#272822',
            border: '1px solid #a5adad',
            color: '#737470',
          }}
        />
      </div>

      {/* Design URL */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="text-[11.5px] font-semibold leading-[13.92px]" style={{ color: '#a3a3a2' }}>
            Design URL
          </span>
          {/* Info icon */}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="16" x2="12" y2="12" />
            <line x1="12" y1="8" x2="12.01" y2="8" />
          </svg>
        </div>
        <input
          readOnly
          placeholder="https://www.figma.com/file/:"
          className="w-full px-3 py-2 text-[11.5px] font-semibold leading-[13.92px] outline-none"
          style={{
            backgroundColor: '#272822',
            border: '2px solid #929291',
            color: '#71726e',
          }}
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 justify-center mt-1">
        <button
          className="px-5 py-2 text-[11.5px] font-semibold leading-[13.92px] rounded-[4px] cursor-pointer"
          style={{ backgroundColor: '#843a17', color: '#8c8078', width: '85px', height: '37px' }}
        >
          Awesome
        </button>
        <button
          className="px-5 py-2 text-[11.5px] font-semibold leading-[13.92px] rounded-[4px] cursor-pointer"
          style={{ backgroundColor: '#843a17', color: '#8c8078', width: '85px', height: '37px' }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="mt-4" />

      {/* Recent Breakdowns */}
      <div>
        <span className="text-[13.5px] font-semibold leading-[16.34px]" style={{ color: '#b0b0b0' }}>
          Recent Breakdowns
        </span>
      </div>
    </div>
  );
}
