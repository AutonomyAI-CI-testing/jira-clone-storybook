import { FiChevronUp, FiInfo } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';

export function TestCard() {
  return (
    <div
      id="testElem"
      style={{
        backgroundColor: '#252525',
        width: '320px',
        minHeight: '600px',
        color: '#ffffff',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        borderRadius: '8px',
        fontFamily: 'sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#ffffff' }}>UI magician Agent</span>
        <IoSettingsOutline style={{ color: '#d1d5db', fontSize: '24px' }} />
      </div>

      {/* Collapsed row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <FiChevronUp style={{ color: '#92400e', fontSize: '14px' }} />
        <span style={{ color: '#92400e', fontSize: '14px' }}>From entire frame to a singl...</span>
      </div>

      {/* Add New Design section */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FiChevronUp style={{ color: '#ffffff', fontSize: '18px', fontWeight: 'bold' }} />
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>Add New Design</span>
        </div>

        {/* Personal Access Token */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#e5e7eb' }}>Personal Access Token</span>
            <FiInfo style={{ color: '#9ca3af', fontSize: '16px' }} />
          </div>
          <input
            type="text"
            placeholder="figd_xxxxxxxxxxxxxxxxxx"
            readOnly
            style={{
              backgroundColor: '#333333',
              borderColor: '#555555',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderRadius: '4px',
              padding: '12px',
              color: '#9ca3af',
              fontSize: '14px',
              width: '100%',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Design URL */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: '#e5e7eb' }}>Design URL</span>
            <FiInfo style={{ color: '#9ca3af', fontSize: '16px' }} />
          </div>
          <input
            type="text"
            placeholder="https://www.figma.com/file/:"
            readOnly
            style={{
              backgroundColor: '#333333',
              borderColor: '#555555',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderRadius: '4px',
              padding: '12px',
              color: '#9ca3af',
              fontSize: '14px',
              width: '100%',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
          <button
            style={{
              backgroundColor: '#b45309',
              flex: 1,
              padding: '12px 0',
              borderRadius: '8px',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Awesome
          </button>
          <button
            style={{
              backgroundColor: '#b45309',
              flex: 1,
              padding: '12px 0',
              borderRadius: '8px',
              color: '#ffffff',
              fontWeight: '600',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Prepare
          </button>
        </div>
      </div>

      {/* Recent Breakdowns */}
      <div style={{ marginTop: '16px' }}>
        <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#ffffff' }}>Recent Breakdowns</span>
      </div>
    </div>
  );
}
