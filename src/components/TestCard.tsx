
import React from 'react';

const FiSettings = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-settings"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path
      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
    ></path>
  </svg>
);

const FiChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-up"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

const FiInfo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-info"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

export function TestCard() {
  const s = {
    root: { backgroundColor: '#2a2a2a', padding: '20px', fontFamily: 'sans-serif', color: '#b5b5b5', fontSize: '11.5px', fontWeight: 600 } as React.CSSProperties,
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' } as React.CSSProperties,
    title: { fontSize: '13.5px', color: '#b5b5b5', margin: 0 } as React.CSSProperties,
    mutedRow: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', color: '#8b9291' } as React.CSSProperties,
    sectionRow: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' } as React.CSSProperties,
    sectionTitle: { fontSize: '13.5px', color: '#b2b2b1', margin: 0 } as React.CSSProperties,
    formArea: { display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' } as React.CSSProperties,
    label: { display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px', color: '#a4a4a3' } as React.CSSProperties,
    input: { width: '100%', padding: '8px', borderRadius: '8px', backgroundColor: '#333', border: '1px solid #555', color: '#b5b5b5', fontSize: '11.5px', boxSizing: 'border-box' } as React.CSSProperties,
    btnRow: { display: 'flex', gap: '16px', marginBottom: '24px' } as React.CSSProperties,
    btn: { flex: 1, backgroundColor: '#7c3f1e', color: '#d4a898', borderRadius: '8px', padding: '8px 24px', fontSize: '11.5px', border: 'none', cursor: 'pointer', fontWeight: 600 } as React.CSSProperties,
    footer: { fontSize: '13.5px', color: '#b0b0b0', margin: 0 } as React.CSSProperties,
  };

  return (
    <div id="testElem" style={s.root}>
      <div style={s.header}>
        <h2 style={s.title}>UI magician Agent</h2>
        <FiSettings />
      </div>

      <div style={s.mutedRow}>
        <FiChevronUp />
        <p style={{ margin: 0 }}>From entire frame to a singl...</p>
      </div>

      <div style={s.sectionRow}>
        <FiChevronUp />
        <h3 style={s.sectionTitle}>Add New Design</h3>
      </div>

      <div style={s.formArea}>
        <div>
          <label style={s.label}>
            Personal Access Token <FiInfo />
          </label>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxx"
            style={s.input}
          />
        </div>

        <div>
          <label style={s.label}>
            Design URL <FiInfo />
          </label>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            style={s.input}
          />
        </div>
      </div>

      <div style={s.btnRow}>
        <button style={s.btn}>Awesome</button>
        <button style={s.btn}>Prepare</button>
      </div>

      <h3 style={s.footer}>Recent Breakdowns</h3>
    </div>
  );
}