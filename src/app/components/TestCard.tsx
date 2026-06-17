export function TestCard() {
  const card: React.CSSProperties = {
    backgroundColor: '#1a1a17',
    color: '#e6e6e6',
    fontFamily: 'sans-serif',
    width: '420px',
    borderRadius: '10px',
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '10px 12px',
    backgroundColor: '#2c2c28',
    border: '1.5px solid #444440',
    borderRadius: '6px',
    color: '#c0c0c0',
    fontSize: '14px',
    outline: 'none',
  };

  const btnStyle: React.CSSProperties = {
    flex: 1,
    padding: '12px 0',
    backgroundColor: '#8b3a1a',
    color: '#f0c4a8',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 700,
    fontSize: '15px',
    cursor: 'pointer',
  };

  return (
    <div id="testElem" style={card}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#e6e6e6' }}>
          UI magician Agent
        </h2>
        <svg stroke="#8c8c8c" fill="none" strokeWidth="2" viewBox="0 0 24 24"
          strokeLinecap="round" strokeLinejoin="round" height="24" width="24"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      {/* Subtitle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '28px' }}>
        <span style={{ color: '#b45309', fontSize: '14px' }}>^</span>
        <span style={{ color: '#b45309', fontSize: '14px' }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
        <span style={{ color: '#e6e6e6', fontWeight: 700, fontSize: '16px' }}>^</span>
        <span style={{ color: '#e6e6e6', fontWeight: 700, fontSize: '20px' }}>Add New Design</span>
      </div>

      {/* Personal Access Token */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <label style={{ color: '#a0a0a0', fontSize: '14px', fontWeight: 600 }}>
            Personal Access Token
          </label>
          <span style={{ color: '#a0a0a0', fontSize: '13px' }}>ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="figd_xxxxxxxxxxxxxxxxxx"
          readOnly
          style={inputStyle}
        />
      </div>

      {/* Design URL */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
          <label style={{ color: '#a0a0a0', fontSize: '14px', fontWeight: 600 }}>
            Design URL
          </label>
          <span style={{ color: '#a0a0a0', fontSize: '13px' }}>ⓘ</span>
        </div>
        <input
          type="text"
          placeholder="https://www.figma.com/file/:"
          readOnly
          style={inputStyle}
        />
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
        <button style={btnStyle}>Awesome</button>
        <button style={btnStyle}>Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <h3 style={{ margin: 0, fontSize: '22px', fontWeight: 700, color: '#e6e6e6' }}>
        Recent Breakdowns
      </h3>
    </div>
  );
}
