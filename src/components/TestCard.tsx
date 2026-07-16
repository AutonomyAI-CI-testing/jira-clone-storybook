export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        background: '#1e1e1e',
        color: 'white',
        padding: '24px',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
        maxWidth: 480,
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontWeight: 'bold', fontSize: 20 }}>UI magician Agent</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>

      {/* Subtitle row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 40, color: '#c17a4a' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c17a4a" strokeWidth="2">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ fontSize: 14 }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
          <polyline points="18 15 12 9 6 15" />
        </svg>
        <span style={{ fontWeight: 'bold', fontSize: 18 }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <span style={{ fontSize: 14, color: '#ccc' }}>Personal Access Token</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          style={{
            background: '#2a2a2a',
            border: '1px solid #555',
            color: '#aaa',
            borderRadius: 8,
            padding: '12px 16px',
            width: '100%',
            fontSize: 14,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
          <span style={{ fontSize: 14, color: '#ccc' }}>Design URL</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          style={{
            background: '#2a2a2a',
            border: '1px solid #555',
            color: '#aaa',
            borderRadius: 8,
            padding: '12px 16px',
            width: '100%',
            fontSize: 14,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 40 }}>
        <button
          style={{
            background: '#a0522d',
            color: 'white',
            borderRadius: 12,
            padding: '12px 28px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: 15,
          }}
        >
          Awesome
        </button>
        <button
          style={{
            background: '#a0522d',
            color: 'white',
            borderRadius: 12,
            padding: '12px 28px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: 15,
          }}
        >
          Prepare
        </button>
      </div>

      {/* Recent Breakdowns */}
      <h2 style={{ color: 'white', fontWeight: 'bold', fontSize: 20, margin: 0 }}>Recent Breakdowns</h2>
    </div>
  );
}

export default TestCard;
