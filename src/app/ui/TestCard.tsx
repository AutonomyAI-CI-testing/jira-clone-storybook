import { HiCog, HiChevronUp, HiInformationCircle } from 'react-icons/hi';

const s = {
  card: { backgroundColor: '#2a2a2a', padding: '20px', borderRadius: '8px', maxWidth: '360px', fontFamily: 'sans-serif' },
  headerRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { fontWeight: 'bold', color: '#ffffff', fontSize: '18px', margin: 0 },
  gearIcon: { color: '#9ca3af' },
  collapsedRow: { display: 'flex', alignItems: 'center', gap: '6px', marginTop: '16px' },
  collapsedText: { color: '#a0522d', fontSize: '14px' },
  collapsedIcon: { color: '#a0522d' },
  spacer: { height: '32px' },
  sectionRow: { display: 'flex', alignItems: 'center', gap: '8px' },
  sectionTitle: { fontWeight: 'bold', color: '#ffffff', fontSize: '18px', margin: 0 },
  labelRow: { display: 'flex', alignItems: 'center', gap: '6px', marginTop: '16px' },
  labelText: { color: '#d1d5db', fontSize: '14px' },
  infoIcon: { color: '#9ca3af' },
  input: { backgroundColor: '#1a1a1a', border: '1px solid #3f3f46', color: '#9ca3af', borderRadius: '4px', padding: '8px 12px', width: '100%', marginTop: '8px', boxSizing: 'border-box' as const, outline: 'none' },
  btnRow: { display: 'flex', gap: '12px', marginTop: '16px' },
  btn: { backgroundColor: '#8B4513', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '8px 20px', cursor: 'pointer', fontWeight: '500' },
  recentHeading: { fontWeight: 'bold', color: '#ffffff', fontSize: '18px', marginTop: '24px', marginBottom: 0 },
};

export const TestCard = () => {
  return (
    // Root element ID is required by the smoke-test infrastructure
    <div id="testElem" style={s.card}>
      {/* Header row: Primary title and configuration entry point */}
      <div style={s.headerRow}>
        <h1 style={s.headerTitle}>UI magician Agent</h1>
        <HiCog style={s.gearIcon} size={22} />
      </div>

      {/* Collapsed section row: Visual indicator of secondary frame context */}
      <div style={s.collapsedRow}>
        <HiChevronUp style={s.collapsedIcon} size={20} />
        <span style={s.collapsedText}>From entire frame to a singl...</span>
      </div>

      {/* Spacer */}
      <div style={s.spacer} />

      {/* "Add New Design" section */}
      <div style={s.sectionRow}>
        <HiChevronUp style={{ color: '#ffffff' }} size={20} />
        <h2 style={s.sectionTitle}>Add New Design</h2>
      </div>

      {/* Personal Access Token */}
      <div style={s.labelRow}>
        <span style={s.labelText}>Personal Access Token</span>
        <HiInformationCircle style={s.infoIcon} size={16} />
      </div>
      <input style={s.input} type="text" placeholder="figd_xxxxxxxxxxxxxxxxxx" readOnly />

      {/* Design URL */}
      <div style={s.labelRow}>
        <span style={s.labelText}>Design URL</span>
        <HiInformationCircle style={s.infoIcon} size={16} />
      </div>
      <input style={s.input} type="text" placeholder="https://www.figma.com/file/:" readOnly />

      {/* Action buttons */}
      <div style={s.btnRow}>
        <button style={s.btn}>Awesome</button>
        <button style={s.btn}>Prepare</button>
      </div>

      {/* Recent Breakdowns */}
      <h2 style={s.recentHeading}>Recent Breakdowns</h2>
    </div>
  );
};
