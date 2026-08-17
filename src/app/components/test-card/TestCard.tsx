export function TestCard() {
  return (
    <div
      id="testElem"
      style={{ backgroundColor: '#1a1a18', width: '254px', fontFamily: 'Inter, sans-serif' }}
      className="p-5 flex flex-col gap-3"
    >
      {/* Header row */}
      <div className="flex items-center justify-between">
        <span style={{ color: '#b5b5b5', fontSize: '13.5px', fontWeight: 600 }}>
          UI magician Agent
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b5b5b5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      </div>

      {/* Subtitle row */}
      <div className="flex items-center gap-2">
        <svg width="8" height="5" viewBox="0 0 10 6" fill="none" stroke="#8b9291" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 5 5 1 9 5"/>
        </svg>
        <span style={{ color: '#8b9291', fontSize: '11.5px', fontWeight: 600 }}>
          From entire frame to a singl...
        </span>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Add New Design heading */}
      <div className="flex items-center gap-2">
        <svg width="12" height="8" viewBox="0 0 10 6" fill="none" stroke="#b2b2b1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 5 5 1 9 5"/>
        </svg>
        <span style={{ color: '#b2b2b1', fontSize: '13.5px', fontWeight: 600 }}>
          Add New Design
        </span>
      </div>

      {/* Personal Access Token label */}
      <div className="flex items-center gap-2 mt-1">
        <span style={{ color: '#a4a4a3', fontSize: '11.5px', fontWeight: 600 }}>
          Personal Access Token
        </span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a4a4a3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
      </div>

      {/* Token input */}
      <div
        style={{
          backgroundColor: '#272822',
          border: '1px solid #a5adad',
          padding: '10px 12px',
        }}
        className="rounded-sm"
      >
        <span style={{ color: '#737470', fontSize: '11.5px', fontWeight: 600 }}>
          figd_xxxxxxxxxxxxxxxxxx
        </span>
      </div>

      {/* Design URL label */}
      <div className="flex items-center gap-2 mt-1">
        <span style={{ color: '#a3a3a2', fontSize: '11.5px', fontWeight: 600 }}>
          Design URL
        </span>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#a3a3a2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
      </div>

      {/* URL input */}
      <div
        style={{
          backgroundColor: '#272822',
          border: '2px solid #929291',
          padding: '10px 12px',
        }}
        className="rounded-sm"
      >
        <span style={{ color: '#71726e', fontSize: '10.5px', fontWeight: 600 }}>
          https://www.figma.com/file/:
        </span>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 justify-center mt-2">
        <button
          style={{
            backgroundColor: '#843a17',
            borderRadius: '4px',
            color: '#8c8078',
            fontSize: '11.5px',
            fontWeight: 600,
            border: 'none',
            padding: '10px 0',
            width: '87px',
            cursor: 'pointer',
          }}
        >
          Awesome
        </button>
        <button
          style={{
            backgroundColor: '#843a17',
            borderRadius: '4px',
            color: '#8c8078',
            fontSize: '11.5px',
            fontWeight: 600,
            border: 'none',
            padding: '10px 0',
            width: '87px',
            cursor: 'pointer',
          }}
        >
          Prepare
        </button>
      </div>

      {/* Spacer */}
      <div className="h-6" />

      {/* Recent Breakdowns */}
      <span style={{ color: '#b0b0b0', fontSize: '13.5px', fontWeight: 600 }}>
        Recent Breakdowns
      </span>
    </div>
  );
}

export default TestCard;
